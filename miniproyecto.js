(function (){

//VARIABLES
var lista= document.getElementById("lista");
var tareaInput=document.getElementById("tareaInput");
var boton= document.getElementById("boton-agregar");

//FUNCIONES
var agregarTarea= function(){
    var tarea=tareaInput.value;
    var nuevaTarea= document.createElement("li");
    var enlace= document.createElement("a");
    var contenido= document.createTextNode(tarea);

    if (tarea==="") {
        tareaInput.setAttribute("placeholder", "Agregar tarea válida");
        tareaInput.className="error";
        return false;
    }


    //se agrega el contenido al enlace
    enlace.apendchild(contenido);
    //se establece un atributo href
    enlace.setAttribute("href", "#");
    //se agrega el enlace al elemento li
    nuevaTarea.appendChild(enlace);
    //se agrega el elemento li a la lista
    lista.appendChild(nuevaTarea);
    


};
var comprobarInput=function(){
    
};
var eliminarTarea=function(){
    
};
//EVENTOS

//agregar tarea
boton.addEventListener("click", agregarTarea);

//comprobar input
tareaInput.addEventListener("click", comprobarInput);

//borrando elementos de la lista de tareas
for(var i =0; i <=lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
}

}());