$(document).ready(function(){

	var contador = function() {
		var x = $("input:checked").length;											// :checked
		$("#span1").text(x + (x === 0 || x === 1 ? " elemento está" : " elementos estão") + " com campo checado");
	};																				
	contador();

	$("input[type=checkbox]").click(function(){										// click()
		var valor = $(this).attr("value");											// attr()
		$("#span2").text(valor);	
		contador();
	});																				

	$("#input").on("blur", function() {
		var input = $("#input").val();
		$("#p1").before(input);
	});																				// blur()

	$("#input").on("keyup", function() {
		var input = $("#input").val();
		$("i").text(input);
	});

	$("ul.topnav > li").css("border", "3px double red");		

	$(".child").children(".selecionado").css("color","blue");  						// children()
	$(".div").children().css("border-bottom", "3px double red");					// children()

	$("em").clone().prependTo("#p2");												// clone()

})