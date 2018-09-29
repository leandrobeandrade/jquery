$(document).ready(function() {
	$("#a").click(function() {
		$("#div1").fadeIn(3000, function() {									// fadeIn()
			$("#strong1").fadeIn(100);
		});
		return false;
	});

	$(".span").click(function() {
		$(this).fadeOut(1000, function() {									// fadeOut()
			$("#div2").text("'" + $(this).text() + "' foi faded!");					
			$(this).remove();										// remove()
		});
	});
	$(".span").hover(function() {													
		$(this).addClass("hilite");										// addClass()
	}, function() {
		$(this).removeClass("hilite");										// removeClass()
	});

	$(".div").click(function() {
		$(this).fadeTo("fast", Math.random());									// fadeTo()
	});

	$("button:first").click(function() {										// :first
		$("b:first").fadeToggle("slow", "linear");								// fadeToggle()
	});
	$("button:last").click(function() {										// :last
		$("b:last").fadeToggle("fast", function() {
			$("#log").append("<i>finalizado </i>");
		});
	});

	$(".li1").filter(":even").css({											// filter()
		"background-color": "red",
		"color": "#fff"
	});

	$(".li2").filter(function(index) {
		return $("em", this).length === 1;
	}).css({													// css()
		"background-color": "red",
		"color": "#fff"
	});

})
