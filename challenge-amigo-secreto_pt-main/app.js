let amigos = [];
let amigosRestantes = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado");
        return;
    }

    amigos.push(nome);
    amigosRestantes.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigosRestantes.length === 0) {
        resultado.innerHTML = `<li>🎉 Todos os amigos já foram sorteados! 🎉</li>`;
        return;
    }

    
    let indiceSorteado = Math.floor(Math.random() * amigosRestantes.length);
    let amigoSorteado = amigosRestantes.splice(indiceSorteado, 1)[0]; 

    resultado.innerHTML = `<li>🎉 Amigo Sorteado: <strong>${amigoSorteado}</strong> 🎉</li>`;
}