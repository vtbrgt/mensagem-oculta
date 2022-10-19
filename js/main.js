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

/* FUNÇÕES REFERENTES A CIFRA DE CÉSAR */
function convertCesar(texto) {
  texto = mensagem.value.toUpperCase();
  let textoConvertido = '';
  if (form.acao.value == 'Codificar') {
    for (let i = 0; i < texto.length; i++) {
      let caracterCesar =
        ((texto[i].charCodeAt() - 65 + Number(incremento.value)) % 26) + 65;
      textoConvertido += String.fromCharCode(caracterCesar);
    }
  } else {
    for (let i = 0; i < texto.length; i++) {
      let caracterCesar =
        ((texto[i].charCodeAt() - 65 - Number(incremento.value)) % 26) + 65;
      textoConvertido += String.fromCharCode(caracterCesar);
    }
  }
  resultadoBox.style.display = 'block';
  resultado.innerText = `O resultado é: ${textoConvertido.toLowerCase()}`;
}

/* FUNÇÃO REFERENTE A BASE64 */
function convert64(texto) {
  texto = mensagem.value;
  let textoConvertido;
  if (form.acao.value == 'Codificar') {
    textoConvertido = btoa(texto);
  } else {
    textoConvertido = atob(texto);
  }
  resultadoBox.style.display = 'block';
  resultado.innerText = `O resultado é: ${textoConvertido}`;
}

/* FUNÇÃO PARA DESCOBRIR QUAL FUNÇÃO EXECUTAR AO CLICAR NO BOTÃO PARA CODIFICAR/DECODIFICAR */
function handleClick(event) {
  event.preventDefault();
  if (document.querySelector('.btn-ativo').innerText == 'Cifra de César') {
    convertCesar();
  } else {
    convert64();
  }
}

/* ALGORITMOS A SEREM EXECUTADOS DEPENDENDO DA CRIPTOGRAFIA ESCOLHIDO PELO USUÁRIO */
function changeCript(event) {
  event.preventDefault();
  if (event.target == cesar) {
    incrementoBox.style.display = 'flex';
    cesar.classList.add('btn-ativo');
    base64.classList.remove('btn-ativo');
    converterPara = 'cesar';
  } else {
    incrementoBox.style.display = 'none';
    base64.classList.add('btn-ativo');
    cesar.classList.remove('btn-ativo');
    converterPara = 'base64';
  }
}

/* ALTERNAR O TEXTO DO BOTÃO ENTRE CODIFICAR / DECOFICAR */
form.acao.forEach((acao) =>
  acao.addEventListener('click', () => {
    submit.innerText = acao.value;
  })
);

cesar.addEventListener('click', changeCript);
base64.addEventListener('click', changeCript);
submit.addEventListener('click', handleClick);
