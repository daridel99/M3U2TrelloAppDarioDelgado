//var actividad="";

function crear(){
	
	
	var actividad = window.prompt('Describa la tarea ha realizar')

	if( actividad != '' ){
	var radio = parseInt(document.querySelector('input[type=radio][name=language]:checked').value);
	var usuario = document.getElementById('result');
	//console.log(radio);
	switch(radio){

		case 1:

		var valor = document.getElementById('outerdiv1');
		document.getElementById('outerdiv1').innerHTML=valor.innerHTML + " <div class=\"interno\">" + "Usuario encargado: " + usuario.innerHTML + '<br>'+ "Tarea a realizar: " +actividad+ "</div>";
		console.log(radio.checked);
		radio.checked = false;

		break;

		case 2:

		var valor = document.getElementById('outerdiv2');
		document.getElementById('outerdiv2').innerHTML=valor.innerHTML + " <div class=\"interno\">" + "Usuario encargado: " + usuario.innerHTML + '<br>'+ "Tarea a realizar: " +actividad+ "</div>";
		radio.checked = false;

		break;

		case 3:

		var valor = document.getElementById('outerdiv3');
		document.getElementById('outerdiv3').innerHTML=valor.innerHTML + " <div class=\"interno\">" + "Usuario encargado: " + usuario.innerHTML + '<br>'+ "Tarea a realizar: " +actividad+ "</div>";
		radio.checked = false;

		break;

	}
		}
			}


/**/

