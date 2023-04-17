function calcularSignoYDiasFaltantes(fechaNacimiento) {
  // Convertimos la fecha de nacimiento a objeto Date
  const fechaNacimientoObjeto = new Date(fechaNacimiento);

  // Obtenemos el mes y día de la fecha de nacimiento
  const mesNacimiento = fechaNacimientoObjeto.getMonth() + 1;
  const diaNacimiento = fechaNacimientoObjeto.getDate();

  // Determinamos el signo zodiacal a partir del mes y día de nacimiento
  let signoZodiacal;
  if (
    (mesNacimiento === 1 && diaNacimiento >= 20) ||
    (mesNacimiento === 2 && diaNacimiento <= 18)
  ) {
    signoZodiacal = "Acuario";
  } else if (
    (mesNacimiento === 2 && diaNacimiento >= 19) ||
    (mesNacimiento === 3 && diaNacimiento <= 20)
  ) {
    signoZodiacal = "Piscis";
  } else if (
    (mesNacimiento === 3 && diaNacimiento >= 21) ||
    (mesNacimiento === 4 && diaNacimiento <= 19)
  ) {
    signoZodiacal = "Aries";
  } else if (
    (mesNacimiento === 4 && diaNacimiento >= 20) ||
    (mesNacimiento === 5 && diaNacimiento <= 20)
  ) {
    signoZodiacal = "Tauro";
  } else if (
    (mesNacimiento === 5 && diaNacimiento >= 21) ||
    (mesNacimiento === 6 && diaNacimiento <= 20)
  ) {
    signoZodiacal = "Géminis";
  } else if (
    (mesNacimiento === 6 && diaNacimiento >= 21) ||
    (mesNacimiento === 7 && diaNacimiento <= 22)
  ) {
    signoZodiacal = "Cáncer";
  } else if (
    (mesNacimiento === 7 && diaNacimiento >= 23) ||
    (mesNacimiento === 8 && diaNacimiento <= 22)
  ) {
    signoZodiacal = "Leo";
  } else if (
    (mesNacimiento === 8 && diaNacimiento >= 23) ||
    (mesNacimiento === 9 && diaNacimiento <= 22)
  ) {
    signoZodiacal = "Virgo";
  } else if (
    (mesNacimiento === 9 && diaNacimiento >= 23) ||
    (mesNacimiento === 10 && diaNacimiento <= 22)
  ) {
    signoZodiacal = "Libra";
  } else if (
    (mesNacimiento === 10 && diaNacimiento >= 23) ||
    (mesNacimiento === 11 && diaNacimiento <= 21)
  ) {
    signoZodiacal = "Escorpio";
  } else if (
    (mesNacimiento === 11 && diaNacimiento >= 22) ||
    (mesNacimiento === 12 && diaNacimiento <= 21)
  ) {
    signoZodiacal = "Sagitario";
  } else {
    signoZodiacal = "Capricornio";
  }

  // Obtenemos la fecha actual
  const fechaActual = new Date();

  // Establecemos el año de la fecha de nacimiento a la fecha actual
  const a = fechaNacimientoObjeto.setFullYear(fechaActual.getFullYear());
  console.log("tiempo: ", a);
}
