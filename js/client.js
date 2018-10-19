let baseURL = "http://35.183.168.181";
let listClient;
let clientSelecioner = {
    "name": "",
    "age": "",
    "gender": "",
    "email": "",
    "phoneNumber": "",
    "height": "",
    "weight": "",
    "bodyFatPercentage": "",
    "bmr": "",
    "tdce": "",
    "clientGoal": {
        "idClientGoal": ""
    },
    "activityLevel": {
        "idDailyActivityLevel": ""
    },
    "proteinRequirement": {
        "idProteinRequirement": ""
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

function getClientById(id, callback) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log("WoWoWoWo\n");
            console.log(this.responseText + "\n");
            let donne  = JSON.parse(this.responseText);
            callback(donne);
        }
    });

    xhr.open("GET", baseURL + "/client?idClient=" + id);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "e485a582-14b8-4d2b-baaf-246cfbb4d7d4");

    xhr.send(data);
}

function effacerClientByID(id) {
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

function ajouterClient(client) {
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
            console.log(this.responseText);
        }
    });
    xhr.open("POST", baseURL + "/client");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "0c4f47bd-afaa-45ea-b141-36ef0a7a55c2");

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
    let baseClients = data.meta;
    let arrayClients = baseClients;
    let conteiner = document.getElementById("listClient");
    conteiner.innerHTML = "";
    let row = document.createElement("div");
    row.className = "row row-list space-row-projet";
    row.id = nbRow;
    for (let i = 0; i < arrayClients.length; i++) {
        let col = document.createElement("div");
        let card = document.createElement("div");
        col.className = "col-sm col-sm-list";
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
        if (nbCol > 3 || arrayClients.length < 2) {
            nbRow++;
            nbCol = 1;
            conteiner.append(row);
            row = null;
            row = document.createElement("div");
            row.className = "row row-list space-row-projet";
            row.id = nbRow;
        }
    }
    let btnEffacer = document.getElementsByClassName("btn-effacer");
    for (let i = 0; i < btnEffacer.length; i++) {
        btnEffacer[i].addEventListener("click", function (e) {
            let id = e.currentTarget.getAttribute("data-value");
            // $(this)
            window.idClientEffacer = id;
            effacerClient(window.idClientEffacer);
            e.preventDefault();
        });
    }
    let btnEditer = document.getElementsByClassName("btn-editer");
    for (let i = 0; i < btnEditer.length; i++) {
        btnEditer[i].addEventListener("click", function (e) {
            let id = e.currentTarget.getAttribute("data-value");
            // $(this)
            window.idClientEditer = id;
            window.setTimeout(function () {ouvrirEditForm(window.idClientEditer)}, 300);
            e.preventDefault();
        });
    }
}

function registrerClientSelecioner(data) {
    clientSelecioner = data.meta;
}

function effacerClient(id) {
alert(id);
}

function ouvrirEditForm(id) {
    getClientById(id, registrerClientSelecioner);
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
    inputEditCleintNon.value = clientSelecioner.name;
    inputEditCourrier.value = clientSelecioner.email;
    inputEditCleintTelephone.value = clientSelecioner.phoneNumber;
    inputEditAge.value = clientSelecioner.age;
    inputEditGenre.selectedIndex = retounSelectSexe(clientSelecioner.gender);
    inputEditHauteur.value = clientSelecioner.height;
    inputEditPoids.value = clientSelecioner.weight;
    inputEditObjectif.selectedIndex = clientSelecioner.clientGoal.idClientGoal;
    inputEditNvActivite.selectedIndex = clientSelecioner.activityLevel.idDailyActivityLevel;
    inputEditProteinRequirement.selectedIndex = clientSelecioner.proteinRequirement.idProteinRequirement;
    inputEditBMR.value = 3434;
    inputEditTDCE.value = 3434;

}

function retounSelectSexe(s) {
        if (s === "F")
            return 2;
        else
            return 1;

}



function sauvegarderClient(client) {

}



function loadPage() {
    let searchFild = document.getElementById("searchFild");
    let bnteffacerClient = document.getElementById("bnteffacerClient");
    searchFild.addEventListener("change", function () {
        console.log("Wow");
    });
    bnteffacerClient.addEventListener("click", function () {
        effacerClient(window.idClientEffacer);
    })
    loadClients();
}

function loadClients() {
    getAllClients(listerClient);
}

(function () {
    loadPage();
})();




