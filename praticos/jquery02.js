$(document).ajaxSuccess(function() {
	$(".log").text("OUTRA PÁGINA CARREGADA VIA AJAX");
});																					// ajax()

$(document).ajaxSend(function( event, request, settings) {
	$(".msg").append("<li>Realizou a requisição em " + settings.url + "</li><br>");
});

$("button").click(function() {														// click()
  	$(".result").load("jquery01.html #other-page");												// load()
});