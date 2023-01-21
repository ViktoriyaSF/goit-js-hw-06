const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("ul#ingredients");

const itemsAll = ingredients.map((ingredient) => {
  const itemEL = document.createElement("li");
  itemEL.textContent = ingredient;
  itemEL.classList.add("item");
  return itemEL;
});

listEl.append(...itemsAll);
