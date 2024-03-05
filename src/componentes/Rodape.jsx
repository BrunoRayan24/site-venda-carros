import React from 'react';
import AddressCarousel from './CarouselEndereco'; // Importando o componente AddressCarousel
import { useRouter } from 'next/router';

const Rodape = () => {
    return (
        <footer className="bg-gray-800 text-white p-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h2 className="text-lg border-b-2 font-semibold mb-4">Onde Estamos</h2>
                <div className='text-gray-300 ml-8'>
                  <AddressCarousel/>
                </div>
              </div>
              <div>
                <h2 className="text-lg border-b-2 font-semibold mb-4">Mapa do Site</h2>
                <ul className='text-gray-300'>
                  <li><NavLink href="/">Home</NavLink></li>
                  <li><NavLink href="/estoque">Estoque</NavLink></li>
                  <li><NavLink href="/sobre-nos">Sobre Nós</NavLink></li>
                  <li><NavLink href="/onde-estamos">Onde Estamos</NavLink></li>
                  <li><NavLink href="/atendimento-online">Atendimento Online</NavLink></li>
                  <li><NavLink href="/vendausado">Venda seu Usado</NavLink></li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-4 border-b-2">Contato</h2>
                <span className='text-gray-300'>
                  <p>Email: carservice@gmail.com</p>
                  <p className='grid grid-cols-1'>Telefone: (21) 1234-5678 / (21) 9876-5432</p>
                </span>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    const NavLink = ({ href, children }) => {
      const router = useRouter();
    
      const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
      };
    
      return (
        <a href={href} onClick={handleClick} className={`ml-4 ${router.pathname === href ? 'font-bold' : ''}`}>
          {children}
        </a>
      );
    };

export default Rodape;
