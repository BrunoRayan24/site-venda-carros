// Importe os componentes necessários
import React from 'react';
import MyNavbar from '../componentes/Navbar';
import MyCarousel from '../componentes/Carousel';
import Home from './Home'; // Assumindo que o arquivo home.js está dentro da pasta pages

function Index() {
  return (
    <>
      {/* Renderize o componente Navbar */}
      <MyNavbar />
      {/* Renderize o componente Carousel */}
      <MyCarousel />
      {/* Renderize o componente Home */}
      <Home />
    </>
  );
}

export default Index;