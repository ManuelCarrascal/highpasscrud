import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderOppciones } from "./HeaderOpciones";

export const UserCrudOptions = () => {
  const [artistas, setartistas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/artistas").then((respuesta) => {
      const data = respuesta.data;
      setartistas(data);
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
            {artistas.map((v, index) => (
              <tr key={index}>
                <td>{v.username}</td>
                <td>{v.email}</td>
                <td>{v.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
