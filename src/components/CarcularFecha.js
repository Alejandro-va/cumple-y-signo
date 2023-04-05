import React from "react";
import FormCumpleanos from "./FormCumpleanos";

const CarcularFecha = ({ nacimiento }) => {
  const [fechaNacimiento, setFechaNacimiento] = React.useState();

  React.useEffect(() => {
    console.log("");
  }, []);

  return (
    <div>
      <h2>Carcular Fecha</h2>
      <FormCumpleanos />
    </div>
  );
};

export default CarcularFecha;
