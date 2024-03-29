var rodada = 1;
var matriz_jogo = Array(3);
	matriz_jogo['a'] = Array(3);
	matriz_jogo['b'] = Array(3);
	matriz_jogo['c'] = Array(3);
	matriz_jogo['a'][1] = 0;
	matriz_jogo['a'][2] = 0;
	matriz_jogo['a'][3] = 0;
	matriz_jogo['b'][1] = 0;
	matriz_jogo['b'][2] = 0; 
	matriz_jogo['b'][3] = 0;
	matriz_jogo['c'][1] = 0;
	matriz_jogo['c'][2] = 0; 
	matriz_jogo['c'][3] = 0; 
$(document).ready(function(){
	$('#iniciar_jogo').click(function(){
		//valida os nomes dos jogadores
		if($('#entrada_apelido1').val() == ''){
			alert('Apelido do jogador 1 não preenchido');
			return false;
		}
		if($('#entrada_apelido2').val() == ''){
			alert('Apelido do jogador 2 não preenchido');
			return false;
		}
		//exibir apelidos
		$('#nome_jogador1').html($('#entrada_apelido1'));
		$('#nome_jogador2').html($('#entrada_apelido2'));
		//ocultar menu e iniciar jogo	
		$('#pagina_incial').hide();
		$('#palco_jogo').show();
	});
	$('.jogada').click(function(){
		var id_campoclicado = this.id;
		$('#'+id_campoclicado).off();
		jogada(id_campoclicado);
	});
	function jogada(id){
		var icone = '';
		var ponto = 0;
		if((rodada % 2) == 1){
			icone = 'url("imagens/marcacao_1.png")';
			ponto = - 1;
		}
		else{
			icone = 'url("imagens/marcacao_2.png")';
			ponto = 1;
		};
		rodada++;
		$('#'+id).css('background-image', icone);
		var linha_coluna = id.split('-');
		matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
		verifica_combinacao();
	};
	function verifica_combinacao(){
		//verifica na horizontal
		var pontos = 0;
		for(var i=1; i<=3; i++){
			pontos = pontos + matriz_jogo['a'][i];
		}
		ganhador(pontos);
		pontos = 0;
		for(var i=1; i<=3; i++){
			pontos = pontos + matriz_jogo['b'][i];
		}
		ganhador(pontos);
		pontos = 0;
		for(var i=1; i<=3; i++){
			pontos = pontos + matriz_jogo['c'][i];
		}
		ganhador(pontos);
		//verifica na vertical
		for (var l=1; l<=3; l++){
			pontos = 0;
			pontos += matriz_jogo['a'][l];
			pontos += matriz_jogo['b'][l];
			pontos += matriz_jogo['c'][l];
			ganhador(pontos);
		}
		//verificar na diagonal
		pontos = 0;
		pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
		ganhador(pontos);
		pontos = 0;
		pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
		ganhador(pontos);
	};
	function ganhador(pontos){
		if(pontos == -3){
			var jogada1 = $('#entrada_apelido1').val();
			alert(jogada1+' é o vencedor');
			$('.jogada').off();
		} 
		else if(pontos == 3){
			var jogada2 = $('#entrada_apelido2').val();
			alert(jogada2+' é o vencedor');
			$('.jogada').off();
		}
	};
});