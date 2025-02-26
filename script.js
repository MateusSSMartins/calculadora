function insert(num) {
    var numero = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = numero + num;
}

function clean() {
    document.getElementById('tela').innerHTML = '';
}

function backspace() {
    var tela = document.getElementById('tela').innerHTML;
    document.getElementById('tela').innerHTML = tela.substring(0, tela.length - 1)
}

function calcular() {
    var tela = document.getElementById('tela').innerHTML;
    if (tela) {
        document.getElementById('tela').innerHTML = eval(tela);
    }
}
document.addEventListener("keypress", function (e) {
    if (e.key == "0") {
        const btn = document.querySelector('#tecla_0');
        btn.click();
    }
})

document.addEventListener("keypress", function (e) {
    if (e.key == "1") {
        const btn = document.querySelector('#tecla_1');
        btn.click();
    }
})
document.addEventListener("keypress", function (e) {
    if (e.key == "2") {
        const btn = document.querySelector('#tecla_2');
        btn.click();
    }
})

document.addEventListener("keypress", function (e) {
    if (e.key == "3") {
        const btn = document.querySelector('#tecla_3');
        btn.click();
    }
})

document.addEventListener("keypress", function (e) {
    if (e.key == "4") {
        const btn = document.querySelector('#tecla_4');
        btn.click();
    }
})

document.addEventListener("keypress", function (e) {
    if (e.key == "5") {
        const btn = document.querySelector('#tecla_5');
        btn.click();
    }
})

document.addEventListener("keypress", function (e) {
    if (e.key == "6") {
        const btn = document.querySelector('#tecla_6');
        btn.click();
    }
})
document.addEventListener("keypress", function (e) {
    if (e.key == "7") {
        const btn = document.querySelector('#tecla_7');
        btn.click();
    }
})

document.addEventListener("keypress", function (e) {
    if (e.key == "8") {
        const btn = document.querySelector('#tecla_8');
        btn.click();
    }
})
document.addEventListener("keypress", function (e) {
    if (e.key == "9") {
        const btn = document.querySelector('#tecla_9');
        btn.click();
    }
})
document.addEventListener("keypress", function (e) {
    if (e.key == ".") {
        const btn = document.querySelector('#tecla_ponto');
        btn.click();
    }
})

document.addEventListener("keypress", function (e) {
    if (e.key == "+") {
        const btn = document.querySelector('#tecla_somar');
        btn.click();
    }
})

document.addEventListener("keypress", function (e) {
    if (e.key == "-") {
        const btn = document.querySelector('#tecla_subtrair');
        btn.click();
    }
})
document.addEventListener("keypress", function (e) {
    if (e.key == "*") {
        const btn = document.querySelector('#tecla_multiplicar');
        btn.click();
    }
})

document.addEventListener("keypress", function (e) {
    if (e.key == "/") {
        const btn = document.querySelector('#tecla_dividir');
        btn.click();
    }
})
document.addEventListener("keypress", function (e) {
    if (e.key == "=") {
        const btn = document.querySelector('#tecla_resultado');
        btn.click();
    }
})

document.addEventListener("keydown", function (e) {
    if (e.key == "Backspace") {
        const btn = document.querySelector('#tecla_backspace');
        btn.click();
    }
})
