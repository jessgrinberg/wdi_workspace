angular
    .module("todoApp")
    .controller("TodosController", TodosController);

    // 3 - inject either '$firebaseObject' or '$firebaseArray' into our controller using the $inject method:

    TodosController.$inject = ['$firebaseArray'];

    // 4 - add the $firebaseObject or $firebaseArray to our function arguments so we can use it!
 
    function TodosController($firebaseArray){
        var self = this;
        self.addTodo = addTodo;
        self.deleteTodo = deleteTodo;
        self.completedTodos = completedTodos;
        self.remainingTodos = remainingTodos;
        self.todos = getTodos();
        self.toggle = toggle;

        //console.log(self.todos)

        //write a toggle function, everytime u write a fct add its self.

        function toggle($index){
            console.log($index) 
            self.todos.$save(self.todos[$index]) //bc its an array you have to add inside (self.todos[$index]) if it was an object nothing after save, $index refers to the whole array 
        }

        // 5 - instead of hardcoding the self.todos array, we write a function that goes to firebase and gets the array for us:
        // we should call the function something like getTodos();

          function getTodos(){
           var ref = new Firebase("https://todoslist123.firebaseio.com/");
           var todos = $firebaseArray(ref);
           return todos
 }
        // 6 - then we attach this getTodos() function to self.todos, so everytime we refer to self.todos, it is referring to the firebase Array.
        // attach it here...

        // self.todos = [
        // 	{task: 'buy beer', done: false},
        // 	{task: 'eat burrito', done: true},
        // ]; // we dont need this anymore because we are replaceing it with self.todos = getTodos();


        // 7 - the firebase Array has special commands that we use on it.
        // instead of 'push' we have to use '$add'

        function addTodo(){
            self.todos.$add({task: self.text, done: false});
            self.text = null;
        }

        // 8 - We can't splice things into the firebase Array. 
        // Instead, we have to pass the entire object into the function, and then use $remove
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
		
		
    }
    