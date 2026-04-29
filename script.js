function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

function exibirMaior(a, b){
  if (a>b)
    return a;
  if (a<b)
    return b;
}

module.exports = { somar, mensagemBoasVindas, exibirMaior };
// export default { somar, mensagemBoasVindas };