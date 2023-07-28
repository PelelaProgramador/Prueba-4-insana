import React from 'react';

export const Info = () => {
  return (
    <section className="info">
      <div className="contenedor">
        <h2 className="titulo left">Te interesa saber?</h2>
        <p>Sigue Bajando</p>
      </div>
      <div className="personas" id="Personas">
        <div className="imagen persona1"></div>
        <div className="imagen persona2"></div>
        <div className="imagen persona3"></div>
        {/* Agregar más imágenes aquí */}
      </div>
    </section>
  );
};

export default Info;
