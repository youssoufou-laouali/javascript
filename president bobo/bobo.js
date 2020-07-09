let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '"On la connaît la logique de l\'équipe de France. Quand vous gagnez, c\'est la France Black-Blanc-Beur qui triomphe puis dès que vous perdez, c\'est : ça suffit y\'a trop d\'étranger dans l\'équipe."',
    '"(sur un air) Un dimanche matin, avec ma putain, sur ma mobylette"',
    '"(s\'adressant à Marine son crocodile) Allez mange ! Coquine !""',
    '"Vive le mariage homosexuel ! Mais je suis contre l\'adoption...""',
    '"Ahh la pute... je parle du vent... pas de ta mère."',
    '"après un coup de taser sur Didier Il est tombé comme du n\'importe quoi, on dirait la girafe qui s\'emmêle les pattes."',
    'L oiseau sur le baobab ne doit pas oublier qu il a porté des lunettes',
    '"La France nous a souvent volé nos richesses... vous allez aussi nous voler nos footballeur ?"',
    '"Depuis l\'Algérie, je me suis rarement aussi bien senti dans un pays d\'Afrique."'
];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;
})