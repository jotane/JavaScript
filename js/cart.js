const contenedorTarjetas = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");


function crearTarjetasProductosInicio() {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("Diseños"));
    if (productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevoDiseño = document.createElement("div");
            nuevoDiseño.classList = "tarjeta-producto"
            nuevoDiseño.innerHTML = `
    <img src="../imagenes/diseno${producto.id}.jpg" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <div class="btn+-">
      <button>-</button>
      <span class="cantidad">${producto.cantidad}</span>
      <button>+</button>
    </div>
    `;
            contenedorTarjetas.appendChild(nuevoDiseño);
            nuevoDiseño.getElementsByTagName("button")[1].addEventListener("click", (e) => {
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = agregarAlCarrito(producto);
                actualizarTotales();
            });
            nuevoDiseño.getElementsByTagName("button")[0].addEventListener("click", (e) => {
                restarAlCarrito(producto);
                crearTarjetasProductosInicio();
                actualizarTotales();


            });

        });
    }
}

crearTarjetasProductosInicio();
actualizarTotales();



function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem("Diseños"));
    let cantidad = 0;
    let precio = 0;
    if (productos && productos.length > 0) {
        productos.forEach((producto) => {
            cantidad += producto.cantidad;
            precio += producto.cantidad * producto.precio;
        });
        unidadesElement.innerText = cantidad;
    }
}


reiniciarCarritoElement.addEventListener("click", reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem("Diseños");
    actualizarTotales();
}