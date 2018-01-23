var noOfSquares=6;
var colors=[];
var pickedColor;

var squares=document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButton =document.querySelectorAll(".mode");

init();

function init(){
//mode button event listeners
	SetUpModeButtons();	
	setUpSquares();
	reset();

}


function SetUpModeButtons(){
	for(var i=0;i<modeButton.length;i++){
	modeButton[i].addEventListener("click",function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			noOfSquares=3;


		}else{
			noOfSquares=6;
		}
		reset();
	});
}
}



function setUpSquares(){
	for(var i=0;i< squares.length; i++){
	//add click listerner to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor !== pickedColor){
			//alert("WRONG!!");
			messageDisplay.textContent="Try Again!";
			this.style.backgroundColor="#232323";
			resetButton.textContent="New Colors"
		}else{
			//alert("RIGHT!!");
			messageDisplay.textContent="Correct";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetButton.textContent="Play Again?"
		}
	});
}
}


function reset(){
	colors=genRandomColors(noOfSquares);
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	for(var i=0;i< squares.length; i++){
		if(colors[i]){
			squares[i].style.display="block";
	squares[i].style.backgroundColor=colors[i];
	}else{
		squares[i].style.display="none";
	}
}
	h1.style.backgroundColor="steelblue";


}


resetButton.addEventListener("click", function(){
	reset();
});




for(var i=0;i< squares.length; i++){
	squares[i].style.backgroundColor=colors[i];
	//add click listerner to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor !== pickedColor){
			//alert("WRONG!!");
			messageDisplay.textContent="Try Again!";
			this.style.backgroundColor="#232323";
			resetButton.textContent="New Colors"
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