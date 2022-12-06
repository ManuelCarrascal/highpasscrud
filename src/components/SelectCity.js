import React from "react";
import Select, { components } from "react-select";

const Placeholder = (props) => {
  return <components.Placeholder {...props} />;
};

const SelectCity = ({ ciudades, form }) => {
  const handleChange = (event) => {
    console.log(event);
    form.ciudad = event.cod_ciudad;
  };
  return (
    <div className="containerSelectCountry">
      <Select
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: "#ffe8cc",
            primary: "#fe8c00",
          },
        })}
        components={{ Placeholder }}
        placeholder={"Ciudad"}
        options={ciudades}
        getOptionLabel={(option) => option.nombre_ciudad}
        getOptionValue={(option) => option.nombre_ciudad}
        onChange={handleChange}
        required
      />
    </div>
  );
};
export default SelectCity;
