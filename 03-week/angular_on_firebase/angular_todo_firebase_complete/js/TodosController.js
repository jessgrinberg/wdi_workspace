angular
    .module("todoApp")
    .controller("TodosController", TodosController);

    TodosController.$inject = ['$firebaseArray'];
    function TodosController($firebaseArray){
        var self = this;
        self.addTodo = addTodo;
        self.deleteTodo = deleteTodo;
        self.completedTodos = completedTodos;
        self.remainingTodos = remainingTodos;
        self.todos = getTodos();;
        self.toggle = toggle;

        

        function toggle($index){
 			self.todos.$save(self.todos[$index]);
        }

        function getTodos(){
        	var ref = new Firebase("https://todosonfirebase.firebaseio.com/");
			var todos = $firebaseArray(ref);
			return todos
        }

		function addTodo(){
			console.log("running addTodo")
			self.todos.$add({task: self.text, done: false});
			self.text = null;
		}

		function deleteTodo(todo){
			self.todos.$remove(todo);
		}

		function completedTodos(){
			var count = 0;
			for(var i = 0; i < self.todos.length; i++){
				if(self.todos[i].done){
					count++;
				}
			}
			return count;
		}

		function remainingTodos(){
			var count = 0;
			for(var i = 0; i < self.todos.length; i++){
				if(self.todos[i].done === false){
					count++;
				}
			}
			return count;
		}
		
		//this will add our new function as a property on our controller
		
		
		//this will add our new function as a property on our controller, put it up near the top of the controller.
		
    }
    