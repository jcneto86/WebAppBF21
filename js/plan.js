let baseURL = "http://35.183.168.181";
let listPlan;
let planSelecioner = {};

function getAllAliment(callback) {

}

function getPlanById(id, callback) {

}

function effacerPlanByID(id) {


}

function getPlanByQuery(query, callback) {

}

function ajouterPlan(plan) {

}

function editerPlan(plan) {

}

function listerPlan(data) {

}

function registrerPlanSelecioner(data) {

}

function effacerPlan(id) {

}

function ouvrirEditForm(id) {

}

function sauvegarderPlan(plan) {

}

function loadPage() {
    let searchFild = document.getElementById("searchFild");
    let bnteffacerPlan = document.getElementById("bnteffacerPlan");
    searchFild.addEventListener("change", function () {
        console.log("Wow");
    });
    bnteffacerPlan.addEventListener("click", function () {
        effacerPlan(window.idPlanEffacer);
    })
    loadPlan();
}

function loadPlan() {
    getAllPlan(listerPlan);
}

(function () {
    loadPage();
})();




