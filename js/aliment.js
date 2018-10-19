let baseURL = "http://35.183.168.181";
let listAliment;
let alimentSelecioner = {};

function getAllAliment(callback) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            listAliment = JSON.parse(this.responseText);
            callback(listAliment);
        }
    });

    xhr.open("GET", baseURL + "/food/list");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "cb9c04ab-d7ab-4ab8-b323-70822cb25f53");

    xhr.send(data);

}

function getAlimentById(id, callback) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alimentSelecioner = JSON.parse(this.responseText);
            callback(alimentSelecioner);
        }
    });

    xhr.open("GET",  baseURL + "/food?idFood=" + id);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "a8aa36ca-fc2f-49da-8528-567376557fe1");

    xhr.send(data);

}

function effacerAlimentByID(id) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", baseURL + "/food?idFood=" + id);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "4a4ea6a3-8a91-4c4f-b516-6ea2cf233935");

    xhr.send(data);

}

function getAlimentByQuery(query, callback) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            listAliment = JSON.parse(this.responseText);
            callback(listAliment);
        }
    });

    xhr.open("GET", baseURL + "/food/list?query=" + query);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "b80589fd-f887-444b-a42b-7dbde84cb2c7");

    xhr.send(data);

}

function ajouterAliment(aliment) {

    var data = JSON.stringify({
        "name": aliment.name,
        "brand": aliment.brand,
        "portionSize": aliment.portionSize,
        "nutrients": [
            {
                "idNutrient": aliment.nutrients[0].idNutrient,
                "total": aliment.nutrients[0].total
            },
            {
                "idNutrient": aliment.nutrients[1].idNutrient,
                "total": aliment.nutrients[1].total
            },
            {
                "idNutrient": aliment.nutrients[2].idNutrient,
                "total": aliment.nutrients[2].total
            },
            {
                "idNutrient": aliment.nutrients[3].idNutrient,
                "total": aliment.nutrients[3].total
            },
            {
                "idNutrient": aliment.nutrients[4].idNutrient,
                "total": aliment.nutrients[4].total
            },
            {
                "idNutrient": aliment.nutrients[5].idNutrient,
                "total": aliment.nutrients[5].total
            },
            {
                "idNutrient": aliment.nutrients[6].idNutrient,
                "total": aliment.nutrients[6].total
            },
            {
                "idNutrient": aliment.nutrients[7].idNutrient,
                "total": aliment.nutrients[7].total
            }
        ],
        "macros": [
            {
                "idMacro": aliment.nutrients[0].idMacro
            },
            {
                "idMacro": aliment.nutrients[1].idMacro
            },
            {
                "idMacro": aliment.nutrients[2].idMacro
            }
        ]
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", baseURL + "/food");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "37a63b97-84e8-4efe-98ea-44d4c5c4601f");

    xhr.send(data);

}

function editerAliment(aliment) {

    var data = JSON.stringify({
        "name": aliment.name,
        "brand": aliment.brand,
        "portionSize": aliment.portionSize,
        "nutrients": [
            {
                "idNutrient": aliment.nutrients[0].idNutrient,
                "total": aliment.nutrients[0].total
            },
            {
                "idNutrient": aliment.nutrients[1].idNutrient,
                "total": aliment.nutrients[1].total
            },
            {
                "idNutrient": aliment.nutrients[2].idNutrient,
                "total": aliment.nutrients[2].total
            },
            {
                "idNutrient": aliment.nutrients[3].idNutrient,
                "total": aliment.nutrients[3].total
            },
            {
                "idNutrient": aliment.nutrients[4].idNutrient,
                "total": aliment.nutrients[4].total
            },
            {
                "idNutrient": aliment.nutrients[5].idNutrient,
                "total": aliment.nutrients[5].total
            },
            {
                "idNutrient": aliment.nutrients[6].idNutrient,
                "total": aliment.nutrients[6].total
            },
            {
                "idNutrient": aliment.nutrients[7].idNutrient,
                "total": aliment.nutrients[7].total
            }
        ],
        "macros": [
            {
                "idMacro": aliment.nutrients[0].idMacro
            },
            {
                "idMacro": aliment.nutrients[1].idMacro
            },
            {
                "idMacro": aliment.nutrients[2].idMacro
            }
        ]
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PUT", baseURL + "/food");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "37a63b97-84e8-4efe-98ea-44d4c5c4601f");

    xhr.send(data);
}

function listerAliment(data) {

}

function registrerAlimentSelecioner(data) {

}

function effacerAliment(id) {

}

function ouvrirEditForm(id) {

}

function sauvegarderAliment(aliment) {

}

function loadPage() {
    let searchFild = document.getElementById("searchFild");
    let bnteffacerAliment = document.getElementById("bnteffacerAliment");
    searchFild.addEventListener("change", function () {
        console.log("Wow");
    });
    bnteffacerAliment.addEventListener("click", function () {
        effacerAliment(window.idAlimentEffacer);
    })
    loadAliment();
}

function loadAliment() {
    getAllAliment(listerAliment);
}

(function () {
    loadPage();
})();




