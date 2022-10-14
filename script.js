const buttonSubmit = document.querySelector('#button-submit');
const sendButton = document.querySelector('#submit-btn');

buttonSubmit.addEventListener('click', () => {
  const formName = document.querySelector('#email').value;
  const formEmail = document.querySelector('#password').value;
  if (formName === 'tryber@teste.com' && formEmail === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const agreementButton = document.querySelector('#agreement');

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

window.onload = () => {
  disableButton();
};
