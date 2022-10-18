const buttonSubmit = document.querySelector('#button-submit');
const sendButton = document.querySelector('#submit-btn');
const agreementButton = document.querySelector('#agreement');
const textarea = document.querySelector('textarea');
const main = document.querySelector('main');

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

const createFormData = (data) => {
  main.appendChild(document.createElement('div'));
  document.querySelector('main div').id = 'form-data';
  const formData = document.querySelector('#form-data');
  for (let index = 0; index < data.length; index += 1) {
    formData.appendChild(document.createElement('p'));
    formData.lastChild.innerText = data[index];
  }
};

sendButton.addEventListener('click', () => {
  const checked = document.querySelectorAll('.subject:checked');
  let subjects = '';
  for (let index = 0; index < checked.length; index += 1) {
    subjects += index === checked.length - 1 ? `${checked[index].value}.`
      : `${checked[index].value}, `;
  }
  const data = [
    `Nome: ${document.querySelector('#input-name').value} ${
      document.querySelector('#input-lastname').value}`,
    `Email: ${document.querySelector('#input-email').value}`,
    `Casa: ${document.querySelector('#house').value}`,
    `Família: ${document.querySelector('input[name="family"]:checked').value}`,
    `Matérias: ${subjects}`,
    `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}`,
    `Observações: ${document.querySelector('textarea').value}`,
  ];
  main.firstElementChild.style.display = 'none';
  createFormData(data);
});

window.onload = () => {
  disableButton();
  characterCount();
};
