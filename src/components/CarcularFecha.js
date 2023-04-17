import React from "react";
import FormCumpleanos from "./FormCumpleanos";

//let signoZodiacal;
const CarcularFecha = () => {
  const [signoZodiacal, setSignoZodiacal] = React.useState("");

  const agregarUsuario = (el) => {
    console.log(el.nombre, el.fechaNacimiento);
    // Convertimos la fecha de nacimiento a objeto Date
    const fechaNacimientoObjeto = new Date(el.fechaNacimiento);
    //console.log("fechaNacimientoObjeto: ", fechaNacimientoObjeto);

    // Obtenemos el mes y día de la fecha de nacimiento
    const mesNacimiento = fechaNacimientoObjeto.getMonth() + 1;
    const diaNacimiento = fechaNacimientoObjeto.getDate() + 1;
    console.log(
      "mesNacimiento: ",
      mesNacimiento,
      "diaNacimiento: ",
      diaNacimiento
    );

    /**********************************************
     * DETREMINAR SIGNO
     *********************************************/
    // Determinamos el signo zodiacal a partir del mes y día de nacimiento
    if (
      (mesNacimiento === 1 && diaNacimiento >= 20) ||
      (mesNacimiento === 2 && diaNacimiento <= 18)
    ) {
      setSignoZodiacal("Acuario");
    } else if (
      (mesNacimiento === 2 && diaNacimiento >= 19) ||
      (mesNacimiento === 3 && diaNacimiento <= 20)
    ) {
      setSignoZodiacal("Piscis");
    } else if (
      (mesNacimiento === 3 && diaNacimiento >= 21) ||
      (mesNacimiento === 4 && diaNacimiento <= 19)
    ) {
      setSignoZodiacal("Aries");
    } else if (
      (mesNacimiento === 4 && diaNacimiento >= 20) ||
      (mesNacimiento === 5 && diaNacimiento <= 20)
    ) {
      setSignoZodiacal("Tauro");
    } else if (
      (mesNacimiento === 5 && diaNacimiento >= 21) ||
      (mesNacimiento === 6 && diaNacimiento <= 20)
    ) {
      setSignoZodiacal("Géminis");
    } else if (
      (mesNacimiento === 6 && diaNacimiento >= 21) ||
      (mesNacimiento === 7 && diaNacimiento <= 22)
    ) {
      setSignoZodiacal("Cáncer");
    } else if (
      (mesNacimiento === 7 && diaNacimiento >= 23) ||
      (mesNacimiento === 8 && diaNacimiento <= 22)
    ) {
      setSignoZodiacal("Leo");
    } else if (
      (mesNacimiento === 8 && diaNacimiento >= 23) ||
      (mesNacimiento === 9 && diaNacimiento <= 22)
    ) {
      setSignoZodiacal("Virgo");
    } else if (
      (mesNacimiento === 9 && diaNacimiento >= 23) ||
      (mesNacimiento === 10 && diaNacimiento <= 22)
    ) {
      setSignoZodiacal("Libra");
    } else if (
      (mesNacimiento === 10 && diaNacimiento >= 23) ||
      (mesNacimiento === 11 && diaNacimiento <= 21)
    ) {
      setSignoZodiacal("Escorpio");
    } else if (
      (mesNacimiento === 11 && diaNacimiento >= 22) ||
      (mesNacimiento === 12 && diaNacimiento <= 21)
    ) {
      setSignoZodiacal("Sagitario");
    } else {
      setSignoZodiacal("Capricornio");
    }

    /**********************************************
     * DIAS RESTANTES  PARA EL CUMPLEAÑOS
     *********************************************/
    //   const fechaNacimientoObjeto = new Date(el.fechaNacimiento);

    // Obtengo el año actual y ajusto el año de fecha de nacimiento
    const fechaActual = new Date().getFullYear(); //2023
    const nextBday = new Date(fechaNacimientoObjeto.setFullYear(fechaActual));

    // Si nextBday está en el pasado, agrego un año para calcular el próximo cumpleaños
    if (nextBday < Date.now()) nextBday.setFullYear(fechaActual + 1);

    // Calculo la diferencia entre hoy y el próximo fechaNacimientoObjeto en milisegundos
    const diferencia = fechaNacimientoObjeto - Date.now();

    // Convierte la diferencia de milisegundos a días y redondo hacia abajo al número entero más cercano
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    // if (dias < 0) dias = dias * -1;
    console.log("Faltan: ", dias);

    console.log("probando: ", new Date(fechaNacimientoObjeto.setFullYear()));
  };

  return (
    <div>
      <h2>Carcular Fecha</h2>
      <FormCumpleanos agregarUsuario={agregarUsuario} />
      <p>{signoZodiacal}</p>
    </div>
  );
};

export default CarcularFecha;
