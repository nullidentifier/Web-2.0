var todo=[];
var input=prompt("What would you like to do?");

while(input !== "quit"){
		if(input === "list"){
			listTodo();
	}else if(input === "new"){
		addTodo();
	}else if(input=== "delete"){
		deleteTodo();
	}
	input=prompt("What would you like to do?");
}
console.log("OK, You Quit the App");



function listTodo(){
	console.log("**********");
			todo.forEach(function(item, index){
		console.log(index+ ": " +item);
	});
			console.log("**********");
}


function addTodo(){
	var newTodo= prompt("Enter new todo");
	todo.push(newTodo);
	console.log("Added todo");
}

function deleteTodo(){
	var pos=prompt("Enter index of item to delete");
		todo.splice(pos,1);
		console.log("Item dleeted");
}