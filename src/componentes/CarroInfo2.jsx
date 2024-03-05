import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const CarroInfo2 = ({ marca, modelo, preco, ano, imagem }) => {
  return (
    <div className="bg-white mb-4 rounded-lg flex flex-col items-center justify-center">
      <div className="text-center">
        <Image src={imagem} alt={`${marca} ${modelo}`} width={300} height={200} style={{ width: '260px', height: '150px',  borderRadius: '10px' }} />
      </div>
      <div className="ml-10 mr-10 text-center">
        <h2 className="pt-2 font-bold text-lg">{marca} <span className="font-bold">{modelo}</span></h2>
        <div className="flex justify-center items-center"> {/* Adicionei items-center para centralizar os ícones verticalmente */}
          <p className="font-semibold mr-4">
            <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-1" /> R$ {preco}
          </p>
          <p className="font-semibold">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" /> {ano}
          </p>
        </div>
        <button className="mt-4 mb-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Saiba Mais</button>
      </div>
    </div>
  );
};

export default CarroInfo2;
