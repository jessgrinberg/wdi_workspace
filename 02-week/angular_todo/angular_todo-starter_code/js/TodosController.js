angular
    .module("todoApp")
    .controller("TodosController", TodosController);

    function TodosController(){
        var self = this;
        self.addTodo = addTodo;
        self.deleteTodo = deleteTodo;
        self.completedTodos = completedTodos;

// to test if angular is working self.test = "Testing our controller!";

        self.todoList = [
        	{task:"build an awesome todo list", done:false},
        	{task:"get super good at angular", done: false},
			{task: "party on code", done: false},
			{task: "tackle the bonus challenges for this lesson", done: false},
			{task: "take a nap", done: false}
        ];

        function addTodo(){
        self.todoList.push({task: self.text, done: false});
        self.text = null
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




    }
    