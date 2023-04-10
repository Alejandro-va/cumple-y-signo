import React, { useState } from "react";

const initialState = {
  nombre: "",
  fechaNacimiento: "",
};

const FormCumpleanos = ({ agregarUsuario }) => {
  const [formValue, setFormValue] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion
    if (!formValue.nombre || !formValue.fechaNacimiento)
      return console.log("Faltan Datos");

    //Agrego el state al pro
    agregarUsuario(formValue);

    //Limpio input
    setFormValue(initialState);
  };
  return (
    <div>
      Cumpleaños
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={formValue.nombre}
          onChange={handleChange}
        />

        <input
          type="date"
          name="fechaNacimiento"
          value={formValue.fechaNacimiento}
          onChange={handleChange}
        />

        <button type="submit">Calcular</button>
      </form>
    </div>
  );
};

export default FormCumpleanos;
