// jsnacks 3
/*
$(document).ready(function() {
    var zucchine = [{
            nome: "Romanesco",
            peso: 30,
            lunghezza: 20,
        },
        {
            nome: "Milanese",
            peso: 10,
            lunghezza: 15,
        },
        {
            nome: "Faenza",
            peso: 20,
            lunghezza: 30,
        },
        {
            nome: "Fiorentina",
            peso: 15,
            lunghezza: 10,
        },
        {
            nome: "Siciliano",
            peso: 30,
            lunghezza: 30,
        },
        {
            nome: "Napoli",
            peso: 20,
            lunghezza: 20,
        },
        {
            nome: "Triestina",
            peso: 30,
            lunghezza: 20,
        },
        {
            nome: "Pugliese",
            peso: 10,
            lunghezza: 10,
        },
        {
            nome: "Piacenza",
            peso: 15,
            lunghezza: 15,
        },
        {
            nome: "Nizza",
            peso: 5,
            lunghezza: 10,
        }
    ]

    var pesoTotale = 0;

    for (var zucchina of zucchine) {
        console.log(zucchina["peso"]);
        pesoTotale += zucchina["peso"];
    }

    console.log("Il peso totale delle zucchine è " + pesoTotale);
});
*/



// jsnack 2
/*
var team = [{
        name: "Cosmin"
    },
    {
        name: "Iris"
    },
    {
        name: "Angelo"
    },
    {
        name: "Vincenzo"
    },
    {
        name: "Pino"
    }
];

for (var player of team) {
    player.code = codeGenerator();
    player.media = getRandomNumber(0, 50);
    player.perc = getRandomNumber(0, 100);
}

console.log(team);

function codeGenerator() {
    var code = "";
    var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];

    while (code.length < 3) {
        code += alfabeto[getRandomNumber(0, alfabeto.length - 1)];
    }

    code += getRandomNumber(100, 999);
    return code;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
*/



// jsnacks
/*
var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];
var min = parseInt(prompt("inserisci un numero compreso fra 0 a " + (alfabeto.length - 2)));
var max = parseInt(prompt("inserisci un numero compreso fra " + " è " + (alfabeto.length - 1)));

console.log(filterArray(alfabeto, min, max));

function filterArray(arr, min, max) {
    var arrReturn = [];

    for (var i in alfabeto) {
        if (i >= min && i <= max) {
            arrReturn.push(arr[i]);
        }
    }

    return arrReturn;
}
*/