$(document).ready(function() {
	$("label + input").css({															// next adjacente
		"color":"blue","border":"solid 1px blue"
	}).val("Encontrado por label + input");

	$("#prev ~ .div").css("border", "3px groove blue");									// next irmãos

	$(".div1:first").nextAll().addClass("after");										// nextAll()

	$("#term-2").nextUntil("dt").css("background-color", "#ccc");						// nextUntil()

	var term3 = $("#term-3");
	$("#term-1").nextUntil(term3, "dd").css("color", "red");							// nextUntil()

})