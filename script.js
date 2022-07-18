const dados_questionario=[
    {
        questao: "What year was Sport Club Corinthians Paulista founded?",
        a:"1950",
        b:"1910",
        c:"1930",
        d:"1810",
        correta:"b",
    }, 
    {
        questao: "How many Paulista Championship title Corithians has?",
        a:"24",
        b:"22",
        c:"30",
        d:"11",
        correta:"c",
    },
    {
        questao: "Who is the player who played the most for Corinthians?",
        a:"Wladimir",
        b:"Cássio",
        c:"Neto",
        d:"Ronaldo",
        correta:"a",
    },
    {
        questao:"Which player scored the most goals for Corinthians?",
        a:"Ronaldo",
        b:"Cláudio",
        c:"Baltazar",
        d:"Roger Guedes",
        correta:"c",
    }

];

const questaoEL=document.getElementById("questao");
const resposta_a=document.getElementById("resposta_a");
const resposta_b=document.getElementById("resposta_b");
const resposta_c=document.getElementById("resposta_c");
const resposta_d=document.getElementById("resposta_d");
const enviar_quest=document.getElementById("enviar");
const respostaEl=document.querySelectorAll(".resposta");
const questionario=document.getElementById("questionario")

let questionario_atual=0;
let pontuacao=0;


carregar_questionario();

function carregar_questionario(){
    desselecionar()
    const questionario_tela=dados_questionario[questionario_atual];
    questaoEL.innerHTML=questionario_tela.questao;
    resposta_a.innerText=questionario_tela.a;
    resposta_b.innerText=questionario_tela.b;
    resposta_c.innerText=questionario_tela.c;
    resposta_d.innerText=questionario_tela.d;
}

function selecionado(){
    let resposta=undefined;

    respostaEl.forEach(function(resposta_item){
        if(resposta_item.checked){

            resposta=resposta_item.id;
        }
    });

    return resposta;
}

function desselecionar(){
    respostaEl.forEach(function(resposta_item){
        resposta_item.checked=false;
    });
}
    


enviar_quest.addEventListener("click", function() {

    const resposta=selecionado();

    if(resposta){
        if (resposta === dados_questionario[questionario_atual].correta){
            pontuacao++;
        }

        questionario_atual++;

        if(questionario_atual<dados_questionario.length){
            carregar_questionario();
        }
        else{
            questionario.innerHTML= `<h2>You answered correctly ${pontuacao}/${dados_questionario.length} 
            questions!</h2> 
            <button onClick="location.reload()">Restart</button>`;
        }
    }
    console.log(pontuacao)
});

