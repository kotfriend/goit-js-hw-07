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
