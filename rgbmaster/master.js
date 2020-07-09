const h1 = document.querySelector('h1');
const easy = document.querySelector('.easy');
const hard = document.querySelector('.hard');
const h = document.querySelectorAll('.h');
const choix = document.querySelectorAll('.choix');
var a = '';
var divchoix;
var j = 0;
const entete = document.querySelector('.entete');
const newcolor = document.querySelector('.newcolor')


easy.addEventListener('click', function() {
    for (var i = 0; i < h.length; i++) {
        h[i].classList.add('displayn');
    }
    easy.classList.add('active');
    hard.classList.remove('active');
})

hard.addEventListener('click', function() {
    for (var i = 0; i < h.length; i++) {
        h[i].classList.remove('displayn');
        h[i].classList.add('displayb');
    }
    easy.classList.remove('active');
    hard.classList.add('active');
})

function generatecolor() {
    a = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    return a;
}

function ayki() {

    divchoix = choix[Math.floor(Math.random() * choix.length)];
    if (easy.classList.contains('active')) {
        divchoix = choix[Math.floor(Math.random() * 3)];
    }
    divchoix.style.backgroundColor = generatecolor();
    h1.textContent = a;
    for (var i = 0; i < 6; i++) {
        if (choix[i] !== divchoix) {
            choix[i].style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
        }
    }
}

newcolor.addEventListener('click', ayki);

function ecoute() {
    for (j = 0; j < choix.length; j++) {
        choix[j].addEventListener('click', function(e) {
            var cliqu = e.target;
            if (divchoix.isSameNode(cliqu)) {
                entete.style.backgroundColor = a;
                for (z = 0; z < 6; z++) {
                    choix[z].style.backgroundColor = a;
                }
            } else {
                cliqu.style.backgroundColor = 'rgba(1, 1, 1, 0)';
            }
        })
    }
}
ayki();
ecoute();