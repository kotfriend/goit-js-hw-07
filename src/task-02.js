const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulList = document.querySelector("#ingredients");

//=====my solution =====
// ingredients.forEach((item) => {
//   const itemList = document.createElement("li");
//   itemList.textContent = item;
//   ulList.appendChild(itemList);
// });

//=======Olha solution======
const itemLists = ingredients.map((item) => {
  const itemList = document.createElement("li");
  itemList.textContent = item;
  return itemList;
});

ulList.append(...itemLists);
