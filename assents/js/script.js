

const colorButtons = document.querySelectorAll(".btnBuscar");
const entregueColor = document.querySelectorAll(".btnEntregue");


function changeColor(event) {
  const button = event.target;
  button.style.backgroundColor = "red" ;
  button.innerHTML = "ok";
  
}

colorButtons.forEach(function(button) {
  button.addEventListener("click", changeColor );
});


function entreColor(event){
    const button = event.target;
    button.style.backgroundColor = " green";
    button.innerHTML = "Enviado"
}

entregueColor.forEach(function(button) {
    button.addEventListener("click" , entreColor)
 })
