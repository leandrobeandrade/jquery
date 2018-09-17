$(document).ready(function() {
	$("b:eq(1)").removeClass();														// removeClass()

	$("span:eq(0)").text("" + $("div").data("test1"));
	$("div").data("test1", "VALUE-1");
	$("div").data("test2", "VALUE-2");
	$("span:eq(1)").text("" + $("div").data("test1"));
	$("div").removeData("test1");													// removeData()
	$("span:eq(2)").text("" + $("div").data("test1"));
	$("span:eq(3)").text("" + $("div").data("test2"));

	var para = $("em");
	para.prop("nbrCode", 1234)
	.append("O código secreto é: ", String(para.prop("nbrCode")), ". ")
	.removeProp("nbrCode")															// removeProp()
	.append("Agora o código secreto é: ", String(para.prop("nbrCode")), ". ");

	$("<h5>Repassado um heading</h5>").replaceAll(".inner");						// replaceAll()

	$("#div .second").replaceWith("<h5>Repassando um heading</h5>");				// replaceWith()

	$(window).resize(function() {													// resize()
		$("strong").append(" - " + "<i>" + $(window).width() + "</i>");
	});

	$("<b></b>").html($(":root")[0].nodeName).appendTo("#log");						// :root

	$("#div2").scroll(function() {													// scroll()
		$("h1").css("display", "inline").fadeOut("slow");							
	});

})