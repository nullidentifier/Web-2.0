//checkoff todos by clicking an li on a ul
$("ul").on("click","li",function(){
	//if li is gray turn black else turn gray
	$(this).toggleClass("completed");
});

//click on X to delete todo 
//on is used instead of .click as on can apply to elements that were not there when page was loaded, but click cannot do the same.
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		//console.log(todoText);
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span>X<span> " + todoText + "</li>");
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});