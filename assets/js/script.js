// jsnacks 3

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