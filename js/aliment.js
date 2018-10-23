let baseURL = "http://35.183.168.181";
let listAliment;
let alimentSelecioner = {
    "idFood": null,
    "name": null,
    "brand": null,
    "portionSize": null,
    "nutrients": [
        {
            "idNutrient": null,
            "total": 0
        },
        {
            "idNutrient": null,
            "total": 0
        },
        {
            "idNutrient": null,
            "total": 0
        },
        {
            "idNutrient": null,
            "total": 0
        },
        {
            "idNutrient": null,
            "total": 0
        },
        {
            "idNutrient": null,
            "total": 0
        },
        {
            "idNutrient": null,
            "total": 0
        },
        {
            "idNutrient": null,
            "total": 0
        }
    ],
    "macros": [
        {
            "idMacro": null,
            "macro": "Fat"
        },
        {
            "idMacro": null,
            "macro": "Carbohydrate"
        },
        {
            "idMacro": null,
            "macro": "Protein"
        }
    ]
};
let alimentPourAjouter = {
    "idFood": null,
    "name": null,
    "brand": null,
    "portionSize": null,
    "nutrients": [
        {
            "idNutrient": null,
            "total": null
        },
        {
            "idNutrient": null,
            "total": null
        },
        {
            "idNutrient": null,
            "total": null
        },
        {
            "idNutrient": null,
            "total": null
        },
        {
            "idNutrient": null,
            "total": null
        },
        {
            "idNutrient": null,
            "total": null
        },
        {
            "idNutrient": null,
            "total": null
        },
        {
            "idNutrient": null,
            "total": null
        }
    ],
    "macros": [
        {
            "idMacro": null,
            "macro": "Fat"
        },
        {
            "idMacro": null,
            "macro": "Carbohydrate"
        },
        {
            "idMacro": null,
            "macro": "Protein"
        }
    ]
};

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

function deleteAlimentByID(id) {
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
    let nbRow = 1;
    let nbCol = 1;
    let arrayAliment = data.meta;
    let conteiner = document.getElementById("listAliment");
    conteiner.innerHTML = "";
    let row = document.createElement("div");
    row.className = "row row-list space-row-projet";
    row.id = nbRow;
    for (let i = 0; i < arrayAliment.length; i++) {
        let col = document.createElement("div");
        let card = document.createElement("div");
        col.className = "col-sm col-sm-list max-card-size";
        card.className = "card-element box-shadow-android max-card-size";
        let input = document.createElement("input");
        input.type = "hidden";
        input.value = arrayAliment[i].idFood;
        let nonClient = document.createElement("h6");
        let textNonClient = document.createTextNode(arrayAliment[i].name);
        nonClient.append(textNonClient);
        let cardBottomBar = document.createElement("div");
        cardBottomBar.className = "card-element-bottom-bar float-right";
        let buttonEffacer = document.createElement("button");
        buttonEffacer.className = "btn bg-transparent btn-effacer";
        let buttonEditer = document.createElement("button");
        buttonEditer.className = "btn bg-transparent btn-editer";
        let iconPen = document.createElement("i");
        iconPen.className = "fas fa-pen";
        let iconTrash = document.createElement("i");
        iconTrash.className = "fas fa-trash-alt";
        buttonEditer.setAttribute("data-toggle", "modal");
        buttonEditer.setAttribute("data-target", "#editAliment");
        buttonEditer.setAttribute("data-value", arrayAliment[i].idFood);
        buttonEffacer.setAttribute("data-toggle", "modal");
        buttonEffacer.setAttribute("data-target", "#effacerAliment");
        buttonEffacer.setAttribute("data-value", arrayAliment[i].idFood);
        buttonEffacer.append(iconTrash);
        buttonEditer.append(iconPen);
        cardBottomBar.append(buttonEditer);
        cardBottomBar.append(buttonEffacer);
        card.append(input);
        card.append(nonClient);
        card.append(cardBottomBar);
        col.append(card);
        row.append(col);
        nbCol++;
        if (nbCol > 3) {
            nbRow++;
            nbCol = 1;
            conteiner.append(row);
            row = null;
            row = document.createElement("div");
            row.className = "row row-list space-row-projet";
            row.id = nbRow;
        } else {
            conteiner.append(row);
        }
    }
    let btnEffacer = document.getElementsByClassName("btn-effacer");
    for (let i = 0; i < btnEffacer.length; i++) {
        btnEffacer[i].addEventListener("click", function (e) {
            let id = e.currentTarget.getAttribute("data-value");
            // $(this)
            window.idClientEffacer = id;
            e.preventDefault();
        });
    }
    let btnEditer = document.getElementsByClassName("btn-editer");
    for (let i = 0; i < btnEditer.length; i++) {
        btnEditer[i].addEventListener("click", function (e) {
            let id = e.currentTarget.getAttribute("data-value");
            // $(this)
            window.idAlimentEditer = id;
            ouvrirEditForm(window.idAlimentEditer);
            e.preventDefault();
        });
    }

}

function registrerAlimentSelecioner(aliment) {
    let alimentSelecioner = {
        "idFood": null,
        "name": null,
        "brand": null,
        "portionSize": null,
        "nutrients": [
            {
                "idNutrient": null,
                "total": null
            },
            {
                "idNutrient": null,
                "total": null
            },
            {
                "idNutrient": null,
                "total": null
            },
            {
                "idNutrient": null,
                "total": null
            },
            {
                "idNutrient": null,
                "total": null
            },
            {
                "idNutrient": null,
                "total": null
            },
            {
                "idNutrient": null,
                "total": null
            },
            {
                "idNutrient": null,
                "total": null
            }
        ],
        "macros": [
            {
                "idMacro": aliment.macros[0].idMacro === null ? 0 : aliment.macros[0].idMacro,
            },
            {
                "idMacro": aliment.macros[1].idMacro === null ? 0 : aliment.macros[0].idMacro,
            },
            {
                "idMacro": aliment.macros[2].idMacro === null ? 0 : aliment.macros[0].idMacro,
            }
        ]
    };


}

function ouvrirEditForm(id) {
    for (let i = 0; i < listAliment.meta.length; i++) {
        if (listAliment.meta[i].idFood === id)
            registrerAlimentSelecioner(listAliment.meta[i]);
    }
    let editEditIdAliment = document.getElementById("editEditIdAliment");
    let editEditAlimentNon = document.getElementById("editEditAlimentNon");
    let editEditAlimentMarque = document.getElementById("editEditAlimentMarque");
    let editEditAlimentPortionSize = document.getElementById("editEditAlimentPortionSize");
    let editEditAlimentGraisse = document.getElementById("editEditAlimentGraisse");
    let editEditAlimentGlucides = document.getElementById("editEditAlimentGlucides");
    let editEditAlimentProteine = document.getElementById("editEditAlimentProteine");
    let editEditAlimentFibre = document.getElementById("editEditAlimentFibre");
    let editEditAlimentSucre = document.getElementById("editEditAlimentSucre");
    let editEditAlimentSodium = document.getElementById("editEditAlimentSodium");
    let editEditAlimentCholesterol = document.getElementById("editEditAlimentCholesterol");
    let editEditAlimentIndexGlycemique = document.getElementById("editEditAlimentIndexGlycemique");

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
        deleteAlimentByID(window.idAlimentEffacer);
    })
    loadAliment();
}

function loadAliment() {
    getAllAliment(listerAliment);
}

(function () {
    loadPage();
})();




