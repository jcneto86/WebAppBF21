let baseURL = "http://35.183.168.181";
let listFAQ;
let FAQSelecioner = {};

function getAllFAQ(callback) {

}

function getFAQById(id, callback) {

}

function deleteFAQByID(id) {


}

function getFAQByQuery(query, callback) {

}

function ajouterFAQ(faq) {

}

function updateFAQ(faq) {

}

function listerFAQ(data) {
    let nbRow = 1;
    let nbCol = 1;
    let arrayFAQ = data.meta;
    let conteiner = document.getElementById("listFAQ");
    conteiner.innerHTML = "";
    let row = document.createElement("div");
    row.className = "row row-list space-row-projet";
    row.id = nbRow;
    for (let i = 0; i < arrayFAQ.length; i++) {
        let col = document.createElement("div");
        let card = document.createElement("div");
        col.className = "col-sm col-sm-list max-card-size";
        card.className = "card-element box-shadow-android";
        let input = document.createElement("input");
        input.type = "hidden";
        input.value = arrayFAQ[i].idClient;
        let nonClient = document.createElement("h6");
        let textNonClient = document.createTextNode(arrayFAQ[i].name);
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
        buttonEditer.setAttribute("data-target", "#editFAQ");
        buttonEditer.setAttribute("data-value", arrayFAQ[i].idClient);
        buttonEffacer.setAttribute("data-toggle", "modal");
        buttonEffacer.setAttribute("data-target", "#effacerFAQ");
        buttonEffacer.setAttribute("data-value", arrayFAQ[i].idFAQ);
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
        nbRow++;
        nbCol = 1;
        conteiner.append(row);
        row = null;
        row = document.createElement("div");
        row.className = "row row-list space-row-projet";
        row.id = nbRow;
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
    });
    loadFAQ();
}

function loadFAQ() {
    getAllFAQ(listerFAQ);
}

(function () {
    loadPage();
})();




