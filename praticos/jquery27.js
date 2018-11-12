$(document).ready(function() {
	$("#btn1").click(function() {
		$("#input1").trigger("focus");
	});
	$("#btn2").click(function() {
		$("#input1").triggerHandler("focus");								// triggerHandler()
	});
	$("#input1").focus(function() {
		$("<span>Focado!</span>").appendTo("span").fadeOut(1000);
	});

	var tags = $("h5");
	$("#btn3").click(function() {
		if (tags.parent().is("p")) {
			tags.unwrap();										// unwrap()
		} else {
			tags.wrap("<p></p>");									// wrap()
		}
	});

	$(".btns").click(function() {
		var text = $(this).text();
		$("#input2").val(text);										// val()
	});

	$(".div:visible").click(function() {									// :visible
		$(this).css("background-color","yellow");
	});
	$(".btn-dark").click(function() {
		$("div:hidden").show("fast");									// :hidden
	});

})
