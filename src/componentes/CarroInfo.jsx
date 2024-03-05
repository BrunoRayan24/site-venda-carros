import Image from 'next/image';
import { useState } from 'react';

const CarroInfo = ({ marca, modelo, preco, ano, cambio, imagem }) => {

    const [hovered, setHovered] = useState(false);
    const [hoveredCambio, setHoveredCambio] = useState(false);


  return (
    <div className="bg-gray-200 mb-4 rounded-lg">
      <div className="flex items-start">
        <div>
          <Image src={imagem} alt={`${marca} ${modelo}`} width={510} height={400} style={{ width: '400px', height: '300px' }}/>
        </div>
        <div className="ml-10 mr-10">
          <h2 className="pt-2 font-bold text-lg">{marca} <span className="font-bold">{modelo}</span></h2>
          <p className=""><span className="font-semibold">R$</span><span className="font-semibold text-2xl">{preco}</span></p>
          <div className="border-y border-gray-400 py-3 mt-4 flex">
            <div className='flex'>
            <div className={`${hovered ? 'bg-red-200' : 'bg-white'} text-sm pb-2 mr-4 flex flex-col justify-center items-center text-center`} style={{ width: '100px', height: '70px' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
              <p >Ano</p>
              <div className="font-semibold">{ano}</div>
            </div>
            <div className={`${hoveredCambio ? 'bg-red-200' : 'bg-white'} text-sm pb-2 mr-4 flex flex-col justify-center items-center text-center`} style={{ width: '100px', height: '70px' }} onMouseEnter={() => setHoveredCambio(true)} onMouseLeave={() => setHoveredCambio(false)}>
              <p>Câmbio</p>
              <div className="font-semibold">{cambio}</div>
            </div>
          </div>
        </div>
        <button className="mt-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Saiba Mais</button>
      </div>
      </div>
    </div>
  );
};

export default CarroInfo;
