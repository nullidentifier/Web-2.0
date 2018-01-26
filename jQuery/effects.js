//fading the divs
//The console.log prints even bfr the dics are faded.. to run it after the fade
//is completed then add a callback function to fadeOut
$("button").on("click",function(){
	$("div").fadeOut(1000, function(){
		console.log("fade completed!!");
		//$(this).remove();
	});
	
});

//fadetoggle
$("button").on("click",function(){
	$("div").fadeToggle(500);
		//$(this).remove();
});


$("button").on("click",function(){
	$("div").slideUp();	
});
