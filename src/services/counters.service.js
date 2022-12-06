import axios from "axios";

const URLAPI = "http://localhost:3001";

export const getCountArtistas = async () => {
    try {
      const {data} = await axios.get(`${URLAPI}/countartistas`);
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  export const getCountProyectos = async () => {
    try {
      const {data} = await axios.get(`${URLAPI}/countproyectos`);
      return data;
    } catch (e) {
      console.error(e);
    }
  };