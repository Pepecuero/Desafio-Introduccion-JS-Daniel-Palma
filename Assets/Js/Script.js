precio = 1000000;
console.log(precio); 

function calcular() {
    console.log("calculando..."); 
    var cantidad = document.querySelector("#cantidad").value;
    var quantity = document.querySelector(".cantidad");
    quantity.innerHTML = cantidad;

    var total = document.querySelector(".total");
    total.innerHTML = parseInt(cantidad * precio).toLocaleString("es-ES") + " CLP"; 
   

    seleccion = document.querySelector('#colores');
    color = document.querySelector('.circulo');
    color.style.backgroundColor = seleccion.value;
}
