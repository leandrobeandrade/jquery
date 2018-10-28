$(document).ready(function() {		
	$("#ul li").slice(2, 4).css("background-color", "red");								// slice()

	$(".btn-success").on("click", function() {							
		$("#div1").slideDown("slow");										// slideDown()
	});

	$(".btn-success").on("click", function() {
		$("#div2").slideToggle("slow");										// slideToggle()
	});

	$(".botao").click(function() {
  		$(this).parent().slideUp("slow", function() {								// slideUp()
  			$("code").text($(".botao", this).text() + " foi completada.");			
  		});
	});

	var bloco = $(".bloco");
 	$("#toggle").on("click", function() {
  		bloco.stop().slideToggle(1000);										// slideToggle()
	});

})
