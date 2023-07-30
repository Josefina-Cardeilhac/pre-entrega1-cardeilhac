


function Productos(objeto) {
  this.nombre = objeto.nombre
  this.precio = objeto.precio 
  this.id = objeto.id
}

const producto1 = new Productos(
  {
    nombre:"shampoo sólido de avena", 
    precio:1200, 
    id:1
  }
)
  
  const producto2 = new Productos(
    {
      nombre:"shampoo sólido de arcilla blanca", 
      precio:1200, 
      id:2
    }
  )

  const producto3 = new Productos(
    {
      nombre:"shampoo sólido de carbón activado",
      precio:1200,  
      id:3
    }
  )

  let Carrito ={
      lista:[],
      total:0
  }
  function AgregarItem(producto) {
    Carrito.lista.push(producto);
    Carrito.total+=producto.precio;
  
    return(Carrito)
  }
  console.log(AgregarItem(producto1))
  
  console.log(Carrito.lista)


  






/*
// Definir función para el simulador de adivinanzas
const simuladorAdivinanzas = () => {
  // Generar un número aleatorio entre 1 y 10
  const numeroCorrecto = Math.floor(Math.random() * 10) + 1;

  // Inicializar la variable de intentos
  let intentos = 0;

  // Mensaje de bienvenida
  console.log("¡Bienvenido, adivina el número!");

  // Inicia ciclo
  while (true) {
    // Pedir al usuario que ingrese un número
    let numeroUsuario = parseInt(prompt("Ingresa un número entre 1 y 10:"));

    // Validar que el número esté dentro del rango válido
    while (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 10) {
      console.log("Por favor, ingresa un número válido entre 1 y 10.");
      numeroUsuario = parseInt(prompt("Ingresa un número entre 1 y 10:"));
    }

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
};

// Llamar a la función para iniciar el juego
simuladorAdivinanzas(); */




