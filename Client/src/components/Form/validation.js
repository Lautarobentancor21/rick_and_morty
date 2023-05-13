const regexEmail = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$', 'i');
const regexPassword = new RegExp(/^(?=.*\d).{6,10}$/);


export const validation = (userData) => {
  let errors = {};
  if (
    !regexEmail.test(userData.username) ||
    userData.username === '' ||
    userData.username.length > 35
  ) {
    errors.username = "correo electronico invalido";
  } else if (
    !regexPassword.test(userData.password) ||
    userData.password.length < 6 ||
    userData.password.length > 10
  ) {
    errors.password = "contraseña invalida";
  }

  return errors;
};
