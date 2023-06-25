//Lógica para la selección de la cantidad de items a agregar al carrito en la página items

const minus_button = document.querySelector("#minus_button");
const plus_button = document.querySelector("#plus_button")
const item_quantity = document.querySelector("#item_quantity");

let i = 0;


minus_button.addEventListener("click", function (){
    i -= 1;
    i>0 ? item_quantity.value = i : (item_quantity.value = 0, i=0)
} )

plus_button.addEventListener("click", function (){
    i += 1;
    i<0 ? (item_quantity.value = 0, i=0 ) : item_quantity.value = i    
} )
