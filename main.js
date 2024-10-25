const app = document.getElementById('root');

const bloque = document.createElement('div');
bloque.classList.add('bloque');

//Variables
let num1;
let operador;
let num2;

//Bloque de Calculadora
const blockCalculadora = document.createElement('div');
blockCalculadora.classList.add('calculadora');

//Bloque Display 
const bloqueDisplay = document.createElement('div');
bloqueDisplay.classList.add('display');

//Display Operación
const SOperacion = document.createElement('input');
SOperacion.classList.add('SOperacion');
SOperacion.value = '';
SOperacion.readOnly = true;

//Display "Input"
const SDisplay = document.createElement('input');
SDisplay.classList.add('SDisplay');
SDisplay.value = '';
SDisplay.readOnly = true;



const titulo1 = document.createElement('h2');
titulo1.classList.add('title');
titulo1.textContent = 'Calculadora';

//Bloque de teclas
const bloqueBtn = document.createElement('div');
bloqueBtn.classList.add('blockBtn');

//Botones

const btnClear = document.createElement('button');
btnClear.classList.add('btnClear');
btnClear.textContent = 'C';
btnClear.onclick = (event) => {
    SDisplay.value = '';
    SOperacion.value = '';
};




//Operadores
const btnPlay = document.createElement('button');
btnPlay.classList.add('btnCalcular');
btnPlay.textContent = '=';
btnPlay.onclick = (event) => {
    num2 = parseFloat(SDisplay.value);
    if (operador == '+') {
        resultado = num1 + num2;
    }
    else if (operador == '-') {
        resultado = num1 - num2;
    }
    else if (operador == 'x') {
        resultado = num1 * num2;
    }
    else {
        resultado = num1 / num2;
    }
    SOperacion.value = "" + num1 + operador + num2;
    SDisplay.value = resultado;
};


const btnMas = document.createElement('button');
btnMas.classList.add('btnOperador');
btnMas.textContent = '+';
btnMas.onclick = (event) => {
    SDisplay.value = SDisplay.value;
    num1 = parseFloat(SDisplay.value);
    operador = '+';
    SDisplay.value = '';
};

const btnMenos = document.createElement('button');
btnMenos.classList.add('btnOperador');
btnMenos.textContent = '-';
btnMenos.onclick = (event) => {
    SDisplay.value = SDisplay.value;
    num1 = parseFloat(SDisplay.value);
    operador = '-';
    SDisplay.value = '';
};

const btnMulti = document.createElement('button');
btnMulti.classList.add('btnOperador');
btnMulti.textContent = 'x';
btnMulti.onclick = (event) => {
    SDisplay.value = SDisplay.value;
    num1 = parseFloat(SDisplay.value);
    operador = 'x';
    SDisplay.value = '';
};

const btnDiv = document.createElement('button');
btnDiv.classList.add('btnOperador');
btnDiv.textContent = '/';
btnDiv.onclick = (event) => {
    SDisplay.value = SDisplay.value;
    num1 = parseFloat(SDisplay.value);
    operador = '/';
    SDisplay.value = '';
};


//Numeros

const btn1 = document.createElement('button');
btn1.classList.add('btn1');
btn1.textContent = '1';
btn1.onclick = (event) => {
    SDisplay.value = SDisplay.value + '1';
};

const btn2 = document.createElement('button');
btn2.classList.add('btn2');
btn2.textContent = '2';
btn2.onclick = (event) => {
    SDisplay.value = SDisplay.value + '2';
};
const btn3 = document.createElement('button');
btn3.classList.add('btn3');
btn3.textContent = '3';
btn3.onclick = (event) => {
    SDisplay.value = SDisplay.value + '3';
};
const btn4 = document.createElement('button');
btn4.classList.add('btn4');
btn4.textContent = '4';
btn4.onclick = (event) => {
    SDisplay.value = SDisplay.value + '4';
};

const btn5 = document.createElement('button');
btn5.classList.add('btn5');
btn5.textContent = '5';
btn5.onclick = (event) => {
    SDisplay.value = SDisplay.value + '5';
};

const btn6 = document.createElement('button');
btn6.classList.add('btn6');
btn6.textContent = '6';
btn6.onclick = (event) => {
    SDisplay.value = SDisplay.value + '6';
};

const btn7 = document.createElement('button');
btn7.classList.add('btn7');
btn7.textContent = '7';
btn7.onclick = (event) => {
    SDisplay.value = SDisplay.value + '7';
};

const btn8 = document.createElement('button');
btn8.classList.add('btn8');
btn8.textContent = '8';
btn8.onclick = (event) => {
    SDisplay.value = SDisplay.value + '8';
};

const btn9 = document.createElement('button');
btn9.classList.add('btn9');
btn9.textContent = '9';
btn9.onclick = (event) => {
    SDisplay.value = SDisplay.value + '9';
};

const btn0 = document.createElement('button');
btn0.classList.add('btn0');
btn0.textContent = '0';
btn0.onclick = (event) => {
    SDisplay.value = SDisplay.value + '0';
};


//Aca se pica
const btnChangeMode = document.createElement('button');
btnChangeMode.classList.add('btnChangeMod');
btnChangeMode.textContent = '☼';
btnChangeMode.onclick = (evento) => {
    if (btnChangeMode.classList.value.includes("btnChangeMod")){

        btnChangeMode.textContent = "☽";
        bloqueDisplay.classList.add("DisplayLight");
        btnChangeMode.classList.value = "ModLight";
        bloqueBtn.classList.add("ModeLight");
        
    }
    else{

        btnChangeMode.classList.value = "btnChangeMod";
        btnChangeMode.textContent = '☼';
        bloqueDisplay.classList.value = "display";
        bloqueBtn.classList.remove("ModeLight");

    }
} 



//Estructura
app.appendChild(bloque);
bloque.appendChild(titulo1);
bloque.appendChild(blockCalculadora);

//Bloque del Display
bloque.appendChild(bloqueDisplay);


bloque.appendChild(bloqueBtn);

//Display
bloqueDisplay.appendChild(SOperacion);
bloqueDisplay.appendChild(SDisplay);

//Botones
bloqueBtn.appendChild(btnMas);
bloqueBtn.appendChild(btnMenos);
bloqueBtn.appendChild(btnMulti);
bloqueBtn.appendChild(btnDiv);

bloqueBtn.appendChild(btn1);
bloqueBtn.appendChild(btn2);
bloqueBtn.appendChild(btn3);
bloqueBtn.appendChild(btn4);
bloqueBtn.appendChild(btn5);
bloqueBtn.appendChild(btn6);
bloqueBtn.appendChild(btn7);
bloqueBtn.appendChild(btn8);
bloqueBtn.appendChild(btn9);
bloqueBtn.appendChild(btn0);


bloqueBtn.appendChild(btnClear);
bloqueBtn.appendChild(btnChangeMode);
bloqueBtn.appendChild(btnPlay);