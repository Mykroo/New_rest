
$(document).ready(function() {
	refTam();	
});

var refTam= setInterval(function(){
	var alto= $(window).height();
	var ancho= $(window).width();
	$('#cuerpo').height(alto);
	$('#cuerpo').width(ancho);
}, 20);