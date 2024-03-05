import React from 'react';
import Rodape from '../componentes/Rodape';
import CarroInfo2 from '../componentes/CarroInfo2';
import Carousel from '../componentes/TesteComponent';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Home = () => {

  const items = [
    {
      title: 'Maria Oliveira',
      description: '"Estou extremamente satisfeita com a minha experiência de compra na concessionária. O atendimento foi excepcional, desde o momento em que entrei pela porta até a entrega do meu novo carro!".',
      imagePath: '/perfil1.png'
    },
    {
      title: 'João Silva',
      description: '"Comprar meu novo carro foi uma decisão fácil graças à equipe profissional e prestativa da concessionária!"',
      imagePath: '/perfil2.png'
    },
    {
      title: 'Carla Santos',
      description: '"A equipe de vendas foi extremamente atenciosa e profissional, me ajudando a encontrar o carro certo para mim dentro do meu orçamento."',
      imagePath: '/perfil3.png'
    },
    {
      title: 'Rafael Oliveira',
      description: '"Depois de pesquisar várias opções, decidi comprar meu carro na concessionária e não poderia estar mais satisfeita com minha escolha.!"',
      imagePath: '/perfil4.png'
    },
    {
      title: 'Ana Costa',
      description: '"A equipe foi muito paciente e dedicada em entender minhas necessidades e preferências."',
      imagePath: '/perfil5.png'
    }
  ];
  

  const carros = [
    { marca: 'Volvo', modelo: 'XC90', preco: '150.000', ano: 2020, cambio: 'Automático', imagem: '/volvo.jpg' },
    { marca: 'Saab', modelo: '9-3', preco: '80.000', ano: 2018, cambio: 'Manual', imagem: '/Saab.jpg'},
    { marca: 'Mercedes', modelo: 'E-Class', preco: '200.000', ano: 2021, cambio: 'Automático', imagem: '/Mercedes.jpg' },
  ];

  return (
    <>
    <div className="bg-sky-100 pt-12">
      <div className="text-center font-normal">
        <h1 className="text-5xl">CONHEÇA NOSSAS VANTAGENS</h1>
        <p className="text-2xl">Negocie com a CarService e tenha benefícios exclusivos</p>
      </div>

      {/* Retângulos com informações */}
      <div className="flex flex-col md:flex-row md:justify-center items-center mt-8">
        <div className="bg-white pt-4 m-4 rounded-lg w-72 h-96">
          <p className="font-medium text-2xl mx-4 text-center text-cyan-500">FIQUE DESPREOCUPADO</p>
          <p className="text-center m-2 text-sm">Possuímos um ótimo sistema de atendimento pós-venda com uma equipe especializada e oficinas credenciadas para deixar nossos clientes satisfeitos.</p>
        </div>
        <div className="bg-white pt-4 m-4 rounded-lg w-72 h-96">
        <p className="font-medium text-2xl mx-4 text-center text-cyan-500">NÃO PERCA NA TROCA</p>
          <p className="text-center m-2 text-sm">Somos especialistas em carros e, por isso, sabemos como avaliar o seu usado. Na Lions você pode receber até 90% do valor da tabela FIPE no momento da troca.</p>
        </div>
        <div className="bg-white pt-4 m-4 rounded-lg w-72 h-96">
        <p className="font-medium text-2xl mx-4 text-center text-cyan-500">NADA DE JUROS ALTOS</p>
          <p className="text-center m-2 text-sm">Somos o líder nacional em financiamentos. Por consequência, grandes bancos fornecem para nossos clientes taxas de juros baixas e fácil aprovação de crédito.</p>
        </div>
        <div className="bg-white pt-4 m-4 rounded-lg w-72 h-96">
        <p className="font-medium text-2xl mx-4 text-center text-cyan-500">ÓTIMOS PREÇOS</p>
          <p className="text-center m-2 text-sm">Compramos carros em grandes lotes e com grandes descontos. Desta forma, conseguimos te repassar bons descontos.</p>
        </div>
      </div>
      </div>

      <Image src="/propaganda3.jpg" alt="Logo" width={1920} height={400} />


      {/* Renderizando as informações dos carros */}

      <div className="bg-sky-100 text-center pt-12 font-normal">
        <h1 className="text-5xl">NOSSAS OFERTAS</h1>
        <p className="text-2xl">Confira oportunidades preparadas para você</p>
      </div>

      <div className="bg-sky-100 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
        {carros.map((carro, index) => (
          <CarroInfo2
            key={index}
            marca={carro.marca}
            modelo={carro.modelo}
            preco={carro.preco}
            ano={carro.ano}
            imagem={carro.imagem}
          />
        ))}
      </div>
    </div>
    
    <div className="bg-sky-100">
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Estoque Completo</button>
      </div>

      <div className='mt-12 bg-gray-900'>
  <div className="bg-gray-900 text-center py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl text-white font-bold">ALGUNS DEPOIMENTOS</h1>
      <h1 className="text-xl text-white mb-4">Clientes satisfeitos vieram aqui para te ajudar a tomar uma decisão</h1>
      <div className='text-sm'>  
        <div className="w-full flex justify-center">
          <Carousel items={items} />
        </div>
      </div> 
    </div>
  </div>
</div>

    </div>

    <div className="bg-sky-100 text-left pt-12 font-normal">
      <div className='container mx-auto mt-10'>
        <p className="text-3xl">SEJA COMO UM DE NOSSOS CLIENTES</p>
        <p className="text-3xl">SATISFEITOS. REALIZE O</p>
        <p className="text-3xl">SEU SONHO</p>
        <p className="text-2xl">Tem alguma dúvida?</p>
        <p className="text-2xl">Envie seus dados que entraremos em contato.</p>
      </div>

    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 ">
        {/* Nome */}
        <input
          type="text"
          placeholder="Nome"
          className="border border-gray-400 p-1 w-64 "
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 p-1 w-64 "
        />

        {/* Telefone */}
        <div className="flex">
          <input
            type="text"
            id="ddd"
            placeholder="DDD"
            className="border border-gray-400 p-1 w-24 "
          />
          <input
            type="text"
            id="phone"
            placeholder="Número"
            className="border border-gray-400 p-1 w-40 "
          />
        </div>

        {/* Loja mais próxima */}
        <select
          id="store"
          className="border border-gray-400 p-1 w-64 "
        >
          <option value="store1">Loja 1</option>
          <option value="store2">Loja 2</option>
          <option value="store3">Loja 3</option>
        </select>
        
        <button className="bg-blue-800 text-white mt-6 font-semibold w-64 py-2 px-4 ">
          Enviar
        </button>
        </div>
      </div>
      <div className='mt-24'>
        <Rodape />
      </div>
    </div>
    </>
  );
};

export default Home;
