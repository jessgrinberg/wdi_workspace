// This code first refers to the module we just created (called 'app').

// Then, it attaches a controller to it (which we are calling 'MainController').

// The controller takes TWO arguments - the first is the name of the controller, 
// and the second is a function that describes the behaviour of the controller.

// The controller is where we will put most of our code today. 
angular
    .module('app')
    .controller('MainController', MainController);

    function MainController(){
        var self = this; //to start angular
        self.orderNow = orderNow; // it refers the fct to the controller

        self.imageVisible = true; // to display the picture once you load the page
        self.toggleImage = toggleImage; // to set the image flipping


        self.person = {
            name:"",
            occupation: "",
            dob: "",
            emailAddress: "",
            phoneNumber: "",
            businessCardColor: " "
//border-radius:
        };


        function orderNow(){
            alert("Your cards for " + self.person.name + "are being prepared" )
        }

       
        function toggleImage(){
        self.imageVisible = !self.imageVisible; // will flip the image on click
        }
        // Here is where you write all the code that 
        // describes how your controller should work!


    }

