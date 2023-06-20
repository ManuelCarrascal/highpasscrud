import React from "react";
import Select, { components } from "react-select";

const Placeholder = (props) => {
  return <components.Placeholder {...props} />;
};

const SelectCity = ({ ciudades, form }) => {
  const handleChange = (event) => {
    form.city = event._id;
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
        placeholder={"city"}
        options={ciudades}
        getOptionLabel={(option) => option.name_city}
        getOptionValue={(option) => option._id}
        onChange={handleChange}
        required
      />
    </div>
  );
};
export default SelectCity;
