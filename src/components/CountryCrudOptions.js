import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderOppciones } from "./HeaderOpciones";

export const CountryCrudOptions = (paises) => {
  const [Paises, setPaises] = useState([]);
  const [Departamentos, setDepartamentos] = useState([]);
  const [Ciudades, setCiudades] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/paises").then((respuesta) => {
      const data = respuesta.data;
      setPaises(data);
      console.log(data);
    });
    axios.get("http://localhost:3001/departamentos").then((respuesta) => {
      const data = respuesta.data;
      setDepartamentos(data);
      console.log(data);
    });
    axios.get("http://localhost:3001/ciudades").then((respuesta) => {
      const data = respuesta.data;
      setCiudades(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <HeaderOppciones />
      <div className="containerBottonsOptions">
        <div className="containerAllCRDoptions">
          <div>
            <label className="labelCRDoptions titleCard">Paises</label>
          </div>
          <div className="tableContainer">
            <table>
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Pais</th>
                </tr>
                {Paises.map((v) => (
                  <tr>
                    <td>{v.cod_pais}</td>
                    <td>{v.nombre_pais}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <div className="containerAllCRDoptions">
          <div>
            <label className="labelCRDoptions titleCard">Departamentos</label>
          </div>
          <div className="tableContainer ">
            <table>
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Departamento</th>
                  <th>Pais</th>
                </tr>
                {Departamentos.map((v) => (
                  <tr>
                    <td>{v.cod_departamento}</td>
                    <td>{v.nombre_departamento}</td>
                    <td>{v.nombre_pais}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <br></br>
        <hr></hr>
        <div className="containerAllCRDoptions">
          <div>
            <label className="labelCRDoptions titleCard">Ciudades</label>
          </div>
          <div className="tableContainer ">
            <table>
              <tbody>
                <tr>
                  <th>#</th>
                  <th>Ciudad</th>
                  <th>Departamento</th>
                  <th>Pais</th>
                </tr>
                {Ciudades.map((v) => (
                  <tr>
                    <td>{v.cod_ciudad}</td>
                    <td>{v.nombre_ciudad}</td>
                    <td>{v.nombre_departamento}</td>
                    <td>{v.nombre_pais}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <br></br>
        <hr></hr>
      </div>
    </>
  );
};
