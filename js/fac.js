let baseURL = "http://35.183.168.181";
let listFAQ;
let FAQSelecioner = {};

function getAllFAQ(callback) {

}

function getFAQById(id, callback) {

}

function effacerFAQByID(id) {


}

function getFAQByQuery(query, callback) {

}

function ajouterFAQ(faq) {

}

function editerFAQ(faq) {

}

function listerFAQ(data) {

}

function registrerFAQSelecioner(data) {
}

function effacerFAQ(id) {
}

function ouvrirEditForm(id) {


}



function sauvegarderFAQ(faq) {

}



function loadPage() {
    let searchFild = document.getElementById("searchFild");
    let bnteffacerFAC = document.getElementById("bnteffacerFAQ");
    searchFild.addEventListener("change", function () {
        console.log("Wow");
    });
    bnteffacerFAQ.addEventListener("click", function () {
        effacerFAQ(window.idFAQEffacer);
    })
    loadFAQ();
}

function loadFAQ() {
    getAllFAQ(listerFAQ);
}

(function () {
    loadPage();
})();




