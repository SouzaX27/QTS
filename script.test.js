const { somar, mensagemBoasVindas, exibirMaior } = require('./script');

test('soma dois números', () => {
  expect(somar(2, 3)).toBe(5);
});

test('mensagem de boas vindas', () => {
  expect(mensagemBoasVindas('Diogo')).toBe('Olá, Diogo!');
});

test('maior número', () => {
  if (a>b)
    expect(exibirMaior(a, b)).toBe(a)
  if (a<b)
    expect(exibirMaior(a, b)).toBe(b)
})