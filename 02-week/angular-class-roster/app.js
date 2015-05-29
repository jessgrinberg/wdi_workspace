angular
	.module("my-app",[])
		.controller("MainController", function MainController(){
			//this is my controller body
			var m = this;
			m.names = ["Jessica","Kate","Max"];
			m.newName = " ";
			m.addNames = addNames;


			function addNames(){
				m.names.push(m.newName);
			}		
  		})
		// .controller("AnotherController", function(){
		// 	//this is another contoller to my module i could addd
		// })
;



