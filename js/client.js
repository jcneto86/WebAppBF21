let baseURL = "http://35.183.168.181";
const FIXED_NUMBER_STEP1 = 24;
const MULTIPLY_NUMBER_MAN = 1.0;
const MULTIPLY_NUMBER_WOMAN = 0.9;
const FIXED_NUMBER_STEP2_RANGE1 = 1.0;
const FIXED_NUMBER_STEP2_RANGE2 = 0.95;
const FIXED_NUMBER_STEP2_RANGE3 = 0.90;
const FIXED_NUMBER_STEP2_RANGE4 = 0.85;
let listdailyActivityLevel = [
    {
        "idDailyActivityLevel": 1,
        "description": "Very Light",
        "tax": 1.3
    },
    {
        "idDailyActivityLevel": 2,
        "description": "Light",
        "tax": 1.55
    },
    {
        "idDailyActivityLevel": 3,
        "description": "Moderate",
        "tax": 1.65
    },
    {
        "idDailyActivityLevel": 4,
        "description": "Heavy",
        "tax": 1.8
    }
];
let listClient = null;
let clientSelecioner = {
    "idClient": null,
    "name": null,
    "age": null,
    "gender": null,
    "email": "",
    "phoneNumber": null,
    "height": null,
    "weight": null,
    "bodyFatPercentage": null,
    "bmr": null,
    "tdce": null,
    "clientGoal": {
        "idClientGoal": null
    },
    "activityLevel": {
        "idDailyActivityLevel": null
    },
    "proteinRequirement": {
        "idProteinRequirement": null
    }
};
let clientPourAjouter = {
    "name": null,
    "age": null,
    "gender": null,
    "email": "",
    "phoneNumber": null,
    "height": null,
    "weight": null,
    "bodyFatPercentage": null,
    "bmr": null,
    "tdce": null,
    "clientGoal": {
        "idClientGoal": null
    },
    "activityLevel": {
        "idDailyActivityLevel": null
    },
    "proteinRequirement": {
        "idProteinRequirement": null
    }
};

function getAllClients(callback) {
    let data = null;
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            listClient = JSON.parse(this.responseText);
            callback(listClient);
        }
    });
    xhr.open("GET", baseURL + "/client/list");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "ead70657-64e4-4842-8bad-8c3681ad9d6e");
    xhr.send(data);
}

function getAlldailyActivityLevel() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            listdailyActivityLevel = donne.meta;
        }
    });

    xhr.open("GET", baseURL + "/client/dailyActivityLevel/list");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "c8dd1df9-d0eb-471b-883f-15e092dcb979");

    xhr.send(data);
}


function getClientById(id, callback) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log("WoWoWoWo\n");
            console.log(this.responseText + "\n");
            let donne = JSON.parse(this.responseText);
            callback(donne);
        }
    });

    xhr.open("GET", baseURL + "/client?idClient=" + id);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "e485a582-14b8-4d2b-baaf-246cfbb4d7d4");

    xhr.send(data);
}

function deleteClientByID(id) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", baseURL + "/client?idClient=" + id);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "1123c3fc-a507-418f-9a07-4508aa6c4ca6");

    xhr.send(data);

}

function getClientsByQuery(query, callback) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            listClient = JSON.parse(this.responseText);
            callback(listClient);
        }
    });
    xhr.open("GET", baseURL + "/client/list?query=" + query);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "389a3d00-3e88-42a9-87da-4276ec86e11e");
    xhr.send(data);
    return data;
}

