var botaoAdicionar = document.querySelector("#adicionar-paciente").addEventListener("click", (event) => {
    event.preventDefault()

    var formulario = document.querySelector("#form-adiciona");
    var paciente = obtemInfoDaTabela(formulario);
    adicionaPacienteNaTabela(paciente);
    
    formulario.reset()
})

function obtemInfoDaTabela(formulario){
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    if(!validaPaciente(paciente)){  
        alert("Adicione os dados corretamente.")
         return;
     }
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr).classList.add('fade-in');
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd (dado, classe) {
   var td = document.createElement('td');
   td.textContent = dado;
   td.classList.add(classe);
   return td;
}

function validaPaciente (paciente){
    if(validaPeso(paciente.peso) && validaAltura(paciente.altura)){
        return true;
    }else{
        return false;
    }
}


