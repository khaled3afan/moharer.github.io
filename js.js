// JavaScript Document
 	$(function (){
 		$('.nl').click(function (){
	document.execCommand("insertHTML", false, "<br/>");
});
$('.blockquote').click(function (){
	document.execCommand("insertHTML", false, "<blockquote> "+ document.getSelection() +"</blockquote><br>");
	
});
$('.arabic').click(function (){
	document.execCommand("insertHTML", false, "<p class='ar'>عربي</p><br>");
});
$('.english').click(function (){
	document.execCommand("insertHTML", false, "<p class='en'> hello</p><br>");
});
$('.cut').click(function (){
	document.execCommand('cut');
});
$('.copy').click(function (){
	document.execCommand('copy');
});

$('.h1').click(function (){
document.execCommand('formatblock',false ,'<h1');
});

$('.h2').click(function (){
	document.execCommand('formatblock',false ,'<h2');
});
$('.h3').click(function (){
	document.execCommand('formatblock',false ,'<h3');
});

});