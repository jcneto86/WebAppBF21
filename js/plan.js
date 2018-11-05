let baseURL = "http://35.183.168.181";
let baseURLSite = "http://localhost:63342/WebAppBF21";
const coachOnline = JSON.parse(localStorage.getItem('coachOnline'));
let idClientOuvrirPlan = localStorage.getItem('idClientOuvrirPlan');
let clientSelecione;
let listPlan;
let listAliments;
let planSelecioner = {
    "idFoodPlan": 52,
    "planName": "PLAN_02",
    "client": {
        "idClient": 146,
        "name": "B-TESTE_ADMIN",
        "age": 30,
        "gender": "M",
        "email": "test@tet",
        "phoneNumber": "178654",
        "height": 170,
        "weight": 85,
        "bodyFatPercentage": 45,
        "bmr": 1734,
        "tdce": 2254,
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
        "creationDate": "27/10/2018 06:22:37",
        "modificationDate": "27/10/2018 06:22:59"
    },
    "coach": {
        "idCoach": 10,
        "name": "Admin",
        "login": "admin",
        "password": "21232f297a57a5a743894a0e4a801fc3",
        "email": "teste@teste.com",
        "phoneNumber": "123",
        "creationDate": "16/10/2018 07:07:18",
        "modificationDate": "25/10/2018 06:18:43"
    },
    "planDays": [
        {
            "idPlanDay": 138,
            "day": "05/11/2018",
            "planMeals": [
                {
                    "idPlanMeal": 564,
                    "name": "Repas 1",
                    "order": 1,
                    "foods": [
                        {
                            "idFood": 6,
                            "name": "Abacate",
                            "brand": "",
                            "portionSize": 50,
                            "nutrients": [
                                {
                                    "idNutrient": 7,
                                    "name": "Cholesterol",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 1,
                                    "name": "Fat",
                                    "isMacro": true,
                                    "total": 10
                                },
                                {
                                    "idNutrient": 3,
                                    "name": "Protein",
                                    "isMacro": true,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 8,
                                    "name": "Glycemic Index",
                                    "isMacro": false,
                                    "total": 150
                                },
                                {
                                    "idNutrient": 5,
                                    "name": "Sugar",
                                    "isMacro": false,
                                    "total": 90
                                },
                                {
                                    "idNutrient": 6,
                                    "name": "Sodium",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 4,
                                    "name": "Fibre",
                                    "isMacro": false,
                                    "total": 70
                                },
                                {
                                    "idNutrient": 2,
                                    "name": "Carbohydrate",
                                    "isMacro": true,
                                    "total": 30
                                }
                            ],
                            "macros": [
                                {
                                    "idMacro": 3,
                                    "macro": "Protein"
                                }
                            ],
                            "creationDate": "17/10/2018 03:21:40",
                            "modificationDate": "17/10/2018 03:23:01"
                        },
                        {
                            "idFood": 17,
                            "name": "Kiwi",
                            "brand": "",
                            "portionSize": 30,
                            "nutrients": [
                                {
                                    "idNutrient": 3,
                                    "name": "Protein",
                                    "isMacro": true,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 5,
                                    "name": "Sugar",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 1,
                                    "name": "Fat",
                                    "isMacro": true,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 8,
                                    "name": "Glycemic Index",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 6,
                                    "name": "Sodium",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 2,
                                    "name": "Carbohydrate",
                                    "isMacro": true,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 4,
                                    "name": "Fibre",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 7,
                                    "name": "Cholesterol",
                                    "isMacro": false,
                                    "total": 0
                                }
                            ],
                            "macros": [
                                {
                                    "idMacro": 3,
                                    "macro": "Protein"
                                }
                            ],
                            "creationDate": "25/10/2018 07:11:33",
                            "modificationDate": "25/10/2018 07:11:47"
                        },
                        {
                            "idFood": 18,
                            "name": "Poitrine de poulet sans peau",
                            "brand": "Seu Zé",
                            "portionSize": 113,
                            "nutrients": [
                                {
                                    "idNutrient": 5,
                                    "name": "Sugar",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 3,
                                    "name": "Protein",
                                    "isMacro": true,
                                    "total": 22
                                },
                                {
                                    "idNutrient": 6,
                                    "name": "Sodium",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 4,
                                    "name": "Fibre",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 7,
                                    "name": "Cholesterol",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 2,
                                    "name": "Carbohydrate",
                                    "isMacro": true,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 1,
                                    "name": "Fat",
                                    "isMacro": true,
                                    "total": 3
                                },
                                {
                                    "idNutrient": 8,
                                    "name": "Glycemic Index",
                                    "isMacro": false,
                                    "total": 0
                                }
                            ],
                            "creationDate": "26/10/2018 12:58:13"
                        }
                    ],
                    "creationDate": "27/10/2018 06:25:15",
                    "modificationDate": "27/10/2018 06:26:05"
                },
                {
                    "idPlanMeal": 565,
                    "name": "Repas 2",
                    "order": 2,
                    "foods": [
                        {
                            "idFood": 9,
                            "name": "limao",
                            "brand": "",
                            "portionSize": 5,
                            "nutrients": [
                                {
                                    "idNutrient": 7,
                                    "name": "Cholesterol",
                                    "isMacro": false,
                                    "total": 20
                                },
                                {
                                    "idNutrient": 4,
                                    "name": "Fibre",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 1,
                                    "name": "Fat",
                                    "isMacro": true,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 3,
                                    "name": "Protein",
                                    "isMacro": true,
                                    "total": 6
                                },
                                {
                                    "idNutrient": 2,
                                    "name": "Carbohydrate",
                                    "isMacro": true,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 5,
                                    "name": "Sugar",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 8,
                                    "name": "Glycemic Index",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 6,
                                    "name": "Sodium",
                                    "isMacro": false,
                                    "total": 10
                                }
                            ],
                            "macros": [
                                {
                                    "idMacro": 1,
                                    "macro": "Fat"
                                }
                            ],
                            "creationDate": "23/10/2018 03:34:49",
                            "modificationDate": "23/10/2018 03:36:39"
                        },
                        {
                            "idFood": 16,
                            "name": "arroz",
                            "brand": "",
                            "portionSize": 48,
                            "nutrients": [
                                {
                                    "idNutrient": 7,
                                    "name": "Cholesterol",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 6,
                                    "name": "Sodium",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 4,
                                    "name": "Fibre",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 1,
                                    "name": "Fat",
                                    "isMacro": true,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 3,
                                    "name": "Protein",
                                    "isMacro": true,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 8,
                                    "name": "Glycemic Index",
                                    "isMacro": false,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 2,
                                    "name": "Carbohydrate",
                                    "isMacro": true,
                                    "total": 0
                                },
                                {
                                    "idNutrient": 5,
                                    "name": "Sugar",
                                    "isMacro": false,
                                    "total": 0
                                }
                            ],
                            "creationDate": "24/10/2018 01:17:44",
                            "modificationDate": "25/10/2018 02:47:28"
                        }
                    ],
                    "creationDate": "27/10/2018 06:25:15",
                    "modificationDate": "27/10/2018 06:26:46"
                },
                {
                    "idPlanMeal": 566,
                    "name": "Repas 3",
                    "order": 3,
                    "creationDate": "27/10/2018 06:25:15"
                },
                {
                    "idPlanMeal": 567,
                    "name": "Repas 4",
                    "order": 4,
                    "creationDate": "27/10/2018 06:25:15"
                },
                {
                    "idPlanMeal": 568,
                    "name": "Repas 5",
                    "order": 5,
                    "creationDate": "27/10/2018 06:25:15"
                },
                {
                    "idPlanMeal": 569,
                    "name": "Repas 6",
                    "order": 6,
                    "creationDate": "27/10/2018 06:25:15"
                }
            ],
            "creationDate": "27/10/2018 06:25:15"
        },
        {
            "idPlanDay": 139,
            "day": "06/11/2018",
            "planMeals": [
                {
                    "idPlanMeal": 570,
                    "name": "Repas 1",
                    "order": 1,
                    "creationDate": "27/10/2018 06:25:15"
                },
                {
                    "idPlanMeal": 571,
                    "name": "Repas 2",
                    "order": 2,
                    "creationDate": "27/10/2018 06:25:15"
                },
                {
                    "idPlanMeal": 572,
                    "name": "Repas 3",
                    "order": 3,
                    "creationDate": "27/10/2018 06:25:15"
                },
                {
                    "idPlanMeal": 573,
                    "name": "Repas 4",
                    "order": 4,
                    "creationDate": "27/10/2018 06:25:15"
                },
                {
                    "idPlanMeal": 574,
                    "name": "Repas 5",
                    "order": 5,
                    "creationDate": "27/10/2018 06:25:15"
                },
                {
                    "idPlanMeal": 575,
                    "name": "Repas 6",
                    "order": 6,
                    "creationDate": "27/10/2018 06:25:15"
                }
            ],
            "creationDate": "27/10/2018 06:25:15"
        }
    ],
    "creationDate": "27/10/2018 06:25:15"
};


