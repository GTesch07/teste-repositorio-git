//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.


function calculaAreaEPerimetro(altura, largura){
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);

    alert("Área da sala: "+ area +" metros quadrados.");
    alert("Perímetro da sala: "+ perimetro + " metros.");
}

const altura = parseFloat(prompt("Informe a altura da sala: "));
const largura = parseFloat(prompt("Informe a largura da sala: "));

calculaAreaEPerimetro(altura,largura);