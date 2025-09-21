let participantes = [];

// Adicionar participante
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

  // Atualiza a lista de participantes no HTML
    const listaUl = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nomeInput;
    listaUl.appendChild(li);

    console.log("Participantes:", participantes);
}
// Sortear amigo secreto, um por vez
function sortearAmigo() {
    if (participantes.length === 0) {
        alert("Todos os participantes já foram sorteados!");
        return;
    }

