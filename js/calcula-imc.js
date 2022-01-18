var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela Nutricional";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++){
   var paciente = pacientes[i]

   var tdPesoPaciente = paciente.querySelector(".info-peso");
   var peso = tdPesoPaciente.textContent;
   
   var tdAlturaPaciente = paciente.querySelector(".info-altura")
   var altura = tdAlturaPaciente.textContent;
   
   var tdImc = paciente.querySelector(".info-imc");
   var imc = tdImc.textContent;
   
   var pesoEhValido = validaPeso(peso);
   var alturaEhValida = validaAltura(altura);
   
   
   if(!pesoEhValido){
       tdImc.textContent = "Peso Inválido!";
       pesoEhValido = false;
       paciente.classList.add("paciente-invalido")
   } 
   
   if(!alturaEhValida){
       tdImc.textContent = "Altura inválida!";
       pesoEhValido = false;
       paciente.classList.add("paciente-invalido")
   }
   
   if(pesoEhValido && alturaEhValida){
       tdImc.textContent = calculaImc(peso, altura); 
   }
}

function validaPeso(peso) {
    if(peso > 0 && peso <= 1000){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.00){
        return true;
    }else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2)
}













