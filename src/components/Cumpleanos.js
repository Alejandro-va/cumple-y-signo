import React, { useState } from "react";
import CarcularFecha from "./CarcularFecha";

const initialState = {
  fechaNacimiento: "",
};

const Cumpleanos = () => {
  const [formValue, setFormValue] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({ [name]: value });
    //console.log(formValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      Cumpleanos
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fechaNacimiento"
          value={formValue.fechaNacimiento}
          onChange={handleChange}
        />

        <button type="submit">Calcular</button>
      </form>
      <CarcularFecha nacimiento={formValue} />;
    </div>
  );
};

export default Cumpleanos;
