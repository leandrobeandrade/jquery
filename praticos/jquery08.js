$(document).ready(function() {
	$("tr:even").css("background-color", "#00f");									// :even
	$("tr:odd").css("background-color", "#f00");									// :odd

	var result = $("#resultado");
	for (var i = 0; i < 5; i++) {
		$("button").eq(i).on("click", {value: i}, function(event) {
			var msgs = [
			"botão = " + $(this).index(),
			"event.data.value = " + event.data.value,								// event.data
			"index = " + i
			];
			result.append(msgs.join(", ") + "<br>");
		});
		$("#resultado").click(function() {
			(this).remove();														// remove()
		})
	}
	
	$(".box").on("click", "button", function(event) {
			$(event.delegateTarget).css("background-color", "red");					// event.delegateTarget
	});

	$(".btn-danger").click(function(event) {
			alert(event.isDefaultPrevented()); // false 
			event.preventDefault();													// preventDefault()
			alert(event.isDefaultPrevented()); // true - checa se o preventDefault() foi acionado
	});

	$("#span1").click(function(event){
        event.stopPropagation();
        alert("O elemento span foi clicado.");
    });
    $("p").click(function(event){
        alert("O element p foi clicado.");
        alert(event.isPropagationStopped()); // false - checa se o stopPropagation() foi acionado
    });
    $("#div1").click(function(){
        alert("O elemento div foi clicado.");
    });

})