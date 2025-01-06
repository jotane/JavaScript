const contenedortarjetas = document.getElementById("contenedorflex");

function crearcard(diseños) {
    const productos = JSON.parse(localStorage.getItem("diseños"));
    console.log(productos);
    if (productos && productos.length > 0) {
        productos.forEach(diseño => {
            const nuevodiseño = document.createElement("div");
            nuevodiseño.classList = "tarjeta-producto";
            nuevodiseño.innerHTML = `
        <img src="imagenes/diseno${diseño.id}.jpg" alt="Imagen del diseño ${diseño.id}">
        <div>
           <button class="btn-restar">-</button>
            <span class="cantidad">0</span>
            <button class="btn-sumar">+</button>
        </div>
        `
            contenedortarjetas.appendChild(nuevodiseño);
            const btnRestar = nuevodiseño.querySelector(".btn-restar");
            const btnSumar = nuevodiseño.querySelector(".btn-sumar");
            const cantidadSpan = nuevodiseño.querySelector(".cantidad");

            let cantidad = 0;

            // Evento para aumentar la cantidad
            btnSumar.addEventListener("click", () => {
                cantidad++;
                cantidadSpan.textContent = cantidad;
                agregaralcarrito(diseño, cantidad);
            });

            // Evento para reducir la cantidad
            btnRestar.addEventListener("click", () => {
                if (cantidad > 0) {
                    cantidad--;
                    cantidadSpan.textContent = cantidad;
                    agregaralcarrito(diseño, cantidad);
                }
                
            });
        });
    }
}



crearcard();