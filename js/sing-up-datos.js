function initDatos()
{
  var next = document.getElementById("next");
  next.addEventListener('click',onClickNext);
}


function onClickNext()
{
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  localStorage.setItem('name',name);
  localStorage.setItem('email',email);
  console.log(email);
}
/*
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
//back.addEventListener('click',regresarIndex);


var nombre= document.getElementById("nombre");
var email= document.getElementById("email");

//nombre.addEventListener('keyup',validarNombre);

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

function Mapa(){

  var nombre= document.getElementById("nombre").value;
  var email= document.getElementById("email").value;
  var isvalid= true; 
  if(soloLetras(nombre))
  {
    var nuevoDatos=nombre.split(" ");
    var datos="";
    console.log(nuevoDatos);
    for(var i=0; i<nuevoDatos.length; i++)
    {
      if(nuevoDatos[i]!=" ")
      {
        datos= datos+misDatos[i];
        datos= datos+" ";
      }
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
      alert("email inválido")
  }
  if(check.checked){}
else
{
  isvalid=false;
  alert("Debe aceptar los términos y condiciones");
}
  
  if (isvalid==true) {
    window.location= "mapa.html";
  }
  else
   alert("corrige el formulario");
  
}


 function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
}


 function next(){
        var lab= "LAB-";
        var numAle= getRandomArbitrary(100,999);
        var codeGenerado= lab+Math.floor(numAle);
        setObjectLocalStorage('tel', document.getElementById("tel-select").value );
        setObjectLocalStorage('codigo',codeGenerado );

        alert("su codigo es: "+codeGenerado);
        window.location = "datos.html";
    
      	var buttonNext= document.getElementById("next");
    	buttonNext.addEventListener('click', next);
}
*/