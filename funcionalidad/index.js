//var actividad="";

function crear(){
	
	
	var actividad = window.prompt('Describa la tarea ha realizar')

	if( actividad != '' && actividad != ' ' && actividad != null ){
	var radio = document.querySelector('input[type=radio][name=language]:checked');
	var radioV = parseInt(document.querySelector('input[type=radio][name=language]:checked').value);
	var dateControl = document.querySelector('input[type="date"]').value;
	var usuario = document.getElementById('result');
	//console.log(dateControl)
	
	switch(radioV){

		case 1:

		var valor = document.getElementById('outerdiv1');
		document.getElementById('outerdiv1').innerHTML=valor.innerHTML + " <div class=\"interno\">" + "Usuario encargado: " + usuario.innerHTML + '<br>'+ "Tarea a realizar: " +actividad + '<br>'+ "Fecha limite : " +dateControl+ "</div>";
		console.log(radio.checked);
		radio.checked = false;
		console.log(radio.checked);
		//radio.false;

		break;

		case 2:

		var valor = document.getElementById('outerdiv2');
		document.getElementById('outerdiv2').innerHTML=valor.innerHTML + " <div class=\"interno\">" + "Usuario encargado: " + usuario.innerHTML + '<br>'+ "Tarea en realización: " +actividad+ '<br>'+ "Fecha limite : " +dateControl+ "</div>";
		radio.checked = false;

		break;

		case 3:

		var valor = document.getElementById('outerdiv3');
		document.getElementById('outerdiv3').innerHTML=valor.innerHTML + " <div class=\"interno\">" + "Usuario encargado: " + usuario.innerHTML + '<br>'+ "Tarea realizada: " +actividad+ '<br>'+ "Fecha de finalización: " +dateControl+ "</div>";
		radio.checked = false;

		break;

	}
		}
			}


/**/

