let menuMobile=document.getElementById("icono-menu");
let habilitarElemento=()=>{
    let opciones=document.getElementById("opciones-nav-mobile");
    if(opciones.style.display=="inline-block"){
        opciones.style.display="none";
    }else{
        opciones.style.display="inline-block";
    }
    console.log(opciones.style.display);
    //opciones.style.display="flex";
}
menuMobile.addEventListener('click',habilitarElemento);