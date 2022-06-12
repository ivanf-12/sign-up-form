const submitButton = document.querySelector("[data-submit]");
const passwordField = document.querySelector('[data-password]');
const confirmPwField = document.querySelector('[data-confirmPw]');
const numberField = document.querySelector('[data-number]');

submitButton.addEventListener('click', () => {
  for(let i=0; i<numberField.value.length; ++i) {
    let chr = numberField.value[i];
    if(isNaN(chr)) {
      console.log("empat")
      numberField.setCustomValidity("Please enter 10 digits telephone number!");
      return;
    }
  }
  numberField.setCustomValidity("");
  if(numberField.value.length !== 10) {
    console.log("lima")
    numberField.setCustomValidity("Please enter 10 digits telephone number!");
    return;
  }
  else {
    console.log("enam")
    numberField.setCustomValidity("");
  }

  if(passwordField.value.length === 0) {
    console.log("satu")
    passwordField.setCustomValidity("password can't be empty!");
    return;
  }
  else if(passwordField.value !== confirmPwField.value) {
    console.log("dua")
    passwordField.setCustomValidity("");
    confirmPwField.setCustomValidity("password doesn't match!");
    return;
  }
  else {
    console.log("tiga")
    passwordField.setCustomValidity("");
    confirmPwField.setCustomValidity("");
  }
});