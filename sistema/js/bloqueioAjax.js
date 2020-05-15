
/*Funcao usada para bloquear a tela em requisicoes Ajax. 
*Implementa o plugin jquery.blckUI.js que deve fazer parte da biblioteca do projeto
*/

function bloquearJanela(acao, mensagem){

	var cor = '#6d8bdb';//Mensagem padrao cor cinza

	if (acao == 1){//Mensagem de alerta cor amarela	
		cor = "#d49f08";

	}else if (acao == 2){//Mensagem de sucesso cor verde	
		cor = "#265826";
	
	}else if (acao == 3){//Mensagem de erro cor vermelha
		cor = "#871f1f";
	}

	$.blockUI({ css: { 
	border: 'none', 
    padding: '10px', 
    backgroundColor: cor, 
                '-webkit-border-radius': '5px', 
                '-moz-border-radius': '5px', 
                opacity: .8, 
                color: '#fff'
            },
            message: mensagem
        }); 
}