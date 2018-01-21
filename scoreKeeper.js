var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var p1display=document.querySelector("#s1display");
var p2display=document.querySelector("#s2display");
var reset=document.getElementById("reset");
var numInput=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span");
var p1score=0;
var p2score=0;
var gameover=false;
var winningscore=5;



p1.addEventListener("click", function(){
//console.log(p1)
if(!gameover){
p1score++;
if(p1score === winningscore){
	p1display.classList.add("winner");
	gameover=true;
}
p1display.textContent=p1score;
}
});


p2.addEventListener("click",function(){
	if(!gameover){
	p2score++;
	if(p2score===winningscore){
		p2display.classList.add("winner");
		gameover=true;
	}
}
	p2display.textContent=p2score;
});


reset.addEventListener("click",function(){
resetfunc();
});

numInput.addEventListener("change", function(){
//alert("changed the input");
winningScoreDisplay.textContent=this.value;
winningscore=Number(this.value);
resetfunc();
});

function resetfunc(){
	p1score=0;
p2score=0;
p1display.textContent=p1score;
p2display.textContent=p2score;
p1display.classList.remove("winner");
p2display.classList.remove("winner");
gameover=false;
}