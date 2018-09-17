$(document).ready(function() {
	$("span").not(".green, #blueone").css("border-color", "red");						// not()

	$("input:not(:checked) + samp").css("background-color", "yellow");					// :not
	$("input").attr("disabled", "disabled");											// atrr()

	$(".ul li:nth-child(2)").append("<strong> - 2nd!</strong>");						// :nth-child()

	$(".ul2 li:nth-last-child(2)").append("<strong> - 2nd a partir do último!</strong>");
    // :nth-last-child()

	$(".div3 dfn:nth-of-type(2)").append("<strong> - 2nd irmão de dfn</strong>").addClass("nth"); 
    // :nth-of-type()

	$(".div4 ul li:nth-last-of-type(2)").append("<strong> - 2nd do último!</strong>");	
    // :nth-last-of-type()

	var n = 0;
	$(".target").one("click mouseenter", function() {                              		// one()
  		$(".count").html(++n);
	});

})