import axios from "axios";

const URLAPI = "http://localhost:3001";

export const consultarArtistas = async () => {
  try {
    const { data } = await axios.post(`${URLAPI}/artistas`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
export const consultarAdministradores = async () => {
    try {
      const { data } = await axios.post(`${URLAPI}/administradores`);
      return data;
    } catch (e) {
      console.error(e);
    }
  };
