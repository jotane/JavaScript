const contenedortarjetas = document.getElementById("contenedorflex");

function crearcard(){
    const productos = JSON.parse(localStorage.getItem("diseños"));
    console.log(productos);
    if(productos && productos.length > 0) {
    diseños.forEach(diseño => {
        const nuevodiseño = document.createElement("div");
        nuevodiseño.classList = "tarjeta-producto";
        nuevodiseño.innerHTML = `
        <img src="imagenes/diseno${diseño.id}.jpg">
        <div>
        <button>-</button>
        <span class=cantidad>0</span>
        <button>+</button>
        </div>
        `
        contenedortarjetas.appendChild(nuevodiseño);
        nuevodiseño.getElementsByTagName("button")[0].addEventListener("click",()=>agregaralcarrito(diseño));
    });
    }
}



crearcard(arrayDiseños);