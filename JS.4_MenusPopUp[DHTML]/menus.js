//funções para manipular a visibilidade menus de pop-up
let t; //define uma variavel global para o timer usado para 'esconder' os menus popup

//função que 'esconde' todos os menus de Pop-Up
function hideAll(){
	document.getElementById('popUp1').style.display='none';
	document.getElementById('popUp2').style.display='none';
	document.getElementById('popUp3').style.display='none';
	document.getElementById('popUp4').style.display='none';
	document.getElementById('popUp5').style.display='none';
}	

//funções para 'esconder' menus individulamente			
//o timer indica o delay entre 'levantar' o rato e o menu popup desaparecer.
function hidePopUp1(){
	t=setTimeout("document.getElementById('popUp1').style.display='none';",1000);
}

function hidePopUp2(){
	t=setTimeout("document.getElementById('popUp2').style.display='none';",1000);
}

function hidePopUp3(){
	t=setTimeout("document.getElementById('popUp3').style.display='none';",1000);
}

function hidePopUp4(){
	t=setTimeout("document.getElementById('popUp4').style.display='none';",1000);
}

function hidePopUp5(){
	t=setTimeout("document.getElementById('popUp5').style.display='none';",1000);
}

//função para apresentar os menus popup
function showPopUp(menuIdx){
	clearTimeout(t);
	hideAll();
	switch(menuIdx)
	{
		case 1:	document.getElementById('popUp1').style.display='block';
		break;    
		case 2:	document.getElementById('popUp2').style.display='block';
		break;
		case 3:	document.getElementById('popUp3').style.display='block';
		break;
		case 4:	document.getElementById('popUp4').style.display='block';
		break;
		case 5:	document.getElementById('popUp5').style.display='block';
		break;
	}
}
//Ainda se epode simplificar mais utilizando 
/*function showPopUp(menuIdx) {
    clearTimeout(t);
    hideAll();
    document.getElementById('popUp' + menuIdx).style.display = 'block';
}
*/
// Voltaremos às funções em javascript mais tarde...
