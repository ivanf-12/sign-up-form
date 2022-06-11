const submitButton = document.querySelector("[data-submit]");
const passwordField = document.querySelector('[data-password]');
const confirmPwField = document.querySelector('[data-confirmPw]');
const numberField = document.querySelector('[data-number]');

submitButton.addEventListener('click', () => {
  console.log(numberField);
  if(passwordField.value !== confirmPwField.value) {
    confirmPwField.setCustomValidity("password doesn't match!");
    return;
  }
  else {
    confirmPwField.setCustomValidity("");
  }

  if(parseInt(numberField.value) === NaN) {
    numberField.setCustomValidity("Please enter 10 digit telephone numbers!");
  }
  else {
    if(numberField.value.length != 10) {
      numberField.setCustomValidity("Please enter 10 digit telephone numbers!");
    }
    else {
      numberField.setCustomValidity("");
    }
  }
});