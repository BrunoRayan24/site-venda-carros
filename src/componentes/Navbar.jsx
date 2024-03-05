import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/carousel.module.css';
import { useRouter } from 'next/router';

const MyNavbar = () => {

  return (
    <>
      <div className="bg-cyan-500 shadow-lg">
        <div className="container mx-auto px-4">
          <Navbar expand="lg">
            <Navbar.Brand>
              <div style={{ position: 'relative', marginLeft: '40px' }}>
                <Image src="/logopng.png" alt="Logo" width={150} height={40} />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto text-white text-base mx-4 transition duration-200 transform hover:text-gray-200 ">
                <NavLink href="/" >Home</NavLink>
                <NavLink href="/estoque" >Estoque</NavLink>
                <NavLink href="/sobre-nos" >Sobre Nós</NavLink>
                <NavLink href="/onde-estamos">Onde Estamos</NavLink>
                <NavLink href="/atendimento-online" >Atendimento Online</NavLink>
                <NavLink href="/vendausado" >Venda seu Usado</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
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

export default MyNavbar;
