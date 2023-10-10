let nome = prompt ("Qual o seu nome? ");
let idade = prompt("Quantos anos você tem? " + nome );
let linguagem = prompt ("Qual linguagem de programação você está estudando? " + nome );

let pergunta = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.")


function mostra(frase){
    document.write(frase + "<br>")
}



mostra("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!");

if(pergunta == 1){
    mostra("Muito bom! Continue estudando e você terá muito sucesso.")
} else {
    mostra("Ahh que pena... Já tentou aprender outras linguagens?")
}

