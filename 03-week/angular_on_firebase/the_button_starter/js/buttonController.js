angular
    .module('buttonApp')
    .controller('ButtonController', ButtonController);

    // 3 - inject either '$firebaseObject' or '$firebaseArray' into our controller using the $inject method:
   
    ButtonController.$inject = ['$firebaseObject'];

    // 4 - add the $firebaseObject or $firebaseArray to our function arguments so we can use it!
    function ButtonController($firebaseObject){
        var self = this;
        self.clickMe = clickMe;
        self.button = getButton();

        // 5 - instead of hardcoding the button object, we write a function that goes to firebase and gets the button object for us:
        //go to FB and create a newapp and copy/paste the link
        function getButton(){
           var ref = new Firebase("https://color-button2.firebaseio.com/");
           var button = $firebaseObject(ref);
           return button
        }
        // 6 - then we attach this getButton() function to self.button, so everytime we refer to self.button, it is referring to the firebase object.
        // attach it here...

        



        function clickMe(){
            if(self.button.color === 'red'){
                self.button.color = 'green';
                self.button.$save(); //it saves it on FB
                // 7 - Whenever we change the object in any way, we MUST save it if we want it to change on firebase. 
                
            } else {
                self.button.color = 'red';
                
            }
            self.button.$save();
        }

    }