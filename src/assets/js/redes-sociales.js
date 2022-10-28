console.log("HOLA CARGANDO SCRIPTS DE REDES SOCIALES-------------------------------------------------------------------------------------------------------------------")
console.log(document.getElementById("link-facebook"))
//const link='https://openjavascript.info/2022/10/19/natively-deep-copy-a-javascript-object-or-array-with-structuredclone/';
const link='https://cca4-181-115-161-74.sa.ngrok.io/';
const msg = encodeURIComponent('Compartiendo recurso desde angular');
const title= encodeURIComponent(document.querySelector('title').textContent);
console.log([link,msg,title])
const fb=document.getElementById("link-facebook");
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const t=document.getElementById("link-twitter");
t.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript`;



const button=document.getElementById("sendwhatsapp");

const enviarMensajeWhatssapp=()=>{
    const numero=document.getElementById("numerotel").value;
    console.log(numero);
    if(numero.toString().length==8){
        const texto=`Hola%20quiero%20compartir%20informacion%20acerca%20del%20sitio%20web%20donde%20puedes%20encontrar%20mas%20informacion%20sobre%20los%20productos%20y%20servicios%20que%20te%20ofresco%20${link}`;
        console.log(`https://wa.me/${numero}?text=${texto}`);
        var wo =window.open(`https://wa.me/${numero}?text=${texto}`,'_blank');
    }else{
        alert("error al ingresar numero de telefono")
    }
}

button.addEventListener('click',enviarMensajeWhatssapp);

// const wp=document.getElementById("link-whatsapp");
// const numero=getElementById("numero-tel").value();
// const texto=`Hola%20quiero%20compartir%20informacion%20acerca%20del%20sitio%20web%20donde%20puedes%20encontrar%20mas%20informacion%20sobre%20los%20productos%20y%20servicios%20que%20te%20ofresco%20${link}`;
//console.log(`https://wa.me/${numero}?text=${texto}`);
// wp.href = `https://wa.me/${numero}?text=${texto}`;

