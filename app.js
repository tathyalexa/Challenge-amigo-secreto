let participantes = [];

function adicionarAmigo() {
    let nomeInput = document.getElementById("amigo").value.trim();

    if (nomeInput !== "") {
        participantes.push(nomeInput);
        alert(`${nomeInput} foi adicionado à lista!`);
        document.getElementById("amigo").value = ""; // limpa input
        console.log("Participantes:", participantes);
    } else {
        alert("Digite um nome válido!");
    }
}

