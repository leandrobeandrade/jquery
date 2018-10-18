$(document).ready(function() {
	function flash() {
		$("pre").show().fadeOut("slow");
	}
	$("#bind").click(function() {
		$("div").on("click", "#theone", flash).find("#theone").text("Pode Clicar!");			// on()
	});
	$("#unbind").click(function() {	
		$("div").off("click", "#theone", flash).find("#theone").text("Nada...");   			// off()
	});

	$("*", document.body).click(function(event) {
		var offset = $(this).offset();									// offset()
		event.stopPropagation();									// stopPropagation()
		$("#result").text(this.tagName +" coords (" + offset.left + ", " + offset.top + ")");
	});

	$("li .item-a").offsetParent().css("background-color", "yellow");					// offsetParent()

	$(".div span:only-child").text("Span única").css("border", "2px blue solid");				// :only-child

	$(".div2 span:only-of-type").text("Span única").css("border", "2px blue solid");			// :only-of-type

	var p = $("#div2 p:first");
	$("#p2").text("outerHeight: " + p.outerHeight() +" , outerHeight(true): " + 				// outerHeight()
		p.outerHeight(true)); 
	$("#p3").text("outerWidth: " + p.outerWidth() +" , outerWidth( true ): " + p.outerWidth(true));

})
