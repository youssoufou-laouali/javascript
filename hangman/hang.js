var mots = ['activer', 'application', 'avatar', 'arborescence', 'blog', 'bouton', 'box', 'bureau', 'cheval', 'cliquer', 'connexion', 'internet'];
let answer = '';
let maxWrong = 10;
let mistakes = 0;
let guessed = [];
const charfind = document.querySelector('.charfind');
const charclick = document.querySelector('.charclick');
let clickingchar = [];
let chance = document.querySelector('.chance');
const wordvalid = document.querySelector('.wordvalid');
let valid = 1;
let lose = document.getElementById('lose');

const canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;





function randomWord() {
    answer = mots[Math.floor(Math.random() * mots.length)];
    console.log(answer)
    var l = answer.length;
    for (var i = 0; i < l; i++) {
        guessed.push('_');
    }
    charfind.textContent = guessed.join(' ');
    charclick.textContent = clickingchar;
};
window.onload = randomWord;

document.addEventListener('keypress', function(e) {

    if (maxWrong <= 0) {
        return;
    }

    var j = 0;
    frappe = e.keyCode;
    frappe = String.fromCharCode(frappe);
    clickingchar.push(frappe);
    charclick.textContent = clickingchar;

    var bool = false;
    for (var i of answer) {
        j++;
        if (i == frappe) {
            guessed[j - 1] = frappe;
            bool = true;
        }
    }
    if (!bool) {
        maxWrong--;
    }
    switch (maxWrong) {
        case 9:
            ctx.beginPath();
            ctx.moveTo(100, 350);
            ctx.lineTo(200, 350);
            ctx.stroke();
            break;
        case 8:
            ctx.moveTo(200, 350);
            ctx.lineTo(200, 100);
            ctx.stroke();
            break;
        case 7:
            ctx.moveTo(200, 100);
            ctx.lineTo(170, 100);
            ctx.stroke();
            break;
        case 6:
            ctx.moveTo(170, 100);
            ctx.lineTo(155, 150);
            ctx.stroke();
            break;
        case 5:

            ctx.moveTo(155, 150);
            ctx.lineTo(130, 200);
            ctx.stroke();
            break;
        case 4:
            ctx.moveTo(155, 150);
            ctx.lineTo(180, 200);
            ctx.stroke();
            break;
        case 3:
            ctx.moveTo(155, 150);
            ctx.lineTo(155, 230);
            ctx.stroke();
            break;
        case 2:
            ctx.moveTo(155, 230);
            ctx.lineTo(140, 270);
            ctx.stroke();
            break;
        case 1:
            ctx.moveTo(155, 230);
            ctx.lineTo(170, 270);
            ctx.stroke();
            break;
        case 0:
            ctx.beginPath();
            ctx.arc(155, 140, 15, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
            lose.classList.replace('hide', 'affich');
            charfind.textContent = guessed.join(' ');
            clickingchar = [];
            guessed = [];
            maxWrong = 10;

            setTimeout(function() {
                lose.classList.replace('affich', 'hide');
                ctx.clearRect(0, 0, canvas.width, canvas.height)
            }, 2000);
            setTimeout(randomWord(), 2000);
    };



    charfind.textContent = guessed.join(' ');
    if (answer == guessed.join('')) {
        valid++;
        wordvalid.textContent = valid;
        clickingchar = [];
        guessed = [];
        randomWord();
        maxWrong = 10;
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    chance.textContent = maxWrong;
});