function getClientById(id, callback) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            callback(donne.meta);
        }
    });

    xhr.open("GET", baseURL + "/client?idClient=" + id);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "e485a582-14b8-4d2b-baaf-246cfbb4d7d4");

    xhr.send(data);
}

function getAllAliment() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            listAliments = donne.meta;
            console.log(this.responseText);
        }
    });

    xhr.open("GET", baseURL + "/food/list");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "75d0bc71-63aa-4f3e-a65f-fb57a5662500");

    xhr.send(data);

}

function getAllAliment2() {
    $.ajax({
        type: "get"""
        url: baseURL + "/food/list",
        dataType: 'jsonp',
    }).done(function(json) {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            listAliments = donne.meta;
            console.log(this.responseText);
        }
    });

}

function getAllPlanByClient(id, callback) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            let donne = JSON.parse(this.responseText);
            listPlan = donne.meta;
            callback(listPlan);
        }
    });

    xhr.open("GET", baseURL + "/foodPlan/list?idClient=" + id);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "7e690692-44f3-41c9-beec-2e6cafeffd9f");

    xhr.send(data);

}

function getAllFoodPlanDaysbyFoodPlan(idPlan, callback) {

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", baseURL + "/foodPlan/" + idPlan + "/planDay/list");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "15236862-89a0-4474-a204-fb6c718d1e76");

    xhr.send(data);
    
}

