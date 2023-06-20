import axios from "axios";
import { useEffect, useState } from "react";
import { HeaderOppciones } from "./HeaderOpciones";

export const CountryCrudOptions = (paises) => {
  const [Paises, setPaises] = useState([]);
  const [Departamentos, setDepartamentos] = useState([]);
  const [Ciudades, setCiudades] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/paises").then((respuesta) => {
      const data = respuesta.data;
      setPaises(data);
      console.log(data);
    });
    axios.get("http://localhost:3001/api/departamentos").then((respuesta) => {
      const data = respuesta.data;
      setDepartamentos(data);
      console.log(data);
    });
    axios.get("http://localhost:3001/api/ciudades").then((respuesta) => {
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
                {Paises.map((v, index) => (
                  <tr key={index}>
                    <td>{v._id}</td>
                    <td>{v.name_country}</td>
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
                {Departamentos.map((v, index) => (
                  <tr key={index}>
                    <td>{v._id}</td>
                    <td>{v.name_department}</td>
                    <td>{v.name_country}</td>
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
                {Ciudades.map((v, index) => (
                  <tr key={index}>
                    <td>{v._id}</td>
                    <td>{v.name_city}</td>
                    <td>{v.name_department}</td>
                    <td>{v.name_country}</td>
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
