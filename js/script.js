let password = document.getElementById('fakePassword');
let toggler = document.getElementById('toggler');

let showHidePassword = () => {
  if (password.type == 'password') {
    password.setAttribute('type', 'text');
    // Altera a classe do botão para mostrar o ícone do olho com a linha através dele
    toggler.classList.remove('fa-regular', 'fa-eye');
    toggler.classList.add('fa-regular', 'fa-eye-slash');
  } else {
    password.setAttribute('type', 'password');
    // Altera a classe do botão para mostrar somente o ícone do olho
    toggler.classList.remove('fa-regular', 'fa-eye-slash');
    toggler.classList.add('fa-regular', 'fa-eye');
  }
};

toggler.addEventListener('click', showHidePassword);
