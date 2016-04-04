	var numero1= Math.floor((Math.random() * 2) + 0);
	var numero2= Math.floor((Math.random() * 2) + 0);
	var numero3= Math.floor((Math.random() * 2) + 0);

var matrix = new Array(3);
 
for (i = 0; i < matrix.length; i++) {
	matrix[i] = new Array(3);
}
//				1				4					7
matrix[0][0] = numero1;	matrix[1][0] = numero3;	matrix[2][0] = numero1;
//				2				5					8
matrix[0][1] = numero3;	matrix[1][1] = numero2;	matrix[2][1] = numero2;
//				3				6					9
matrix[0][2] = numero2;	matrix[1][2] = numero1;	matrix[2][2] = numero3;

document.write("<h3>");
for (i = 0; i < matrix.length; i++)
{
	for (var j = 0; j < matrix[i].length; j++)
	{
	    document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
}
document.write("</h3>");
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

if(matrix[variable1][variable2]==1){
	bomba(matrix[variable1][variable2]);
}else if(matrix[variable1][variable2]==0){
	cesped(matrix[variable1][variable2]);
}else if(variable1>=3 || variable2>=3){
	document.write("<h2>Un dato invalido! presiona F5 para refrescar</h2>");
}