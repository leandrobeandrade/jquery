$(document).ready(function() {
	$("p").parent(".selected").css("background", "yellow");							// parent()

	$("td:parent").fadeTo(1500, 0.3);									// :parent

	var parentEls = $("b").parents().map(function() {							// parents()
		return this.tagName;
	}).get().join(", ");											// get()
	$("b").append("<code>" + parentEls + "</code>");

	$("li.item-a").parentsUntil(".level-1").css("background-color", "#D69486");				// parentsUntil()
	$("li.item-2").parentsUntil($("ul.level-1"), ".yes").css("border", "3px solid green");

	var p = $("#p1");
	var position = p.position();
	$("#p2").text("left: " + position.left + ", top: " + position.top);					// position()

	$("li.third-item").prev().css("background-color", "grey");						// prev()

	$("div:last").prevAll().addClass("before");								// prevAll()

})
