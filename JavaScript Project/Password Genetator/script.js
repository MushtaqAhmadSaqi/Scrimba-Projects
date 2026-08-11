const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");

// function generatePasswords() {
//   password1El.textContent = "";
//   password2El.textContent = "";

//   for (let i = 0; i < 15; i++) {
//     let pasword = Math.floor(Math.random() * characters.length);
//     password1El.textContent += characters[pasword];
//     password2El.textContent += characters[pasword];
//   }
// }

function createRandomPassword(length = 15) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}

const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
  password1El.textContent = createRandomPassword(15);
  password2El.textContent = createRandomPassword(15);
});
