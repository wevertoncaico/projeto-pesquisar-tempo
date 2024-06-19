let chave = 'cebcd482eda57fa9a6714c1c2ba91885'

function colocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".umidade").innerHTML = "Umidade:" + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
}

//innerhtml troca informaçoes dentro do html

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q="
     + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric")
        .then(resposta => resposta.json())

    
    colocarNaTela(dados)
}

// await é um comnando que manda esperar algum retorno de algum lugar
//fetch é a ferramente que o javascript usa para acessar servidores
//json é o formato que o javascript entende

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}





// let declaracao da variavel em javascript
// sempre que quiser pergar alguma informacao que ta no html chame o document
