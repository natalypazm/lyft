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


var nombre= document.getElementById("nombre");
var email= document.getElementById("email");

nombre.addEventListener('keyup',validarNombre);

function soloLetras(cadena)
{
      if (cadena.match(/^[a-zA-Z]+$/))
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