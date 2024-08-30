var textoIntro = document.querySelector('h1')
textoIntro.innerHTML = 'Padaria Do Joquinha!'

var paragrafo = document.querySelector('p')
paragrafo.innerHTML = "Olá, seja bem vinde!! <br> Abaixo você poderá visualizar o nosso cardapio :)"

   // Lista de preços dos produtos
   var pedidos = [];
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
        pedidos.push(total); // Adiciona o total do item ao array de pedidos
        exibePedido(`Item adicionado. Total até agora: R$ ${somarPedidos().toFixed(2)}`);
    } else {
        exibePedido('Código inválido. Por favor, tente novamente.');
    }
}

function exibePedido(mensagem) {
    document.getElementById('guiaPedido').innerHTML = mensagem;
}

function somarPedidos() {
    return pedidos.reduce((acc, curr) => acc + curr, 0); // Soma todos os valores no array de pedidos
}

function finalizarPedido() {
    var totalFinal = somarPedidos();
    exibePedido(`Pedido finalizado! Total a pagar: R$ ${totalFinal.toFixed(2)}`);
    pedidos = []; // Limpa o array de pedidos após finalizar
}