import axios from "axios";

const URLAPI = "http://localhost:3001";

export const consultarArtistas = async () => {
  try {
    const { data } = await axios.post(`${URLAPI}/api/artistas`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const consultarCategorias = async () => {
  try {
    const { data } = await axios.post(`${URLAPI}/api/categorias`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
