var result = document.getElementById("result");


function calcSalario() {
  var inputDias = document.getElementById("inputDias");
  var horasDia = document.getElementById("horasDia");
  var hNegativas = document.getElementById("hNegativas");
  var salario = document.getElementById("salario");

  // if (inputDias.value == "" && horasDia.value =="" && salario.value == "") {
  //   result.innerHTML = "";
  // }

  if (!inputDias.value) {
    let erroDias = document.getElementById("erroDias")
    erroDias.innerHTML = "Erro, campo obrigatório"
  }else {
    let erroDias = document.getElementById("erroDias")
    erroDias.innerHTML = "";
  }

  if (!horasDia.value) {
    let erroHorasDia = document.getElementById("erroHorasDia")
    erroHorasDia.innerHTML = "Erro, campo obrigatório"
  }else {
    let erroHorasDia = document.getElementById("erroHorasDia")
    erroHorasDia.innerHTML = "";
  }

 if (!salario.value) {
    let erroSalario = document.getElementById("erroSalario")
    erroSalario.innerHTML = "Erro, campo obrigatório"
 } else {
  let erroSalario = document.getElementById("erroSalario")
  erroSalario.innerHTML = "";
 }



  if (inputDias.value && horasDia.value && salario.value) {
    let salarioHora = salario.value / (inputDias.value * horasDia.value); 
    let salarioFinal = salarioHora * (horasDia.value * inputDias.value - hNegativas.value);
  
    // let result = document.getElementById("result");
      result.innerHTML = `Com base na quantidade de dias que você trabalhou no mês, seu salário é de: <strong> R$ ${salarioFinal.toFixed(2)} </strong>`

      inputDias.value = "";
      horasDia.value = "";
      hNegativas.value = "";
      salario.value = "";
      
  } 
   
}



function limpar () {
  result.innerHTML = "";
}