//declara a função mostrarOlá
function mostrarOla() {
//obtem o conteudo do campo (com id=) nome
var nome = document.getElementById("nome").value;
//exibe no paragrafo (resposta): "Olá" e o nome informado
document.getElementById("resposta").textContent = "Olá " + nome;
}
//cria uma referencia
var mostrar = document.getElementById("mostrar");
//registrar para o boatao mostrar
mostrar.addEventListener("click", mostrarOla);