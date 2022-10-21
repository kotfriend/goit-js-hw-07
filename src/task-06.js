//===easy solution =====

const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const inTotalLength = 6;
  if (validationInput.value.length === inTotalLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  }
  if (validationInput.value.length === 0) {
    validationInput.classList.remove("valid");
    validationInput.classList.remove("invalid");
  }
  if (
    validationInput.value.length !== inTotalLength &&
    validationInput.value.length !== 0
  ) {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});

///===== hard solution - > захват значения ===
// const validationInput = document.getElementById("validation-input");
// const inputVal = validationInput.getAttribute("data-length");
// const inTotalLength = parseInt(inputVal, 10);

// validationInput.addEventListener("blur", function () {
//   if (validationInput.value.length === inTotalLength) {
//     validationInput.classList.add("valid");
//     validationInput.classList.remove("invalid");
//   }
//   if (validationInput.value.length === 0) {
//     validationInput.classList.remove("valid");
//     validationInput.classList.remove("invalid");
//   }
//   if (
//     validationInput.value.length !== inTotalLength &&
//     validationInput.value.length !== 0
//   ) {
//     validationInput.classList.add("invalid");
//     validationInput.classList.remove("valid");
//   }
// });

// const inputVal = document.getElementById("validation-input");
// const totalLenght = inputVal.getAttribute("data-length");
// const intTotallenght = parseInt(totalLenght, 10);

// inputVal.addEventListener("blur", function () {
//   if (inputVal.value.length === intTotallenght) {
//     inputVal.classList.remove("invalid");
//     inputVal.classList.add("valid");
//   }
//   if (inputVal.value.length === 0) {
//     inputVal.classList.remove("valid");
//     inputVal.classList.remove("invalid");
//   }
//   if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
//     inputVal.classList.add("invalid");
//   }
// });

// ===== Olha solution =======
// const inputRef = document.getElementById("validation-input");

// const dataLength = document.querySelector('[data-length="6"]');

// inputRef.addEventListener("blur", onInputChange);

// function onInputChange(event) {
//   if (event.currentTarget.value.length === +dataLength.dataset.length) {
//     inputRef.classList.remove("invalid");
//     inputRef.classList.add("valid");
//   }
//   if (event.currentTarget.value.length !== +dataLength.dataset.length) {
//     inputRef.classList.add("invalid");
//   }
// }
