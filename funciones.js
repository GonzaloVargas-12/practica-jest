function calcularDescuento(precio, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    return "Porcentaje inválido";
  }
  return precio - (precio * porcentaje) / 100;
}

function validarPassword(password) {
  const tieneLongitud = password.length >= 8;
  const tieneNumero = /\d/.test(password);
  return tieneLongitud && tieneNumero;
}

function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function esMayorDeEdad(edad) {
  return edad >= 18;
}

function generarNombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}

module.exports = {
  calcularDescuento,
  validarPassword,
  celsiusAFahrenheit,
  esMayorDeEdad,
  generarNombreCompleto,
};