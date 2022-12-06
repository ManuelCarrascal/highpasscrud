import { HeaderOppciones } from "./HeaderOpciones";

export const CountryCrudOptions = (paises) => {
  return (
    <>
      <HeaderOppciones />
      <div className="containerBottonsOptions">
        <div className="containerAllCRDoptions">
          <div>
            <label className="labelCRDoptions">Paises</label>
          </div>
          <div className="containerButtonsCrudsOption">
            <button className="btnOptionCrud">Consultar Pais</button>
            <button className="btnOptionCrud">Actualizar Pais</button>
            <button className="btnOptionCrud">Eliminar Pais</button>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <div className="containerAllCRDoptions">
          <div>
            <label className="labelCRDoptions">Departamentos</label>
          </div>
          <div className="containerButtonsCrudsOption">
            <button className="btnOptionCrud">Consultar departamento</button>
            <button className="btnOptionCrud">Actualizar departamento</button>
            <button className="btnOptionCrud">Eliminar departamento</button>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <div className="containerAllCRDoptions">
          <div>
            <label className="labelCRDoptions">Paises</label>
          </div>
          <div className="containerButtonsCrudsOption">
            <button className="btnOptionCrud">Consultar Pais</button>
            <button className="btnOptionCrud">Actualizar Pais</button>
            <button className="btnOptionCrud">Eliminar Pais</button>
          </div>
        </div>
        <br></br>
        <hr></hr>
      </div>
    </>
  );
};
