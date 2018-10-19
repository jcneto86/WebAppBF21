let baseURL = "http://35.183.168.181";
let listEntreineur;
let entreineurSelecioner = {};

function getAllEntreineur(callback) {

}

function getEntreineurById(id, callback) {

}

function effacerEntreineurByID(id) {


}

function getEntreineurByQuery(query, callback) {

}

function ajouterEntreineur(aliment) {

}

function editerEntreineur(aliment) {

}

function listerEntreineur(data) {

}

function registrerAlimentSelecioner(data) {

}

function effacerEntreineur(id) {

}

function ouvrirEditForm(id) {

}

function sauvegarderEntreineur(aliment) {

}

function loadPage() {
    let searchFild = document.getElementById("searchFild");
    let bnteffacerEntreineur = document.getElementById("bnteffacerEntreineur");
    searchFild.addEventListener("change", function () {
        console.log("Wow");
    });
    bnteffacerEntreineur.addEventListener("click", function () {
        effacerEntreineur(window.idEntreineurEffacer);
    })
    loadEntreineur();
}

function loadEntreineur() {
    getAllEntreineur(listerEntreineur);
}

(function () {
    loadPage();
})();




