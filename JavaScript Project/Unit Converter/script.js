const inputElement = document.getElementById("input-number");
const convertButton = document.getElementById("convert-btn");
const lengthText = document.getElementById("length-text");
const volumeText = document.getElementById("volume-text");
const massText = document.getElementById("mass-text");
// let inputValue = inputElement.value;

// console.log(inputValue);

let meter = 3.281; //feet
let liter = 0.264; //gallons
let kilogram = 2.204; //pounds

convertButton.addEventListener("click", function () {
  // console.log("Convert button clicked");
  let inputValue = Number(inputElement.value);

  let lengthTotal = inputValue * meter;
  let volumeTotal = inputValue * liter;
  let massTotal = inputValue * kilogram;
  lengthText.textContent = `${inputValue} meters = ${lengthTotal.toFixed(2)} feet | ${inputValue} feet = ${(inputValue / meter).toFixed(2)} meters  `;
  volumeText.textContent = `${inputValue} liters = ${volumeTotal.toFixed(2)} gallons | ${inputValue} gallons = ${(inputValue / liter).toFixed(2)} liters  `;
  massText.textContent = `${inputValue} kilograms = ${massTotal.toFixed(2)} pounds | ${inputValue} pounds = ${(inputValue / kilogram).toFixed(2)} kilograms  `;
});
