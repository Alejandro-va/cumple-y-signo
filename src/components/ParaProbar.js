import React from "react";

const ParaProbar = () => {
  function calcularDiasFaltantes(fechaNacimiento) {
    // Convertimos las fechas a objetos Date
    //var fechaNac = new Date(1982, 7, 5);
    var fechaNac = new Date(2023, 4, 14);
    //var fechaHoy = new Date(2023, 4, 14);
    var fechaHoy = new Date();
    console.log("fechaNac ", fechaNac);

    // Obtenemos el año actual
    var anioActual = fechaHoy.getFullYear();

    // Creamos una nueva fecha con el año actual y la fecha de nacimiento
    var fechaCumpleanos = new Date(
      anioActual,
      fechaNac.getMonth(),
      fechaNac.getDate()
    );

    // Comparamos la fecha de cumpleaños con la fecha actual
    if (fechaCumpleanos < fechaHoy) {
      // Si la fecha de cumpleaños ya pasó, sumamos un año
      fechaCumpleanos.setFullYear(anioActual + 1);
    }

    // Calculamos la diferencia en milisegundos entre las dos fechas
    var diferencia = fechaCumpleanos.getTime() - fechaHoy.getTime();

    // Convertimos la diferencia a días
    var diasFaltantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    return diasFaltantes;
  }

  // Ejemplo de uso:
  var diasFaltantes = calcularDiasFaltantes("1990-04-30", "2023-04-14");
  console.log("Faltan " + diasFaltantes + " días para tu cumpleaños.");

  ///////////////////////////////////////////
  var fechaNac1 = new Date(1982, 7, 5);
  const fechaActual = new Date();
  const year = fechaActual.getFullYear();
  const month = fechaActual.getMonth() + 1;
  const day = fechaActual.getDate();

  var fechaHoye = new Date(year, month, day);
  console.log("fechaHoye ", fechaHoye);

  var restos = fechaNac1.getTime() - fechaHoye.getTime();
  var diasFaltantesss = Math.floor(restos / (1000 * 60 * 60 * 24));
  console.log("fechaActualDiscriminada ", diasFaltantesss);
  ///////////////////////////////////////////

  return (
    <div>
      <h1>ParaProbar</h1>
    </div>
  );
};

export default ParaProbar;
