import tutto from "../assets/img/tutto.png";
import manuel from "../assets/img/Manuel.png";

export const HelpCrudComponent = () => {
  return (
    <>
      <div className="aboutUsContainer">
        <p id="textAboutUs">
          High Pass es un proyecto que nace de la necesidad de los artistas
          locales de la region de Ocaña Norte de Santander en buscar apoyo y
          colaboracion con otros artistas.
        </p>
      </div>
      <div className="aboutUsContainer">
        <p id="textAboutUs">
          Artistas y empresas pueden verse beneficiados a la hora de utilizar la
          plataforma para lograr objetivos a la hora de la realizacion de una
          produccion musical.
        </p>
      </div>
      <div className="aboutUsContainer">
        <div className="containerDevsSection">
          <div>
            <img className="imgDeveloper" src={manuel}></img>
          </div>
          <p className="textNameDevs">Manuel Alejandro Carrascal Arias</p>
        </div>
        <div className="containerDevsSection">
          <div>
            <img className="imgDeveloper" src={tutto}></img>
          </div>
          <p className="textNameDevs">Justo Edilberto Pérez Carrascal</p>
        </div>
      </div>
    </>
  );
};
