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