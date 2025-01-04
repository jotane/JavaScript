const contenedortarjetas = document.getElementById("contenedorflex");

function crearcard(diseños){
    diseños.forEach(diseño => {
        const nuevodiseño = document.createElement("div");
        nuevodiseño.classList = "tarjeta-producto";
        nuevodiseño.innerHTML = `
        <img src="imagenes/diseno${diseño.id}.jpg">
        <button>RESERVAR</button>
        `
        contenedortarjetas.appendChild(nuevodiseño);
        nuevodiseño.getElementsByTagName("button")[0].addEventListener("click",()=>agregaralcarrito(diseño));
    });
    }



crearcard(arrayDiseños);
















































































































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
