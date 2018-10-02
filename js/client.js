jQuery(function() {

    var Client = {};
    Client.baseURL = "http://10.2.10.205:8080";

    Client.clientGetAll = function($callback) {
        $.ajax({
            type : "GET",
            url : this.baseURL + "/client",
            dataType:'jsonp', //nao é necessário se for no mesmo servidor
            success : $callback
        });
    };

    Client.clientGetById = function(id, callback) { //op1
        //Client.clientGetById = function(data, callback) { //op2
        $.ajax({
            type : "GET",
            url : this.baseURL + "/client/" + id,

            //opção 1
            //https://jsonplaceholder.typicode.com/client/1

            //opção 2
            //https://jsonplaceholder.typicode.com/client?id=1
            //url : this.baseURL + "/client/",
            //data: data,

            dataType:'jsonp', //nao é necessário se for no mesmo servidor
            success : callback
        });
    };

    Client.clientUpdate = function(data, callback) { //op1
        $.ajax({
            type : "POST",
            url : this.baseURL + "/client/",
            data: data,
            dataType:'jsonp', //nao é necessário se for no mesmo servidor
            success : callback
        });
    };


//chamando a função para carregar os dados na tela
    function tabelaclient(data) {
        $.each(data, function (index, value) {
            var tr = $("<tr />")
            tr.append('<td>' + value.id + '</td>');
            tr.append('<td>' + value.title + '</td>');
            tr.append('<td>' + value.body + '</td>');
            $("#tabelaclient").append(tr);
        });
    }

    function selectclient(data) {
        $.each(data, function (index, value) {
            $("#selectclient").append($("<option />").text(value.title));
        });
    }

    function carregaPostDetalhes(data){
        $("#Post").append("<b>" + data.id + "</b>: ");
        $("#Post").append(data.title);
    }

    function carregaForm(data){
        var $form = $("#formPost")
        $form.find("#id").val(data.id);
        $form.find("#title").val(data.title);
    }

    function showMessage(data){
        $("#msg").show().html("Salvo");
    }

    //Ações dos botoes
    $("#btnCarregarTabela").click(function(){
        Client.clientGetAll(tabelaclient);
    });

    $("#btnCarregarSelect").click(function(){
        Client.clientGetAll(selectclient);
    });

    $("#btnSalvar").click(function(){
        var data = $("#formPost").serialize();
        Client.clientUpdate(data, showMessage)
    })

    //executa função ao carregar a pagina
    Client.clientGetById(1, carregaForm); //Client.clientGetById(1, carregaPostDetalhes);
})();