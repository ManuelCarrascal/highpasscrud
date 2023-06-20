import React from "react";
import Select, { components } from "react-select";

const Placeholder = (props) => {
  return <components.Placeholder {...props} />;
};

const SelectDepartament = ({ departamentos, ciudades }) => {
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
        placeholder={"Departamento"}
        options={departamentos}
        getOptionLabel={(option) => `${option.name_department}`}
        getOptionValue={(option) => `${option._id}`}
        onChange={ciudades}
        required
      />
    </div>
  );
};
export default SelectDepartament;
