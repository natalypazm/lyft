function init(){
	var next = document.getElementById("nextDatos");
	next.addEventListener('click',onClickNext);
}
function onClickNext(){
	var tel=document.getElementById("tel-select").value;
	localStorage.setItem('number',tel);
}	
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
