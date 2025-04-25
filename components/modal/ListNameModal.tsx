"use client";

import { useState, useEffect } from "react";

interface ListNameModalProps {
  discount?: number;
  deadline: string;
  customButtonClass?: string;
  price?: number;
  eventName: string;
  eventDate: string; // yyyy-mm-dd
  eventTime: string;
  eventLocation: string;
}

export default function ListNameModal({
  discount = 0,
  deadline,
  customButtonClass,
  price,
  eventName,
  eventDate,
  eventTime,
  eventLocation,
}: ListNameModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [readyToRender, setReadyToRender] = useState(false);
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    const now = new Date();
    const eventDeadline = new Date(deadline);
    setIsSoldOut(now > eventDeadline);
    setReadyToRender(true);
  }, [deadline]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        event: eventName,
        date: eventDate, // yyyy-mm-dd
        time: eventTime,
        location: eventLocation,
      }),
    });

    if (response.ok) {
      setFeedback("success");
      setFormData({ name: "", email: "" });
    } else {
      setFeedback("error");
    }
  };

  if (!readyToRender) return null;

  return (
    <div>
      <button
        onClick={() => !isSoldOut && setIsOpen(true)}
        disabled={isSoldOut}
        className={`block transition-all ${
          isSoldOut
            ? "bg-gray-400 text-white cursor-not-allowed px-4 py-2 rounded font-semibold"
            : customButtonClass ||
              "bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded shadow-md hover:shadow-lg transition"
        }`}
      >
        {isSoldOut
          ? "SOLD OUT"
          : discount && discount > 0
          ? `Nome na Lista ${discount}% OFF`
          : "Nome na Lista"}
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="modal-content bg-gray-950 p-6 rounded-lg shadow-lg max-w-lg w-full border border-white">
            <h2 className="text-2xl text-white font-bold mb-4 text-center">
              Cadastrar Nome na Lista
            </h2>

            <p className="text-gray-300 mb-4 text-sm text-center">
              {discount && discount > 0
                ? `Garanta ${discount}% de desconto!`
                : "Coloque seu nome para garantir a entrada!"}
            </p>

            {price && (
              <p className="text-yellow-300 text-sm text-center font-medium mb-4">
                Valor da entrada: R$<strong>{price}</strong>
              </p>
            )}

            {feedback === null && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full p-2 border border-gray-300 text-black rounded-lg"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full p-2 border border-gray-300 text-black rounded-lg"
                />
                <div className="flex justify-center space-x-4 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-black text-white border border-white rounded-lg hover:bg-yellow-300 hover:text-black transform hover:scale-105 transition-all"
                  >
                    Enviar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      setFeedback(null);
                    }}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all"
                  >
                    Fechar
                  </button>
                </div>
              </form>
            )}

            {feedback === "success" && (
              <div className="text-center text-green-400 font-semibold space-y-4">
                <p>✅ Dados enviados com sucesso!</p>
                <button
                  className="px-6 py-2 bg-white text-black rounded-lg hover:bg-yellow-300 transition"
                  onClick={() => {
                    setIsOpen(false);
                    setFeedback(null);
                  }}
                >
                  Fechar
                </button>
              </div>
            )}

            {feedback === "error" && (
              <div className="text-center text-red-400 font-semibold space-y-4">
                <p>❌ Ocorreu um erro ao enviar os dados. Tente novamente.</p>
                <button
                  className="px-6 py-2 bg-white text-black rounded-lg hover:bg-yellow-300 transition"
                  onClick={() => setFeedback(null)}
                >
                  Tentar Novamente
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}