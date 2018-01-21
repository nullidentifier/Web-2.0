
function isEven(num){

	if(num % 2===0){
		return true;
	}
	return false;
}

function factorial(num){
	var fact;
	if(num === 1){
		return 1;
	}
	return fact=num * factorial(num-1);
}

function kebabToSnake(str){
	return str.replace(/-/g,'_');
}