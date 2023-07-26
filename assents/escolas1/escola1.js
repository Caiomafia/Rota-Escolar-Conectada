
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }

  alert('mensagem no celular do pai ')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



function aviso(){
  alert("Mensagem para o pai e mãe do aluno")
}

const colorButtons = document.querySelectorAll(".btnBuscar");
const entregueColor = document.querySelectorAll(".btnEntregue");


function changeColor(event) {
  const button = event.target;
  button.style.backgroundColor = "green" ;
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



 btnBuscar.addEventListener("click" , )