var baseURL = "http://10.2.10.180:8080";
var nbRow = 1;

var serverReturn = {
    "httpStatus": 3040,
    "meta": [
        {
            "idClient": 1,
            "name": "Henrique",
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
}

function getAllClients() {
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            data = this.responseText;
        }
    });
    xhr.open("GET", baseURL + "/client/list");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "ead70657-64e4-4842-8bad-8c3681ad9d6e");

    // xhr.send(data);
    // var array = JSON.parse(xhr.responseText);
    // data = this.responseText;
    console.log(this.responseText);
    // return array;
}

getAllClients();

function listClient(data) {
    var arrayClients = JSON.parse(data);
    arrayClients.meta.forEach(function (element) {
        if (document.getElementById(nbRow) != null) {
            var row = $("<div class=\"row space-row-projet\"></div>");
            row.id = nbRow;
            var col = $("<div class=\"col\"></div>");
            var card = $("<div class=\"card-element box-shadow-android\"></div>");
            if (document.getElementById(nbRow).getElementsByTagName("h6").length < 3) {
                card.append('<input type="hidden" value="' + element.idClient + ' + ">');
                card.append('<h6>' + element.name + '</h6>');
                card.append('<div class="card-element-bottom-bar text-center">' +
                    '<button class="btn bg-transparent"><i class="fas fa-pen"></i></button> ' +
                    '<button class="btn bg-transparent"><i class="fas fa-trash-alt"></i></button> ' +
                    '</div>');
                col.append(card);
                row.append(col);
                $("#listClient").append(row);
            } else {
                var row = $("<div class=\"row space-row-projet\"></div>");
                var col = $("<div class=\"col\"></div>");
                var card = $("<div class=\"card-element box-shadow-android\"></div>");
                nbRow++;
                row.id = nbRow;
                card.append('<input type="hidden" value="' + element.idClient + ' + ">');
                card.append('<h6>' + element.name + '</h6>');
                card.append('<div class="card-element-bottom-bar text-center">' +
                    '<button class="btn bg-transparent"><i class="fas fa-pen"></i></button> ' +
                    '<button class="btn bg-transparent"><i class="fas fa-trash-alt"></i></button> ' +
                    '</div>');
                col.append(card);
                row.append(col);
                $("#listClient").append(row);
            }
        }
    });
}


