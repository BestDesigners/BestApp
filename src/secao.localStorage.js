var novoValor, valorAtual;

valorAtual = $('#localStorage .contador').text();
novoValor = parseInt(valorAtual) + 1;

$('#localStorage .contador').text(novoValor);