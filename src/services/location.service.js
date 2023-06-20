import axios from "axios";

const URLAPI = "http://localhost:3001";

export const getCountries = async () => {
  try {
    const { data } = await axios.get(`${URLAPI}/api/paises`);
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchDepartmentsByCountryId = async (idPais) => {
  try {
    const { data } = await axios.get(`${URLAPI}/api/departamentos/${idPais}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCities = async (idDepartamento) => {
  try {
    const { data } = await axios.get(
      `${URLAPI}/api/ciudades/${idDepartamento}`
    );
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const listDepartamentos = async () => {
  try {
    const { data } = await axios.get(`${URLAPI}/api/departamentos`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
export const listCiudades = async () => {
  try {
    const { data } = await axios.get(`${URLAPI}/api/ciudades`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
