//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

/*function tabuada(numero){
    let resultado = `Tabuada do ${numero}:\n`;
    for (let i = 1; i <= 10; i ++){
        resultado += `${numero} X ${i} = ${numero * i}\n`;
    }
    alert(resultado);
}

const numero = parseInt(prompt("Digite um número para ver sua tabuada: "));


tabuada(numero);*/

function mostrarTabuada(){
    const numero = parseInt(document.getElementById("numero").value);
    let resultado = `Tabuada do ${numero}:\n`;
    for (let i = 1; i <= 10; i ++){
        resultado += `${numero} X ${i} = ${numero * i}\n`;
    }
    document.getElementById("resultado").innerText = resultado;
}

