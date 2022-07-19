var cont=1;
const listaActividadesUI1 = document.getElementById('.example-origin');
const reload = document.querySelector('#reload');

function crear(){
	
	
	var actividad = window.prompt('Describa la tarea ha realizar');

	if( actividad != ' ' && actividad != null && actividad != ''){
	var radio = document.querySelector('input[type=radio][name=language]:checked');
	var radioV = parseInt(document.querySelector('input[type=radio][name=language]:checked').value);
	var dateControl = document.querySelector('input[type="date"]').value;
	var usuarioT = document.getElementById('result');
	//console.log(dateControl)
	switch(radioV){

		case 1:

		var valor = document.getElementById('example-origin1');
		document.getElementById('example-origin1').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuarioT.innerHTML + '</b> </center> <br>'+ "Tarea: " +actividad + '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ " <br> <br> <span class=\"float-right\"><button type=\"button\" onclick=\"confirm('confirma que desa borrarlo?') ? fetch( 'https://62c7cf638c90491c2ca7c0e9.mockapi.io/works/"+cont+"',{method: 'DELETE',}).then(() => $('#draggable-"+cont+"').remove()) : console.log('You clic cancel')\"><i class=\"material-icons\">delete</i></button></span>  </div>";
		//document.getElementById('result').innerHTML="";
		//document.getElementById('Contenido').disabled = true;
		radio.checked = false;
		//cont+=1;
		break;

		case 2:

		var valor = document.getElementById('example-origin2');
		document.getElementById('example-origin2').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuarioT.innerHTML + '</b> </center> <br>'+ "Tarea: " +actividad + '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ " <br> <br> <span class=\"float-right\"><button type=\"button\" onclick=\"confirm('confirma que desa borrarlo?') ? fetch( 'https://62c7cf638c90491c2ca7c0e9.mockapi.io/works/"+cont+"',{method: 'DELETE',}).then(() => $('#draggable-"+cont+"').remove()) : console.log('You clic cancel')\"><i class=\"material-icons\">delete</i></button></span>  </div>";
		//document.getElementById('Contenido').disabled = true;
		radio.checked = false;
		//cont+=1;
		break;

		case 3:

		var valor = document.getElementById('example-origin3');
		document.getElementById('example-origin3').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuarioT.innerHTML + '</b> </center> <br>'+ "Tarea: " +actividad + '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ " <br> <br> <span class=\"float-right\"><button type=\"button\" onclick=\"confirm('confirma que desa borrarlo?') ? fetch( 'https://62c7cf638c90491c2ca7c0e9.mockapi.io/works/"+cont+"',{method: 'DELETE',}).then(() => $('#draggable-"+cont+"').remove()) : console.log('You clic cancel')\"><i class=\"material-icons\">delete</i></button></span>  </div>";
		//fetch( 'https://62c7cf638c90491c2ca7c0e9.mockapi.io/works/"+cont+"',{method: 'DELETE',}).then(() => $('#draggable-"+cont+"').remove())
		//document.getElementById('Contenido').disabled = true;
		radio.checked = false;
		//cont+=1;
		break;

	}
		console.log(cont);
		
		/* API POST */

		fetch('https://62c7cf638c90491c2ca7c0e9.mockapi.io/works',{
			method: 'POST',
			headers:{

				'Content-Type': 'application/json',

			},

			body:JSON.stringify({

				id: cont,
				usuario: usuarioT.innerHTML,
				fecha: dateControl,
				estado: radioV,
				tarea: actividad

			})


		})

		cont+=1;
	
	}
	
			}



/* funcionalidad */

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

		nombre=event.target.id;
    //console.log(nombre.toString())
if(event.path[0].className=='example-dropzone' || event.path[0].className=='example-origin' || event.path[0].className=='origin-dropzone'){
    if(event.path[0].className=='example-dropzone'){
      esdoC=3;
    }
    else if(event.path[0].className=='example-origin'){
      esdoC=1;
    }
    else{
    	esdoC=2;
    }

    const id = event
    .dataTransfer
    .getData('text');
    const draggableElement = document.getElementById(id);
    idC=id.toString().slice(10);
    	
    	fetch('https://62c7cf638c90491c2ca7c0e9.mockapi.io/works/'+idC,{
			method: 'PUT',
			headers:{

				'Content-Type': 'application/json',

			},

			body:JSON.stringify({

				estado: esdoC })})

    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    console.log("estado "+esdoC+", id "+idC)
    event

      .dataTransfer

      .clearData();

}
}

/* API GET*/

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
	var idT= pelicula.id;
		cont=idT;
	//console.log(dateControl)

	switch(radioV){

		case 1:

		var valor = document.getElementById('example-origin1');
		document.getElementById('example-origin1').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuario + '</b> </center> <br>'+ "Tarea: " +actividad + '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ " <br> <span class=\"float-right\"><button type=\"button\" onclick=\" confirm('confirma que desa borrarlo?') ? fetch( 'https://62c7cf638c90491c2ca7c0e9.mockapi.io/works/"+idT+"',{method: 'DELETE',}).then(() => $('#draggable-"+cont+"').remove()) : console.log('You clic cancel') \" ><i class=\"material-icons\">delete</i></button></span> </div>";
		//cont+=1;
		break;

		case 2:

		var valor = document.getElementById('example-origin2');
		document.getElementById('example-origin2').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuario + '</b> </center> <br>'+ "Tarea: " +actividad + '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ " <br> <span class=\"float-right\"><button type=\"button\" onclick=\" confirm('confirma que desa borrarlo?') ? fetch( 'https://62c7cf638c90491c2ca7c0e9.mockapi.io/works/"+idT+"',{method: 'DELETE',}).then(() => $('#draggable-"+cont+"').remove()) : console.log('You clic cancel') \" ><i class=\"material-icons\">delete</i></button></span> </div>";
		//cont+=1;
		break;

		case 3:

		var valor = document.getElementById('example-origin3');
		document.getElementById('example-origin3').innerHTML= valor.innerHTML + " <div id=\"draggable-"+cont+"\" class=\"example-draggable\" draggable=\"true\" ondragstart= \" onDragStart(event); \" >" + "Usuario encargado: <center> <br> <b>" + usuario + '</b> </center> <br>'+ "Tarea: " +actividad + '<br>'+ "<center> <br> Fecha: <br> </center>" +dateControl+ " <br> <span class=\"float-right\"><button type=\"button\" onclick=\" confirm('confirma que desa borrarlo?') ? fetch( 'https://62c7cf638c90491c2ca7c0e9.mockapi.io/works/"+idT+"',{method: 'DELETE',}).then(() => $('#draggable-"+cont+"').remove()) : console.log('You clic cancel') \" ><i class=\"material-icons\">delete</i></button></span></div>";
		//cont+=1;
		break;

	}

	//console.log(cont);
		
    });

  } 

  else {

  	alert("error");

  }
}

request.send();
