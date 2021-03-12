
function imc(){
  var idade = document.querySelector('#idade');
var valorIdade = idade.value;

var peso = document.querySelector("#peso");
var valorPeso = peso.value;

var altura = document.querySelector('#altura');
var valorAltura = altura.value;

var calc = valorPeso/(valorAltura*valorAltura);

var arredondado = parseFloat(calc.toFixed(2));

document.querySelector('#resultado').setAttribute("value", arredondado);

const textAppear = document.querySelector('#removetext');

textAppear.classList.remove('dnone');
/*
const btn2Class = document.querySelector('.btn2');
btn2Class.textContent = 'recalcular';*/


}
document.addEventListener('', imc);
