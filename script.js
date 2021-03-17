function imc(){
let idade = document.querySelector('#idade');
let valorIdade = idade.value;

let peso = document.querySelector("#peso");
let valorPeso = peso.value;

let altura = document.querySelector('#altura');
let valorAltura = altura.value;

let calc = valorPeso/(valorAltura*valorAltura);

let arredondado = parseFloat(calc.toFixed(2));

//PEGANDO OS VALORES
document.querySelector('#resultado').setAttribute("value", arredondado);
document.querySelector('#resultado2').setAttribute("value", arredondado);

const textAppear = document.querySelector('#removetext');
textAppear.classList.remove('dnone');

//IRÁ APARECER O RESULTADO APÓS FUNÇÃO CALCULAR
const divAppear = document.querySelector('#showme');
divAppear.classList.replace('dnone', 'tabelaImc');

//QuerySelector
const divAppear2 = document.querySelector('#showme2');
const alterarTexto = document.querySelector('.alterar');
const verTabela = document.querySelector('#verTabela')
const alterarTexto2 = document.querySelector('.alterar2');
const divAppear3 = document.querySelector('#showme3');

//IF ELSE
if(arredondado < 18.5){
divAppear2.classList.remove('dnone');
verTabela.classList.remove('dnone');
alterarTexto.textContent = ', você está abaixo do peso recomendado.';

}
else if(arredondado >= 18.5 && arredondado < 25 ){
divAppear2.classList.remove('dnone');
verTabela.classList.remove('dnone');
alterarTexto.textContent = ', você está no seu peso normal.';

}
else if(arredondado >= 25 && arredondado < 30 ){
divAppear2.classList.remove('dnone');
verTabela.classList.remove('dnone');
alterarTexto.textContent = ', você está com um pouco acima do peso ideal.';
}

else if(arredondado >= 30 && arredondado < 35 ){
divAppear2.classList.remove('dnone');
verTabela.classList.remove('dnone');
alterarTexto.textContent = ', Obesidade grau 1.';
}

else if(arredondado >= 35 && arredondado < 40 ){
divAppear2.classList.remove('dnone');
verTabela.classList.remove('dnone');
alterarTexto.textContent = ', Obesidade grau 2.';
}

else if(arredondado > 40 ){
divAppear2.classList.remove('dnone');
verTabela.classList.remove('dnone');
alterarTexto.textContent = ', Obesidade grau 3.';
}

else{
  textAppear.classList.add('dnone2');
  divAppear3.classList.remove('dnone');
  alterarTexto2.textContent = 'Preencha todos os dados corretamente.';
  divAppear.classList.replace('tabelaImc', 'dnone');
 
}
}

document.addEventListener('', imc);

////////////////////////////////////////////////////////////////////

function man(){
  let man = document.querySelector('#man')
  let woman = document.querySelector('#woman')
  man.classList.add('border')
  woman.classList.remove('border')
}

function woman(){
  let man = document.querySelector('#man')
  let woman = document.querySelector('#woman')
  man.classList.remove('border')
  woman.classList.add('border')
}


