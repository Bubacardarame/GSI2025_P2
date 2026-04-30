/* 	Javascipt em ficheiros externos
	comentários em javascript
	exemplo de uso de javascript com ficheiro externo
	exemplo de uso de javascript para calculo
	caixa de texto e janelas de aviso par utilizador
*/

/*	COMENTÁRIO
	Em javascript podem-se utilizar dois tipos de identificadores para referir comentários:
	// 	- comenta a linha a partir da inclusão do simbolo, ao mudar de linha termina o comentario
	/* 	- inicia um comentario de varia linha, terminado com * /
		   todo os texto entre os dois simbolos é comentário
*/
/*	Javascript em ficheiros externo
	por base, a esccrita de javascript em ficheiros externos é em tudo identica à sua escrita em linha no código HTML.
	como o javascript constroi blocos de codigo elementares - cada bloco resolve um problema unico - o mesmo bloco tanto pode ser escrito em ficheiro externo como em linha.
	Esta caracteristica é muito util para reaproveitamento de código de javascript, o mesmo ficheiro pode ser utilizado em varios projectos sem qq alteração
	Por norma, os ficheiros javascript têm a extensão JS
	No presente exemplo, como a ligação ao ficheiro externo é efectuada dentro de uma tag SCRIPT - ver notas no ficheiro base de HTML, jsExterno.htm, não é necessaria qq referencia HTML no ficheiro ligado
*/
	function verPreenche(campo){
//função para verificar se um dado campo de preenchimento obrigatorio está preenchido
		if (campo.value==null||campo.value==""){
//			alert("vazio");
			return false;
			}
//verifica-se se o campo está vazio ou se tem uma string nula
		else{
//			alert("preenchido");
			return true;
			}
	}
	
	function validarMail(endereco){
// utiliza-se as mesmas regras do exemplo JSValidMail
		var posAt=endereco.value.indexOf("@");
		var posPonto=endereco.value.lastIndexOf(".");
		if (posAt<1||posPonto-posAt<2||posPonto>=endereco.value.length-1){
			return false;
			}
		else{
			return true;
			}
	}

	function validarForm(formulario){
		var valido=true;
		var txtStatus="";
		if (verPreenche(formulario.nome)==false){
//o campo do nome não está preenchido, alerta-se o utilizador				
			formulario.nome.focus();
			document.getElementById('frmNome').style.color='red';
			txtStatus=txtStatus + "Nome nao esta preenchido<br>";
			valido=false;
			}
		else{
//o campo do nome está preenchido, repoem-se o formato original
			document.getElementById('frmNome').style.color='blue';
			}

			if (verPreenche(formulario.email)==false){
//o endereço de mail não está preenchido, alerta-se o utilizador				
			txtStatus=txtStatus + "Mail nao esta preenchido<br>";
			document.getElementById('frmMail').style.color='red';
			valido=false;
			}
		else{
			if (validarMail(formulario.email)==false){
//o endereço não é valido, alerta-se o utilizador					
				formulario.email.focus();					
				document.getElementById('frmMail').style.color='red';
				txtStatus=txtStatus + "Endereço de mail invalido<br>";
				valido=false;
				}
			else{
//o endereço de mail está preenchido e é valido, repoem-se o formato original
				document.getElementById('frmMail').style.color='blue';
				}
			}

			if (!valido){
				document.getElementById('status').innerHTML="<strong>Verifique preenchimento do formulario</strong><br>"+txtStatus+"*Campos de Preenchimento obrigatorio";
//a manipulação de conteudos via JavaScript	permite a inclusão de tags de HTML
			}
			return valido;
		}
