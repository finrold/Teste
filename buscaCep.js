// aguarda submit
document.querySelector('#cepForm').addEventListener('submit', getCepInfo);

function getCepInfo(e) {
    //pegar valor do cep no input
    const cep = document.querySelector('.cep').value;
    
    //faz a request
    fetch(`//viacep.com.br/ws/${cep}/json`)
    .then(response => {
        return response.json();
    })
    .then (data => {
        // exibe a informação do cep
        let infoCep ="";
        if(data.erro){
            exibeIcone("remove");
            infoCep += `
            <div class="alert alert-info alert-dismissible fade show" role="alert">
            <strong>Cep inexistente.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            
            `;
        } else {
            exibeIcone("check")
            infoCep= `
            <div class="alert alert-secondary alert-dismissible fade show"    role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button> 
                <h4 class="alert-heading">Endereço</h4>
                <hr></hr>
                    <p class="m-0"><strong>CEP:</strong>${data.cep}</p>
                    <p class="m-0"><strong>Logradouro:</strong>${data.logradouro}</p>
                    <p class="m-0"><strong>Complemento:</strong>${data.complemento}</p>
                    <p class="m-0"><strong>Bairro:</strong>${data.bairro}</p>
                    <p class="m-0"><strong>Cidade:</strong>${data.localidade}</p>
                    <p class="m-0"><strong>UF:</strong>${data.uf}</p>
            </div>
            `;
        }

        //insere a template no DOM
        document.querySelector("#infoCep").innerHTML = infoCep;
    })

    e.preventDefault();
}
// Mascara para validar entrada do CEP
$(document).ready(function(){
    $('#Cep').mask('00000-000');
});

// exibe/remove icones da linha de inputs
function exibeIcone (icone) {
    // Limpa icones
    document.querySelector(".icon-remove").style.display = "none";
    document.querySelector(".icon-check").style.display = "none";

    //exibir icone correto
    document.querySelector(`.icon-${icone}`).style.display = "inline-flex";
}

// limpa entrada e icones
$("#infoCep").on('close.bs.alert', function(){
    document.querySelector(".cep").value = "";
    document.querySelector(".icon-remove").style.display = "none";
    document.querySelector(".icon-check").style.display = "none";
    document.querySelector(".cep").focus();
});