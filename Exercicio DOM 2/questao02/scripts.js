document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botaoErro').addEventListener('click', function() {
        mostrarErro('O campo deve ser preenchido', 'mensagemErro');
    });
});

function mostrarErro(mensagem, idElemento) {
    var elementoErro = document.getElementById(idElemento);
    if (elementoErro) {
        elementoErro.textContent = mensagem;
        elementoErro.classList.remove('oculto');
        setTimeout(function() {
            elementoErro.classList.add('oculto');
        }, 3000);
    } else {
        console.error('Elemento com ID "' + idElemento + '" não encontrado.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);
    });
    function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value;
    
    document.getElementById('conteudo').innerHTML = conteudo;
    }