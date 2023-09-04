const visor = document.querySelector('#preview');
const historicoCalc = document.querySelector('#historico');

let display = '';
let historico = [];
let result = '';


function inserir(num) {
    if(result !== '') {
        display = num;
        result = '';
    } else {
        let numero = '';
        display += num + numero;
    }
    atualizaDisplay();
};


function limpar(){
    visor.innerHTML = '';
    cleanDisplay()
}


function cleanDisplay() {
    if(display !== '') {
        return display = '';
    }
}

function voltar()
{
    var resultado = document.getElementById('preview').innerHTML;
    document.getElementById('preview').innerHTML = resultado.substring(0, resultado.length -1);
}


function operacao(op) {
    display += op;
    atualizaDisplay()
 }


 function resultado() {
    if(display !== '') {
    result = eval(display);
    const operation = display;
    

    let data = new Date();
    historico.push({ 
        operation: operation,
        result: result,
        date: data.toLocaleString()
    });

    if(historico.length > 4){
        historico.shift();
    }
    
    display = result;
    atualizaDisplay()
    atualizaHistorico()
    }
 };


 function atualizaDisplay() {
    visor.innerHTML = display;
 }


 function atualizaHistorico() {
    historicoCalc.innerHTML = '';

    for (const item of historico) {
        
        const historicoItem = document.createElement('li');
        historicoItem.className = 'historico-item';
        historicoItem.textContent = `${item.operation} = ${item.result} >>> ${item.date} `;
        
        historicoItem.addEventListener('click', function() {
            display = item.operation;
            atualizaDisplay();
        });

        historicoCalc.appendChild(historicoItem);
    }
 }