function getAllFoodPlanMealsbyFoodPlan(idPlan, idDay, callback) {

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", baseURL + "/foodPlan/" + idPlan + "/planDay/" + idDay + "/planMeal/list");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "92f252db-c83f-4030-aac1-cbdcff83273b");

    xhr.send(data);

}

function getPlanById(id, callback) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", baseURL + "/foodPlan?idFoodPlan=" + id);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "6a9e69bc-fd1a-44bc-a7c7-17f5986f538c");

    xhr.send(data);

}

function effacerPlanByID(id) {

    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("DELETE", baseURL + "/foodPlan?idFoodPlan=" + id);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "f1b17a22-a4d9-4e35-b87c-4434c0f6dc20");

    xhr.send(data);


}


function newPlan(plan) {

}

function editerPlan(plan) {

}

// /sdfsfdsf/

function afficherClient(client) {
    let conteiner = document.getElementById("infoClient");
    conteiner.innerHTML = "";
    let row = document.createElement("div");
    row.className = "row row-list space-row-projet";
    let imgClient = document.createElement("div");
    imgClient.className = "col-sm";
    let img = document.createElement("img");
    img.src = "../img/client.png";
    imgClient.appendChild(img);
    let nomClientEtPlan = document.createElement("div");
    nomClientEtPlan.className = "col-sm";
    let nomClient = document.createElement("p");
    nomClient.innerHTML = client.name;
    let nomPlan = document.createElement("p");
    nomPlan.innerHTML = planSelecioner.planName;
    let objet = document.createElement("div");
    objet.className = "col-sm";
    let calParjour = document.createElement("div");
    calParjour.className = "col-sm";
    let nutrParJour = document.createElement("div");
    nutrParJour.className = "col-sm";

    let $conteiner = $("infoClient");
    let $row = $("<div>", { className: "ss"});
    $conteiner.append()

    let $img = $("img");

    function objAtriuto(conteiner, label, content, id) {

        let cont = ('<div/>', {
                class: 'col-sm'
            }).appendTo(conteiner);
        $("<p/>").text(label).append(cont);
        $("<p/>", {id: id}).append(cont);
        return cont;
    };


}

