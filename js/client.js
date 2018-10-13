let baseURL = "http://35.183.168.181";

let serverReturn = {
    "httpStatus": 3040,
    "meta": [
        {
            "idClient": 1,
            "name": "Henrique Henrique Henrique Henrique 1",
            "age": 25,
            "gender": "M",
            "email": "henrique@bf21.com",
            "phoneNumber": "111111",
            "height": 170,
            "weight": 75,
            "bodyFatPercentage": 45,
            "bmr": 75,
            "tdce": 75,
            "clientGoal": {
                "idClientGoal": 1,
                "goal": "Lose weight"
            },
            "activityLevel": {
                "idDailyActivityLevel": 1,
                "description": "Very Light",
                "tax": 1.3
            },
            "proteinRequirement": {
                "idProteinRequirement": 1,
                "description": "Sedentary Adult (RDA)",
                "tax": 0.4
            },
            "creationDate": "02/10/2018 07:48:56"
        },
        {
            "idClient": 2,
            "name": "Henrique 22222",
            "age": 25,
            "gender": "M",
            "email": "henrique@bf21.com",
            "phoneNumber": "111111",
            "height": 170,
            "weight": 75,
            "bodyFatPercentage": 45,
            "bmr": 75,
            "tdce": 75,
            "clientGoal": {
                "idClientGoal": 1,
                "goal": "Lose weight"
            },
            "activityLevel": {
                "idDailyActivityLevel": 1,
                "description": "Very Light",
                "tax": 1.3
            },
            "proteinRequirement": {
                "idProteinRequirement": 1,
                "description": "Sedentary Adult (RDA)",
                "tax": 0.4
            },
            "creationDate": "02/10/2018 07:48:56"
        },
        {
            "idClient": 3,
            "name": "Henrique 3",
            "age": 25,
            "gender": "M",
            "email": "henrique@bf21.com",
            "phoneNumber": "111111",
            "height": 170,
            "weight": 75,
            "bodyFatPercentage": 45,
            "bmr": 75,
            "tdce": 75,
            "clientGoal": {
                "idClientGoal": 1,
                "goal": "Lose weight"
            },
            "activityLevel": {
                "idDailyActivityLevel": 1,
                "description": "Very Light",
                "tax": 1.3
            },
            "proteinRequirement": {
                "idProteinRequirement": 1,
                "description": "Sedentary Adult (RDA)",
                "tax": 0.4
            },
            "creationDate": "02/10/2018 07:48:56"
        },
        {
            "idClient": 4,
            "name": "Henrique 1",
            "age": 25,
            "gender": "M",
            "email": "henrique@bf21.com",
            "phoneNumber": "111111",
            "height": 170,
            "weight": 75,
            "bodyFatPercentage": 45,
            "bmr": 75,
            "tdce": 75,
            "clientGoal": {
                "idClientGoal": 1,
                "goal": "Lose weight"
            },
            "activityLevel": {
                "idDailyActivityLevel": 1,
                "description": "Very Light",
                "tax": 1.3
            },
            "proteinRequirement": {
                "idProteinRequirement": 1,
                "description": "Sedentary Adult (RDA)",
                "tax": 0.4
            },
            "creationDate": "02/10/2018 07:48:56"
        },
        {
            "idClient": 5,
            "name": "Henrique 1",
            "age": 25,
            "gender": "M",
            "email": "henrique@bf21.com",
            "phoneNumber": "111111",
            "height": 170,
            "weight": 75,
            "bodyFatPercentage": 45,
            "bmr": 75,
            "tdce": 75,
            "clientGoal": {
                "idClientGoal": 1,
                "goal": "Lose weight"
            },
            "activityLevel": {
                "idDailyActivityLevel": 1,
                "description": "Very Light",
                "tax": 1.3
            },
            "proteinRequirement": {
                "idProteinRequirement": 1,
                "description": "Sedentary Adult (RDA)",
                "tax": 0.4
            },
            "creationDate": "02/10/2018 07:48:56"
        },
        {
            "idClient": 6,
            "name": "Henrique 1",
            "age": 25,
            "gender": "M",
            "email": "henrique@bf21.com",
            "phoneNumber": "111111",
            "height": 170,
            "weight": 75,
            "bodyFatPercentage": 45,
            "bmr": 75,
            "tdce": 75,
            "clientGoal": {
                "idClientGoal": 1,
                "goal": "Lose weight"
            },
            "activityLevel": {
                "idDailyActivityLevel": 1,
                "description": "Very Light",
                "tax": 1.3
            },
            "proteinRequirement": {
                "idProteinRequirement": 1,
                "description": "Sedentary Adult (RDA)",
                "tax": 0.4
            },
            "creationDate": "02/10/2018 07:48:56"
        }
    ],
    "message": "Client list found successfully."
};

function getAllClients(callback) {
    let data = null;
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText + "\n");
            let donne = JSON.parse(this.responseText);
            callback(serverReturn);
        }
    });
    xhr.open("GET", baseURL + "/client/list");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "ead70657-64e4-4842-8bad-8c3681ad9d6e");
    xhr.send(data);
}

function getClientById(id) {

}

function effacerClientByID(id) {
    let client = document.getElementById("client-" + id);

}

function getClientsByQuery(id) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("GET", baseURL + "/client/list?query=" + id);
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
    xhr.open("POST", "http://35.183.168.181:80/client");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "0c4f47bd-afaa-45ea-b141-36ef0a7a55c2");

    xhr.send(data);
}

function listClient(data) {
    let nbRow = 1;
    let nbCol = 1;
    let clients = data.meta;
    let arrayClients = clients;
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
        buttonEditer.className = "btn bg-transparent";
        let iconPen = document.createElement("i");
        iconPen.className = "fas fa-pen";
        let iconTrash = document.createElement("i");
        iconTrash.className = "fas fa-trash-alt";
        buttonEditer.setAttribute("data-toggle", "modal");
        buttonEditer.setAttribute("data-target", "#editClient");
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
    let btnEditer = document.getElementsByClassName("btn-effacer");
    for (let i = 0; i < btnEditer.length; i++) {
        btnEditer[i].addEventListener("click", function (e) {
            let id = e.currentTarget.getAttribute("data-value");
            // $(this)
            window.idClientEffacer = id;
            alert(window.idClientEffacer);
            e.preventDefault();
        });
    }
}

function ouvrirEditForm(data) {
    alert(data);
}




