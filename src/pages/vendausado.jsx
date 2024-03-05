import React from 'react';
import MyNavbar from '../componentes/Navbar';
import Rodape from '../componentes/Rodape';

const VendaUsado = () => {
  return (
    <>
      <MyNavbar />
      <div className="flex flex-col items-center mt-12 ">
        <h2 className="text-xl font-bold mb-4">Preencha o formulário e agende uma visita para negociarmos o seu usado.</h2>
        <div className="p-6 rounded-lg mb-8 lg:w-2/3 xl:w-1/2" style={{ boxShadow: '0 3px 10px rgb(0,0,0,0.2)' }}>
          <h3 className="text-lg font-bold mb-4">Dados do Veículo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <input type="text" id="marca" name="marca" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none rounded-md px-2 py-2 w-full" placeholder="Marca do Veículo" />
            </div>
            <div>
              <input type="text" id="modelo" name="modelo" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none rounded-md px-2 py-2 w-full" placeholder="Modelo do Veículo" />
            </div>
            <div>
              <input type="text" id="versao" name="versao" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none rounded-md px-2 py-2 w-full" placeholder="Versão do Veículo" />
            </div>
            <div>
              <input type="text" id="km" name="km" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none rounded-md px-2 py-2 w-full" placeholder="KM do Veículo" />
            </div>
            <div>
              <input type="text" id="ano" name="ano" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none rounded-md px-2 py-2 w-full" placeholder="Ano do Veículo" />
            </div>
            <div>
              <input type="text" id="valor" name="valor" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none rounded-md px-2 py-2 w-full" placeholder="Valor Desejado" />
            </div>
            <div>
              <select id="loja" name="loja" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none rounded-md px-2 py-2 w-full">
                <option value="loja1">Loja 1</option>
                <option value="loja2">Loja 2</option>
                <option value="loja3">Loja 3</option>
              </select>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-4 mt-12">Dados Pessoais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input type="text" id="nome" name="nome" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none rounded-md px-4 py-2 w-full" placeholder="Seu Nome" />
            </div>
            <div>
              <input type="text" id="email" name="email" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none rounded-md px-4 py-2 w-full" placeholder="Seu Email" />
            </div>
            <div>
              <input type="text" id="telefone" name="telefone" className="border-2 border-gray-200 focus:border-sky-300 focus:outline-none rounded-md px-4 py-2 w-full" placeholder="(99)99999-9999" />
            </div>
          </div>

          <h3 className="text-lg font-bold mb-4 mt-12">Fotos do Veículo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input type="file" id="foto" name="foto" className="rounded-md px-4 py-2 w-full" />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded mt-4">Enviar</button>
          </div>

        </div>
      </div>
      <div className='mt-24'>
        <Rodape />
      </div>
    </>
  );
};

export default VendaUsado;
