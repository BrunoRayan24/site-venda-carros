import React, { useState } from 'react';
import MyNavbar from '../componentes/Navbar';
import CarroInfo from '../componentes/CarroInfo';
import Rodape from '../componentes/Rodape';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Estoque = () => {
  const [marcaSelecionada, setMarcaSelecionada] = useState('nenhuma');
  const [anoSelecionado, setAnoSelecionado] = useState('');
  const [precoSelecionado, setPrecoSelecionado] = useState('');
  const [isOpen, setIsOpen] = useState(false); // Alterado para false para iniciar fechado
  const [carrosFiltrados, setCarrosFiltrados] = useState([]);
  const [modeloSelecionado, setModeloSelecionado] = useState('nenhum');

  const getModelosAssociados = (marca) => {
    switch (marca) {
      case 'volvo':
        return ['S60', 'S90', 'XC40', 'XC60', 'XC90'];
      case 'saab':
        return ['9-3', '9-5', '900', '9000'];
      case 'mercedes':
        return ['A-Class', 'C-Class', 'E-Class', 'S-Class'];
      case 'audi':
        return ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7'];
      default:
        return [];
    }
  };

  const handleLocalizar = () => {
    const carrosFiltrados = carros.filter(carro => {
      const anoString = anoSelecionado ? anoSelecionado.toString() : '';
      const precoNumber = precoSelecionado ? parseFloat(precoSelecionado.replace('R$ ', '').replace('.', '').replace(',', '.')) : 0;
      return (
        (marcaSelecionada === 'nenhuma' || carro.marca.trim().toLowerCase() === marcaSelecionada.trim().toLowerCase()) &&
        (modeloSelecionado === 'nenhum' || carro.modelo.trim().toLowerCase() === modeloSelecionado.trim().toLowerCase()) &&
        (anoString === '' || carro.ano.toString() === anoString) &&
        (precoSelecionado === '' || parseFloat(carro.preco.replace('R$ ', '').replace('.', '').replace(',', '.')) === precoNumber)
      );
    });

    setCarrosFiltrados(carrosFiltrados);

    if (carrosFiltrados.length === 0) {
      alert("Não temos modelos baseados nas especificações selecionadas.");
    }
  };

  const handleMarcaChange = (event) => {
    setMarcaSelecionada(event.target.value);
  };

  const handleModeloChange = (event) => {
    setModeloSelecionado(event.target.value);
  };

  const handleAnoChange = (event) => {
    setAnoSelecionado(event.target.value);
  };

  const handlePrecoChange = (event) => {
    setPrecoSelecionado(event.target.value);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const carros = [
    { marca: 'Volvo', modelo: 'XC90', preco: '150.000', ano: 2020, cambio: 'Automático', imagem: '/volvo.jpg' },
    { marca: 'Saab', modelo: '9-3', preco: '80.000', ano: 2018, cambio: 'Manual', imagem: '/Saab.jpg'},
    { marca: 'Mercedes', modelo: 'E-Class', preco: '200.000', ano: 2021, cambio: 'Automático', imagem: '/Mercedes.jpg' },
    // Adicione mais informações aqui conforme necessário
  ];

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3">
            <button className='btn btn-primary w-100 mb-3' onClick={toggleOpen}>
              <span>FILTRAR</span>
              <span>
                {isOpen ? (
                  <FontAwesomeIcon icon={faArrowUp} />
                ) : (
                  <FontAwesomeIcon icon={faArrowDown} />
                )}
              </span>
            </button>
            <motion.div
              className="bg-white p-4 rounded-md shadow-md"
              initial={{ height: 0, opacity: 0, y: -10 }} // Modificado para iniciar ligeiramente acima
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }} // Modificado para ajustar a posição Y
              transition={{ duration: 0.3 }} // Reduzido o tempo de duração para uma transição mais rápida
            >
              <div className="mb-3">
                <label htmlFor="marca" className="form-label">Marca:</label>
                <select id="marca" name="marca" value={marcaSelecionada} onChange={handleMarcaChange} className="form-select">
                  <option value=""></option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                  <option value="todos">Todos os Veículos</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="modelo" className="form-label">Modelo:</label>
                <select id="modelo" name="modelo" className="form-select" onChange={handleModeloChange}>
                  <option value=""></option>
                  {getModelosAssociados(marcaSelecionada).map((modelo, index) => (
                    <option key={index} value={modelo}>{modelo}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="ano" className="form-label">Ano:</label>
                <select id="anos" className="form-select" onChange={handleAnoChange}>
                  <option value=""> </option>
                  <option value="2020"> 2020</option>
                  <option value="2021"> 2021</option>
                  <option value="2022"> 2022</option>
                  <option value="2023"> 2023</option>
                  <option value="2024"> 2024</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="preco" className="form-label">Preço:</label>
                <select id="preco" name="preco" className="form-select" onChange={handlePrecoChange}>
                  <option value="">Qualquer preço</option>
                  <option value="R$ 100.000">R$ 100.000</option>
                  <option value="R$ 150.000">R$ 150.000</option>
                  <option value="R$ 200.000">R$ 200.000</option>
                </select>
              </div>
              <button className='btn btn-success w-100' onClick={handleLocalizar}>Localizar</button>
            </motion.div>
          </div>
          <div className="col-lg-9">

            {carrosFiltrados.length === 0 ? carros.map((carro, index) => (
              <div key={index} className="mb-4">
                <CarroInfo marca={carro.marca} modelo={carro.modelo} preco={carro.preco} ano={carro.ano} cambio={carro.cambio} imagem={carro.imagem} />
              </div>
            )) : carrosFiltrados.map((carro, index) => (
              <div key={index} className="mb-4">
                <CarroInfo marca={carro.marca} modelo={carro.modelo} preco={carro.preco} ano={carro.ano} cambio={carro.cambio} imagem={carro.imagem} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-24'>
        <Rodape/>
      </div>
    </>
  );
};

export default Estoque;
