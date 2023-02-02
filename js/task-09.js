function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const changeColor = document.querySelector("span.color");
const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", () => {
  changeColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
  changeColor.style.backgroundColor = "#fafafa";
  changeColor.style.borderRadius = "25%";
});
