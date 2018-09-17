$(document).ready(function() {
	$("#term-2").prevUntil("dt").css("background-color", "#ccc");						// prevUntil()
	var term1 = document.getElementById("term-1");
	$("#term-3").prevUntil(term1, "dd").css("color", "red");

	$("button:first").on("click", function() {
		$("p").append("Começando...");
		$(".div").each(function(i) {
			$(this).fadeIn().fadeOut(1000 * (i + 1));
		});
		$(".div").promise().done(function() {											// promisse()
			$("p").append(" Finalizado! ");
		});
	});

	$("input[type='checkbox']").prop({disabled: true});									// prop()

	(function() {																		
		var inputTitle = $("#inputTitle").attr("title");
		$("button:last").click(function() {
			var input = $(this).next();

			if (input.attr("title") === inputTitle) {
				input.removeAttr("title")												// removeAttr()
			} else {
				input.attr("title", inputTitle);
			}
			$("#log").html("input title agora é " + input.attr("title"));
		});
	})();

})