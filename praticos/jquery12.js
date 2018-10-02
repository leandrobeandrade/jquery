$(document).ready(function() {
	$("span[id]").one("click", function() {										// one()
		var idString = $(this).text() + " = " + $(this).attr("id");
		$(this).text(idString);
	});
	$("span[id]").hover().css("cursor", "pointer");									// hover()

	$("em:has(p)").css("color", "red");										// :has

	$("i:first").append($("strong:first").hasClass("selected").toString());
	$("i:last").append($("strong:last").hasClass("selected").toString());						// hasClass()

	$(":header").css({												// :header
		"background-color": "green",
		"color": "#fff"
	});	

	$("#div").on("click", function() {
		$(this).height(30).css({										// height()
			"cursor": "auto",
			"background-color": "red"
		})
	})

	$("code:hidden").show(3000);											// :hidden

	$("button:last").click(function() {
		$("b:last-child").hide("fast", function() {								// hide()
			$(this).prev().hide("fast", arguments.callee);							/ prev()
		});
	});
	$("button:first").click(function() {
		$("b").show(2000);											// show()
	});

})
