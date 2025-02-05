## Challenge-amigo-secreto

[<img src="https://github.com/HEOA27/challenge-amigo-secreto_esp-main/blob/27ac5392203730e0802f429c168769f37be00b27/assets/app-challenge-amigo-secreto.png">](https://heoa27.github.io/challenge-amigo-secreto_esp-main/)

#### Descripción del proyecto

En este desafío, se desarrolló una aplicación que permite a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el amigo secreto.El usuario deberá agregar nombres mediante un campo de texto y un botón Adicionar. Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón Sortear Amigo seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

#### Funcionalidades
- Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
- Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
- Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
- Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
  
#### Soluciones
Para resolver el desafío se implementaron dos soluciones, por esta razón, en el proyecto se encuentran dos archivos js "app.js" y "app2.js" 
- La solución en app.js es la que se encuentra vinculada al html y publicada en GitHub Pages. En esta el usuario puede visualizar a su lista de amigos mientras sortea a un amigo N número de veces.
![image alt](https://github.com/HEOA27/challenge-amigo-secreto_esp-main/blob/9858fcf4fd61e8167068c0a957f860e89362c193/assets/app-resultado.png)
- La solución en app2.js NO se encuentra vinculada al html o publicada en GitHub Pages,pero está lista para usarse, solo basta con vincular app2 en el html en lugar de app.js. En esta el usuario solo puede realizar un sorteo y la lista se visualizará hasta que aparezca el resultado de ese sorteo.
![image alt](https://github.com/HEOA27/challenge-amigo-secreto_esp-main/blob/9858fcf4fd61e8167068c0a957f860e89362c193/assets/app2-resultadosorteo.png)
- En ambas soluciones la lista de amigos se visualiza mientras el usuario va añadiendo nuevos amigos.

#### Funciones y código JavaScript
En ambos códigos JS se encuentran las siguientes tareas realizadas:
#####Creación de un array para almacenar los nombres
Declaración de una variable de tipo array, que almacena los nombres de los amigos ingresados.
#####Implementación de una función para actualizar la lista de amigos
Creación de una función que recorre el array amigos y agrega cada nombre como un elemento  `<li>` dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
######Tareas específicas realizadas:
- Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
- Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
- Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista ( `<li>` ) para cada título.
- Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
#####Implementación de una función para agregar amigos
Desarrollo de una función, que permite al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
######Tareas específicas realizadas:
- Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
- Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
- Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
- Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
######Implementación de una función para sortear los amigos
Creación de una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usando Math.random() y Math.floor() para obtener un índice aleatorio.
######Tareas específicas realizadas:
- Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
- Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
- Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
- Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.

####Javascript　
app.js
```javascript
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
       
    }
}
```
app2.js
```javascript
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
//actualizarListaAmigo();

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
        //Las siguientes líneas de código es para permitir al usuario un solo intento y que la lista de nombres se elimine de la vista (solo se muestre el resultado)
        amigos=[];
        document.querySelector('#listaAmigos').remove();
        let button= document.querySelector('.button-add');
        button.disabled = true;

    }
}
```
