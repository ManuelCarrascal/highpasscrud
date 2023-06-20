import React from "react";
import Select, { components } from "react-select";

const Placeholder = (props) => {
  return <components.Placeholder {...props} />;
};

export const SelectCountry = ({ paises, departamentos }) => {
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
        placeholder={"País"}
        options={paises}
        getOptionLabel={(option) => `${option.name_country}`}
        getOptionValue={(option) => `${option._id}`}
        onChange={departamentos}
        required
      />
    </div>
  );
};
