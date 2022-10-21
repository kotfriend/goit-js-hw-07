//=====My solution======

const ulCategories = document.getElementById("categories");
console.log(`В списке ${ulCategories.childElementCount} категории.`);

console.log("================");
const liFirst = ulCategories.firstElementChild;
console.log("Категорія:", liFirst.firstElementChild.textContent);
console.log("Кількість єлементів:", liFirst.lastElementChild.childElementCount);
console.log("================");
const liSecond = liFirst.nextElementSibling;
console.log("Категорія:", liSecond.firstElementChild.textContent);
console.log(
  "Кількість єлементів:",
  liSecond.lastElementChild.childElementCount
);
console.log("================");
const liThirdt = liSecond.nextElementSibling;
console.log("Категорія:", liThirdt.firstElementChild.textContent);
console.log(
  "Кількість єлементів:",
  liThirdt.lastElementChild.childElementCount
);

//========Olha solution=======

// const listCategories = document.querySelector("#categories");
// const listItems = document.querySelectorAll(".item");

// console.log(`В переліку ${listCategories.childElementCount} категорії`);

// listItems.forEach((elem) => {
//   console.log("Категорія:", elem.querySelector("h2").textContent);
//   console.log("Кількість елементів:", elem.querySelectorAll("li").length);
// });
