$(document).ready(function(){
	$(".btn").on("click", function() {
		$(this).toggleClass("btn-danger");				 			
	});																					// toggleClass()

	var check = $("#check");
	check.on("mouseover", function() {
		$("#result").html(check.attr("checked"));										// attr()
	});																					

	$("#after").after("<b>Adicionado com after()</b>"); 								// after()
	$("#before").before("<b>Adicionado com before(), </b>");							// before()

	var elementCount = $("#teste").find("*").css("border", "3px solid red").length;		// * - select all
	$("#selectAll").text(elementCount + " elementos encontrados");		

	$("#go").on("click", function() {
		$("#block").animate({
			width: "70%",
			opacity: 0.4,
			marginLeft: "0.6in",
			fontSize: "3em",
			borderWidth: "10px"
		}, 1500 );
	});																					// animate()

	function animateIt() {
		$("#mover").slideToggle("slow", animateIt);					
	} 																					// slideToggle()
	animateIt();

	$("#append").append("<strong>Adiconado com append()</strong>");						// append()
	$("#appendTo").appendTo("#div1");													// appendTo()
	$("#prepend").prepend($("em"));														// prepend()
	$("#prependTo").prependTo($("div2"));												// prependTo()

	var texto = $("samp").attr("title");												// attr()
	$("#span").text(texto);	

})