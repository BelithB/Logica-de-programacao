let numero = Math.floor((Math.random() * 10) + 1);
let resposta = "";
let contador;

for (contador = 0; contador < 3; contador++){
    resposta = prompt("tente adivinhar o número escolhido de 0 a 10");
        if(resposta == numero){
            alert("parabéns, você acertou!");
            break;
        } 
        alert("Errado, tente novamente!");
}
if (contador == 3)
        alert("Você errou, o número correto era: " + numero )
