const valueInput = document.querySelector("#validation-input");
const maxLength = valueInput.dataset.length;

valueInput.addEventListener("blur", onSymbolsInput);
function onSymbolsInput(event) {
  if (maxLength != event.currentTarget.value.trim().length) {
    valueInput.classList.add("invalid");
    valueInput.classList.remove("valid");
  } else {
    valueInput.classList.add("valid");
    valueInput.classList.remove("invalid");
  }

  //   console.log(event.currentTarget.value.length);
}
