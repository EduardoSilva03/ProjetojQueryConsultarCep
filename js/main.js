function consultaCep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);
    $.ajax({
        url: url, 
        type: "GET",
        success: function(response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#ddd").html(response.ddd);
            $("#titulo_cep").html("CEP " + response.cep);
            //$("#logradouro").html(response.logradouro);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
        }
    })
}

function time() {
    today = new Date();
    h=today.getHours();
    m=today.getMinutes();
    s=today.getSeconds();
    document.getElementById("thms").innerHTML=h+":"+m+":"+s;
    setTimeout('time()',500);
}

