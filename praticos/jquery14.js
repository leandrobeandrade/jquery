$(document).ready(function() {
	var arr = ["um", "dois", "tres", "quatro", "cinco"];
	var obj = {um: 1, dois: 2, tres: 3, quatro: 4, cinco: 5};

	jQuery.each(arr, function(i, val) {													// $.each()
		$("#" + val).text("Meu valor é: " + val + " ");									// text()

		// Para a execução após o "tres"
		return (val !== "tres");
	});

	jQuery.each(obj, function(i, val) {
		$("#" + i).append(document.createTextNode(" - " + val));						// append()
	});

	var object1 = {
		maça: 0,
		banana: {peso: 52, preço: 100},
		cereja: 97
	};
	var object2 = {
	 	banana: {preço: 200},
		limão: 100
	};
	$.extend(object1, object2);															// $.extend()
	$("#log").append(JSON.stringify(object1));

	var toggleFx = function() {
		$.fx.off = !$.fx.off;															// $.fx.off
	};
	toggleFx();
	$("button:last").click(toggleFx);
	$("button:first").click(function() {
		$("#div1").toggle("slow");
	});

	(function() {
		var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		$.getJSON( flickerAPI, {
			tags: "mount rainier",
			tagmode: "any",
			format: "json"
		})
		.done(function(data) {
			$.each( data.items, function(i, item) {
				$("<img>").attr("src", item.media.m).appendTo("#images");
				if (i === 3) {
  					return false;
				}
			});
		});
	})();

	var arr = [1, 9, 3, 8, 6, 1, 5, 9, 4, 7, 3, 8, 6, 9, 1];
	$("strong").text(arr.join(", "));													// join()

	arr = jQuery.grep(arr, function(n, i) {												// $.grep()
		return (n !== 5 && i > 4);
	});
	$("p").text(arr.join(", "));

	arr = jQuery.grep(arr, function(a) {
		return a !== 9;
	});
	$("span").text(arr.join(", "));

	var arr = [4, "Pete", 8, "John"];													// $.inArray()
	var $code = $("code");
	$code.eq(0).text("[" + jQuery.inArray("John", arr) + "]");
	$code.eq(1).text("[" + jQuery.inArray(4, arr) + "]");
	$code.eq(2).text("[" + jQuery.inArray("Karl", arr) + "]");
	$code.eq(3).text("[" + jQuery.inArray("Pete", arr, 2) + "]");

})