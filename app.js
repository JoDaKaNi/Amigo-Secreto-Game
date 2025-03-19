let listaAmigos = [];


function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let amigoUsuario = document.getElementById('amigo').value;
    if (amigoUsuario==""){
        alert("Ingrese un nombre válido")
    } else{
        listaAmigos.push(amigoUsuario);
        document.getElementById('listaAmigos').innerHTML = listaAmigos.join('<br>');
        limpiarCaja();
    }
    
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    // Reemplaza la lista con el nombre sorteado
    document.getElementById('listaAmigos').innerHTML = `<strong>Amigo sorteado:</strong> ${amigoSorteado}`;
    document.querySelector('#añadir').setAttribute('disabled','true');
}

function limpiarCaja (){
    document.querySelector('#amigo').value = '';
 }

 function reiniciarJuego() {
    listaAmigos = []; // Vacía la lista
    document.getElementById('listaAmigos').innerHTML = ""; // Borra la lista del HTML
    document.querySelector('#añadir').removeAttribute('disabled');
    limpiarCaja();
}

S