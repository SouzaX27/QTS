function somar(a, b) {
  return a + b;
}

function mensagemBoasVindas(nome) {
  return `Olá, ${nome}!`;
}

function exibirMaior(a, b) {
  if (a>b){
    return a;
  } else {
    return b;
  }
}

  // Implemente uma função que irá receber 2 valores. A função deverá exibir qual dos dois valores é par ou ímpar.

  
function parOuImpar(a, b) {
  if (typeof a !== number && typeof b !== number) {
    return 'Erro'
  } else {
    if (a%2 == 0 && b%2 == 0) {
      return 'Ambos são pares'
    }
    if (a%2 == 0 && b%2 != 0) {
      return 'Apenas A é par'
    }
    if (a%2 != 0 && b%2 != 0) {
      return 'Ambos são ímpares'
    }
    if (a%2 != 0 && b%2 == 0) {
      return 'Apenas B é par'
    }
  }
    
};

  // Crie uma função que receberá a idade e retornará se a pessoa pode votar , voto opcional ou não pode votar.

  function podeVotar(a) {
    if (a >= 16 && a < 18) {
      return 'Voto Opcional'
    }
    if (a >= 18) {
      return 'Voto Obrigatório'
    }
    else {
      return 'Não Pode Votar'
    }
  }

module.exports = { somar, mensagemBoasVindas, exibirMaior, parOuImpar, podeVotar };
// export default { somar, mensagemBoasVindas };