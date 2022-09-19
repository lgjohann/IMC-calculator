const form = document.querySelector('#form');

form?.addEventListener('submit', function (e) {
  e.preventDefault();
  const FormPeso = e.target.querySelector('#peso');
  const FormAltura = e.target.querySelector('#altura');

  const peso = Number(FormPeso.value);
  const altura = Number(FormAltura.value);

  if (!peso) {
    setResult('Peso inválido, digite apenas números.', false);
    return; 
  };

  if (!altura) {
    setResult('Altura inválida, digite apenas números, separando por ponto. (Ex: 1.80)', false);
    return; 
  };

  const imc = getIMC(peso, altura);
  const nivelImc = getNivelImc(imc);

  setResult(`Seu IMC é: ${imc}, ${nivelImc}.`, true);

});



function getNivelImc (imc) {
  const nivel = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso', 
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc > 39.9) return nivel[5];

  if (imc > 34.9) return nivel[4];
  
  if (imc > 29.9) return nivel[3];

  if (imc > 24.9) return nivel[2];

  if (imc > 18.5) return nivel[1];

  if (imc < 18.5) return nivel[0];
}


function getIMC(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);

}


function createP () {
  const p = document.createElement("p"); 
  return p;
}


function setResult (msg, _isValid) {
  const resultado = document.querySelector('#result');
  resultado.innerHTML = '';
  const p = createP();
  
  if (_isValid) {p.classList.add('paragrafo-resultado')}
    else {
      p.classList.add('erro')
    }

  p.innerHTML = msg;
  resultado.appendChild(p);
  

}