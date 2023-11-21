const boton = document.querySelector('#boton');
const menu = document.querySelector("#menu");

boton.addEventListener("click",()=>{
    console.log("el boton funciona");
    menu.classList.toggle("hidden");
})