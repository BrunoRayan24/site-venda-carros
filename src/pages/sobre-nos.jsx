import React from 'react';
import MyNavbar from '../componentes/Navbar';
import Rodape from '../componentes/Rodape';
import Image from 'next/image';

const SobreNos = () => {
  return (
    <>
      <MyNavbar />
      <Image src="/sobre.jpg" alt="Logo" width={1920} height={150} />
      <div className="flex justify-center items-center ">
        <div className="p-6 rounded-lg  max-w-4xl text-justify">
          <h2 className="text-2xl text-center font-bold mb-4">Sobre Nós</h2>
          <p className="text-lg mb-4">Bem-vindo à CarService, uma história de determinação, crescimento e excelência automotiva que começou como um sonho em 2014 nas ruas de Belford Roxo, no Rio de Janeiro, Brasil. Fundada por Bruno Rayan, a CarService iniciou suas operações modestamente no quintal da casa de sua mãe, logo após sua saída do serviço militar. Mesmo diante das incertezas e desafios, Bruno sempre manteve seu objetivo claro: tornar-se o proprietário da maior revendedora de seminovos do Brasil.</p>
          <p className="text-lg mb-4">Desde então, nossa jornada tem sido marcada por um crescimento constante e uma dedicação implacável ao serviço excepcional ao cliente. Em 2015, inauguramos nossa primeira filial em Mesquita/RJ, seguida por outras em Nova Iguaçu e Duque de Caxias nos anos subsequentes. Com cada nova abertura, não apenas expandimos nossa presença geográfica, mas também aprimoramos nossa infraestrutura e serviços para proporcionar uma experiência de compra de automóveis incomparável.</p>

          <p className="text-lg mb-4">Em 2019, realizamos nosso primeiro Feirão e alcançamos um crescimento exponencial nas vendas, consolidando nossa posição como líderes de vendas no estado do Rio de Janeiro. Nos anos seguintes, continuamos a expandir, abrindo novas filiais em locais estratégicos, incluindo o maior polo comercial de venda de carros da América Latina e em Niterói.</p>

          <p className="text-lg mb-4">Em 2022, demos um passo significativo em nossa jornada ao estabelecer nossa presença no Sul Fluminense do estado, inaugurando nossa maior loja em Barra Mansa. Ao mesmo tempo, estabelecemos nossa nova casa, a Matriz da CarService, na Avenida Brasil, que servirá como nosso polo administrativo e operacional para os próximos anos.</p>

          <p className="text-lg mb-4">Continuando nossa trajetória de expansão, em 2023, abrimos nossa primeira loja na Zona Oeste do Rio e estendemos nossa presença para além das fronteiras do estado, com a inauguração da CarService São Paulo.</p>

          <p className="text-lg mb-4">Na CarService, não somos apenas uma concessionária de carros. Somos uma família dedicada a realizar os sonhos automotivos de nossos clientes, oferecendo uma ampla variedade de veículos seminovos de qualidade e um atendimento excepcional em todas as etapas da jornada de compra. Estamos comprometidos em continuar nossa busca pela excelência, expandindo nossa presença e servindo nossos clientes com paixão, integridade e respeito.</p>

          <p className="text-lg">Junte-se a nós e experimente a diferença CarService na estrada rumo ao seu próximo carro dos sonhos.</p>
        </div>
      </div>
      <div className='mt-24'>
      <Rodape/>
      </div>
    </>
  );
};

export default SobreNos;
