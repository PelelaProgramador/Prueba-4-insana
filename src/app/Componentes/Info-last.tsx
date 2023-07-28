import React from 'react';

export const InfoLast = () => {
  return (
    <section className="info-last">
      <div className="contenedor last-section">
        <div className="contenedor-textos-main">
          <h2 className="h2">Mejores momentos</h2>
          <p className="parrafo">
            El 2017 fue el año en el que T1 brilló con fuerza en el mundo de los deportes electrónicos.
            Su desempeño fue nada menos que épico, destacándose en cada una de sus partidas y mostrando un nivel de
            juego que dejaba boquiabiertos a sus fanáticos. La estrategia y coordinación del equipo eran impecables,
            lo que les permitió superar con facilidad a sus rivales y ganar torneo tras torneo. Sus jugadas eran
            espectaculares, y parecía que cada movimiento estaba cuidadosamente planeado para llevarlos a la
            victoria. Sin duda, el 2017 fue el año de T1, y sus hazañas serán recordadas por siempre en la historia de
            los deportes electrónicos.
          </p>
          <a href="https://www.youtube.com/watch?v=XFB0_VHuxnk" className="cta">
            Epicidad
          </a>
        </div>

        <div className="imagen amongus"></div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/o8vGaC4OZIs"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="imagen faker-siendo-faker img-faker"></div>
      </div>

      <div className="svg-wave"></div>
    </section>
  );
};

export default InfoLast;
