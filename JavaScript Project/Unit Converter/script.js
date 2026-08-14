const inputElement = document.getElementById("input-number");
const convertButton = document.getElementById("convert-btn");
const lengthText = document.getElementById("length-text");
const volumeText = document.getElementById("volume-text");
const massText = document.getElementById("mass-text");
// let inputValue = inputElement.value;

// console.log(inputValue);

const meterToFeet = 3.281; //feet
const literToGallons = 0.264; //gallons
const kilogramToPounds = 2.204; //pounds

function convert(value, factor) {
  return value * factor;
}

convertButton.addEventListener("click", function () {
  // console.log("Convert button clicked");
  let inputValue = Number(inputElement.value);
  if (inputValue === 0 || isNaN(inputValue)) {
    return alert("Please enter a valid number greater than 0");
  }

  let lengthTotal = convert(inputValue, meterToFeet);
  let volumeTotal = convert(inputValue, literToGallons);
  let massTotal = convert(inputValue, kilogramToPounds);
  lengthText.textContent = `${inputValue} meters = ${lengthTotal.toFixed(2)} feet | ${inputValue} feet = ${(inputValue / meterToFeet).toFixed(2)} meters  `;
  volumeText.textContent = `${inputValue} liters = ${volumeTotal.toFixed(2)} gallons | ${inputValue} gallons = ${(inputValue / literToGallons).toFixed(2)} liters  `;
  massText.textContent = `${inputValue} kilograms = ${massTotal.toFixed(2)} pounds | ${inputValue} pounds = ${(inputValue / kilogramToPounds).toFixed(2)} kilograms  `;
});
