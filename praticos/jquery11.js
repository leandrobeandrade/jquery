$(document).ready(function() {
	$("div span:first-child")														// :first-child
	.css("text-decoration", "underline")
	.hover(function() {
		$(this).addClass("sogreen");
	}, function() {
		$(this).removeClass("sogreen");												// removeClass()
	});

	$("strong:first-of-type").css("color","red");									// :first-of-type

	$("#input1").focus(function() {													// focus()
		$(this).next("em").css("display", "inline").fadeOut(1000);					// next()	
	});

	$("#input1").focusout(function() {												// focusout()
		$("i").css("display", "inline").fadeOut(1000);					
	})

	$("#input2").focus(function() {													
		$(this).blur();																// blur()
	});

	console.log($(".li").get());													// get()

	$("td:gt(4)").css("backgroundColor", "yellow");									// :gt(index)
	$("td:gt(-2)").css("color", "red");

	$("li").has("ul").css("background-color", "red");								// has()

})