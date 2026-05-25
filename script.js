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
  if (typeof a !== 'number' || typeof b !== 'number') {
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

  function positivoNegativoZero(a) {
    if (typeof a !== 'number') {
      return 'Erro'
    } else {
      if (a > 0) {
        return 'A é positivo'
      }
      if (a < 0) {
        return 'A é negativo'
      }
      else {
        return 'A é igual a zero'
      }
    }
  }

  // - Crie uma função que irá receber o salário e retorne o bônus.
  //   - 20% se salário é < 2000
  //   - 10% se salário entre 2000 e 5000.
  //   - 5% salário acima de 5000.

  function salarioBonus(a) {
    if (typeof a !== 'number') {
      return 'Erro'
    } else {
      if (a < 2000) {
        return `Salário: R$${a.toFixed(2)} | Bonús: R$${(a*0.2).toFixed(2)}`
      }
      if (a >= 2000 && a <= 5000) {
        return `Salário: R$${a.toFixed(2)} | Bonús: R$${(a*0.1).toFixed(2)}`
      }
      if (a > 5000) {
        return `Salário: R$${a.toFixed(2)} | Bonús: R$${(a*0.05).toFixed(2)}`
      }
    }
  }

module.exports = { somar, mensagemBoasVindas, exibirMaior, parOuImpar, podeVotar, positivoNegativoZero, salarioBonus };