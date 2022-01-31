let selected1 = 0;
let selected2 = 0;
let selected3 = 0;
let prato = "";
let bebida = "";
let sobremesa = "";
let preco1;
let preco2;
let preco3;
let total = 0;

function selecionarItem(opcao) {
    const removedor = document.querySelector(".selecionado");
    if (removedor !== null) {
        removedor.classList.remove("selecionado");
    }

    opcao.classList.add('selecionado');
    selected1 = 1;

    const aux = opcao.querySelector("h2");
    prato = aux.innerHTML;

    aux = opcao.querySelector("strong");
    preco1 = aux.innerHTML;

    if (selected1 && selected2 && selected3) {
        const state = document.querySelector(".botao-principal");
        let texto = state.querySelector("h3");
        texto.innerHTML = "Fechar pedido";
        state.classList.add('clicado');
    }
}

function selecionarItem2(opcao) {
    const removedor = document.querySelector(".selecionado2");
    if (removedor !== null) {
        removedor.classList.remove("selecionado2");
    }

    opcao.classList.add('selecionado2');
    selected2 = 1;

    const aux = opcao.querySelector("h2");
    bebida = aux.innerHTML;

    aux = opcao.querySelector("strong");
    preco2 = aux.innerHTML;

    if (selected1 && selected2 && selected3) {
        const state = document.querySelector(".botao-principal");
        let texto = state.querySelector("h3");
        texto.innerHTML = "Fechar pedido";
        state.classList.add('clicado');
    }
}

function selecionarItem3(opcao) {
    const removedor = document.querySelector(".selecionado3");
    if (removedor !== null) {
        removedor.classList.remove("selecionado3");
    }

    opcao.classList.add('selecionado3');
    selected3 = 1;

    const aux = opcao.querySelector("h2");
    sobremesa = aux.innerHTML;

    aux = opcao.querySelector("strong");
    preco3 = aux.innerHTML;

    if (selected1 && selected2 && selected3) {
        const state = document.querySelector(".botao-principal");
        let texto = state.querySelector("h3");
        texto.innerHTML = "Fechar pedido";
        state.classList.add('clicado');
    }
}

function openLink() {
    if (selected1 && selected2 && selected3) {
        total = parseInt(preco1) + parseInt(preco2) + parseInt(preco3);
        let mensagem = "Olá, gostaria de fazer o pedido: \n- Prato: " + prato + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: R$ " + total;
        let encodedMessage = encodeURIComponent(mensagem);
        let link = "https://wa.me/+5519993693479?text=" + encodedMessage;
        window.open(link, "_blank");
    }
}