//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.


function calculaIMC(altura,peso){
    let calculo = peso/(altura * altura);
    return arredondado = calculo.toFixed(2);

}

let perguntaAltura = parseFloat(prompt("Digite sua altura: "));
let perguntaPeso = parseFloat(prompt("Digite seu peso: "));
let imc = calculaIMC(perguntaAltura,perguntaPeso);



console.log(imc);
