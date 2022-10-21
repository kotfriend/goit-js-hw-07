const decrimentBtn = document.querySelector("button[data-action=decrement]");
const incrementBtn = document.querySelector("button[data-action=increment]");
const valueDisplay = document.querySelector("#value");

let counterValue = 0;

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  return (valueDisplay.textContent = counterValue);
});
decrimentBtn.addEventListener("click", () => {
  counterValue -= 1;
  return (valueDisplay.textContent = counterValue);
});
