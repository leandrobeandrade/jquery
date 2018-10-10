$(document).ready(function() {
	var str = "         neste texto encontram-se espaços no começo e no final        ";
	$("#original").html("Original String: '" + str + "'");
	$("#trimmed").html("Agora depois do trim(): '" + $.trim(str) + "'");					// $.trim()

	var d1 = $.Deferred();											// $.Deferred()
	var d2 = $.Deferred();
	var d3 = $.Deferred();

	$.when(d1, d2, d3).done(function (v1, v2, v3) {								// $.when()
		$("#span1").text(v1); // v1 is undefined
		$("#span2").text(v2); // v2 is "abc"
		$("#span3").text(v3); // v3 is an array [ 1, 2, 3, 4, 5 ]
	});

	d1.resolve();
	d2.resolve("abc");
	d3.resolve(1, 2, 3, 4, 5);

	$("#input1").keydown(function() {									// keydown()
		var texto = $(this).val();
		alert("Feito com keydown() - " + texto);
	});

	$("#input2").keypress(function() {									// keypress()
		$("#p1").css("color","red");
	});

	$("#input3").keyup(function() {										// keyup()
		$("#p2").append("Testando keyup()");
	});

	$("strong span").last().addClass("ligado");								// last()

	$("#div1 span:last-child")										// :last-child
	.css({color:"red", fontSize:"80%"})
	.hover(function() {
		$(this).addClass("ultimo");
	}, function() {
		$(this).removeClass("ultimo");
	});

	$("#div2 span:last-of-type")										// :last-of-type
	.css({color:"red", fontSize:"80%"})
	.hover(function() {
		$(this).addClass("ultimo");
	}, function() {
		$(this).removeClass("ultimo");
	});

	$("#div3").on("click", function() {
		$("#div3").append($("<div class='box'>"));
		var n = $(".box").length;									// length
		$("em").text("Há " + n + " divs." + " Clique para adicionar mais.");
	}).trigger("click");											// trigger()

	$("td:lt(4)").css("backgroundColor", "yellow");								// :lt(index)
	$("td:lt(-2)").css("color", "red");

})
