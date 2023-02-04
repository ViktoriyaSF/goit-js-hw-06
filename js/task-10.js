function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", createBoxes);
function createBoxes() {
  // чистила значення щоб робилося все спочатку
  // boxesEl.innerHTML = " ";
  const elements = [];
  for (let i = 0; i < numberEl.value; i += 1) {
    const createDivEl = document.createElement("div");

    console.log(createDivEl);

    createDivEl.style.width = 30 + 10 * i + "px";
    createDivEl.style.height = 30 + 10 * i + "px";
    createDivEl.style.backgroundColor = getRandomHexColor();
    createDivEl.style.border = "2px solid";
    createDivEl.style.borderColor = getRandomHexColor();

    elements.push(createDivEl);
  }
  return boxesEl.append(...elements);
}

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  numberEl.value = "";
  return (boxesEl.innerHTML = "");
}

// style
boxesEl.style.display = "flex";
boxesEl.style.flexWrap = "wrap";
boxesEl.style.gap = "30px";

// numberEl.addEventListener("input", () => {
//   const amount = numberEl.value;
//   console.log(amount);
// });
