$(document).ready(function() {
	$("#div1").contextmenu(function() {												// contextmenu()
		alert("Manipulador contextmenu() chamado.");
	});

	$("#div2").data("test", {first: 16, last: "pizza!"});							// data()
	$("span:first").text($("#div2").data("test").first);
	$("span:last").text($("#div2").data("test").last);
	
	$("#btn1").click(function() {
		$("div.first").slideUp(300).delay(800).fadeIn(400);							// efeitos
		$("div.second").slideUp(300).fadeIn(400);
	});

	$("body").delegate("strong", "click", function() {								// delegate()
		$(this).after("<strong id='p2'> Outro parágrafo!</strong>");
	});

	$("#p3").click(function() {
		$("#div3")
		.show("slow")
		.animate({left: "+=200"}, 2000)
		.queue(function() {															// queue()
			$(this).addClass("novacor").dequeue();
		})
		.animate({left: "-=200"}, 500)
		.queue(function() {
			$(this).removeClass("novacor").dequeue();
		})
		.slideUp();
	});

	$("#p4").click(function() {
		$("#div4")
		.animate({left:"+=200px"}, 2000)
		.animate({top:"400px"}, 600)
		.queue(function() {
			$(this).toggleClass("red").dequeue();									// dequeue()
		})
		.animate({left:"10px", top:"460px"}, 700);
	});

	$("em").click(function() {
		$(this).toggleClass("off");
	});
	
	var em;
	$("#btn2").click(function() {
		if (em) {
			em.prependTo("pre");
			em = null;
		} else {
			em = $("em").detach();													// detach()
		}
	});

	var foo = function() {
		$("i").toggleClass("color");
	};

	$("#p5").on("click", foo);														// on()
//	$("#p5").off("click", foo);														// off()

})