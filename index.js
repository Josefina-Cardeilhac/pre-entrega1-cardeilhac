
// Generar un número aleatorio entre 1 y 10
const numeroCorrecto = Math.floor(Math.random() * 10) + 1;

// Inicializar la variable de intentos
let intentos = 0;

// Mensaje de bienvenida
console.log("¡Bienvenido, adivina el número!");

// Inicia ciclo
while (true) {
  // Pedir al usuario que ingrese un número
  const numeroUsuario = parseInt(prompt("Ingresa un número entre 1 y 10:"));

  // Incrementar el contador de intentos
  intentos++;

  // Comprobar si el número es el correcto
  if (numeroUsuario === numeroCorrecto) {
    console.log(`¡Felicidades! Adivinaste el número correcto en ${intentos} intentos.`);
    break; // Salir del ciclo
  } else if (numeroUsuario < numeroCorrecto) {
    console.log("Intenta nuevamente. El número es mayor.");
  } else {
    console.log("Intenta nuevamente. El número es menor.");
  }
}

// Mensaje de despedida
console.log("Gracias por jugar!");



