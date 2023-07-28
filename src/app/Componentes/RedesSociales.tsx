import React from 'react';

export const RedesSociales= () => {
  return (
    <section className="cards contenedor">
      <h2 className="titulo" id="redes-sociales">
        Redes Sociales
      </h2>
      <div className="content-cards">
        <article className="card">
          <div className="imagen facebook"></div>
          <h3>페이스북</h3>
          <p>Apreta aqui</p>
          <a href="https://www.facebook.com/T1LoL" className="cta">
            Abajo
          </a>
        </article>
        <article className="card">
          <div className="imagen instagram"></div>
          <h3>인스 타 그램</h3>
          <p>Apreta aqui</p>
          <a href="https://www.instagram.com/t1lol/" className="cta">
            Aqui abajo
          </a>
        </article>
        <article className="card">
          <div className="imagen twitter"></div>
          <h3>트위터</h3>
          <p>Apreta aqui</p>
          <a href="https://twitter.com/T1LoL" className="cta">
            Aqui pos
          </a>
        </article>
      </div>
    </section>
  );
};

export default RedesSociales;