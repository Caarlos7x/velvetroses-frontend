import { useState, useEffect } from 'react';

export default function ListNameModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isClient, setIsClient] = useState(false);  // Estado para controlar execução no cliente

  // Garantir que o código só execute no cliente
  useEffect(() => {
    setIsClient(true);  // Atualiza para 'true' apenas no cliente
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Dados enviados!');
      setIsOpen(false);
    } else {
      alert('Erro ao enviar dados!');
    }
  };

  // Se não estiver no cliente ainda, não renderiza o modal
  if (!isClient) return null;

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="block px-3 py-1 text-base text-black rounded-lg transition-all hover:bg-white">
        Nome na Lista 33% OFF
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300">
          <div className="modal-content bg-gray-950 p-6 rounded-lg shadow-lg max-w-lg w-full border border-white">
            <h2 className="text-2xl text-white font-bold mb-4">Cadastrar Nome na Lista</h2>
            <p className="text-gray-300 mb-4">
              Preencha os campos abaixo para cadastrar seu nome na lista e ganhar 33% de desconto.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <button 
                type="submit" 
                className="w-1/2 p-2 bg-black text-white border border-white rounded-lg hover:bg-yellow-300 hover:text-black transform hover:scale-105 transition-all duration-200 ease-in-out">
                  Enviar
              </button>
            </form>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-1/2 p-2 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-200 ease-in-out">
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}