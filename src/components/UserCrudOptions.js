import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderOppciones } from "./HeaderOpciones";

export const UserCrudOptions = () => {
  const [artistas, setartistas] = useState([]);
  const [administradores, setadministradores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/artistas").then((respuesta) => {
      const data = respuesta.data;
      setartistas(data);
      console.log(data);
    });
    axios.get("http://localhost:3001/administradores").then((respuesta) => {
      const data = respuesta.data;
      setadministradores(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <HeaderOppciones />
      <div className="containerBottonsOptions">
        <div className="contContainer">
          <div>
            <label className="titleCard">artistas:</label>
          </div>
          <div>
            <label className="titleCard">Administradores:</label>
          </div>
        </div>
      </div>
      <div className="tableContainer">
        <table>
          <tbody>
            <tr>
              <th>Usuario</th>
              <th>Correo</th>
              <th>telefono</th>
            </tr>
            {artistas.map((v) => (
              <tr>
                <td>{v.nom_usuario}</td>
                <td>{v.acceso}</td>
                <td>{v.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th>Usuario</th>
              <th>Correo</th>
              <th>telefono</th>
            </tr>
            {administradores.map((v) => (
              <tr>
                <td>{v.nom_usu_administrador}</td>
                <td>{v.acceso}</td>
                <td>{v.tel_administrador}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
