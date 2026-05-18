const { somar, mensagemBoasVindas, exibirMaior, parOuImpar, podeVotar } = require('./script');

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