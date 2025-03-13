// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function actualizarListaAmigo(){
    //1.Obtener el elemento de la lista
   let lista = document.getElementById('listaAmigos');
    //2.Limpiar la lista existente
    lista.innerHTML="";
    //3.Iterar sobre el arreglo
    for(i=0;i<amigos.length;i++){
    //4.Agregar elementos a la lista
        let opcion="<li>"+ amigos[i] +"</li>";
        lista.innerHTML +=opcion;
    }

}

function agregarAmigo(){
    //Capturar el valor del campo de entrada
   let nombre = document.querySelector('#amigo').value;
   //Validar la entrada
   if(nombre ==""){
    alert("Por favor, inserte un nombre");
   }else{
    //Actualizar el array de amigos   
        amigos.push(nombre);
        actualizarListaAmigo();
    //Limpiar el campo de entrada
        document.querySelector('#amigo').value='';
    }
}

function sortearAmigo(){
    let indiceAleatorio=0;
    let numeroDeAmigos=amigos.length;
    //Validar que haya amigos disponibles
    if(numeroDeAmigos!=0){
         //Generar un índice aleatorio
        indiceAleatorio=Math.floor(Math.random()*(numeroDeAmigos));
        //Obtener el nombre sorteado y Mostrar el resultado
        let resultado = document.getElementById('resultado');   
        resultado.innerHTML = amigos[indiceAleatorio];
        //Las siguientes líneas de código es para permitir al usuario un solo intento y que la lista de nombres se elimine completamente
        document.querySelector('#listaAmigos').remove();
        let button= document.querySelector('.button-add');
        button.disabled = true;
    }else{
        alert("No hay amigos disponibles para sortear");
    }
}