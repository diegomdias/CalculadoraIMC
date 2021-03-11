

function imc(){
  var idade = document.querySelector('#idade');
var valorIdade = idade.value;

var peso = document.querySelector("#peso");
var valorPeso = peso.value;

var altura = document.querySelector('#altura');
var valorAltura = altura.value;

var calc = valorPeso/(valorAltura*valorAltura);
var arredondado = parseFloat(calc.toFixed(2));

document.getElementById('resultado').setAttribute("value", arredondado);
}
document.addEventListener('', imc);
