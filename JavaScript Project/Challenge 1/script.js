// 1. Keep track of the scores starting at 0
let homeScore = 0;
let guestScore = 0;

// 2. Grab the score display elements from the HTML
let homeCountEl = document.getElementById("home-count");
let guestCountEl = document.getElementById("guest-count");

// --- HOME TEAM FUNCTIONS ---

function increaseHomeOne() {
  homeScore = homeScore + 1;
  homeCountEl.textContent = homeScore;
}

function increaseHomeTwo() {
  homeScore = homeScore + 2;
  homeCountEl.textContent = homeScore;
}

function increaseHomeThree() {
  homeScore = homeScore + 3;
  homeCountEl.textContent = homeScore;
}

// --- GUEST TEAM FUNCTIONS ---

function increaseGuestOne() {
  guestScore = guestScore + 1;
  guestCountEl.textContent = guestScore;
}

function increaseGuestTwo() {
  guestScore = guestScore + 2;
  guestCountEl.textContent = guestScore;
}

function increaseGuestThree() {
  guestScore = guestScore + 3;
  guestCountEl.textContent = guestScore;
}
