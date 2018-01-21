var colors=genRandomColors(6);
		


var squares=document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	//gen all new colors and pick new random color frm array
	colors=genRandomColors(6);
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	for(var i=0;i< squares.length; i++){
	squares[i].style.backgroundColor=colors[i];
	//add click listerner to squares
	}
	h1.style.backgroundColor="#232323";
});

colorDisplay.textContent = pickedColor;


for(var i=0;i< squares.length; i++){
	squares[i].style.backgroundColor=colors[i];
	//add click listerner to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor !== pickedColor){
			//alert("WRONG!!");
			messageDisplay.textContent="Try Again!";
			this.style.backgroundColor="#232323";
		}else{
			//alert("RIGHT!!");
			messageDisplay.textContent="Correct";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?"
		}
	});
}


function changeColor(color){
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=color;
}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length );
	//alert(random);
	return colors[random];
}

function genRandomColors(num){

	//make an array
	var arr=[];
	for(var i=0; i<num; i++){
		//get random colr and push into array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick a rgb from 0 to 255

	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	console.log("rgb(" + r + "," + g + "," + b + ")");
	return "rgb(" + r + ", " + g + ", " + b + ")";
}