const inputRef = document.querySelector('#validation-input');
const inputLengthRef = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const isValid = event.currentTarget.value.length === Number(inputLengthRef);

  if (isValid) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
  }
}
