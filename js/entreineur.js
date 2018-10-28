let baseURL = "http://35.183.168.181";
let baseURLSite = "http://localhost:63342/WebAppBF21";
const coachOnline = JSON.parse(localStorage.getItem('coachOnline'));
let listEntreineur;
var MD5 = {
    MD5: function (d) {
        result = MD5.M(MD5.V(MD5.Y(MD5.X(d), 8 * d.length)));
        return result.toLowerCase()
    },

    M: function (d) {
        for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
        return f
    },

    X: function (d) {
        for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
        for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
        return _
    },

    V: function (d) {
        for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
        return _
    },

    Y: function (d, _) {
        d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
        for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
            var h = m, t = f, g = r, e = i;
            f = MD5.md5_ii(f = MD5.md5_ii(f = MD5.md5_ii(f = MD5.md5_ii(f = MD5.md5_hh(f = MD5.md5_hh(f = MD5.md5_hh(f = MD5.md5_hh(f = MD5.md5_gg(f = MD5.md5_gg(f = MD5.md5_gg(f = MD5.md5_gg(f = MD5.md5_ff(f = MD5.md5_ff(f = MD5.md5_ff(f = MD5.md5_ff(f, r = MD5.md5_ff(r, i = MD5.md5_ff(i, m = MD5.md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = MD5.md5_ff(r, i = MD5.md5_ff(i, m = MD5.md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = MD5.md5_ff(r, i = MD5.md5_ff(i, m = MD5.md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = MD5.md5_ff(r, i = MD5.md5_ff(i, m = MD5.md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = MD5.md5_gg(r, i = MD5.md5_gg(i, m = MD5.md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = MD5.md5_gg(r, i = MD5.md5_gg(i, m = MD5.md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = MD5.md5_gg(r, i = MD5.md5_gg(i, m = MD5.md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = MD5.md5_gg(r, i = MD5.md5_gg(i, m = MD5.md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = MD5.md5_hh(r, i = MD5.md5_hh(i, m = MD5.md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = MD5.md5_hh(r, i = MD5.md5_hh(i, m = MD5.md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = MD5.md5_hh(r, i = MD5.md5_hh(i, m = MD5.md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = MD5.md5_hh(r, i = MD5.md5_hh(i, m = MD5.md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = MD5.md5_ii(r, i = MD5.md5_ii(i, m = MD5.md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = MD5.md5_ii(r, i = MD5.md5_ii(i, m = MD5.md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = MD5.md5_ii(r, i = MD5.md5_ii(i, m = MD5.md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = MD5.md5_ii(r, i = MD5.md5_ii(i, m = MD5.md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = MD5.safe_add(m, h), f = MD5.safe_add(f, t), r = MD5.safe_add(r, g), i = MD5.safe_add(i, e)
        }
        return Array(m, f, r, i)
    },

    md5_cmn: function (d, _, m, f, r, i) {
        return MD5.safe_add(MD5.bit_rol(MD5.safe_add(MD5.safe_add(_, d), MD5.safe_add(f, i)), r), m)
    },

    md5_ff: function (d, _, m, f, r, i, n) {
        return MD5.md5_cmn(_ & m | ~_ & f, d, _, r, i, n)
    },

    md5_gg: function (d, _, m, f, r, i, n) {
        return MD5.md5_cmn(_ & f | m & ~f, d, _, r, i, n)
    },

    md5_hh: function (d, _, m, f, r, i, n) {
        return MD5.md5_cmn(_ ^ m ^ f, d, _, r, i, n)
    }
    ,
    md5_ii: function (d, _, m, f, r, i, n) {
        return MD5.md5_cmn(m ^ (_ | ~f), d, _, r, i, n)
    }
    ,
    safe_add: function (d, _) {
        var m = (65535 & d) + (65535 & _);
        return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
    }
    ,
    bit_rol: function (d, _) {
        return d << _ | d >>> 32 - _
    }
}
let entreineurSelecioner = {
    "idCoach": null,
    "name": null,
    "login": null,
    "password": null,
    "email": null,
    "phoneNumber": null
};
let entreineurPourAjouter = {
    "name": null,
    "login": null,
    "password": null,
    "email": null,
    "phoneNumber": null,
};

function getAllEntreineur(callback) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            listEntreineur = donne.meta;
            callback(listEntreineur);
        }
    });

    xhr.open("GET", baseURL + "/coach/list");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "f818ccfb-9853-4231-9f33-c9bbddd366ac");

    xhr.send(data);

}

function getEntreineurById(id, callback) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            callback(donne);
        }
    });

    xhr.open("GET", baseURL + "/coach?idCoach=" + id);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "e1795e20-4424-4844-86d3-c47768a2a99b");

    xhr.send(data);
}

function deleteEntreineurByID(id) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            if (donne.httpStatus === 202) {
                bootbox.alert("L'entreineur a été supprimé.");
                $("#effacerEntreineur").modal('hide');
                loadPage();
            } else {
                bootbox.alert("Erreur pour supprimé l'entreineur. Veuillez réessayer ou contactez votre administrateur du système.");
            }
        }
    });

    xhr.open("GET", baseURL + "/coach?idCoach=" + id);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "9fbb6bc2-064c-4212-9cae-f6f418692029");

    xhr.send(data);

}

function getEntreineurByQuery(query, callback) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            listClient = JSON.parse(this.responseText);
            callback(listClient);
        }
    });

    xhr.open("GET", baseURL + "/coach/list?query=" + query);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "90a5159f-f799-4e3e-8d67-39f7da45c48f");

    xhr.send(data);
}

function newEntreineur(entreineur) {
    var data = JSON.stringify({
        "name": entreineur.name,
        "login": entreineur.login,
        "password": entreineur.password,
        "email": entreineur.email,
        "phoneNumber": entreineur.phoneNumber
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            if (donne.httpStatus === 201) {
                bootbox.alert("Entreineur enregistré.");
                viderInputs();
                loadPage();
                $("#ajouterEntreineur").modal('hide');
            } else {
                bootbox.alert("Erreur lors de la création de l'entreineur. Veuillez réessayer ou contactez votre administrateur du système.");
            }
        }
    });

    xhr.open("POST", baseURL + "/coach");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "d4353d26-1cec-4764-9184-0fb8d1fdd59a");

    xhr.send(data);

}

function editerEntreineur(entreineur) {
    var data = JSON.stringify({
        "idCoach": entreineur.idCoach,
        "name": entreineur.name,
        "login": entreineur.login,
        "password": entreineur.password,
        "email": entreineur.email,
        "phoneNumber": entreineur.phoneNumber
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            let donne = JSON.parse(this.responseText);
            if (donne.httpStatus === 200) {
                bootbox.alert("L'entreineur a été sauvegarder.");
                $("#editEntreineur").modal('hide');
                loadPage();
            } else {
                bootbox.alert("Erreur lors de la sauvegarde de la edition. Veuillez réessayer ou contactez votre administrateur du système.");
            }
        }
    });

    xhr.open("PUT", baseURL + "/coach");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "056da038-ca28-4374-9eae-e0e0e69cf8f8");

    xhr.send(data);

}

function listerEntreineur(data) {
    let nbRow = 1;
    let nbCol = 1;
    let arrayEntreineurs = data;
    let conteiner = document.getElementById("listEntreineur");
    conteiner.innerHTML = "";
    let row = document.createElement("div");
    row.className = "row row-list space-row-projet";
    row.id = nbRow;
    for (let i = 0; i < arrayEntreineurs.length; i++) {
        let col = document.createElement("div");
        let card = document.createElement("div");
        col.className = "col-sm col-sm-list max-card-size ";
        card.className = "card-element box-shadow-android background-entraineur";
        let input = document.createElement("input");
        input.type = "hidden";
        input.value = arrayEntreineurs[i].idCoach;
        let nonEntreineur = document.createElement("h6");
        let textNonEntreineur = document.createTextNode(arrayEntreineurs[i].name);
        nonEntreineur.append(textNonEntreineur);
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
        buttonEditer.setAttribute("data-target", "#editEntreineur");
        buttonEditer.setAttribute("data-value", arrayEntreineurs[i].idCoach);
        buttonEffacer.setAttribute("data-toggle", "modal");
        buttonEffacer.setAttribute("data-target", "#effacerEntreineur");
        buttonEffacer.setAttribute("data-value", arrayEntreineurs[i].idCoach);
        buttonEffacer.append(iconTrash);
        buttonEditer.append(iconPen);
        cardBottomBar.append(buttonEditer);
        cardBottomBar.append(buttonEffacer);
        card.append(input);
        card.append(nonEntreineur);
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
            window.idEntreineurEffacer = id;
            e.preventDefault();
        });
    }
    let btnEditer = document.getElementsByClassName("btn-editer");
    for (let i = 0; i < btnEditer.length; i++) {
        btnEditer[i].addEventListener("click", function (e) {
            let id = e.currentTarget.getAttribute("data-value");
            // $(this)
            window.idEntreineurEditer = id;
            ouvrirEditForm(window.idEntreineurEditer);
            e.preventDefault();
        });
    }
}

function registreEntreineurSelecioner(data) {

}

function ajouterEntreineur() {
    let inputAjouterEntreineurConfirmerPassword = document.getElementById("inputAjouterEntreineurConfirmerPassword");
    let inputAjouterEntreineurPassword = document.getElementById("inputAjouterEntreineurPassword");
    let inputAjouterEntreineurTelephone = document.getElementById("inputAjouterEntreineurTelephone");
    let inputAjouterEntreineurCourrier = document.getElementById("inputAjouterEntreineurCourrier");
    let inputAjouterEntreineurLogin = document.getElementById("inputAjouterEntreineurLogin");
    let inputAjouterEntreineurNon = document.getElementById("inputAjouterEntreineurNon");
    entreineurPourAjouter.name = inputAjouterEntreineurNon.value;
    entreineurPourAjouter.login = inputAjouterEntreineurLogin.value;
    entreineurPourAjouter.email = inputAjouterEntreineurCourrier.value;
    entreineurPourAjouter.phoneNumber = inputAjouterEntreineurTelephone.value;
    entreineurPourAjouter.password = MD5.MD5(inputAjouterEntreineurPassword.value);
    if (inputAjouterEntreineurPassword.value === inputAjouterEntreineurConfirmerPassword.value) {
        newEntreineur(entreineurPourAjouter);
        getAllEntreineur(listerEntreineur);
    } else {
        inputAjouterEntreineurConfirmerPassword.className = "form-control border-danger";
        inputAjouterEntreineurPassword.className = "form-control border-danger";
        bootbox.alert("Confirmer le mot de passe!");
    }
}

function viderInputs() {
    let inputEditEntreineurNon = document.getElementById("inputEditEntreineurNon");
    let inputEditEntreineurLogin = document.getElementById("inputEditEntreineurLogin");
    let inputEditEntreineurCourrier = document.getElementById("inputEditEntreineurCourrier");
    let inputEditEntreineurTelephone = document.getElementById("inputEditEntreineurTelephone");
    let inputEditEntreineurPassword = document.getElementById("inputEditEntreineurPassword");
    let inputEditEntreineurConfirmerPassword = document.getElementById("inputEditEntreineurConfirmerPassword");
    let inputAjouterEntreineurConfirmerPassword = document.getElementById("inputAjouterEntreineurConfirmerPassword");
    let inputAjouterEntreineurPassword = document.getElementById("inputAjouterEntreineurPassword");
    let inputAjouterEntreineurTelephone = document.getElementById("inputAjouterEntreineurTelephone");
    let inputAjouterEntreineurCourrier = document.getElementById("inputAjouterEntreineurCourrier");
    let inputAjouterEntreineurLogin = document.getElementById("inputAjouterEntreineurLogin");
    let inputAjouterEntreineurNon = document.getElementById("inputAjouterEntreineurNon");
    inputEditEntreineurNon.value = "";
    inputEditEntreineurLogin.value = "";
    inputEditEntreineurCourrier.value = "";
    inputEditEntreineurTelephone.value = "";
    inputEditEntreineurPassword.value = "";
    inputEditEntreineurConfirmerPassword.value = "";
    inputAjouterEntreineurConfirmerPassword.value = "";
    inputAjouterEntreineurPassword.value = "";
    inputAjouterEntreineurTelephone.value = "";
    inputAjouterEntreineurCourrier.value = "";
    inputAjouterEntreineurLogin.value = "";
    inputAjouterEntreineurNon.value = "";
}

function effacerEntreineur(id) {

}

function creeEntreineurSelecioner(entreineur) {
    entreineurSelecioner = {
        "idCoach": entreineur.idCoach,
        "name": entreineur.name,
        "login": entreineur.login,
        "password": entreineur.password,
        "email": entreineur.email,
        "phoneNumber": entreineur.phoneNumber
    };
}

function ouvrirEditForm(id) {
    for (let i = 0; i < listEntreineur.length; i++) {
        if (listEntreineur[i].idCoach === Number(id))
            creeEntreineurSelecioner(listEntreineur[i]);
    }
    let inputEditEntreineurNon = document.getElementById("inputEditEntreineurNon");
    let inputEditEntreineurLogin = document.getElementById("inputEditEntreineurLogin");
    let inputEditEntreineurCourrier = document.getElementById("inputEditEntreineurCourrier");
    let inputEditEntreineurTelephone = document.getElementById("inputEditEntreineurTelephone");
    let inputEditEntreineurPassword = document.getElementById("inputEditEntreineurPassword");
    let inputEditEntreineurConfirmerPassword = document.getElementById("inputEditEntreineurConfirmerPassword");
    inputEditEntreineurNon.value = entreineurSelecioner.name;
    inputEditEntreineurLogin.value = entreineurSelecioner.login;
    inputEditEntreineurCourrier.value = entreineurSelecioner.email;
    inputEditEntreineurTelephone.value = entreineurSelecioner.phoneNumber;
    inputEditEntreineurPassword.value = entreineurSelecioner.password;
    inputEditEntreineurConfirmerPassword.value = entreineurSelecioner.password;
}

function sauvegarderEntreineur() {
    let inputEditEntreineurNon = document.getElementById("inputEditEntreineurNon");
    let inputEditEntreineurLogin = document.getElementById("inputEditEntreineurLogin");
    let inputEditEntreineurCourrier = document.getElementById("inputEditEntreineurCourrier");
    let inputEditEntreineurTelephone = document.getElementById("inputEditEntreineurTelephone");
    let inputEditEntreineurPassword = document.getElementById("inputEditEntreineurPassword");
    let inputEditEntreineurConfirmerPassword = document.getElementById("inputEditEntreineurConfirmerPassword");
    entreineurSelecioner.name = inputEditEntreineurNon.value;
    entreineurSelecioner.login = inputEditEntreineurLogin.value;
    entreineurSelecioner.email = inputEditEntreineurCourrier.value;
    entreineurSelecioner.phoneNumber = inputEditEntreineurTelephone.value;
    if (inputEditEntreineurPassword.value !== entreineurSelecioner.password) {
        entreineurSelecioner.password = MD5.MD5(inputEditEntreineurPassword.value);
    }

    if (inputEditEntreineurPassword.value === inputEditEntreineurConfirmerPassword.value) {
        editerEntreineur(entreineurSelecioner);
        getAllEntreineur(listerEntreineur);
    } else {
        inputEditEntreineurPassword.className = "form-control border-danger";
        inputEditEntreineurConfirmerPassword.className = "form-control border-danger";
        bootbox.alert("Confirmer le mot de passe!");
    }

}

function loadPage() {
    let searchFild = document.getElementById("searchFild");
    let bnteffacerEntreineur = document.getElementById("bnteffacerEntreineur");
    let btnAjouterEntreineur = document.getElementById("btnAjouterEntreineur");
    let btnSauvegarderEntreineur = document.getElementById("btnSauvegarderEntreineur");
    let btnSearchFild = document.getElementById("btnSearchFild");
    let btnDeconnection = document.getElementById("btnDeconnection");
    btnDeconnection.addEventListener("click", function () {
        localStorage.removeItem('coachOnline');
        window.location.replace(baseURLSite + "index.html");
    });
    btnSearchFild.addEventListener("click", function () {
        console.log("Wow");
        let string = searchFild.value;
        searchClient(string);
    });
    bnteffacerEntreineur.addEventListener("click", function () {
        effacerEntreineur(window.idEntreineurEffacer);
    });
    btnAjouterEntreineur.addEventListener("click", ajouterEntreineur);
    btnSauvegarderEntreineur.addEventListener("click", function () {
        sauvegarderEntreineur();
    });
    loadEntreineur();
}

function loadEntreineur() {
    getAllEntreineur(listerEntreineur);
}

(function () {
    loadPage();
})();




