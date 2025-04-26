import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

function generateGoogleCalendarLink(
  eventName: string,
  date: string,
  time: string,
  location: string
): string {
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");

  const startDate = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute)
  );

  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

  const formatDate = (date: Date) =>
    date.toISOString().replace(/[-:]|\.\d{3}/g, "").slice(0, 15) + "Z";

  const dates = `${formatDate(startDate)}/${formatDate(endDate)}`;

  const description = `
Local: ${eventName}
Endereço: ${location}
Horário: ${time}h

🎸 A banda Velvet Roses preparou um show incrível com os maiores clássicos do Guns N’ Roses e da carreira solo do Slash.

Chame os amigos e chegue cedo para garantir o melhor lugar!
`.trim();

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Show Velvet Roses",
    dates,
    details: description,
    location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function formatDateToBrazil(dateString: string): string {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, event, date, time, location } = req.body;

  if (!name || !email || !event || !date || !time || !location) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = "A:F";

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email, event, date, time, location]],
      },
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Banda Velvet Roses" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Confirmação de Inscrição - ${event}`,
      html: `
<div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; background-color: #f9f9f9; padding: 20px;">
  <div style="background: white; border-radius: 8px; padding: 30px; max-width: 600px; margin: 0 auto; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <h2 style="text-align: center; color: #222;">Olá ${name}!</h2>
    <p style="text-align: center; font-size: 18px;">Sua inscrição para o show no <strong>${event}</strong> foi confirmada com sucesso! 🤘🏽</p>

    <div style="margin: 30px 0; font-size: 16px;">
      <p><strong>📅 Data:</strong> ${formatDateToBrazil(date)}</p>
      <p><strong>🕒 Hora:</strong> ${time}</p>
      <p><strong>📍 Local:</strong> ${location}</p>
    </div>

    <div style="text-align: center; margin: 30px 0;">
      <a 
        href="${generateGoogleCalendarLink(event, date, time, location)}" 
        style="
          display: inline-block;
          padding: 12px 24px;
          background-color: #4285F4;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
          font-size: 16px;
        "
        target="_blank"
      >
        ➕ Adicionar ao Google Agenda
      </a>
    </div>

    <p style="text-align: center; margin-top: 40px; color: #666; font-size: 14px;">
      Nos vemos lá!<br/>
      Banda Velvet Roses 🎸
    </p>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">

    <p style="text-align: center; font-size: 12px; color: #999;">
      Não é necessário responder este e-mail.
    </p>
  </div>
</div>
      `,
    });

    res.status(200).json({ message: "Data sent and email sent successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}