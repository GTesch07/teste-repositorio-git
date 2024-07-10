//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function converteDolar(valorEmDolar){
    const cotacaoDolar = 4.80;
    const valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais;
}

const perguntaValor = parseFloat(prompt("Digite um valor em Dolar: "));
const valor = perguntaValor.toFixed(2);
//converteDolar(valor); não foi necessário chamar a função antes.
alert(`O valor em dolar convertido para reais é R$${converteDolar(valor)}  `);

