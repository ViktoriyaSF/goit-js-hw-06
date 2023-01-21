const allCategories = document.querySelector("ul#categories");

const numberCategories = allCategories.querySelectorAll("li.item");
console.log(`Number of categories: `, numberCategories.length);

const firstEl = allCategories.firstElementChild;
// console.log(firstEl);
// const titleFirstEl = firstEl.querySelector("h2");
// const itemFistEl = firstEl.querySelectorAll("li");

console.log(`Category:`, firstEl.querySelector("h2").textContent);
console.log(`Elements:`, firstEl.querySelectorAll("li").length);

const secondEl = allCategories.children[1];

console.log(`Category:`, secondEl.querySelector("h2").textContent);
console.log(`Elements:`, secondEl.querySelectorAll("li").length);

const lastEl = allCategories.lastElementChild;

console.log(`Category:`, lastEl.querySelector("h2").textContent);
console.log(`Elements:`, lastEl.querySelectorAll("li").length);
