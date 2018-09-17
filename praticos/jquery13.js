$(document).ready(function() {
	$(".li1").filter(":odd")
	.hide()
	.end().filter(":even")																// end()
	.hover(function() {
		$(this).toggleClass("active")
		.next()																			// next()
		.stop(true, true)																// stop()
  		.slideToggle();
	});

	$("p").click(function() {
		var index = $("p").index(this);													// index()
		$("span:last").text("Index: " + index);
	});

	var modHeight = 70;
	$(".div1").one( "click", function() {												// one()
		$(this).innerHeight(modHeight).addClass("mod1");								// innerHeight()
		modHeight -= 8;
	});

	var modWidth = 70;
	$(".div2").one("click", function() {
		$(this).innerWidth(modWidth).addClass("mod2");									// innerWidth()
		modWidth -= 8;
	});

	$("strong").insertAfter("#foo");													// insertAfter()
	$("b").insertBefore("#bar");														// insertBefore()

	var alt = $("#browsers li:nth-child(2n)").css("background", "#0ff");
	$(".li2").click(function() {
		if (alt.is(this)) {																// is()
			$(this).slideUp();
		} else {
			$(this).css("background", "green");
		}
	});

	$("button").on("click", function() {
		$("h1 > em").css("border", "solid 3px red");
	})

})