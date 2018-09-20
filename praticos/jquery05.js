$(document).ready(function() {
    	$("#input").on("change", function() {
        	var input = $("#input").val();
        	$("#p1").text(input);
	});														// change()

    	$("select").change(function() {
        	var str = "";
    		$("select option:selected").each(function() {								// each()
            		str += $(this).text();
        	});
    		$("#texto").text(str);
        }).change();	

    	$("body").on("click", function(event) {
        	$(event.target).closest(".li1").toggleClass("aceso");
	});														// closest()

    	var listElements = $(".li2").css("color", "blue");
    	$("body").on("click", function(event) {
        	$(event.target).closest(listElements).toggleClass("aceso");
    	});		

    	$("button").click(function() {
  		$(".div1").each(function(index, element) {								// each()
			// element == this
            		$(element).css("backgroundColor", "yellow");
			if ($(this).is("#stop")) {									// is()
				$("#span1").text("Parou na div com index #" + index);					
				return false;
			}
		});
  	});			

  	$(".div2").one("click", function() {										// one()
  		if ($(this).is(":first-child")) {									// is()
  			$("#p2").text("Ésta é a primeira div.");
  		} else if ($(this).is(".blue,.red")) {
  			$("#p2").text("Ésta é azul ou vermelha div.");
  		} else if ($(this).is(":contains('Peter')")) {								// :contains()
  			$("#p2").text("Ésta é Peter!");
  		} else {
  			$("#p2").html("Nada de <em>especial</em>.");
  		}
  		$("#p2").hide().slideDown("slow");
  		$(this).css({
  			"border-style": "inset",
  			"cursor": "pointer"
  		});
  	});

	$(".p:contains('John')").css("text-decoration", "underline");							// :contains()

	$("#p3").contents().filter(function(){										// contents()
            	return this.nodeType !== 1; 
 	}).wrap("<b></b>");												// wrap()


        $(".div4").contents().filter(function() {
     		return this.nodeType === 3; // nodeType - códigos com números para identificar elementos html
   	 }).wrap("<p></p>").end().filter("br").remove();								// end()

})
