const form = document.querySelector('form');
const mensagem = document.querySelector('#msg');
const cesar = document.querySelector('.cifraCesar');
const base64 = document.querySelector('.base64');
const incrementoBox = document.querySelector('.incremento-box');
const incremento = document.querySelector('#incremento');
const resultadoBox = document.querySelector('.resultado-box');
const resultado = document.querySelector('.resultado');
const submit = document.querySelector('.btn');
let converterPara = '';

/* FUNÇÕES A SEREM CRIADAS: 
convertTo64(texto)
convertFrom64(texto)
handleClick(event) {
    // refatorar uma função a ser reutilizada nos botões
} */

function convertToCesar(texto) {
  texto = mensagem.value.toUpperCase();
  let textoConvertido = '';
  for (let i = 0; i < texto.length; i++) {
    let caracterCesar =
      ((texto[i].charCodeAt() - 65 + Number(incremento.value)) % 26) + 65;
    textoConvertido += String.fromCharCode(caracterCesar);
  }
  resultadoBox.style.display = 'block';
  resultado.innerText = textoConvertido.toLowerCase();
}

function convertFromCesar(texto) {
  texto = mensagem.value.toUpperCase();
  let textoConvertido = '';
  for (let i = 0; i < texto.length; i++) {
    let caracterCesar =
      ((texto[i].charCodeAt() - 65 - Number(incremento.value)) % 26) + 65;
    textoConvertido += String.fromCharCode(caracterCesar);
  }
  resultadoBox.style.display = 'block';
  resultado.innerText = textoConvertido.toLowerCase();
}

function handleClick(event) {
  event.preventDefault();
  if (document.querySelector('.btn-ativo').innerText == 'Cifra de César') {
    if (form.acao.value == 'Codificar') {
      convertToCesar();
    } else {
      convertFromCesar();
    }
  }
}

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
    submit.innerText = acao.value;
  })
);

submit.addEventListener('click', handleClick);
