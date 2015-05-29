// This code first refers to the module we just created (called 'app').

// Then, it attaches a controller to it (which we are calling 'MainController').

// The controller takes TWO arguments - the first is the name of the controller, 
// and the second is a function that describes the behaviour of the controller.

// The controller is where we will put most of our code today. 
angular
	.module('app')
    .controller('MainController', MainController);

    // function MainController(){
    // 	var self = this; // variable capture!
    // 	self.appearBillMurray = appearBillMurray;
    // 	self.appear = false;

// 	self.helloWorld = helloWorld;
// 	self.goodbyeWorld = goodbyeWorld;

// 	function helloWorld(){
// 	  alert("Hello World!");
// 	}

// 	function goodbyeWorld(){
// 		alert("goodbye,goodbye!")
// 	}


// 	self.love = love;

// 	function love(){
//   	self.loveBillMurray = true;
// }

// 	self.hate = hate;

// 	function hate(){
// 	// to test if its working console log everything! console.log("function is working") 
// 	  self.hateBillMurray = false;
// 	}

// self.favoriteBooks = ["The Sheltering Sky", "A Moveable Feast", "A Confederacy of Dunces", "Geek Love", "The Big Short"];


    	// Here is where you write all the code that 
    	// describes how your controller should work!


    // self.appear = appear;
    // function appear(){
    // 	self.appearBillMurray = "true";
    // }

        function MainController(){
    	var self = this; // variable capture!
    	self.appearBillMurray = appearBillMurray;
    	self.appear = false;
    

	function appearBillMurray(){

		self.appear = !self.appear;

	  	// if(self.appear === false){
	  	// 	self.appear = true;
	  	// } else {
	  	// 	self.appear = false;
	  	// }	
  
	}



    }

