var textoIntro = document.querySelector('h1')
textoIntro.innerHTML = 'Padaria Do Joaquinha!'

var paragrafo = document.querySelector('p')
paragrafo.innerHTML = "Olá, seja bem vinde!! <br> Abaixo você poderá visualizar o nosso cardapio :)"



var tabela = '<table>';
tabela += '<tr><th>Código</th><th>Produto</th><th>Preço</th></tr>'; // Cabeçalho da tabela
tabela += '<tr><td>100</td><td>Cachorro quente</td><td>R$ 9.80</td></tr>';
tabela += '<tr><td>101</td><td>Bauru Simples</td><td>R$ 5.60</td></tr>';
tabela += '<tr><td>102</td><td>Bauru com ovo</td><td>R$ 7.20</td></tr>';
tabela += '<tr><td>103</td><td>Hamburguer</td><td>R$ 12.30</td></tr>';
tabela += '<tr><td>104</td><td>Cheeseburguer</td><td>R$ 16.90</td></tr>';
tabela += '</table>';

// Exibir a tabela no documento
document.write(tabela);

function pedidoCliente() {}