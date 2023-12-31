


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
  
  console.log(Carrito.lista)

  function EliminarItem(index) {
    if (index >= 0 && index < Carrito.lista.length) {
      const productoEliminado = Carrito.lista.splice(index, 1)[0];
      Carrito.total -= productoEliminado.precio;
      return productoEliminado;
    }
    return null;
  }
  
  function verCarrito() {
    if (Carrito.lista.length === 0) {
      alert("El carrito de compras está vacío.");
    } else {
      let mensaje = "Tu carrito de compras contiene los siguientes productos:\n";
      Carrito.lista.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - Precio: $${producto.precio}\n`;
      });
      mensaje += `Total: $${Carrito.total}`;
      alert(mensaje);
    }
  }
  
  // Función para mostrar los productos disponibles y permitir al usuario elegir uno
  function seleccionarProducto() {
    let seleccion = parseInt(prompt("Elige un producto para agregar al carrito:\n1. shampoo sólido de avena\n2. shampoo sólido de arcilla blanca\n3. shampoo sólido de carbón activado"));
    switch (seleccion) {
      case 1:
        return producto1;
      case 2:
        return producto2;
      case 3:
        return producto3;
      default:
        alert("Opción inválida. Por favor, selecciona un producto válido.");
        return null;
    }
  }
  
  // Agregar o eliminar productos del carrito
  while (true) {
    let opcion = parseInt(prompt("¿Qué deseas hacer?\n1. Agregar un producto al carrito\n2. Ver el carrito\n3. Eliminar un producto del carrito\n4. finalizar"));
    switch (opcion) {
      case 1:
        const productoSeleccionado = seleccionarProducto();
        if (productoSeleccionado) {
          AgregarItem(productoSeleccionado);
          alert(`"${productoSeleccionado.nombre}" ha sido agregado al carrito.`);
        }
        break;
      case 2:
        verCarrito();
        break;
      case 3:
        const indexProductoEliminar = parseInt(prompt("Ingresa el número del producto que deseas eliminar:")) - 1;
        const productoEliminado = EliminarItem(indexProductoEliminar);
        if (productoEliminado) {
          alert(`"${productoEliminado.nombre}" ha sido eliminado del carrito.`);
        } else {
          alert("No se pudo eliminar el producto. Ingresa un número de producto válido.");
        }
        break;
      case 4:
        alert("Gracias por su compra.!");
        process.exit(0);
        break;
      default:
        alert("Opción inválida. Por favor, ingresa una opción válida (1-4).");
    }
  }
  






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