function listerPlan(listDayPlan) {
    let nbRow = 1;
    let nbCol = 1;
    let arrayDayplan = listDayPlan;
    let conteiner = document.getElementById("listPlans");
    conteiner.innerHTML = "";
    let row = document.createElement("div");
    row.className = "row row-list space-row-projet";
    row.id = nbRow;
    for (let i = 0; i < arrayDayplan.length; i++) {
        let col = document.createElement("div");
        let card = document.createElement("div");
        col.className = "col-sm";
        card.className = "card-element box-shadow-android background-client";
        let input = document.createElement("input");
        input.type = "hidden";
        input.value = arrayClients[i].idClient;
        let nonClient = document.createElement("h6");
        let textNonClient = document.createTextNode(arrayClients[i].name);
        nonClient.append(textNonClient);
        let cardBottomBar = document.createElement("div");
        cardBottomBar.className = "card-element-bottom-bar float-right";
        let buttonPlan = document.createElement("button");
        buttonPlan.className = "btn bg-transparent btn-plan";
        let buttonEffacer = document.createElement("button");
        buttonEffacer.className = "btn bg-transparent btn-effacer";
        let buttonEditer = document.createElement("button");
        buttonEditer.className = "btn bg-transparent btn-editer";
        let iconPlan = document.createElement("i");
        iconPlan.className = "far fa-calendar-alt";
        let iconPen = document.createElement("i");
        iconPen.className = "fas fa-pen";
        let iconTrash = document.createElement("i");
        iconTrash.className = "fas fa-trash-alt";
        card.setAttribute("data-value", arrayClients[i].idClient);
        buttonEditer.setAttribute("data-toggle", "modal");
        buttonEditer.setAttribute("data-target", "#editClient");
        buttonEditer.setAttribute("data-value", arrayClients[i].idClient);
        buttonEffacer.setAttribute("data-toggle", "modal");
        buttonEffacer.setAttribute("data-target", "#effacerClient");
        buttonEffacer.setAttribute("data-value", arrayClients[i].idClient);
        buttonPlan.setAttribute("data-value", arrayClients[i].idClient);
        buttonPlan.append(iconPlan);
        buttonEffacer.append(iconTrash);
        buttonEditer.append(iconPen);
        cardBottomBar.append(buttonPlan);
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
    let btnPlan = document.getElementsByClassName("btn-plan");
    for (let i = 0; i < btnPlan.length; i++) {
        btnPlan[i].addEventListener("click", function (e) {
            let id = e.currentTarget.getAttribute("data-value");
            // $(this)
            localStorage.setItem('idClientOuvrirPlan', id);
            // ouvrirEditForm(window.idClientEditer);
            window.location.replace(baseURLSite + "/pages/plan_du_client.html");
            e.preventDefault();
        });
    }


}

function creePlanSelecioner(data) {

}

function effacerPlan(id) {

}

function ouvrirEditForm(id) {

}

function sauvegarderPlan(plan) {

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

function setJourSemane(data) {
    let jour = "";
    return jour;
}

function setMois(data) {
    let mois = "";
    return mois;
}

function loadPage() {
    getAllAliment();
    getAllAliment();
    getClientById(idClientOuvrirPlan, creeClientSelecioner);
    let bnteffacerPlan = document.getElementById("bnteffacerPlan");
    let btnDeconnection = document.getElementById("btnDeconnection");
    btnDeconnection.addEventListener("click", function () {
        localStorage.removeItem('coachOnline');
        window.location.replace(baseURLSite + "/index.html");
    });
    bnteffacerPlan.addEventListener("click", function () {
        effacerPlan(window.idPlanEffacer);
    });
    afficherClient(clientSelecione);
    loadPlan();
}

function loadPlan() {
    getAllPlanByClient(idClientOuvrirPlan, listerPlan);
}

(function () {
    loadPage();
})();


let window.aide = {
    create: function(tag, attribute, content){
        let obj = document.createElement(tag);
        if (attribute.className) obj.className = attribute.className;
        if (content) obj.innerHTML(content);
        return obj;
    },
    preppend: function(obj, ){

        return obj;
    }
}
