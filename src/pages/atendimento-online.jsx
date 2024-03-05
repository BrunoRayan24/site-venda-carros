import React from 'react';
import MyNavbar from '../componentes/Navbar';
import AddressCarousel from '../componentes/CarouselEndereco';
import Rodape from '../componentes/Rodape';

const AtendimentoOnline = () => {
  return (
    <>
      <MyNavbar />
      <h2 className="text-xl text-center font-bold mt-12 mb-4">VENDEDORES PREPARADOS PARA TE ATENDER. AGORA MESMO !!!</h2>
      <div className="flex flex-col md:flex-row border border-sky-500 text-center mt-12">
        <div className="bg-gray-100 border-1 border-sky-500 p-4 m-4 md:m-2 md:w-96 md:h-96 rounded-lg">

          <h2 className="font-bold">Endereço</h2>
          <span className='text-center'>
            <AddressCarousel />
          </span>
          <div className="border-t border-dashed border-gray-500 mt-8"></div>
          <h2 className="font-bold mt-4">Telefone</h2>
          <p>(21) 1234-5678</p>
          <p>(21) 9876-5432</p>
          <div className="border-t border-dashed border-gray-500 mt-8"></div>
          <h2 className="font-bold mt-4">Horário de Atendimento</h2>
          <p>Seg - Sex: 8hs às 18hs</p>
          <p>Sábado: 08hs às 14hs</p>
        </div>

        <div className="p-4 m-2 md:m-12 md:w-1/2">
          <div className="md:flex mb-4">
            <input type="text" placeholder="Nome" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none mb-2 md:mb-0 md:mr-4 px-3 py-2 rounded-md" />
            <input type="email" placeholder="Email" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none mb-2 md:mb-0 md:mr-4 px-3 py-2 rounded-md" />
            <input type="tel" placeholder="Telefone" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none mb-2 md:mb-0 md:mr-4 px-3 py-2 rounded-md" />
          </div>
          <textarea placeholder="Mensagem" rows="8" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none px-3 py-2 rounded-md w-full"></textarea>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Enviar
            </button>
          </div>
        </div>
      </div>
      
      <div className='mt-24'>
        <Rodape />
      </div>
    </>
  );
};

export default AtendimentoOnline;
