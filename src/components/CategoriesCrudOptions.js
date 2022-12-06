import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const CategoriesCrudOptions = () => {
  const [categoria, setcategoria] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/categorias").then((respuesta) => {
      const data = respuesta.data;
      setcategoria(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <div>
        <p className="titleCard">Categorias</p>
      </div>
      <div className="tableContainer">
        <table id="tableCategories">
          <tbody>
            <tr>
              <th>#</th>
              <th>Categoria</th>
            </tr>
            {categoria.map((v) => (
              <tr>
                <td>{v.cod_categoria}</td>
                <td>{v.nom_categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
