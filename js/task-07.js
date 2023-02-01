const textSize = document.querySelector("#text");
const sizeControl = document.querySelector("#font-size-control");

sizeControl.addEventListener("input", onSizeChandge);
function onSizeChandge(event) {
  textSize.style.fontSize = event.currentTarget.value + "px";
}
