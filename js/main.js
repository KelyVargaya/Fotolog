/*aquí va tu código*/

function mostrar(){
	var guardado= document.getElementById("guardar");
	guardado.addEventListener("click", guardarDatos);
	guardarDatos();
};

function guardarDatos(){
	var dato1 = document.getElementById("clave").value;
	var dato2 = document.getElementById("valor").value;

	localStorage.setItem(dato1, dato2);

	var contenedor = document.getElementById("contenedor");
	    contenedor.innerHTML= ""; 

	for( var i= 0; i < localStorage.length; i++){
		 var clav= localStorage.key(i); 
		 var value = localStorage.getItem(clav);

		 var divcito= document.createElement("div");
		     divcito.setAttribute("class", "comentario");        
         
         var nombre = document.createElement("h2");
         var valor1= document.createTextNode(clav);

         var comentario= document.createElement("p");
         var valor2 = document.createTextNode(value);

         nombre.appendChild(valor1);
         comentario.appendChild(valor2);
         
         divcito.appendChild(nombre);
         divcito.appendChild(comentario);
         contenedor.appendChild(divcito);

         document.getElementById("clave").value= "";
         document.getElementById("valor").value= "";
     };
};    

var limpiarDatos = document.getElementById("limpiar"); 
    limpiarDatos.addEventListener("click", function(){ 
    	localStorage.clear();
    	contenedor.innerHTML= "";
    });


mostrar();
