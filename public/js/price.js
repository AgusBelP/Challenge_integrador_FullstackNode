//Lógica para la selección de la cantidad de items a agregar al carrito en la página items

const price = document.querySelector("#precio");


price.addEventListener("input",() => {
   price.value < "0" ? (price.value = " ") : (price.value)
})