function newClient(client) {
    let data = JSON.stringify({
        "name": client.name,
        "age": client.age,
        "gender": client.gender,
        "email": client.email,
        "phoneNumber": client.phoneNumber,
        "height": client.height,
        "weight": client.weight,
        "bodyFatPercentage": client.bodyFatPercentage,
        "bmr": client.bmr,
        "tdce": client.tdce,
        "clientGoal": {
            "idClientGoal": client.clientGoal.idClientGoal
        },
        "activityLevel": {
            "idDailyActivityLevel": client.activityLevel.idDailyActivityLevel
        },
        "proteinRequirement": {
            "idProteinRequirement": client.proteinRequirement.idProteinRequirement
        }
    });
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            if (donne.httpStatus === 200)
                bootbox.alert(":D");
        }
    });
    xhr.open("POST", baseURL + "/client");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "9aa04ab0-21c3-4040-8064-a2761859dcff");

    xhr.send(data);
}

function editerClient(client) {
    let data = client;
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PUT", baseURL + "/client");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "37af1a1c-6ee7-4bf0-9ddc-9275f96cc11c");

    xhr.send(data);

}

function listerClient(data) {
    let nbRow = 1;
    let nbCol = 1;
    let arrayClients = data.meta;
    let conteiner = document.getElementById("listClient");
    conteiner.innerHTML = "";
    let row = document.createElement("div");
    row.className = "row row-list space-row-projet";
    row.id = nbRow;
    for (let i = 0; i < arrayClients.length; i++) {
        let col = document.createElement("div");
        let card = document.createElement("div");
        col.className = "col-sm col-sm-list max-card-size";
        card.className = "card-element box-shadow-android";
        let input = document.createElement("input");
        input.type = "hidden";
        input.value = arrayClients[i].idClient;
        let nonClient = document.createElement("h6");
        let textNonClient = document.createTextNode(arrayClients[i].name);
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
        buttonEditer.setAttribute("data-target", "#editClient");
        buttonEditer.setAttribute("data-value", arrayClients[i].idClient);
        buttonEffacer.setAttribute("data-toggle", "modal");
        buttonEffacer.setAttribute("data-target", "#effacerClient");
        buttonEffacer.setAttribute("data-value", arrayClients[i].idClient);
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
            window.idClientEditer = id;
            ouvrirEditForm(window.idClientEditer);
            e.preventDefault();
        });
    }
}

function creeClientSelecioner(client) {
    clientSelecioner = {
        "idClient": client.idClient,
        "name": client.name,
        "age": client.age,
        "gender": client.gender,
        "email": client.email,
        "phoneNumber": client.phoneNumber,
        "height": client.height,
        "weight": client.weight,
        "bodyFatPercentage": client.bodyFatPercentage,
        "bmr": client.bmr,
        "tdce": client.tdce,
        "clientGoal": {
            "idClientGoal": client.clientGoal.idClientGoal
        },
        "activityLevel": {
            "idDailyActivityLevel": client.activityLevel.idDailyActivityLevel
        },
        "proteinRequirement": {
            "idProteinRequirement": client.proteinRequirement.idProteinRequirement
        }
    };
}

function ouvrirEditForm(id) {
    for (let i = 0; i < listClient.meta.length; i++) {
        if (listClient.meta[i].idClient === id)
            creeClientSelecioner(listClient.meta[i]);
    }
    let inputEditCleintNon = document.getElementById("inputEditCleintNon");
    let inputEditCourrier = document.getElementById("inputEditCourrier");
    let inputEditCleintTelephone = document.getElementById("inputEditCleintTelephone");
    let inputEditAge = document.getElementById("inputEditAge");
    let inputEditGenre = document.getElementById("inputEditGenre");
    let inputEditHauteur = document.getElementById("inputEditHauteur");
    let inputEditPoids = document.getElementById("inputEditPoids");
    let inputEditObjectif = document.getElementById("inputEditObjectif");
    let inputEditNvActivite = document.getElementById("inputEditNvActivite");
    let inputEditProteinRequirement = document.getElementById("inputEditProteinRequirement");
    let inputEditBMR = document.getElementById("inputEditBMR");
    let inputEditTDCE = document.getElementById("inputEditTDCE");
    let inputEditBodyFatPercentage = document.getElementById("inputEditBodyFatPercentage");
    inputEditCleintNon.value = clientSelecioner.name;
    inputEditCourrier.value = clientSelecioner.email;
    inputEditCleintTelephone.value = clientSelecioner.phoneNumber;
    inputEditAge.value = clientSelecioner.age;
    inputEditGenre.selectedIndex = clientSelecioner.gender === "M" ? "1" : "2";
    inputEditBodyFatPercentage.value = clientSelecioner.bodyFatPercentage;
    inputEditHauteur.value = clientSelecioner.height;
    inputEditPoids.value = clientSelecioner.weight;
    inputEditObjectif.selectedIndex = clientSelecioner.clientGoal.idClientGoal;
    inputEditNvActivite.selectedIndex = clientSelecioner.activityLevel.idDailyActivityLevel;
    inputEditProteinRequirement.selectedIndex = clientSelecioner.proteinRequirement.idProteinRequirement;
    inputEditBMR.value = calBMR(clientSelecioner);
    inputEditTDCE.value = calTDCE(clientSelecioner);
}


