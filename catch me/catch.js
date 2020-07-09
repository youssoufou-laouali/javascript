const holes = document.querySelectorAll('.container');
const score = document.getElementById('score');
const moles = document.querySelectorAll('.trou');
const start = document.getElementById('start')
let lastHole;
var mole;
var timeUp = false;
var s = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

function randomHoles(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    mole = moles[idx];
    if (hole === lastHole) {
        return randomHoles(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHoles(holes);
    mole.classList.add('up');

    mole.addEventListener('click', cliquer);
    setTimeout(() => {
        mole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    score.textContent = 0;
    timeUp = false;
    peep();
    setTimeout(() => timeUp = true, 10000)
};

start.addEventListener('click', startGame)

function cliquer() {
    mole.classList.remove('up');
    s++;
    score.textContent = s;
}