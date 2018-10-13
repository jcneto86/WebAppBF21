
function loadPage() {
    let searchFild = document.getElementById("searchFild");
    let bnteffacerClient = document.getElementById("bnteffacerClient");
    searchFild.addEventListener("change", function () {
        console.log("Wow");
    });
    bnteffacerClient.addEventListener("click", function () {
        ouvrirEditForm(window.idClientEffacer);
    })
    loadClients();
}

function loadClients() {
    getAllClients(listClient);
}

(function () {
    loadPage();
})();