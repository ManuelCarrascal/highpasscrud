import axios from "axios";

const URLAPI = "http://localhost:3001";

export const registerUser = async (form) => {
  try {
    const { data } = await axios.post(`${URLAPI}/api/register`, form);
    console.table(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};
