const buttonSubmit = document.querySelector('#button-submit');

buttonSubmit.addEventListener('click', () => {
  const formName = document.querySelector('#email').value;
  const formEmail = document.querySelector('#password').value;
  if (formName === 'tryber@teste.com' && formEmail === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
