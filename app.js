let participantes = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo").value.trim();

    if (nomeInput === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (participantes.includes(nomeInput)) {
        alert("Esse participante já foi adicionado!");
        return;
    }

    participantes.push(nomeInput);
    alert(`${nomeInput} foi adicionado à lista!`);
    document.getElementById("amigo").value = "";

    const listaUl = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nomeInput;
    listaUl.appendChild(li);

    console.log("Participantes:", participantes);
}

function sortearAmigo() {
    if (participantes.length === 0) {
        alert("Todos os participantes já foram sorteados!");
        return;
    }

    document.getElementById("listaAmigos").innerHTML = "";

    const indiceSorteado = Math.floor(Math.random() * participantes.length);
    const amigoSorteado = participantes[indiceSorteado];
 
    participantes.splice(indiceSorteado, 1);

    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // Limpa resultado anterior
    const li = document.createElement("li");
    li.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    ulResultado.appendChild(li);

    console.log("Amigo sorteado:", amigoSorteado);
    console.log("Participantes restantes:", participantes);
}  

