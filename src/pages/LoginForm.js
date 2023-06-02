import { useEffect, useState } from "react";
import HighPassLogo from "../assets/img/HighPassLogo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [datos, setDatos] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  useEffect(() => {
    const isLogged = !!sessionStorage.getItem("sesion");
    if (isLogged) {
      navigate("/menu");
    }
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(datos);
    if (datos.email.length !== 0 && datos.password.length !== 0) {
      document
        .getElementById("inputCorreoElectronico")
        .classList.remove("requiredField");
      document
        .getElementById("inputContraseña")
        .classList.remove("requiredField");
      const response = await axios.post(
        "http://localhost:3001/sendlogin",
        datos
      );
      sessionStorage.setItem("sesion", response.data.rows);
      navigate("/menu");
      console.log(response);
    } else if (datos.email.length !== 0) {
      document.getElementById("inputContraseña").classList.add("requiredField");
      document
        .getElementById("inputCorreoElectronico")
        .classList.remove("requiredField");
    } else if (datos.password.length !== 0) {
      document
        .getElementById("inputCorreoElectronico")
        .classList.add("requiredField");
      document
        .getElementById("inputContraseña")
        .classList.remove("requiredField");
    } else {
      document
        .getElementById("inputCorreoElectronico")
        .classList.add("requiredField");
      document.getElementById("inputContraseña").classList.add("requiredField");
    }
  };
  return (
    <div className="bodyForms">
      <div className="containerLogoHighPassLogin">
        <HighPassLogo className="resizeLogoHighPass" />
      </div>
      <form className="containerForm loginForm">
        <input
          className=""
          id="inputCorreoElectronico"
          name="email"
          type={"email"}
          placeholder="Correo electrónico"
          value={datos.email}
          onChange={handleChange}
          required
        ></input>
        <input
          className=""
          id="inputContraseña"
          name="password"
          type={"password"}
          placeholder="Contraseña"
          value={datos.password}
          onChange={handleChange}
          required
        ></input>
        <div className="containerButtonForm">
          <button
            className="buttonActionForm"
            id="loginButton"
            onClick={onSubmit}
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};
