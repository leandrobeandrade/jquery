$(document).ready(function() {
	var array = [0, 1, 2, 3, 4];
	$("p").append($.isArray(array));									// $.isArray()

	var elems = $(".div");
	var div = $("#div");
	var arr = jQuery.makeArray(elems);												// $.makeArray()
	arr.reverse();																	// reverse()
	$(arr).appendTo(div);

	var arr = ["a", "b", "c", "d", "e"];
	$("code").text(arr.join(", "));
	 
	arr = jQuery.map(arr, function(n, i) {											// $.map()
		return (n.toUpperCase() + "[" + i + "]");									// toUpperCase()
	});
	$("em").text(arr.join(", "));													// join()
	 
	arr = jQuery.map(arr, function(a) {
	  	return (a + a).toLowerCase();												// toLowerCase()
	});
	$("span").text(arr.join(", "));

	var arrays1 = $.merge([0, 1, 2], [2, 3, 4]);									// $.merge()
	$("b:first").append("merge() deste vetor resulta em: " + arrays1);

	var arrays2 = $.merge([3, 2, 1], [4, 3, 2]);
	$("b:last").append("merge() deste vetor resulta em: " + arrays2);

	var first = ["a", "b", "c"];
	var second = ["d", "e", "f"];
	var result = $.merge( $.merge([], first), second);
	$("strong").append("merge() destes vetores resulta em: " + result)

	var params = {nome: 'John', sobrenome: 'Smith', idade: 34};
	var str = jQuery.param(params);													// $.param()
	$("i").text(str);

	var obj = jQuery.parseJSON('{"name": "John"}');									// $.parseJSON()
	$("pre").text("O valor deste JSON é válido? ")
	$("pre").append(obj.name === "John");

	var eu = {
		tipo: "cachorro",
		test: function(um, dois, event) {
			$("#log").append("<h3>Alô " + um.tipo + ":</h3>")
			.append("Eu sou um " + this.tipo + ", ")
			.append("e eles são " + dois.tipo + ".<br>")
			.append("Obrigado por " + event.type + "ar,")
			.append(" e fazer " + event.target.type + ".");
		}
	};

	var voce = {tipo: "gato"};
	var eles = {tipo: "peixe"};
	var proxy = $.proxy(eu.test, eu, voce, eles);									// $.proxy()

	$("#test").on("click", proxy);

})
