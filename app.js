// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo !== '') {
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        inputAmigo.value = ''; 
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}


function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Debes agregar al menos un amigo para realizar el sorteo.');
        return;
    }

  
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ''; 

    const li = document.createElement('li');
    li.textContent = `Amigo secreto: ${amigoSecreto}`;
    listaResultado.appendChild(li);
}