/*function soloLetras(evt) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla==8) return true;
    patron =/[A-Za-z]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}
*/

/*
function init(){
	/*var button=document.getElementById("button");
	button.addEventListener("click";onButtonClick);
	var lista=document.getElementById("lista-paises");
	var links=lista.getElementsByTagName("a");
	for(var i=0:i<links)
}
function onButtonClick(){

}
*/
function setObjectLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function getObjectLocalStorage(key) {
    var value = localStorage.getItem(key);
    return JSON.parse(value);
}

function regresarIndex(){
    window.location = "index.html";
}
var back= document.getElementById("back");
back.addEventListener('click',regresarIndex);


var nombre= document.getElementById("nombre").value;
var email= document.getElementById("email").value;

nombre.addEventListener('keyup',validarNombre);

function soloLetras(nombre)
{
      if (nombre.match(/^[a-zA-Z]+$/))
      {

        return true;
      }
      else
      {
        return false;
      }
}
function validarEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
    {
        return false;
    }
    return true;
}
function validarNombre(){
  var cadena= nombre.value;
  var tamano= nombre.value.length;
  var isvalid= false;
}

function vistaMapa(){

  var nombre= document.getElementById("nombre");
  var email= document.getElementById("email").value;
  var isvalid= true; 
  if(soloLetras(cadena))
  {
    var nombre= document.getElementById("nombre").value;
    var misDatos=nombre.split(" ");
    var datos="";
    console.log(misDatos);
    for(var i=0; i<misDatos.length; i++)
    {
      if(misDatos[i]!=" ")
      {
        datos= datos+misDatos[i];
        datos= datos+" ";
      }
      console.log(datos);
      
      var nombreValido= document.getElementById("nombre-valid");
      nombreValido.style.display="block";
      var nombreValido= document.getElementById("nombre-invalid");
      nombreValido.style.display="none";
    }
    setObjectLocalStorage('nombre',datos);
  }
  else
  {
    isvalid=false;
    var nombreValido= document.getElementById("nombre-invalid");
      nombreValido.style.display="block";
    var nombreValido= document.getElementById("nombre-valid");
      nombreValido.style.display="none";
  }
  
  if(isEmail(email))
  {
      var email= document.getElementById("mail-valid");
      email.style.display="block";
      var email= document.getElementById("mail-invalid");
      email.style.display="none";
  }else
  {
      isvalid=false;
      var email= document.getElementById("mail-valid");
      email.style.display="none";
      var email= document.getElementById("mail-invalid");
      email.style.display="block";
  }
  
  if (isvalid==true) {
    window.location= "mapa.html";
  }
  else
   alert("corrige el formulario");
  
}
var next= document.getElementById("next");
next.addEventListener('click',vistaMapa);
