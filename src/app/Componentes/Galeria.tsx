import React from 'react';

export const Galeria = () => {
  return (
    <section className="galeria">
      <div className="contenedor">
        <h2 className="titulo" id="integrantes">Nuestros integrantes - 우리 회원들</h2>
        <article className="galeria-cont">
          <div className="imagen zeus"></div>
          <div className="imagen shh-platita"></div>
          <div className="imagen oner-puchito"></div>
          <div className="imagen gumayusi-god"></div>
          <div className="imagen tyler2"></div>
          <div className="imagen keria-tabien"></div>
          {/* Agregar más imágenes aquí */}
        </article>
      </div>
    </section>
  );
};

export default Galeria;
