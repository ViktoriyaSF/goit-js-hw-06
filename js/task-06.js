const valueInput = document.querySelector("#validation-input");
const maxLength = valueInput.dataset.length;

valueInput.addEventListener("blur", onSymbolsInput);
function onSymbolsInput(event) {
  event.currentTarget.value.length > maxLength
    ? valueInput.classList.add("invalid")
    : valueInput.classList.add("valid");

  //   console.log(event.currentTarget.value.length);
}
