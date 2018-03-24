 var func1 = document.getElementById("b1");
 console.log(func1);
 if(func1){
 func1.addEventListener("click",toRight);
 }
 var func2 = document.getElementById("b3");
 if(func2){
 	func2.addEventListener("click", toLeft);
 }
 var func3 = document.getElementById("b2");
 if(func3){
 	func3.addEventListener("click",pause);
 }
var handle;

function toRight(){
	alert("!");
	console.log("hello");
	handle=setInterval(function(){
		var text= document.getElementById("text1").value;
	console.log(text.length+" "+text);
	var i=0;
	if(text.length === 0 || text === " "){
		clearInterval(handle);
	}
	else if(text!=null || text.length != 0){
	
		document.getElementById("text2").value += text.charAt(0);
		document.getElementById("text1").value=text.substring(1);
	}

	}, 1000);

	
}
//setInterval(toRight, 100000);

function toLeft(){
	// alert("!");
	console.log("hi");
	handle=setInterval(function(){
		var text= document.getElementById("text2").value;
	console.log(text);
	var i=0;
	if(text.length === 0 || text === " "){
		clearInterval(handle);
	}
	else if(text!=null){
	
		document.getElementById("text1").value = text.charAt(text.length-1)+ document.getElementById("text1").value;
		document.getElementById("text2").value=text.substring(0,text.length-1);
	}
	}, 1000);
	
}

function pause(){
clearInterval(handle);
handle=0;
}