const { somar, mensagemBoasVindas, exibirMaior, parOuImpar, podeVotar, positivoNegativoZero, salarioBonus, podeDirigir, exibirSemestre,
  vogalOuConsoante, exibirMedia, fazerLogin
 } = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('maior número', () => {
  expect(exibirMaior(2, 3)).toBe(3);
  expect(exibirMaior(9, 7)).toBe(9);
  expect(exibirMaior(8, 8)).toBe(8);
});

test('par ou ímpar', () => {
  expect(parOuImpar('a','b')).toBe('Erro');
  expect(parOuImpar(2,3)).toBe('Apenas A é par');
  expect(parOuImpar(3,2)).toBe('Apenas B é par');
  expect(parOuImpar(4,4)).toBe('Ambos são pares');
  expect(parOuImpar(7,7)).toBe('Ambos são ímpares');
});

test('Pode ou Deve Votar', () => {
  expect(podeVotar(10)).toBe('Não Pode Votar');
  expect(podeVotar(16)).toBe('Voto Opcional');
  expect(podeVotar(22)).toBe('Voto Obrigatório');
})

test('Positivo, Negativo ou Zero', () => {
  expect(positivoNegativoZero('a')).toBe('Erro');
  expect(positivoNegativoZero(0)).toBe('A é igual a zero')
  expect(positivoNegativoZero(1)).toBe('A é positivo')
  expect(positivoNegativoZero(-1)).toBe('A é negativo')
})

test('Bonús do Salário', () => {
  expect(salarioBonus('a')).toBe('Erro');
  expect(salarioBonus('1500')).toBe('Salário: R$1500.00 | Bonús: R$300.00');
  expect(salarioBonus('2500')).toBe('Salário: R$2500.00 | Bonús: R$250.00');
  expect(salarioBonus('5750')).toBe('Salário: R$5750.00 | Bonús: R$287.50');
})

test('Pode ou Não Pode Dirigir', () => {
  expect(podeDirigir('a')).toBe('Erro');
  expect(podeDirigir('19')).toBe('Pode Dirigir');
  expect(podeDirigir('16')).toBe('Não Pode Dirigir');
})

test('Primeiro ou Segundo Semestre', () => {
  expect(exibirSemestre(2)).toBe('Erro');
  expect(exibirSemestre('fevereiro')).toBe('Primeiro Semestre');
  expect(exibirSemestre('novembro')).toBe('Segundo Semestre');
})

test('Vogal ou Consoante', () => {
  expect(vogalOuConsoante(2)).toBe('Erro');
  expect(vogalOuConsoante('A')).toBe('Vogal');
  expect(vogalOuConsoante('Z')).toBe('Consoante');
})

test('Média de 5 valores', () => {
  expect(exibirMedia(['a', 5, 3, 1, 3])).toBe('Erro');
  expect(exibirMedia([1, 5, 3, 1])).toBe('Erro');
  expect(exibirMedia([10, 10, 10, 10, 10])).toBe(10);
})

test('Login de Admin', () => {
  expect(fazerLogin('Ambrozina','321')).toBe('Acesso negado! Usuário ou senha incorretos!');
  expect(fazerLogin('Admin','123')).toBe('Conectado com Sucesso!');
})