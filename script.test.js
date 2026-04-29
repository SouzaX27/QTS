const { somar, mensagemBoasVindas, exibirMaior } = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('maior número', () => {
  expect(exibirMaior(2, 3)).toBe(3)
})