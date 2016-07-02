function incrementarContador() {
	var novoValor, valorAtual;
	valorAtual = localStorage.getItem('contador') || 0;
	novoValor = parseInt(valorAtual) + 1;
	localStorage.setItem('contador', novoValor);
}


function atualizarContador() {
	var contador = localStorage.getItem('contador') || 0;
	$('#localStorage .contador').text(contador);
}

function limparContador() {
	var contador = localStorage.removeItem('contador') || 0;
	$('#localStorage .contador').text(contador);
}


$('#localStorage .btn').on('click', function(){
	incrementarContador();
	atualizarContador();
});

$('#localStorage .btn-danger').on('click', function(){
	limparContador();
	atualizarContador();
});

atualizarContador();