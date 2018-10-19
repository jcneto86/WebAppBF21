let baseURL = "http://35.183.168.181";
let listAliment;
let alimentSelecioner = {};

function getAllAliment(callback) {

}

function getAlimentById(id, callback) {

}

function effacerAlimentByID(id) {


}

function getAlimentByQuery(query, callback) {

}

function ajouterAliment(aliment) {

}

function editerAliment(aliment) {

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




