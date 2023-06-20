import { useCallback, useEffect, useState } from "react";
import HighPassLogo from "../assets/img/HighPassLogo";
import SelectCity from "../components/SelectCity";
import { SelectCountry } from "../components/SelectCountry";
import SelectDepartament from "../components/SelectDepartament";
import {
  getCities,
  getCountries,
  fetchDepartmentsByCountryId,
} from "../services/location.service";
import { registerUser } from "../services/register.service";

export const RegisterForm = () => {
  const [paises, setPaises] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [datos, setDatos] = useState({
    email: "",
    password: "",
    username: "",
    names: "",
    lastnames: "",
    phone: "",
    birthdate: "",
    country: "",
    department: "",
    city: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    if (!datos.email.trim()) {
      console.log("email vacio");
      document
        .getElementById("inputCorreoElectronico")
        .classList.add("requiredField");
    } else {
      document
        .getElementById("inputCorreoElectronico")
        .classList.remove("requiredField");
    }

    if (!datos.password.trim()) {
      console.log("password vacio");
      document.getElementById("contraseña").classList.add("requiredField");
    } else {
      document.getElementById("contraseña").classList.remove("requiredField");
    }

    if (!datos.username.trim()) {
      console.log("nombre de usuario vacio");
      document.getElementById("nombreUsuario").classList.add("requiredField");
    } else {
      document
        .getElementById("nombreUsuario")
        .classList.remove("requiredField");
    }

    if (!datos.names.trim()) {
      console.log("names vacio");
      document.getElementById("names").classList.add("requiredField");
    } else {
      document.getElementById("names").classList.remove("requiredField");
    }

    if (!datos.lastnames.trim()) {
      console.log("names vacio");
      document.getElementById("lastnames").classList.add("requiredField");
    } else {
      document.getElementById("lastnames").classList.remove("requiredField");
    }

    if (
      datos.email.trim() !== "" &&
      datos.password.trim() !== "" &&
      datos.username.trim() !== "" &&
      datos.names.trim() !== "" &&
      datos.lastnames.trim() !== ""
    ) {
      console.log(datos);
      registerUser(datos);
    }
  };

  const getPaises = useCallback(async () => {
    const response = await getCountries();
    setPaises(response);
  }, []);

  const getDepartamentos = async (event) => {
    datos.country = event._id;
    const response = await fetchDepartmentsByCountryId(event._id); // aquí se pasa el ID del país
    setDepartamentos(response);
  };

  const getCiudades = async (event) => {
    datos.department = event._id;
    const response = await getCities(event._id);

    setCiudades(response);
  };

  useEffect(() => {
    getPaises();
  }, [getPaises]);

  return (
    <div className="bodyForms">
      <div className="containerLogoHighPassLogin">
        <HighPassLogo className="resizeLogoHighPass" />
      </div>
      <form className="containerForm" onSubmit={enviarDatos}>
        <input
          id="inputCorreoElectronico"
          name="email"
          type={"email"}
          placeholder="Correo electrónico"
          onChange={handleInputChange}
          required
        ></input>

        <input
          id="contraseña"
          name="password"
          type={"password"}
          placeholder="Contraseña"
          onChange={handleInputChange}
          required
        ></input>

        <input
          id="nombreUsuario"
          name="username"
          type={"text"}
          placeholder="Nombre de usuario"
          onChange={handleInputChange}
          required
        ></input>

        <input
          id="names"
          name="names"
          type={"text"}
          placeholder="names"
          onChange={handleInputChange}
          required
        ></input>

        <input
          id="lastnames"
          name="lastnames"
          type={"text"}
          placeholder="lastnames"
          onChange={handleInputChange}
          required
        ></input>

        <input
          id="phone"
          name="phone"
          type={"tel"}
          placeholder="Teléfono"
          minLength="10"
          maxLength="10"
          pattern="^\d+$"
          onChange={handleInputChange}
          required
        ></input>

        <SelectCountry paises={paises} departamentos={getDepartamentos} />

        <SelectDepartament
          departamentos={departamentos}
          ciudades={getCiudades}
        />

        <SelectCity ciudades={ciudades} form={datos} />

        <input
          name="birthdate"
          className=""
          id=""
          type={"date"}
          required
          onChange={handleInputChange}
        ></input>

        <div className="containerButtonRegister">
          <button className="buttonActionForm" type="submit">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};
