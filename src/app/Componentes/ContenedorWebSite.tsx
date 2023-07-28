import React from 'react';
import './estilos.css'; // Importa el archivo CSS global

export const ContenedorWebsite = () => {
  return (
    <section className="contenedor website">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Agrega aquí el contenido del navbar */}
      </nav>
      <img src="img/Draven.png" alt="" />
      <div className="contenedor-textos-main" id="QuienesSomos">
        <h2 className="titulo left">Quienes somos?</h2>
        <p className="parrafo">Si te interesa saber, Apreta aqui</p>
        <a href="https://www.t1.gg" className="cta">
          바보는 배운다
        </a>
      </div>
    </section>
  );
};

export default ContenedorWebsite;