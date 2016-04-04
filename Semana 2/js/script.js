//var equipos=["pumas","atlate","America"]; //Manejo de arreglos
var opciones=["Piedra","Papel","Tijeras"];
var maximo=2; var minimo=0;

function rango(minimo,maximo){
	var numero=Math.floor(Math.random()*(maximo-minimo+1)+minimo);
	return numero;
}

var opcionMaquina=rango(0,2);
function resultado(result){
	document.write("<br/>"+result+"<br/>");
}

function roll(yo,maquina)
{
	document.write("Yo("+yo+") VS. Maquina("+maquina+")");
}

//document.write(equipos[]); //document sirve para escribir en html

var opcionUsuario= prompt("\nElige una opcion: \nPiedra: 0\nPapel: 1 \nTijeras: 2");


if(opcionUsuario==0)
{

	if(opcionMaquina==0){
		resultado("<h2>Empate</h2>");
		roll(opciones[opcionUsuario],opciones[opcionMaquina]);
		//document.write("Escogiste: "+opciones[opcionUsuario]+"<br/>La Maquina escogio:"+opciones[opcionMaquina]+"<br/><h1>Empate</h1>");
	}
	else if(opcionMaquina==1){
		resultado("<h2>Perdiste</h2>");
		roll(opciones[opcionUsuario],opciones[opcionMaquina]);
		//document.write("Escogiste: "+opciones[opcionUsuario]+"<br/>La Maquina escogio:"+opciones[opcionMaquina]+"<br/><h1>Perdiste</h1>");
	}
	else if(opcionMaquina==2){
		resultado("<h2>Ganaste</h2>");
		roll(opciones[opcionUsuario],opciones[opcionMaquina]);
		//document.write("Escogiste: "+opciones[opcionUsuario]+"<br/>La Maquina escogio:"+opciones[opcionMaquina]+"<br/><h1>Ganaste</h1>");
	}

	//document.write("Escogiste: Piedra");
	//document.write("Eligiste: ",opciones[opcionUsuario]);
}
else if(opcionUsuario==1)
	{
		//document.write("Escogiste Papel");
		//document.write("Eligiste: ",opciones[opcionUsuario]);

	if(opcionMaquina==0){
		resultado("<h2>Ganaste</h2>");
		roll(opciones[opcionUsuario],opciones[opcionMaquina]);
		//document.write("Escogiste: "+opciones[opcionUsuario]+"<br/>La Maquina escogio:"+opciones[opcionMaquina]+"<br/><h1>Ganaste</h1>");
	}
	else if(opcionMaquina==1){
		resultado("<h2>Empate</h2>");
		roll(opciones[opcionUsuario],opciones[opcionMaquina]);
		//document.write("Escogiste: "+opciones[opcionUsuario]+"<br/>La Maquina escogio:"+opciones[opcionMaquina]+"<br/><h1>Empate</h1>");
	}
	else if(opcionMaquina==2){
		resultado("<h2>Perdiste</h2>");
		roll(opciones[opcionUsuario],opciones[opcionMaquina]);
		//document.write("Escogiste: "+opciones[opcionUsuario]+"<br/>La Maquina escogio:"+opciones[opcionMaquina]+"<br/><h1>Perdiste</h1>");
	}




	}
	else if(opcionUsuario==2)
		{
			//document.write("Escogiste tijeras");
			//document.write("Eligiste: ",opciones[opcionUsuario]);
			if(opcionMaquina==0)
			{
				resultado("<h2>Perdiste</h2>");
				roll(opciones[opcionUsuario],opciones[opcionMaquina]);
					//document.write("Escogiste: "+opciones[opcionUsuario]+"<br/>La Maquina escogio:"+opciones[opcionMaquina]+"<br/><h1>Perdiste</h1>");
			}
			else if(opcionMaquina==1)
			{
					resultado("<h2>Ganaste</h2>");
					roll(opciones[opcionUsuario],opciones[opcionMaquina]);	
				//document.write("Escogiste: "+opciones[opcionUsuario]+"<br/>La Maquina escogio:"+opciones[opcionMaquina]+"<br/><h1>Ganaste</h1>");
			}
			else if(opcionMaquina==2)
			{
				resultado("<h2>Empate</h2>");
				roll(opciones[opcionUsuario],opciones[opcionMaquina]);
				//document.write("Escogiste: "+opciones[opcionUsuario]+"<br/>La Maquina escogio:"+opciones[opcionMaquina]+"<br/><h1>Empate</h1>");
			}
		}
		else
		{
			//document.write("Elige una opcion correcta");
			document.write("Eligiste una opcion equivocada");
		}
