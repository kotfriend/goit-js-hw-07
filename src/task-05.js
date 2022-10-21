const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", function () {
  if (this.value === "") {
    outputName.textContent = "незнакомец";
  } else {
    outputName.textContent = this.value;
  }
});
