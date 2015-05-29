// angular
//   .module("boxApp")
//   .controller('BoxController', BoxController); 


//   BoxController.$inject = ['$firebaseObject'];


// function BoxController($firebaseObject, $index){ //constructor functin that builds cntrls my angular app
//        var self = this; //reassigning keyword this to a variable called self (cos john papa says so) 
       
//        self.board = getBoard(); //retrieves board from firebase and attaches to controller
//        createBoxes();
//        self.clickBox = clickBox;
//        self.player1 = true;
//        self.player2 = false;
//        self.win = false;

       

//     function getBoard(){
//            // counter++;
//            // console.log(counter);
//            var ref = new Firebase("https://tpftictactoe.firebaseio.com/");
//            var board = $firebaseObject(ref);
//            return board;
//        }    

//     function createBoxes(){
//        self.board.buttons = [
//     { active: false, 
//       display: "" },
//     { active: false, 
//       display: "" },
//     { active: false,  
//       display: "" },
//     { active: false, 
//       display: "" },
//     { active: false, 
//       display: "" },
//     { active: false, 
//       display: "" },
//     { active: false, 
//       display: "" },
//     { active: false, 
//       display: "" },
//     { active: false, 
//       display: "" }
//   ];

//   	   self.board.counter = 0;
//   	   self.board.$save();  
//        console.log(self.board.counter)
//      }

//        function clickBox($index) {

//     //once 1 player won, alert msg to hit reset to start new game, no move is possible once s/o won
//     // if(self.win){
//     //   alert('To start a new game, hit reset!');
//     //   return
//     // } 
//     //alert if one btn has been clicked, no more click is possible
//     if (self.board.buttons[$index].display != "") {
//       alert('This button has already been clicked');
//     } else {
//       if(self.player1 == true) {
//         console.log("X");
//         self.board.buttons[$index].display = "X";
//         console.log(self.board.buttons[$index])
//         // console.log(self.buttons[$index].display);
//         self.board.buttons[$index].active[$index] = true;
//         self.player1 = false;
//         self.board.$save();
//       } else {
//         console.log("0");
//         self.board.buttons[$index].display = "0";
//         self.board.buttons[$index].active[$index] = false;
//         self.player1 = true;
//         self.board.$save();
//       }
//         //call winner fct, add counter count for ea. click
//         // winner();
//         self.board.counter ++;
//         console.log(self.counter)
//         console.log(self.win)
//     }

// }

// }


angular
    .module('boxApp')
    .controller('BoxController', BoxController);


    BoxController.$inject = ['$firebaseObject'];
        // so these functions are set up and running angularfire and are the basic functions of the tictac toe board. Still need to introduce functions for the two player version.

    function BoxController($firebaseObject, $index){ //constructor functin that builds cntrls my angular app
        var self = this; //reassigning keyword this to a variable called self (cos john papa says so) 
        
        self.board = getBoard(); //retrieves board from firebase and attaches to controller
        createBoxes(); // 
        self.clickYou = clickYou;

        // self.player1 ="x";
        // self.player2 ="o";
        // self.turn ="o";

        
        // self.restart = restart;
        // self.getWinner = getWinner;
        
    
        function getBoard(){
            // counter++;
            // console.log(counter);
            var ref = new Firebase("https://tpftictactoe.firebaseio.com/");
            var board = $firebaseObject(ref);
            return board;
        }

        function createBoxes(){
            // console.log("running createBoxes")
            // console.log(self.board)
            self.board.boxes = [{active: false, p1owns:false }, {active: false}, {active: false}, {active: false}, {active: false}, {active: false}, {active: false}, {active: false}, {active: false}]; 
            self.board.counter = 0; // our game counter
            self.board.$save();  
            console.log(self.board.counter)
        }
        
        
        
        function clickYou($index){
            if (self.board.boxes[$index].active == true) {
                alert("seat's taken")
            } 
            if (self.playerX == true) {
                   self.board.boxes[$index].active[$index]= true;
                   self.board.boxes[$index].p1owns = "X";
                   self.board.counter +=1;
                   console.log(self.board.counter);
                   self.board.$save(); 
                   self.playerX = false ;   
               }

               else {
                   self.board.boxes[$index].active[$index] = false;
                   self.board.boxes[$index].p1owns = "O";
                   self.board.counter +=1;
                   console.log(self.board.counter);
                   self.board.$save(); 
                   self.playerX = true ; 
               }
            
         }

    }

       