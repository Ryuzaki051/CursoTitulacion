/*
var matrix=[
[1,2,3],
[4,5,6],
[7,8,9]
];
*/
var matrix=[
[1,0,0],
[0,1,0],
[0,0,1]
];

var resultado=["Cesped","Bomba"];

var variable1=prompt("\nValor de x: ");
var variable2=prompt("\nValor de y: ");

var eleccion=matrix[variable1][variable2];

function bomba(dato){
	document.write("Elegiste: "+resultado[dato]+" <br/><h2>Explosión - Perdiste</h2>");
}

function cesped(dato){
	document.write("Elegiste: "+resultado[dato]+" <br/><h2>Bling! - Ganaste</h2>");
}

/*
if(eleccion==1){
	document.write("<h2>"+resultado[eleccion]+"</h2>");
}
else{
	document.write(resultado[eleccion]+"<br/><h3>Ganaste!! :D</h3>");
}
*/

if(matrix[variable1][variable2]==1){
	bomba(matrix[variable1][variable2]);
}else{
	cesped(matrix[variable1][variable2]);
}