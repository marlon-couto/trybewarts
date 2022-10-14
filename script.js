const buttonSubmit = document.querySelector('#button-submit');
const sendButton = document.querySelector('#submit-btn');
const agreementButton = document.querySelector('#agreement');
const textarea = document.querySelector('textarea');

buttonSubmit.addEventListener('click', () => {
  const formName = document.querySelector('#email').value;
  const formEmail = document.querySelector('#password').value;
  if (formName === 'tryber@teste.com' && formEmail === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const disableButton = () => {
  if (agreementButton.checked === false) {
    sendButton.disabled = true;
  }
};

agreementButton.addEventListener('change', () => {
  if (agreementButton.checked === false) {
    sendButton.disabled = true;
  } else {
    sendButton.disabled = false;
  }
});

const characterCount = () => {
  const current = document.querySelector('#current');
  current.innerText = 500 - textarea.value.length;
};

textarea.addEventListener('input', characterCount);

window.onload = () => {
  disableButton();
  characterCount();
};
