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
  soloLetras(name);
  validarEmail(email);

  //validar();
}


  function soloLetras(name){
      if (name.match(/^[a-zA-Z]+$/)){
        return true;
      }
      else{
        alert("llena correctamente tu nombre y apellido");
      }
  }
function validarEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
    {
        alert("llena correctamente el email");
    }
    return true;
}


/*
function validar(){
 if (soloLetras==true && validarEmail==true) {
   location.href='mapa.html';
  }
  else
   alert("corrige el formulario");
  
}
*/

/*

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
*/

