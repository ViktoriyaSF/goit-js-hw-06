function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector("span.color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  changeColor.textContent = color;
  document.body.style.backgroundColor = color;
  changeColor.style.backgroundColor = "#fafafa";
  changeColor.style.borderRadius = "25%";
});
