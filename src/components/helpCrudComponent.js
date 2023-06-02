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
        <div className="containerDevsSection">
          <div>
            <img className="imgDeveloper" src={manuel} alt=""></img>
          </div>
          <p className="textNameDevs">Manuel Alejandro Carrascal Arias</p>
        </div>
      </div>
    </>
  );
};
