let baseURL = "http://35.183.168.181";
let baseURLSite = "http://localhost:63342/WebAppBF21";
const coachOnline = JSON.parse(localStorage.getItem('coachOnline'));
let idClientOuvrirPlan = localStorage.getItem('idClientOuvrirPlan');
let clientSelecione;
let listPlan;
let listAliments;
let planSelecioner = {};


function getClientById(id, callback) {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            callback(donne);
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

function listerPlan(data) {

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
    getClientById(idClientOuvrirPlan, creeClientSelecioner);
    let searchFild = document.getElementById("searchFild");
    let bnteffacerPlan = document.getElementById("bnteffacerPlan");
    let btnDeconnection = document.getElementById("btnDeconnection");
    btnDeconnection.addEventListener("click", function () {
        localStorage.removeItem('coachOnline');
        window.location.replace(baseURLSite + "/index.html");
    });
    searchFild.addEventListener("change", function () {
        console.log("Wow");
    });
    bnteffacerPlan.addEventListener("click", function () {
        effacerPlan(window.idPlanEffacer);
    });
    loadPlan();
}

function loadPlan() {
    getAllPlanByClient(idClientOuvrirPlan, listerPlan);
}

(function () {
    loadPage();
})();




