var textoIntro = document.querySelector('h1')
textoIntro.innerHTML = 'Padaria Do Joquinha!'

var paragrafo = document.querySelector('p')
paragrafo.innerHTML = "Olá, seja bem vinde!! <br> Abaixo você poderá visualizar o nosso cardapio :)"


     
   // Lista de preços dos produtos
   var precos = {
    "100": 9.80,
    "101": 5.60,
    "102": 7.20,
    "103": 12.30,
    "104": 16.90
};

function pedidoCliente() {
    var codigo = document.getElementById('pedidoCliente').value;
    var quantidade = parseInt(document.getElementById('qtd').value);
    var total;

    if (precos[codigo]) {
        total = precos[codigo] * quantidade;
        exibePedido(total);
    } else {
        exibePedido('Código inválido. Por favor, tente novamente.');
    }
}

function exibePedido(mensagem) {
    document.getElementById('guiaPedido').innerHTML = typeof mensagem === 'number' ? `Total: R$ ${mensagem.toFixed(2)}` : mensagem;
}