function sauvegarderClient() {
    let inputEditCleintNon = document.getElementById("inputEditCleintNon");
    let inputEditCourrier = document.getElementById("inputEditCourrier");
    let inputEditCleintTelephone = document.getElementById("inputEditCleintTelephone");
    let inputEditAge = document.getElementById("inputEditAge");
    let inputEditGenre = document.getElementById("inputEditGenre");
    let inputEditHauteur = document.getElementById("inputEditHauteur");
    let inputEditPoids = document.getElementById("inputEditPoids");
    let inputEditObjectif = document.getElementById("inputEditObjectif");
    let inputEditNvActivite = document.getElementById("inputEditNvActivite");
    let inputEditProteinRequirement = document.getElementById("inputEditProteinRequirement");
    let inputEditBodyFatPercentage = document.getElementById("inputEditBodyFatPercentage");
    clientSelecioner.name = inputEditCleintNon.value;
    clientSelecioner.age = Number(inputEditAge.value);
    clientSelecioner.gender = inputEditGenre.value;
    clientSelecioner.email = inputEditCourrier.value;
    clientSelecioner.phoneNumber = inputEditCleintTelephone.value;
    clientSelecioner.height = Number(inputEditHauteur.value);
    clientSelecioner.weight = Number(inputEditPoids.value);
    clientSelecioner.bodyFatPercentage = Number(inputEditBodyFatPercentage.value);
    clientSelecioner.clientGoal.idClientGoal = Number(inputEditObjectif.value);
    clientSelecioner.activityLevel.idDailyActivityLevel = Number(inputEditNvActivite.value);
    clientSelecioner.proteinRequirement.idProteinRequirement = Number(inputEditProteinRequirement.value);
    clientSelecioner.bmr = Number(calBMR(clientSelecioner));
    clientSelecioner.tdce = Number(calTDCE(clientSelecioner));


}

function calBMR(client) {
    let bmr;
    let step1;

    if (client.gender === "M") {
        step1 = MULTIPLY_NUMBER_MAN * client.weight * FIXED_NUMBER_STEP1;
    } else {
        step1 = MULTIPLY_NUMBER_WOMAN * client.weight * FIXED_NUMBER_STEP1;
    }

    if (client.gender === 'M') {
        if (client.bodyFatPercentage >= 10 && client.bodyFatPercentage <= 14) {
            bmr = step1 * FIXED_NUMBER_STEP2_RANGE1;
        } else if (client.bodyFatPercentage > 14 && client.bodyFatPercentage <= 20) {
            bmr = step1 * FIXED_NUMBER_STEP2_RANGE2;
        } else if (client.bodyFatPercentage > 20 && client.bodyFatPercentage <= 28) {
            bmr = step1 * FIXED_NUMBER_STEP2_RANGE3;
        } else if (client.bodyFatPercentage > 28) {
            bmr = step1 * FIXED_NUMBER_STEP2_RANGE4;
        } else {
            bmr = null;
        }
    } else {
        if (client.bodyFatPercentage >= 14 && client.bodyFatPercentage <= 18) {
            bmr = step1 * FIXED_NUMBER_STEP2_RANGE1;
        } else if (client.bodyFatPercentage > 18 && client.bodyFatPercentage <= 28) {
            bmr = step1 * FIXED_NUMBER_STEP2_RANGE2;
        } else if (client.bodyFatPercentage > 28 && client.bodyFatPercentage <= 38) {
            bmr = step1 * FIXED_NUMBER_STEP2_RANGE3;
        } else if (client.bodyFatPercentage > 38) {
            bmr = step1 * FIXED_NUMBER_STEP2_RANGE4;
        } else {
            bmr = null;
        }
    }
    return bmr.toFixed(2);

}


