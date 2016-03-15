
$(document).ready(function() {
	refTam();	
});

var refTam= function(){
	var alto= $(window).height();
	var ancho= $(window).width();
	$('#todo').height(alto);
	$('#todo').width(ancho);
}