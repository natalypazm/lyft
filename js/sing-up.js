function init(){
	var next = document.getElementById("nextDatos");
	next.addEventListener('click',onClickNext);
    var flagTwo=document.getElementById("flagTwo");
    var codePais=document.getElementById("codePais");
    var srcLocal=localStorage.getItem('src');
    var codeLocal=localStorage.getItem('code');
    flagTwo.src=srcLocal;
    codePais.textContent=codeLocal;
}
function onClickNext(){
	var tel=document.getElementById("number").value;
	localStorage.setItem('number',tel);
    var regex = /^([0-9])*$/;
    
   if(tel==""||(!regex.test(tel))|| tel.length>9) {
        alert("Campo inválido");
            return false; 
          }
    nextpage();
    
    var aleatorio; 
    aleatorio = Math.round(Math.random() * (100 - 999) + 999);
    alert('su codigo es : LAB-'+aleatorio);    
}


function nextpage() {
    
    location.href='sing-up-datos.html';
}





/*
function getRandomArbitrary(min, max){
        return Math.random() * (max - min) + min;

}
function codigo(){
        var lab= "LAB-";
        var numAle= getRandomArbitrary(100,999);
        var codeGenerado=lab+Math.floor(numAle);
        localStorage.setItem('codigo',codeGenerado);
        alert("su codigo es: "+codeGenerado);
    
      	var buttonNext= document.getElementById("nextDatos");
    	buttonNext.addEventListener('click', codeGenerado);
}
*/