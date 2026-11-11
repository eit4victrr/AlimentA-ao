
// calculadora

const campoQuantidade = document.getElementById("quantidade");
const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", function () {

    const quantidade = Number(campoQuantidade.value);

    if (campoQuantidade.value === "" || quantidade < 0) {

        resultado.textContent = "Digite uma quantidade válida.";

    } else {

        const mensal = quantidade * 4;
        const anual = quantidade * 52;

        resultado.textContent =
            "Você desperdiça aproximadamente " +
            mensal.toFixed(1) +
            " kg por mês e " +
            anual.toFixed(1) +
            " kg por ano.";

    }

});


// alguams dicas

const dicas = [
    "Organize os alimentos por validade e deixe os que vencem primeiro mais visíveis.",
    "Faça uma lista antes de ir ao mercado para evitar compras desnecessárias.",
    "Guarde os alimentos em recipientes adequados para ajudar na conservação.",
    "Sirva pequenas porções e repita se ainda estiver com fome."
];

let numeroDica = 0;

const textoDica = document.getElementById("textoDica");
const botaoDica = document.getElementById("novaDica");

botaoDica.addEventListener("click", function () {

    numeroDica++;

    if (numeroDica >= dicas.length) {
        numeroDica = 0;
    }

    textoDica.textContent = dicas[numeroDica];

});


// quizz

const opcoes = document.querySelectorAll(".opcao");
const feedback = document.getElementById("feedback");

opcoes.forEach(function (opcao) {

    opcao.addEventListener("click", function () {

        if (opcao.dataset.correta === "true") {

            feedback.textContent =
                "Muito bem! Planejar as compras ajuda a evitar excessos.";

        } else {

            feedback.textContent =
                "Não é essa opção. Pense em como se organizar antes de comprar.";

        }

        opcoes.forEach(function (botao) {
            botao.disabled = true;
        });

    });

});


// tamanho da fonte

let tamanhoFonte = 16;

document.getElementById("aumentarFonte").addEventListener("click", function () {

    if (tamanhoFonte < 22) {

        tamanhoFonte += 2;

        document.documentElement.style.fontSize =
            tamanhoFonte + "px";

    }

});

document.getElementById("diminuirFonte").addEventListener("click", function () {

    if (tamanhoFonte > 12) {

        tamanhoFonte -= 2;

        document.documentElement.style.fontSize =
            tamanhoFonte + "px";

    }

});
