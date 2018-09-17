$(document).ready(function() {
	$(".li").each(function(index) {														// each()
		$("span").text(index + ": " + $(".li").text());
	});

	$(".um").empty();																	// empty()

	$("strong:empty").text("Estava vazio, foi selecionado com :empty");					// :empty

	$("input:disabled").val("Input desabilitado!");										// :disabled

	$("ul.first").find(".foo")															// find()
	.css("background-color", "red")
	.end()
	.find(".bar")
	.css("background-color", "green")
	.end();																				// end()

	$(".div1").eq(3).css("background-color", "blue");									// eq()
	$(".div1").eq(-2).css("background-color", "black");

})