function calTDCE(client) {
    let idDailyActivityLevel = client.activityLevel.idDailyActivityLevel;
    let tax = null;

    listdailyActivityLevel.forEach(dailyActivityLevel => {
        if (dailyActivityLevel.idDailyActivityLevel === idDailyActivityLevel) {
            tax = dailyActivityLevel.tax;
        }
    });

    return (client.bmr * tax).toFixed(2);

}

function ajouterClient() {
    let inputAjouterCleintNon = document.getElementById("inputAjouterCleintNon");
    let inputAjouterCourrier = document.getElementById("inputAjouterCourrier");
    let inputAjouterCleintTelephone = document.getElementById("inputAjouterCleintTelephone");
    let inputAjouterAge = document.getElementById("inputAjouterAge");
    let inputAjouterGenre = document.getElementById("inputAjouterGenre");
    let inputAjouterHauteur = document.getElementById("inputAjouterHauteur");
    let inputAjouterPoids = document.getElementById("inputAjouterPoids");
    let inputAjouterObjectif = document.getElementById("inputAjouterObjectif");
    let inputAjouterNvActivite = document.getElementById("inputAjouterNvActivite");
    let inputAjouterBodyFatPercentage = document.getElementById("inputAjouterBodyFatPercentage");
    let inputAjouterProteinRequirement = document.getElementById("inputAjouterProteinRequirement");
    clientPourAjouter.name = inputAjouterCleintNon.value;
    clientPourAjouter.age = Number(inputAjouterAge.value);
    clientPourAjouter.gender = inputAjouterGenre.value;
    clientPourAjouter.email = inputAjouterCourrier.value;
    clientPourAjouter.phoneNumber = inputAjouterCleintTelephone.value;
    clientPourAjouter.height = Number(inputAjouterHauteur.value);
    clientPourAjouter.weight = Number(inputAjouterPoids.value);
    clientPourAjouter.bodyFatPercentage = Number(inputAjouterBodyFatPercentage.value);
    clientPourAjouter.clientGoal.idClientGoal = Number(inputAjouterObjectif.value);
    clientPourAjouter.activityLevel.idDailyActivityLevel = Number(inputAjouterNvActivite.value);
    clientPourAjouter.proteinRequirement.idProteinRequirement = Number(inputAjouterProteinRequirement.value);
    clientPourAjouter.bmr = Number(calBMR(clientPourAjouter));
    clientPourAjouter.tdce = Number(calTDCE(clientPourAjouter));
    newClient(clientPourAjouter);
}


function loadPage() {
    let searchFild = document.getElementById("searchFild");
    let bnteffacerClient = document.getElementById("bnteffacerClient");
    let btnAjouterClient = document.getElementById("btnAjouterClient");
    searchFild.addEventListener("change", function () {
        console.log("Wow");
    });
    bnteffacerClient.addEventListener("click", function () {
        deleteClientByID(window.idClientEffacer);
        bootbox.alert("Hello world!");
    });
    btnAjouterClient.addEventListener("click", ajouterClient);
    getAlldailyActivityLevel();
    loadClients();
}

function loadClients() {
    getAllClients(listerClient);
}

(function () {
    loadPage();
})();




