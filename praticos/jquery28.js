$(document).ready(function() {
	var larg = $(window).width();														// width()
	$("h2").append(larg + "px");

	$("p").wrap("<div class='div1'></div>");											// wrap()

	$("h6").wrapAll("<div class='div1'></div>");										// wrapAll()

	$("#div").wrapInner("<div class='div2'><code><em></em></code></div>");				// wrapInner()

})