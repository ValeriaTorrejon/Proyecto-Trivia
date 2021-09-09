function verificarRespuestas(){

let total= 5;
let puntos=0;

let miForm= document.forms ["quizForm"];
let respuestas = ["2","1","2","1","3"];


for(let i=1; i<=total; i++){

	if (miForm[ "preg"+i].value=== null || miForm["preg"+i].value === "") {
		alert("POR FAVOR RESPONDE LA PREGUNTA" + i);
		return false;
	}

	else {

		if (miForm["preg" + i].value === respuestas[i - 1]) {
			puntos ++;
		}
	}

}

let resultado = document.getElementById("resultado");

resultado.innerHTML= '<h1>OBTUVISTE <span>'+ puntos +'</span> DE <span>' + total+' PUNTOS </span></h1';
 return false;

}
