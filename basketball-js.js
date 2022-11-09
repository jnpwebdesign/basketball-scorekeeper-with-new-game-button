console.log("Basketball Scorekeeper");

let homeCount = 0;
let guestCount = 0;
let homePoints = document.getElementById("home-points-text");
let guestPoints = document.getElementById("guest-points-text");



function add1Home() {
    homeCount++;
    homePoints.textContent = homeCount;
    console.log(homeCount);
}

function add2Home() {
    homeCount += 2;
    homePoints.textContent = homeCount;
}

function add3Home() {
    homeCount += 3;
    homePoints.textContent = homeCount;
}

function add1Guest() {
    guestCount++;
    guestPoints.textContent = guestCount;
}

function add2Guest() {
    guestCount += 2;
    guestPoints.textContent = guestCount;
}

function add3Guest() {
    guestCount += 3;
    guestPoints.textContent = guestCount;
}



function startNewGame() {
    homeCount = 0;
    guestCount = 0;
    guestPoints.textContent = 0;
    homePoints.textContent = 0;



}