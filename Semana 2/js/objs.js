//objetos

function alumnos(n,c,s)
{
	this.frase="Siempre adelante!";
	this.nombre=n;
	this.carrera=c;
	this.semestre=s;
	this.porra=function(){
		alert(this.frase);
	}
}

function inicio(){
	var alex = new alumnos("Alejandro Abraham Melendez","ISC",9);
	//document.write(Alejandro.nombre)
	//Alejandro.porra();

	alumnoNombre.innerText=alex.nombre;
	alumnoDatos.innerText="Carrera: "+ alex.carrera + "\nSemestre: " + alex.semestre;

	alumnofx.getElementById("alumnoDatos")="Semestre: "+ alex.semestre + "\nCarrera: " + alex.carrera;

	alex.porra();

}
