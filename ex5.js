//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaEPerimetroCircular(raio){
    const pi = 3.14;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;

    let arredondadoArea = area.toFixed(3);
    let arredondadoPerimetro = perimetro.toFixed(3);

    alert("Área da sala circular: " + arredondadoArea + " metros quadrados");
    alert("Perímetro (circunferência) da sala circular: " + arredondadoPerimetro + " metros");
}

let perguntaRaio = parseFloat(prompt("Informe o raio da sala circular: "));
let raio = perguntaRaio.toFixed(3);
calcularAreaEPerimetroCircular(raio)

  