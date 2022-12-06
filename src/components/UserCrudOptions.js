import { HeaderOppciones } from "./HeaderOpciones";

export const UserCrudOptions = ({ title }) => {
  return (
    <>
      <HeaderOppciones />
      <div className="containerBottonsOptions">
        <div className="contContainer">
          <div>
            <label>{title}</label>
            <button className="btnOptionCrud">Consultar Artistas</button>
            <button className="btnOptionCrud">Actualizar Artistas</button>
          </div>
          <div>
            <button className="btnOptionCrud">Consultar Administradores</button>
            <button className="btnOptionCrud">
              Actualizar Administradores
            </button>
          </div>
        </div>
        <table className="table">
          <tr className="tr">
            <th></th>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
    </>
  );
};
