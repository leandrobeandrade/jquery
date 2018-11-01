$(document).ready(function() {
	$("form").submit(function(event) {						// submit()
		if ($("input:first").val() === "correto") {
			$("span").text("Válido").show();
            		return;
		}
		$("code").text("Não válido!").show().fadeOut(1000);
		event.preventDefault();
	});

	$("#ul li").text(function(index) {						// text()
		return "item número " + (index + 1);
	});

	function lista(divs) {
		var a = [];
		for (var i = 0; i < divs.length; i++) {
			a.push(divs[i].innerHTML);					// push()
		}
		$("samp").text(a.join(" "));						// join()
	}
	lista($("#div").toArray()							// toArray()
	.reverse());									// reverse()

	var flip = 0;
	$("button:last").click(function() {
		$("b").toggle(flip++ % 2 === 0);					// toggle()
	});

	var count = 0;
	$("p").each(function() {
		var parag = $(this);
		var count = 0;
		parag.click(function() {
			count++;
			parag.find("em").text("clicks: " + count);			// find()
			parag.toggleClass("highlight", count % 3 === 0);		// toggleClass()
		});
	});

	function update(j) {
		var n = parseInt(j.text(), 10);
		j.text(n + 1);
	}
	$("#foo").click(function() {
		update($("strong:first"));
	});
	$("#bar").click(function() {
 		$("#foo").trigger("click");						// trigger()
		update($("strong:last"));
	});

})
