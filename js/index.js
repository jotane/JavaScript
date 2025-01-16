const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevoDiseño = document.createElement("div");
    nuevoDiseño.classList = "tarjeta-producto"
    nuevoDiseño.innerHTML = `
    <img src="./imagenes/diseno${producto.id}.jpg" alt="diseno1">
    <h3>${producto.nombre}</h3>
    <p class="precio">$${producto.precio}</p>
    <button>Reservar</button>
    `
    contenedorTarjetas.appendChild(nuevoDiseño);
    nuevoDiseño.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });

}
crearTarjetasProductosInicio(Diseños);





 








































































































/*const container = document.getElementById("contenedorflex");

let carrito;

if(JSON.parse(localStorage.getItem("diseños"))){
    carrito = JSON.parse(localStorage.getItem("diseños"));
} else {
    carrito = [];
};



function agregaralcarrito(diseños){
    carrito.push(diseños);
    alert(`Tu diseño ${diseños.id} esta reservado`);
};

function vercarrito(){
    console.log("Estos son tus diseños");
    console.log(carrito);
};

function crearcard(diseños){
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = diseños.img;      //????????? poner las imagenes// 
    img.alt = `Diseño ${diseños.id}`;

    const boton = document.createElement("button");
    boton.innerText = "RESERVAR";
    boton.className = "botoncard";
    boton.onclick = () => agregaralcarrito(diseños);


    card.appendChild(img);
    card.appendChild(boton);
    contenedorflex.appendChild(card);
};

arrayDiseños.forEach(el => {
    crearcard(el);           //generar el array//

});

document.getElementById("btncarrito").addEventListener("click", () => vercarrito());




/*function reservado(diseños){
    if (diseños.reservado === agregaralcarrito)
        remove(reservado)
} */
