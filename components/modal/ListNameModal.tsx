"use client";

import { useState, useEffect } from "react";

interface ListNameModalProps {
  discount?: number;
  deadline: string;
  customButtonClass?: string;
}

export default function ListNameModal({
  discount = 0,
  deadline,
  customButtonClass,
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
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
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
        onClick={() => {
          if (!isSoldOut) setIsOpen(true);
        }}
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300 z-50">
          <div className="modal-content bg-gray-950 p-6 rounded-lg shadow-lg max-w-lg w-full border border-white">
            <h2 className="text-2xl text-white font-bold mb-4 text-center">
              Cadastrar Nome na Lista
            </h2>
            <p className="text-gray-300 mb-6 text-sm text-center">
              {discount && discount > 0
                ? `Preencha seu nome na lista para garantir um desconto de ${discount}% OFF.`
                : "Preencha os campos abaixo para cadastrar seu nome na lista"}
            </p>

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
                    className="px-6 py-2 bg-black text-white border border-white rounded-lg hover:bg-yellow-300 hover:text-black transform hover:scale-105 transition-all duration-200 ease-in-out"
                  >
                    Enviar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      setFeedback(null);
                    }}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-200 ease-in-out"
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
                <p>❌ Ocorreu um erro ao enviar. Tente novamente.</p>
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