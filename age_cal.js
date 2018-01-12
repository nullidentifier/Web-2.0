var age=prompt("Enter your Age");
var days=age*365.25;  //.25 for leap year
alert(age + " is roughly "+days+" days");
if(age<0){
	console.error("Invalid Age");
}
if(age===21){
	console.log("happy 21st birthday!!");
}
 if(age%2 !==0){
	console.log("your age is odd");
}
if(age % Math.sqrt(age)===0){
	console.log("your age is a perfect square");

}