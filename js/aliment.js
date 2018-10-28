let baseURL = "http://35.183.168.181";
const coachOnline = JSON.parse(localStorage.getItem('coachOnline'));
let listAliment;
let alimentSelecioner = {
    "idFood": null,
    "name": null,
    "brand": null,
    "portionSize": null,
    "nutrients": [
        {
            "idNutrient": 1,
            "total": 0
        },
        {
            "idNutrient": 2,
            "total": 0
        },
        {
            "idNutrient": 3,
            "total": 0
        },
        {
            "idNutrient": 4,
            "total": 0
        },
        {
            "idNutrient": 5,
            "total": 0
        },
        {
            "idNutrient": 6,
            "total": 0
        },
        {
            "idNutrient": 7,
            "total": 0
        },
        {
            "idNutrient": 8,
            "total": 0
        }
    ],
    "macros": [
        {
            "idMacro": 1,
            "macro": "Fat"
        },
        {
            "idMacro": 2,
            "macro": "Carbohydrate"
        },
        {
            "idMacro": 3,
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

    xhr.open("GET", baseURL + "/food?idFood=" + id);
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
            let donne = JSON.parse(this.responseText);
            if (donne.httpStatus === 202) {
                bootbox.alert("L'aliment a été supprimé.");
                $("#effacerClient").modal('hide');
                loadPage();
            } else {
                bootbox.alert("Erreur pour supprimé l'aliment. Veuillez réessayer ou contactez votre administrateur du système.");
            }
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

function newAliment(aliment) {
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

    var data = JSON.stringify(aliment);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            if (donne.httpStatus === 200) {
                bootbox.alert("Le client a été sauvegarder.");
                $("#editAliment").modal('hide');
                loadPage();
            } else {
                bootbox.alert("Erreur lors de la sauvegarde. Veuillez réessayer ou contactez votre administrateur système.");
            }
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
        card.className = "card-element box-shadow-android background-aliment";
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

function creeAlimentSelecioner(aliment) {
    if (aliment.macro != null) {
        alimentSelecioner = {
            "idFood": aliment.idFood,
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
                    "idMacro": aliment.nutrients[0].idMacro != null ? aliment.nutrients[0].idMacro : null,
                },
                {
                    "idMacro": aliment.nutrients[1].idMacro != null ? aliment.nutrients[1].idMacro : null,
                },
                {
                    "idMacro": aliment.nutrients[2].idMacro != null ? aliment.nutrients[2].idMacro : null,
                }
            ]
        };
    } else {
        alimentSelecioner = {
            "idFood": aliment.idFood,
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
            ]
        };
    }
}

function ouvrirEditForm(id) {
    for (let i = 0; i < listAliment.meta.length; i++) {
        if (listAliment.meta[i].idFood === Number(id)) {
            creeAlimentSelecioner(listAliment.meta[i]);
        }
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
    let editEditAlimentMacroGraisse = document.getElementById("editEditAlimentMacroGraisse");
    let editEditAlimentMacroGlucides = document.getElementById("editEditAlimentMacroGlucides");
    let editEditAlimentMacroProteine = document.getElementById("editEditAlimentMacroProteine");
    editEditIdAliment.setAttribute("value", alimentSelecioner.idFood);
    editEditAlimentNon.value = alimentSelecioner.name;
    editEditAlimentMarque.value = alimentSelecioner.brand;
    editEditAlimentPortionSize.value = alimentSelecioner.portionSize;
    editEditAlimentGraisse.value = alimentSelecioner.nutrients[0].total;
    editEditAlimentGlucides.value = alimentSelecioner.nutrients[1].total;
    editEditAlimentProteine.value = alimentSelecioner.nutrients[2].total;
    editEditAlimentFibre.value = alimentSelecioner.nutrients[3].total;
    editEditAlimentSucre.value = alimentSelecioner.nutrients[4].total;
    editEditAlimentSodium.value = alimentSelecioner.nutrients[5].total;
    editEditAlimentCholesterol.value = alimentSelecioner.nutrients[6].total;
    editEditAlimentIndexGlycemique.value = alimentSelecioner.nutrients[7].total;
    editEditAlimentMacroGraisse.checked = alimentSelecioner.macros[0] != null;
    editEditAlimentMacroGlucides.checked = alimentSelecioner.macros[1] != null;
    editEditAlimentMacroProteine.checked = alimentSelecioner.macros[2] != null;
}

function sauvegarderAliment() {
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
    let editEditAlimentMacroGraisse = document.getElementById("editEditAlimentMacroGraisse");
    let editEditAlimentMacroGlucides = document.getElementById("editEditAlimentMacroGlucides");
    let editEditAlimentMacroProteine = document.getElementById("editEditAlimentMacroProteine");
    alimentSelecioner.idFood = editEditIdAliment.value;
    alimentSelecioner.name = editEditAlimentNon.value;
    alimentSelecioner.brand = editEditAlimentMarque.value;
    alimentSelecioner.portionSize = editEditAlimentPortionSize.value;
    alimentSelecioner.nutrients[0].total = editEditAlimentGraisse.value;
    alimentSelecioner.nutrients[1].total = editEditAlimentGlucides.value;
    alimentSelecioner.nutrients[2].total = editEditAlimentProteine.value;
    alimentSelecioner.nutrients[3].total = editEditAlimentFibre.value;
    alimentSelecioner.nutrients[4].total = editEditAlimentSucre.value;
    alimentSelecioner.nutrients[5].total = editEditAlimentSodium.value;
    alimentSelecioner.nutrients[6].total = editEditAlimentCholesterol.value;
    alimentSelecioner.nutrients[7].total = editEditAlimentIndexGlycemique.value;
    alimentSelecioner.macros[0].idMacro = editEditAlimentMacroGraisse.checked ? 1 : null;
    alimentSelecioner.macros[1].idMacro = editEditAlimentMacroGlucides.checked ? 2 : null;
    alimentSelecioner.macros[2].idMacro = editEditAlimentMacroProteine.checked ? 3 : null;
    editerAliment(alimentSelecioner);
}

function ajouterAliment() {

}

function searchAliment(string) {
    let listSearchtaAliment = [];
    string.toUpperCase();
    for (let i = 0; i < listAliment.length; i++) {
        let strintClient = listAliment[i].name;
        if (strintClient.indexOf(string) !== -1) {
            listSearchtaAliment.push(listAliment[i]);
        }
    }
    listerClient(listSearchtaAliment);
}

function loadPage() {
    let searchFild = document.getElementById("searchFild");
    let bnteffacerAliment = document.getElementById("bnteffacerAliment");
    let btnSauvegarderAliment = document.getElementById("btnSauvegarderAliment");
    let btnAjouterAliment = document.getElementById("btnAjouterClient");
    let btnSearchFild = document.getElementById("btnSearchFild");
    let btnDeconnection = document.getElementById("btnDeconnection");
    btnDeconnection.addEventListener("click", function () {
        localStorage.removeItem('coachOnline');
        window.location.replace(baseURLSite + "index.html");
    });
    btnSearchFild.addEventListener("click", function () {
        console.log("Wow");
        let string = searchFild.value;
        searchAliment(string);
    });
    bnteffacerAliment.addEventListener("click", function () {
        deleteAlimentByID(window.idAlimentEffacer);
    });
    btnSauvegarderAliment.addEventListener("click", function () {
        sauvegarderAliment();
    });
    btnAjouterAliment.addEventListener("click", ajouterAliment);

    loadAliment();
}

function loadAliment() {
    getAllAliment(listerAliment);
}

(function () {
    loadPage();
})();




