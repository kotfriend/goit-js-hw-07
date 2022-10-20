// "use strict";

// const newArr = [1, 2, 3, 5, 8, 13];

// const reduceArr = newArr.reduce((acc, item) => {
//   if (item % 2 === 0) {
//     return [...acc, item * 2];
//   }
//   return acc;
// }, []);

// console.log(reduceArr);
// const Mam = document.querySelector("#mam");
// // const elArray = [];
// // elements.forEach((element) => {
// //   elArray.push(element);
// // });
// console.dir(Mam);

// const aunt = document.querySelector("#aunt");

// // aunt.style.backgroundColor = "tomato";

// // aunt.classList.add("tomato");
// // aunt.classList.remove("one", "two");
// // aunt.classList.remove("two");
// // aunt.classList.remove("three");
// aunt.classList.replace("tomato", "wheat");

// const father = document.querySelector("#father");
// father.setAttribute("data-age", 18);
// console.log("Father age is", father.getAttribute("data-age"), "years old");

// const myDiv = document.createElement("div");
// myDiv.innerHTML = "<h1>I am a new DIV</h1>";
// document.body.appendChild(myDiv);

// const fakeArray = {
//   0: "zero",
//   1: "one",
//   2: "two",
//   length: 3,
//   join: () => console.log("Join me!"),
// };

// // такий варіант не зручний, тому що якщо в Обїєкті є функція join, визвавши таким чином функцію масиву, ми затираємо функцію join обʼєкту
// // fakeArray.join = [].join;
// // console.log(fakeArray.join("-"));

// //такий варіант кращий
// console.log([].join.call(fakeArray, "-"));

// fakeArray.join();

//// DOM navigation
// const elUl = document.getElementById("unorderedList");

// const first = elUl.firstElementChild;
// const second = first.nextElementSibling;
// const third = second.nextElementSibling;

// // console.log(first.firstElementChild.nextElementSibling);

// // DOM grapes
// const myDiv = document.createElement("div");
// myDiv.innerHTML = "<span>Hello!</span>";
// console.log(myDiv);
// second.appendChild(myDiv);

// ======= Події / Собития ======
// const targetBtn = document.querySelector(".js-target-btn");
// const addListenerBtn = document.querySelector(".js-add-listener");
// const removeListenerBtn = document.querySelector(".js-remove-listener");

// targetBtn.addEventListener("click", () => {
//   console.log("Clicked!");
// });

const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// === можемо ставити подію і в залежності від дії - мишка, тачпад, клавіатура =====
// const handClick = (event) => {
//   console.log(event);
// };

const handClick = () => {
  console.log("");
};

// targetBtn.addEventListener("click", handClick);

addListenerBtn.addEventListener("click", () => {
  console.log("ADD Event Clicker");
  targetBtn.addEventListener("click", handClick);
});

removeListenerBtn.addEventListener("click", () => {
  console.log("REMOVE Event Clicker");
  targetBtn.removeEventListener("click", handClick);
});

//======prevent default for links=====
const link = document.getElementById("myLink");

link.addEventListener("click", (event) => {
  event.preventDefault(); // відміняє перехід по ссилці, вказуючи на виключення стандартної дії = перехід по ссилці
  alert("STOP!!!");
});

const refs = {
  output: document.querySelector(".js-output"),
  clearBtn: document.querySelector(".js-clear"),
};

window.addEventListener("keydown", (event) => {
  if (event.key !== "w") {
    refs.output.innerHTML += event.key;
  } else {
    alert("WWW!!!");
  }
});
