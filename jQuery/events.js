$("h1").click(function(){
alert("h1 clicked");
});

$("button").click(function(){
alert("button clicked!!");
});

// To change the background of the button
$("button").click(function(){
$(this).css("background","pink");
});


//To print the text of the button
$("button").click(function(){
var text = $(this).text();
console.log("you clicked "+text);
});


//keypress event, 32 is enter key char code
$("input").keypress(function(event){
if(event.which === 32)  {
	alert("You hit Enter");
}

});


//on
$("h1").on("click", function(){
	$(this).css("color","purple");
});

$("button").on("mouseenter", function(){
	$(this).css("font-weight","bold");

});
$("button").on("mouseleave", function(){
	$(this).css("font-weight","normal");

});

