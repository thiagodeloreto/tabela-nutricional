var buscarPacientes = document.querySelector('#buscar-pacientes');

buscarPacientes.addEventListener('click', function(){
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){
        var resposta = xhr.responseText;
        resposta = JSON.parse(resposta);

        resposta.forEach(paciente => {
            adicionaPacienteNaTabela(paciente);
        });

    })
    xhr.send();
})