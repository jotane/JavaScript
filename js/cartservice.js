function agregaralcarrito(diseños) {
    const memoria = JSON.parse(localStorage.getItem("diseños"));
    console.log(memoria);
    if(!memoria){
        const nuevoproducto = nuevoproductomemoria(diseños);
        localStorage.setItem("diseños", JSON.stringify([nuevoproducto]));
    } else {
        const indiceproducto = memoria.findIndex(item => item.id === diseños.id); 
        console.log(indiceproducto);
        if(indiceproducto === -1){
            memoria.push(nuevoproductomemoria(diseños));
        } else{
          memoria[indiceproducto].cantidad ++;
        }
        localStorage.setItem("diseños", JSON.stringify(memoria));
    }
    
}

function nuevoproductomemoria(diseños){
    const nuevoproducto = diseños;
    nuevoproducto.cantidad = 1;
    return nuevoproducto;
} 