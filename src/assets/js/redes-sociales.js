console.log("HOLA CARGANDO SCRIPTS DE REDES SOCIALES-------------------------------------------------------------------------------------------------------------------")
console.log(document.getElementById("link-facebook"))
//const link='https://openjavascript.info/2022/10/19/natively-deep-copy-a-javascript-object-or-array-with-structuredclone/';
const link='https://aa20-181-115-161-74.sa.ngrok.io/adm/redes-sociales';
const msg = encodeURIComponent('Compartiendo recurso desde angular');
const title= encodeURIComponent(document.querySelector('title').textContent);
console.log([link,msg,title])
const fb=document.getElementById("link-facebook");
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const t=document.getElementById("link-twitter");
t.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript`;

const wp=document.getElementById("link-whatsapp");
fb.href = `https://www.facebook.com/share.php?u=${link}`;