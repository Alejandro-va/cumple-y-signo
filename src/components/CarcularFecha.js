import React from "react";
import FormCumpleanos from "./FormCumpleanos";

const CarcularFecha = () => {
  const [fechaNacimiento, setFechaNacimiento] = React.useState();

  React.useEffect(() => {
    console.log("");
  }, []);

  const agregarUsuario = (el) => {
    console.log(el.nombre, el.fechaNacimiento);
    // Convertimos la fecha de nacimiento a objeto Date
    const fechaNacimientoObjeto = new Date(el.fechaNacimiento);
    console.log(fechaNacimientoObjeto);

    // Obtenemos el mes y día de la fecha de nacimiento
    const mesNacimiento = fechaNacimientoObjeto.getMonth() + 1;
    const diaNacimiento = fechaNacimientoObjeto.getDate();
    console.log(mesNacimiento, diaNacimiento);
  };

  return (
    <div>
      <h2>Carcular Fecha</h2>
      <FormCumpleanos agregarUsuario={agregarUsuario} />
    </div>
  );
};

export default CarcularFecha;
