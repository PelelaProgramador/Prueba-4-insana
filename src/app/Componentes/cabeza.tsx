import React from 'react';
import './estilos.css'; // Importa el archivo CSS externo

export const Cabeza = () => {
  return (
    <header className="hero">
      <div className="textos-hero" id="inicio">
        <h1 className="h1">T1</h1>
        <p>Quieres unirte papu?, contesta la encuesta</p>
        <a className="nav-link" href="#inicio">Inicio</a>
        <a className="nav-link" href="#QuienesSomos">Acerca de</a>
        <a className="nav-link" href="#integrantes">integrantes</a>
        <a className="nav-link" href="#redes-sociales">Redes Sociales</a>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Aquí puedes agregar otros elementos de navegación */}
        </nav>
      </div>
      <div className="svg-hero">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path>
        </svg>
      </div>
    </header>
  );
};

export default Cabeza;