/*
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


*/

//var actividad="";
var cont=1;
function crear(){
	
	
	var actividad = window.prompt('Describa la tarea ha realizar');

	if( actividad != ' ' && actividad != null && actividad != ''){
	var radio = document.querySelector('input[type=radio][name=language]:checked');
	var radioV = parseInt(document.querySelector('input[type=radio][name=language]:checked').value);
	var dateControl = document.querySelector('input[type="date"]').value;
	var usuario = document.getElementById('result');
	console.log(dateControl)
	switch(radioV){

		case 1:

		console.log(cont.toString());
		var valor = document.getElementById('example-origin1');
		document.getElementById('example-origin1').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuario.innerHTML + '</b> </center> <br>'+ "Tarea: " +actividad + '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ "</div>";
		console.log(radio.checked);
		radio.checked = false;
		console.log(radio.checked);
		//radio.false;
		cont+=1;
		break;

		case 2:

		var valor = document.getElementById('example-origin2');
		document.getElementById('example-origin2').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuario.innerHTML + '</b> </center> <br>'+ "Tarea: " +actividad+ '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ "</div>";
		radio.checked = false;
		cont+=1;
		break;

		case 3:

		var valor = document.getElementById('example-origin3');
		document.getElementById('example-origin3').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuario.innerHTML + '</b> </center> <br>'+ "Tarea: " +actividad+ '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ "</div>";
		radio.checked = false;
		cont+=1;
		break;

	}
		}
		
		//cont++;

			}


/* dinamismo */

function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);

    event
    .currentTarget
    .style
    /*.backgroundColor = 'yellow';*/
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
    const id = event
    .dataTransfer
    .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);

    event

      .dataTransfer

      .clearData();

}

/* API */

	const request = new XMLHttpRequest();
	request.open('GET', 'https://62c7cf638c90491c2ca7c0e9.mockapi.io/works', true);

	request.onload = function () {
  if (request.status >= 200 && request.status < 400) {

    const data = JSON.parse(this.response);
    
    data.forEach((pelicula) => {
      
	var actividad = pelicula.tarea;
	var radioV = parseInt(pelicula.estado);
	var dateControl = pelicula.fecha;
	var usuario = pelicula.usuario;
	console.log(dateControl)

	switch(radioV){

		case 1:

		var valor = document.getElementById('example-origin1');
		document.getElementById('example-origin1').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuario + '</b> </center> <br>'+ "Tarea: " +actividad + '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ "</div>";

		break;

		case 2:

		var valor = document.getElementById('example-origin2');
		document.getElementById('example-origin2').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuario + '</b> </center> <br>'+ "Tarea: " +actividad+ '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ "</div>";

		break;
		
		case 3:

		var valor = document.getElementById('example-origin3');
		document.getElementById('example-origin3').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuario + '</b> </center> <br>'+ "Tarea: " +actividad+ '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ "</div>";

		break;

	}
		
    });

  } 

  else {

  	alert("tas pendejo mijo xd");

  }
}

request.send();
