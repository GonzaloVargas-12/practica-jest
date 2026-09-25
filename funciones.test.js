const {
  calcularDescuento,
  validarPassword,
  celsiusAFahrenheit,
  esMayorDeEdad,
  generarNombreCompleto,
} = require("./funciones");

describe("calcularDescuento", () => {
  test("aplica un descuento del 20% a 1000", () => {
    expect(calcularDescuento(1000, 20)).toBe(800);
  });

  test("aplica un descuento del 10% a 500", () => {
    expect(calcularDescuento(500, 10)).toBe(450);
  });

  test("mantiene el precio original si el descuento es del 0%", () => {
    expect(calcularDescuento(1000, 0)).toBe(1000);
  });

  test("retorna 0 si el descuento es del 100%", () => {
    expect(calcularDescuento(500, 100)).toBe(0);
  });

  test("devuelve 'Porcentaje inválido' si el porcentaje es mayor a 100 (120%)", () => {
    expect(calcularDescuento(1000, 120)).toBe("Porcentaje inválido");
  });

  test("devuelve 'Porcentaje inválido' si el porcentaje es negativo (-5%)", () => {
    expect(calcularDescuento(1000, -5)).toBe("Porcentaje inválido");
  });
});

describe("validarPassword", () => {
  test("retorna true para una contraseña válida (con letras, números y longitud suficiente)", () => {
    expect(validarPassword("ClaveSegura123")).toBe(true);
  });

  test("retorna true para el límite mínimo de 8 caracteres", () => {
    expect(validarPassword("Pass1234")).toBe(true);
  });

  test("retorna false si la contraseña no contiene números", () => {
    expect(validarPassword("ContrasenaSinNumeros")).toBe(false);
  });

  test("retorna false si la contraseña es demasiado corta (menos de 8 caracteres)", () => {
    expect(validarPassword("Pass1")).toBe(false);
  });

  test("retorna false si el argumento es una cadena vacía", () => {
    expect(validarPassword("")).toBe(false);
  });
});

describe("celsiusAFahrenheit", () => {
  test("convierte correctamente 0°C a 32°F", () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
  });

  test("convierte correctamente 100°C a 212°F", () => {
    expect(celsiusAFahrenheit(100)).toBe(212);
  });

  test("convierte una temperatura ambiente de 25°C a 77°F", () => {
    expect(celsiusAFahrenheit(25)).toBe(77);
  });

  test("convierte correctamente -10°C a 14°F", () => {
    expect(celsiusAFahrenheit(-10)).toBe(14);
  });

  test("convierte correctamente -40°C a -40°F", () => {
    expect(celsiusAFahrenheit(-40)).toBe(-40);
  });

  test("maneja números decimales correctamente", () => {
    expect(celsiusAFahrenheit(36.6)).toBeCloseTo(97.88, 2);
  });
});

describe("esMayorDeEdad", () => {
  test("retorna true si la edad es mayor a 18 (25 años)", () => {
    expect(esMayorDeEdad(25)).toBe(true);
  });

  test("retorna true para el valor límite de 18 años", () => {
    expect(esMayorDeEdad(18)).toBe(true);
  });

  test("retorna false para 17 años", () => {
    expect(esMayorDeEdad(17)).toBe(false);
  });

  test("retorna false para una edad menor (10 años)", () => {
    expect(esMayorDeEdad(10)).toBe(false);
  });

  test("retorna false si la edad es un número negativo (-5)", () => {
    expect(esMayorDeEdad(-5)).toBe(false);
  });
});

describe("generarNombreCompleto", () => {
  test("concatena el nombre y apellido con un espacio entre ellos", () => {
    expect(generarNombreCompleto("Juan", "Pérez")).toBe("Juan Pérez");
  });

  test("maneja nombres con caracteres especiales o acentos", () => {
    expect(generarNombreCompleto("María José", "Gómez")).toBe("María José Gómez");
  });

  test("funciona correctamente con nombres en minúsculas", () => {
    expect(generarNombreCompleto("carlos", "rodriguez")).toBe("carlos rodriguez");
  });
});