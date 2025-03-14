import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: 'Method not allowed' });

  const { name, email } =req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'A:B';

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: { values: [[name, email]] },
    });

    res.status(200).json({ message: 'Data sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending data' });
  }
}