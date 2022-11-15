// declara a função mostraOla
function mostraOla() {
    // obtém o conteúdo do campo (com id=) nome
    var nome = document.getElementById("nome").value;
    // exibe no parágrafo (resposta): "Olá " e o nome informado
    document.getElementById("resposta").textContent = "Olá " + nome;
}
// cria uma refêrencia ao botão (com id=) mostrar
var mostrar = document.getElementById("mostrar");
// registra para o botão "mostrar" um ouvinte para o evento "click",
// que aos ser clicado irá chamar a função mostraOla
mostrar.addEventListener("click", mostraOla);
