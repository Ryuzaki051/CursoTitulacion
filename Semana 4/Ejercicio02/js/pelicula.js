//clase: definicion de un objeto

var Pelicula=function(a,n){
	this.actor=a;
	this.nombre=n;
}

Pelicula.prototype.descripcion= function()
{
	//alert(this.actor+" dice: "+this.nombre);
	var peli=document.getElementById("textopelicula");
	peli.innerHTML=this.actor+"<br/>"+this.nombre;	
	
}

//objetos de la clase Pelicula
var movie1=new Pelicula("Antonio Banderas","El gato con botas");
var movie2=new Pelicula("Anne Hateway","The Intern");

/*function inicio(){
	movie1.descripcion();
	movie2.descripcion();
}*/