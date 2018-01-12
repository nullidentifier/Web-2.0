var secretno=4;
var guess= Number(prompt("Guess a number"));
if(guess === secretno){
	alert("you got it right!!");
}
else if(guess< secretno){
	alert("Too low, try again");
}
else{
	alert("Too high, try again");
}
