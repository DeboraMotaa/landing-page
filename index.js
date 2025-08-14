var SetaEsquerda = document.getElementById("seta-esquerda");
var Leonardo = document.getElementById("leonardo");
var Samantha = document.getElementById("samantha");
var Bruna = document.getElementById("bruna");
var SetaDireita = document.getElementById("seta-direita");

function RolarParaDireita() {
    Leonardo.style.display = "none";
    Bruna.style.display = "flex";
    SetaDireita.style.display = "none";
    SetaEsquerda.style.display = "flex";
    SetaEsquerda.style.marginTop = "55px";
}

function RolarParaEsquerda() {
    Leonardo.style.display = "flex";
    Bruna.style.display = "none";
    SetaDireita.style.display = "flex";
    SetaDireita.style.marginTop = "55px";
    SetaEsquerda.style.display = "none";
}