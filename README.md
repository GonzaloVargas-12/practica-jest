# Práctica de Pruebas Unitarias con Jest
 
Proyecto de práctica para aprender a escribir pruebas unitarias básicas en JavaScript usando Jest. Contiene cinco funciones sencillas y un conjunto de pruebas que validan su comportamiento en casos correctos, casos inválidos y valores límite.
 
## Tecnologías
 
- JavaScript (Node.js)
- Jest 30
- Git y GitHub
## Estructura del proyecto
 
```plaintext
practica-jest/
│
├── funciones.js        # Implementación de las funciones
├── funciones.test.js   # Pruebas unitarias con Jest
├── package.json        # Configuración del proyecto y script de pruebas
├── README.md           # Documentación
└── .gitignore          # Archivos que no se suben al repositorio
```
 
## Instalación y ejecución
 
1. Clonar el repositorio:
```bash
git clone https://github.com/GonzaloVargas_12/practica-jest.git
cd practica-jest
```
 
2. Instalar las dependencias:
```bash
npm install
```
 
3. Ejecutar las pruebas:
```bash
npm test
```
 
---
 
## Funciones
 
### `calcularDescuento(precio, porcentaje)`
 
Devuelve el precio final después de aplicar un descuento. Si el porcentaje es menor a 0 o mayor a 100, devuelve el texto `"Porcentaje inválido"`.
 
### `validarPassword(password)`
 
Devuelve `true` si la contraseña tiene al menos 8 caracteres y contiene al menos un número. En cualquier otro caso devuelve `false`.
 
### `celsiusAFahrenheit(celsius)`
 
Convierte una temperatura de grados Celsius a Fahrenheit con la fórmula `°F = (°C × 9/5) + 32`.
 
### `esMayorDeEdad(edad)`
 
Devuelve `true` si la edad es 18 o mayor, y `false` si es menor de 18.
 
### `generarNombreCompleto(nombre, apellido)`
 
Une el nombre y el apellido en un solo texto, separados por un espacio.
 
---
 
## Casos de prueba
 
### calcularDescuento
 
Valida que el descuento se calcule correctamente, que los límites de 0% y 100% funcionen, y que los porcentajes fuera de rango se rechacen.
 
| Caso | Entrada | Resultado esperado |
|------|---------|--------------------|
| Descuento válido | `(1000, 20)` | `800` |
| Descuento válido | `(500, 10)` | `450` |
| Límite: 0% | `(1000, 0)` | `1000` |
| Límite: 100% | `(500, 100)` | `0` |
| Inválido: mayor a 100 | `(1000, 120)` | `"Porcentaje inválido"` |
| Inválido: negativo | `(1000, -5)` | `"Porcentaje inválido"` |
 
### validarPassword
 
Valida que se cumplan las dos reglas (longitud mínima y al menos un número) y que se rechacen las contraseñas que no las cumplen.
 
| Caso | Entrada | Resultado esperado |
|------|---------|--------------------|
| Contraseña válida | `"ClaveSegura123"` | `true` |
| Límite: exactamente 8 caracteres | `"Pass1234"` | `true` |
| Sin números | `"ContrasenaSinNumeros"` | `false` |
| Demasiado corta | `"Pass1"` | `false` |
| Cadena vacía | `""` | `false` |
 
### celsiusAFahrenheit
 
Valida que la fórmula de conversión funcione con valores positivos, cero, negativos y decimales.
 
| Caso | Entrada | Resultado esperado |
|------|---------|--------------------|
| Punto de congelación | `0` | `32` |
| Punto de ebullición | `100` | `212` |
| Temperatura ambiente | `25` | `77` |
| Temperatura negativa | `-10` | `14` |
| Punto donde ambas escalas coinciden | `-40` | `-40` |
| Número decimal | `36.6` | `97.88` (aprox.) |
 
En el caso decimal se usa `toBeCloseTo` en lugar de `toBe`, porque las operaciones con decimales en JavaScript pueden generar pequeñas diferencias de redondeo.
 
### esMayorDeEdad
 
Valida el límite de 18 años y edades por encima y por debajo de él.
 
| Caso | Entrada | Resultado esperado |
|------|---------|--------------------|
| Mayor de edad | `25` | `true` |
| Límite exacto | `18` | `true` |
| Justo debajo del límite | `17` | `false` |
| Menor de edad | `10` | `false` |
| Edad negativa | `-5` | `false` |
 
### generarNombreCompleto
 
Valida que el nombre y el apellido se unan con un solo espacio, incluyendo nombres compuestos, acentos y minúsculas.
 
| Caso | Entrada | Resultado esperado |
|------|---------|--------------------|
| Nombre simple | `("Juan", "Pérez")` | `"Juan Pérez"` |
| Nombre compuesto con acentos | `("María José", "Gómez")` | `"María José Gómez"` |
| Minúsculas | `("carlos", "rodriguez")` | `"carlos rodriguez"` |
 
---
 
## Resultados
 
Todas las pruebas pasan correctamente:
 
```plaintext
Test Suites: 1 passed, 1 total
Tests:       25 passed, 25 total
```
 
---
 
## Problemas encontrados durante el desarrollo
 
1. **Uso incorrecto de `toThrow()`.** Las pruebas de porcentajes inválidos en `calcularDescuento` usaban `toThrow()`, que espera que la función lance un error. Como la función devuelve el texto `"Porcentaje inválido"` en lugar de lanzar un error, esas pruebas fallaban. Se corrigieron usando `toBe("Porcentaje inválido")`.
2. **Prueba de espacios en `generarNombreCompleto`.** Se intentó probar que la función eliminara espacios extra al inicio y al final de los nombres. La función no hace esa limpieza (y la práctica no lo pide), así que la prueba fallaba. Se eliminó para que las pruebas reflejen el comportamiento real de la función.
3. **Caso faltante.** Inicialmente no se incluía la conversión de `-10 °C` a `14 °F`, que aparece en los ejemplos de la práctica. Se agregó para cubrir todos los ejemplos del enunciado.
4. **Trabajo en varias computadoras.** Al clonar el proyecto en otra computadora, la carpeta `node_modules` no existía porque está en el `.gitignore`. Fue necesario ejecutar `npm install` antes de poder correr las pruebas.
---
 
## Conclusión
 
Esta práctica permitió entender el flujo básico de las pruebas unitarias: definir el comportamiento esperado de cada función, escribir pruebas para casos correctos, inválidos y límite, y usar los errores de las pruebas para detectar diferencias entre lo que se espera y lo que el código realmente hace.
 