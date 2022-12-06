import { useCallback, useEffect, useState } from "react";
import HighPassLogo from "../assets/img/HighPassLogo";
import SelectCity from "../components/SelectCity";
import { SelectCountry } from "../components/SelectCountry";
import SelectDepartament from "../components/SelectDepartament";
import {
  getCities,
  getCountries,
  getDepartaments,
} from "../services/location.service";
import { registerUser } from "../services/register.service";

export const RegisterForm = () => {
  const [paises, setPaises] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [datos, setDatos] = useState({
    email: "",
    password: "",
    nom_usuario: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    fecha_nacimiento:"",
    pais: "",
    departamento: "",
    ciudad: "",
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

    if (!datos.nom_usuario.trim()) {
      console.log("nombre de usuario vacio");
      document.getElementById("nombreUsuario").classList.add("requiredField");
    } else {
      document
        .getElementById("nombreUsuario")
        .classList.remove("requiredField");
    }

    if (!datos.nombres.trim()) {
      console.log("nombres vacio");
      document.getElementById("Nombres").classList.add("requiredField");
    } else {
      document.getElementById("Nombres").classList.remove("requiredField");
    }

    if (!datos.apellidos.trim()) {
      console.log("nombres vacio");
      document.getElementById("Apellidos").classList.add("requiredField");
    } else {
      document.getElementById("Apellidos").classList.remove("requiredField");
    }

    if (
      datos.email.trim() !== "" &&
      datos.password.trim() !== "" &&
      datos.nom_usuario.trim() !== "" &&
      datos.nombres.trim() !== "" &&
      datos.apellidos.trim() !== ""
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
    console.log(event);
    datos.pais = event.cod_pais;
    const response = await getDepartaments(event.cod_pais);
    console.log(response);

    setDepartamentos(response);
  };

  const getCiudades = async (event) => {
    datos.departamento = event.cod_departamento;
    console.log(event);
    const response = await getCities(event.cod_departamento);
    console.log(response);

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
          name="nom_usuario"
          type={"text"}
          placeholder="Nombre de usuario"
          onChange={handleInputChange}
          required
        ></input>

        <input
          id="Nombres"
          name="nombres"
          type={"text"}
          placeholder="Nombres"
          onChange={handleInputChange}
          required
        ></input>

        <input
          id="Apellidos"
          name="apellidos"
          type={"text"}
          placeholder="Apellidos"
          onChange={handleInputChange}
          required
        ></input>

        <input
          id="telefono"
          name="telefono"
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
          name="fecha_nacimiento"
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
