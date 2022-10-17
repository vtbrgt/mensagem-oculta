const form = document.querySelector('form');
const cesar = document.querySelector('.cifraCesar');
const base64 = document.querySelector('.base64');
const incremento = document.querySelector('.incremento');
const resultado = document.querySelector('.resultado');
const btn = document.querySelector('.btn');
let converterPara = '';

/* FUNÇÕES A SEREM CRIADAS: 
convertTo64(text)
convertFrom64(text)
convertToCesar(text)
convertFromCesar(text)
handleClick(event) {
    // refatorar uma função a ser reutilizada nos botões
} */

/* ALGORITMOS A SEREM EXECUTADOS DEPENDENDO DA CRIPTOGRAFIA ESCOLHIDO PELO USUÁRIO */
cesar.addEventListener('click', (event) => {
  event.preventDefault();
  incremento.style.display = 'block';
  cesar.classList.add('btn-ativo');
  base64.classList.remove('btn-ativo');
  converterPara = 'cesar';
});

base64.addEventListener('click', (event) => {
  event.preventDefault();
  incremento.style.display = 'none';
  base64.classList.add('btn-ativo');
  cesar.classList.remove('btn-ativo');
  converterPara = 'base64';
});

/* ALTERNAR O TEXTO DO BOTÃO ENTRE CODIFICAR / DECOFICAR */
form.acao.forEach((acao) =>
  acao.addEventListener('click', () => {
    btn.innerText = acao.value;
  })
);
