const form = document.getElementById("form");
let linhas = "";
const namesContato = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeContato = document.getElementById("nome-contato");
  const numeroContato = document.getElementById("numero-contato");

  if(namesContato.includes(nomeContato.value)) {
    alert( `O contato ${nomeContato.value} já existe ` )
  } else {

    namesContato.push(nomeContato.value);

    let linha = '<tr>';
  linha += `<td>${nomeContato.value}</td>`;
  linha += `<td>${numeroContato.value}</td>`;
  linha += '</tr>';
  linhas += linha

  const tabelaBody = document.querySelector("tbody");

  tabelaBody.innerHTML = linhas;
  }

 nomeContato.value = "";
 numeroContato.value = "";
})