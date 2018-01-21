

function printReverse(arr){
console.log("Printing Array In Reverse");
	for(var i=arr.length-1;i>=0;i--){
		console.log(arr[i]);
	}
}

function isUniform(arr){
	var first=arr[0];
	var i=1;
	while(first===arr[i]){
		i++;
	}
	return i === arr.length ? true:false;
}

function sumArray(arr){
var sum=0;
	arr.forEach(function(item){
		sum+=item;
	});
	return sum;
}

function max(arr){
	var maxVal=-1;
	arr.forEach(function(item){
		if(maxVal<item){
			maxVal=item;
		}
	});
return maxVal;
}