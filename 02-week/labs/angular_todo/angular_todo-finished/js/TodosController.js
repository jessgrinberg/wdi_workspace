angular
    .module("todoApp")
    .controller("TodosController", TodosController);

    function TodosController(){
        var self = this;
        self.addTodo = addTodo;
        self.deleteTodo = deleteTodo;
        self.completedTodos = completedTodos;
        self.remainingTodos = remainingTodos;

        self.todoList = [
			{task: "get six-pack abs", done: true},
			{task: "get super good at Angular", done: true},
			{task: "eat a burrito", done: false},
			{task: "take a nap", done: false}
		];


		function addTodo(){
			self.todoList.push({task: self.text, done: false});
			self.text = null;
		}

		function deleteTodo($index){
			self.todoList.splice($index, 1);
		}

		function completedTodos(){
			var count = 0;
			for(var i = 0; i < self.todoList.length; i++){
				if(self.todoList[i].done){
					count++;
				}
			}
			return count;
		}

		function remainingTodos(){
			var count = 0;
			for(var i = 0; i < self.todoList.length; i++){
				if(self.todoList[i].done === false){
					count++;
				}
			}
			return count;
		}
		
		//this will add our new function as a property on our controller
		
		
		//this will add our new function as a property on our controller, put it up near the top of the controller.
		
    }
    