$(document).ready(function() {
	$.fn.equalizeHeights = function() {
		var maxHeight = this.map(function(i, e) {								// map()
			return $(e).height();
		}).get();
		return this.height(Math.max.apply(this, maxHeight));							// height()
	};
	$("input").click(function() {
		$(".div").equalizeHeights();
	});

	$("samp").mouseup(function() {											// mouseup()
		$(this).append("<span style='color:#f00;'> Mouse up.</span>");
	}).mousedown(function() {											// mousedown()
		$(this).append("<span style='color:#00f;'> Mouse down.</span>");
	});

	var i = 0;
	$("div.overout").mouseover(function() {										// mouseover()
		$("p:first", this).text("mouse over");
		$("p:last", this).text(++i);
	}).mouseout(function() {											// mouseout()
		$("p:first", this).text("mouse out");
	});

	var n = 0;
	$("div.enterleave").mouseenter(function() {									// mouseenter()
		$("p:first", this).text("mouse enter");
		$("p:last", this).text(++n);
	}).mouseleave(function() {											// mouseleave()
		$("p:first", this).text("mouse leave");
	});

	$("#div2").mousemove(function(event) {										// mousemove()
		var pageCoords = "(" + event.pageX + ", " + event.pageY + ")";
		var clientCoords = "(" + event.clientX + ", " + event.clientY + ")";
		$("#div1 span:first").text("(event.pageX, event.pageY) : " + pageCoords);
		$("#div1 span:last").text("(event.clientX, event.clientY) : " + clientCoords);
	});

	$("button[disabled]").next().text("este botão está disabled");							// next()
	$("li.third-item").next().css("background-color", "red");							// next()

})
