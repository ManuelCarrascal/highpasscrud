import axios from "axios";

const URLAPI = "http://localhost:3001";

export const registerUser = async (form) => {
  try {
    const { data } = await axios.post(`${URLAPI}/accesos`, form);
    return data;
  } catch (e) {
    console.error(e);
  }
};
