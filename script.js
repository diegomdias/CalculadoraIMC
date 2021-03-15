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
document.querySelector('#resultado2').setAttribute("value", arredondado);

const textAppear = document.querySelector('#removetext');
textAppear.classList.remove('dnone');

//IRÁ APARECER O RESULTADO APÓS FUNÇÃO CALCULAR
const divAppear = document.querySelector('#showme');
divAppear.classList.replace('dnone', 'tabelaImc');



if(arredondado < 18.5){
  const divAppear2 = document.querySelector('#showme2');
divAppear2.classList.remove('dnone');
  const alterarTexto = document.querySelector('.alterar');
alterarTexto.textContent = ', você está abaixo do peso.';
}
else if(arredondado >= 18.5 && arredondado < 25 ){
  const divAppear2 = document.querySelector('#showme2');
divAppear2.classList.remove('dnone');
  const alterarTexto = document.querySelector('.alterar');
  alterarTexto.textContent = ', você está no seu peso normal.';

}
else if(arredondado >= 25 && arredondado < 30 ){
  const divAppear2 = document.querySelector('#showme2');
divAppear2.classList.remove('dnone');
  const alterarTexto = document.querySelector('.alterar');
  alterarTexto.textContent = ', você está com um pouco de sobre-peso.';

}

else if(arredondado >= 30 && arredondado < 35 ){
  const divAppear2 = document.querySelector('#showme2');
divAppear2.classList.remove('dnone');
  const alterarTexto = document.querySelector('.alterar');
  alterarTexto.textContent = ', Obesidade grau 1.';

}

else if(arredondado >= 35 && arredondado < 40 ){
  const divAppear2 = document.querySelector('#showme2');
divAppear2.classList.remove('dnone');
  const alterarTexto = document.querySelector('.alterar');
  alterarTexto.textContent = ', Obesidade grau 2.';

}

else if(arredondado > 40 ){
  const divAppear2 = document.querySelector('#showme2');
divAppear2.classList.remove('dnone');
  const alterarTexto = document.querySelector('.alterar');
  alterarTexto.textContent = ', Obesidade grau 3.';

}

else{
  const divAppear3 = document.querySelector('#showme3');
  divAppear3.classList.remove('dnone');
  const alterarTexto2 = document.querySelector('.alterar2');
  alterarTexto2.textContent = 'Preencha todos os dados corretamente.';
 
  

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


