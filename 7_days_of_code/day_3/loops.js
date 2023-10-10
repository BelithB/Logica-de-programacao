function mostraTexto(texto){
document.write(texto + "<br>")
};

// perguntar se quer seguir front ou back
let area = prompt("Qual área de programação você quer seguir? 'Front-End' ou 'Back-End'?");
let linguagem = "";

// em caso de front perguntar React ou Vue || em caso de back perguntar C# ou Java.
if (area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");
}   
else if (area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java");
}
else{
    alert("Resposta inválida!");
}

// perguntar se quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.
let pergunta = prompt("Você quer constinuar se especializando em" + linguagem +", ou quer aprender outraslinguagens e se tornar Fullstack? digite 1 para de especializar e 2 para Fullstack");
if(pergunta == 1){
    mostraTexto("Boa sorte na sua jornada de aprender " + linguagem + "!");
}
else if (pergunta == 2){
    mostraTexto("Boa sorte aprendendo outras linguagens!");
}

// loop perguntando qual tecnologia quer se especializar com campo de inserçao.
let novaTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' para adicionar uma nova.");
while (novaTecnologia == "ok"){
    let nova = prompt("Qual?");
    mostraTexto(nova + "é uma ótima tecnologia!");
    novaTecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' para adicionar uma nova.");
    if (novaTecnologia == "não"){
        break;
    }
}
