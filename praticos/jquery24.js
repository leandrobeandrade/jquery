$(document).ready(function() {
	$("div .demo").scrollLeft(300);										// scrollLeft()

	$("div .mode").scrollTop(300);										// scrollTop()

	$("textarea").select(function() {
		var txt = $(this).val();									// select()
		$("code").text(txt).show().fadeOut(1000);
	});

	$("select").change(function() {
		var str = "";
		$("select option:selected").each(function() {							// :selected
			str += $(this).text() + " ";
		});
		$("b").text(str);
	}).trigger("change");											// trigger()

	function showValues() {
		var str = $("#form1").serialize();								// serialize()
		$("em").text(str);
	}
	$("#check1, #check2").on("click", showValues);
	showValues();

	function showValue() {
		var fields = $("#check3, #check4, #radio2").serializeArray();					// serializeArray()
		$("h6").empty();
		$.each(fields, function(i, field) {
			$("h6").append(field.value + " ");
		});
	}
	$(":checkbox, :radio").click(showValue);
	showValue();

	$("samp").siblings(".selected").css("background", "yellow");						// siblings()

})
