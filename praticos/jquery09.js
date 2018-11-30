$(document).ready(function() {
	$("p").on("mouseover", function(event) {
	 	$(this).css("color","red");
	});
	$("#btn1").click(function(event) {
		$("p").trigger("mouseover");
	});													// event.namespace
	
	$("#btn2").click(function(event) {
		return "Resultado retornado por uma função";
	});
	$("#btn2").click(function(event) {
		$("span").html(event.result);									// event.result
		//	$("span").text(event.type);
	});

	function handler(event) {
		var target = $(event.target);									// event.target
		if (target.is("li")) {
			target.children().toggle();
		}
	}
	$("ul").click(handler).find("ul").hide();								// find()

	$("#input").on("keydown", function(event) {
		$("strong").html("Evento: " + event.type + " - " + " chave: " + event.which);			// event.wich
	});

	var last, diff;
	$("#btn3").click(function(event) {
		if (last) {
			diff = event.timeStamp - last;
			$("em").append("tempo desde o último evento: " + diff + "<br>");
		} else {
			$("em").append("Click novamente.<br>");
		}
		last = event.timeStamp;										// event.timeStamp
	});

	$("#div1").on("mousemove", function(event) {
		$("#div1").text("pageX: " + event.pageX + ", pageY: " + event.pageY);				// event.pageX
	});

	$("#div1").mouseout(function(event) {
		alert(event.relatedTarget.nodeName); 								// event.relatedTarget
		alert(event.type);										// event.type
	});

})
