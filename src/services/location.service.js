import axios from "axios";

const URLAPI = "http://localhost:3001";

export const getCountries = async () => {
  try {
    const { data } = await axios.get(`${URLAPI}/paises`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getDepartaments = async (idPais) => {
  try {
    const { data } = await axios.get(`${URLAPI}/departamentos/${idPais}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const getCities = async (idDepartamento) => {
  try {
    const { data } = await axios.get(`${URLAPI}/ciudades/${idDepartamento}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const listDepartamentos = async () => {
  try {
    const { data } = await axios.get(`${URLAPI}/departamentos`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
export const listCiudades = async () => {
  try {
    const { data } = await axios.get(`${URLAPI}/ciudades`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
