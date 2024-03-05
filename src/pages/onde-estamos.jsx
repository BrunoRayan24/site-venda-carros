import React, { useState } from 'react';
import MyNavbar from '../componentes/Navbar';
import Image from 'next/image';
import Rodape from '../componentes/Rodape';

const Modal = ({ isOpen, onClose, loja }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="mr-6">
            <Image src={loja.imagem} alt={loja.nome} width={200} height={150} className="rounded-md" />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">{loja.nome}</h2>
            <p className="text-sm mb-2">Endereço: {loja.endereco}</p>
            <p className="text-sm mb-2">Horário de Funcionamento: {loja.horario}</p>
            <p className="text-sm mb-2">Telefone: {loja.telefone}</p>
            <p className="text-sm mb-4">Email: {loja.email}</p>
            <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded-md">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const OndeEstamos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoja, setSelectedLoja] = useState(null);

  const lojas = [
    {
      nome: 'CarService Barra Mansa',
      endereco: 'Estrada Intendente Magalhães n° 290 , 21341-332',
      cidade: 'Madureira - RJ',
      telefone: '(21) 1234-5678',
      horario: 'Segunda a Sexta: 8h às 18h',
      email: 'carservice@gmail.com',
      imagem: '/loja1.jpg' // Caminho para a imagem da loja
    },
    {
      nome: 'CarService São Paulo',
      endereco: 'Rod. Washington Luíz, 1375 - 25085-008',
      cidade: 'Duque de Caxias - RJ',
      telefone: '(21) 9876-5432',
      horario: 'Segunda a Sexta: 9h às 19h',
      email: 'carservice@gmail.com',
      imagem: '/loja2.jpg' // Caminho para a imagem da loja
    },
    // Adicione mais lojas conforme necessário
  ];

  const openModal = (index) => {
    setSelectedLoja(lojas[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <MyNavbar />
      <Image src="/estamos.jpg" alt="Logo" width={1920} height={150} className="w-full" />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lojas.map((loja, index) => (
            <div key={index} className="bg-white rounded-md shadow-md">
              <Image src={loja.imagem} alt={loja.nome} width={500} height={200} className="object-cover w-full h-48 rounded-t-md" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{loja.nome}</h3>
                <p className="text-sm mb-2">{loja.endereco}</p>
                <button onClick={() => openModal(index)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Saiba Mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} loja={selectedLoja} />
      <div className="mt-24">
        <Rodape />
      </div>
    </>
  );
};

export default OndeEstamos;
