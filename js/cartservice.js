
/** Toma un producto con un ID y lo agrega al carrito */
function agregarAlCarrito(producto) {
  let memoria = JSON.parse(localStorage.getItem("Diseños"));
  console.log(memoria);
  let cuenta = 0;
  if (!memoria) {
    const nuevoProducto = getNuevoProductoParaMemoria(producto);
    localStorage.setItem("Diseños", JSON.stringify([nuevoProducto]));
    let cuenta = 1;
  } else {
    const indiceProducto = memoria.findIndex(diseño => diseño.id === producto.id);
    console.log(indiceProducto);
    const nuevaMemoria = memoria;
    if (indiceProducto === -1) {
      nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
      cuenta = 1;
    } else {
      nuevaMemoria[indiceProducto].cantidad++;
      cuenta = nuevaMemoria[indiceProducto].cantidad;
    }
    localStorage.setItem("Diseños", JSON.stringify(nuevaMemoria));
  }
  actualizarNumeroCarrito();
  return cuenta;
}



function restarAlCarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("Diseños"));
  const indiceProducto = memoria.findIndex(diseño => diseño.id === producto.id);
  if (memoria[indiceProducto].cantidad === 1) {
    memoria.splice(indiceProducto, 1);
  } else {
    memoria[indiceProducto].cantidad--;
  }
  localStorage.setItem("Diseños", JSON.stringify(memoria));
  actualizarNumeroCarrito();
}

function getNuevoProductoParaMemoria(producto) {
  const nuevoProducto = producto;
  nuevoProducto.cantidad = 1;
  return nuevoProducto;
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito");
function actualizarNumeroCarrito() {
  let cuenta = 0;
  const memoria = JSON.parse(localStorage.getItem("Diseños"));
  if (memoria && memoria.length > 0) {
    cuenta = memoria.reduce((acum, current) => acum + current.cantidad, 0)
    return cuentaCarritoElement.innerText = cuenta;
  } else{
  cuentaCarritoElement.innerText = 0;
  }
}

function reiniciarCarrito() {
  localStorage.removeItem("Diseños");
  actualizarNumeroCarrito();
}

actualizarNumeroCarrito();