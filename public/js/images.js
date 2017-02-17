var recomienda, experiencia, valor;
var buttonEvaluation=false;

var unlike=false;
function changeButton(img){
	console.log("IMAGEN",img);
	if(img.src.match(/up/)) {
		img.src = 'http://publicdomainvectors.org/photos/thumbs-down-left.png';
		unlike = true;
	}
   	else {
   		img.src = "http://www.clipartkid.com/images/70/white-thumbs-up-clip-art-at-clker-com-vector-clip-art-online-1VNVnb-clipart.png";
   		unlike = false;
   	}
}

function saveEvaluation(){

	buttonEvaluation = true;
	var e = document.getElementById("ex8");
	var f = document.getElementById("ex9");

	var boton_enviar = document.getElementById("enviar");
	boton_enviar.disabled=true;

	recomienda = e.value;
	experiencia = f.value;

	console.log('VALOR BARRA 1',recomienda);
	console.log('VALOR BARRA 2',experiencia);

	var event = new KeyboardEvent("keydown", {key: "Enter", keyCode: 55});
	var input = document.getElementById("textInput");
	ConversationPanel.inputKeyDown(event,input);

	$("#textInput").prop("disabled",true);

}


function saveDate(index){
	var cita = document.getElementById("myLink_"+index);
	valor = cita.title;
	console.log('CITA_',valor);
	sendResponse('');
}

function sendResponse(response) {
	// Retrieve the context from the previous server response
	var context;
	var latestResponse = Api.getResponsePayload();
	if (latestResponse)
	context = latestResponse.context;
	context.cita=valor;
	// Send the user message
	Api.sendRequest(response, context);
}
