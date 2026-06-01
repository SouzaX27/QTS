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

function podeDirigir(a) {
  if (typeof a !== 'number') {
  return 'Erro'
  } else {
    if (a >= 18) {
      return 'Pode Dirigir'
    } else {
      return 'Não Pode Dirigir'
    }
  }
}

function exibirSemestre(mes) {
  if (typeof a == 'number') {
    return 'Erro'
  } else {
    switch (mes.toLowerCase()) {
      case 'janeiro':
      case 'fevereiro':
      case 'março':
      case 'abril':
      case 'maio':
      case 'junho':
        return 'Primeiro Semestre';
        break;
  
      case 'julho':
      case 'agosto':
      case 'setembro':
      case 'outubro':
      case 'novembro':
      case 'dezembro':
        return 'Segundo Semestre';
        break;
    }
  }
}

function vogalOuConsoante (a) {
  if (typeof a == 'number') {
    return 'Erro'
  } else {
    switch (a.toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return 'Vogal'
        break;
    
      default:
        return 'Consoante'
        break;
    }
  }
}

function exibirMedia(array) {
  let media = 0;
  for (i = 0; i < array.length; i++) {
    let valor = array[i];
    if (typeof valor !== 'number') {
      return 'Erro'  
    } else {
      media += (valor/5);
    }
  }
  if (i !== 5) {
    return 'Erro'
  } else {
    return media
  }
}

function fazerLogin(usuario, senha) {
  if (usuario === 'Admin' && senha === '123') {
    return 'Conectado com Sucesso!'
  } else {
    return 'Acesso negado! Usuário ou senha incorretos!'
  }
}




module.exports = { somar, mensagemBoasVindas, exibirMaior, parOuImpar, podeVotar, positivoNegativoZero, salarioBonus, podeDirigir,
  exibirSemestre, vogalOuConsoante, exibirMedia, fazerLogin
 };