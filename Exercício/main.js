// Seleciona o formulário e os campos numéricos
const form = document.getElementById('Form-maiorMenor');
const primeiroNumero = document.getElementById('primeiroNumero');
const segundoNumero = document.getElementById('segundoNumero');

// Seleciona os elementos de mensagens de sucesso e erro
const mensagemSucesso = document.createElement('p');
mensagemSucesso.classList.add('sucess-message');
mensagemSucesso.style.display = 'none';

const mensagemErro = document.createElement('p');
mensagemErro.classList.add('error-message');
mensagemErro.style.display = 'none';

// Adiciona as mensagens ao formulário
form.appendChild(mensagemSucesso);
form.appendChild(mensagemErro);

// Evento de submissão do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    // Converte os valores dos campos para números
    const valorA = Number(primeiroNumero.value);
    const valorB = Number(segundoNumero.value);

    // Verifica se o segundo número é maior que o primeiro
    if (valorB > valorA) {
        // Exibe mensagem de sucesso
        mensagemSucesso.innerHTML = "ISSO! Você preencheu corretamente!";
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';
    } else {
        // Exibe mensagem de erro
        mensagemErro.innerHTML = "Você não leu direito... o SEGUNDO tem que ser maior que o primeiro!!!";
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
    }
});
