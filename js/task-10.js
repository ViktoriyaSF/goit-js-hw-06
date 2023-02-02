function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const numberEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", createBoxes);
function createBoxes(amount) {
  boxesEl.innerHTML = " ";
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    const createDivEl = document.createElement("div");

    console.log(createDivEl);

    createDivEl.style.width = 30 + 10 * i + "px";
    createDivEl.style.height = 30 + 10 * i + "px";
    createDivEl.style.backgroundColor = getRandomHexColor();

    elements.push(createDivEl);
  }
  return boxesEl.append(...elements);
}

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  numberEl.value = " ";
  return (boxesEl.innerHTML = " ");
}

// numberEl.addEventListener("input", () => {
//   const amount = numberEl.value;
//   console.log(amount);
// });
