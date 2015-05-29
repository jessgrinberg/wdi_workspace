angular
    .module("chatApp")
    .controller("ChatController", ChatController);

    // 1 - inject either '$firebaseObject' or '$firebaseArray' into our controller using the $inject method:
   ChatController.$inject = ['$firebaseArray'] //this makes our code "midnifier-proof"

    // 2 - add the $firebaseObject or $firebaseArray to our function arguments so we can use it!
 
    function ChatController($firebaseArray){
        var self = this;
        self.addChat = addChat; 
        // self.chats = getChats();  
        // 4 - then we attach this getChats() function to self.chats, so everytime we refer to self.chats, it is referring to the firebase Array.
        // attach it here...

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
        // you could also write (combining step 3 and 4: calling an anynomous fct instead of using a name like fctgetChats(); ) //
         self.chats = (function (){                                                       //////////////////////////////////////       
             var ref = new Firebase("https://jess-chat-awesome.firebaseio.com/");        ////      
             var chats = $firebaseArray(ref);                                                ////
             return chats                                                              ////    
         })();                                                                        ////

        // 6 - then we attach this addChat function to self.addChat, so everytime we refer to self.addChat, it is referring to the firebase Array.
        // attach it here...
    
        // 3 - instead of hardcoding the self.chats array, we write a function that goes to firebase and gets the array for us:
        // we should call the function something like getChats();

        //////////////////////////////////////////////////////////////////////////////////
        // function getChats(){
        //     var ref = new Firebase("https://jess-chat-awesome.firebaseio.com/"); //create an app on FB and use its link
        //     var chats = $firebase(ref);
        //     return chats
        // }
        //////////////////////////////////////////////////////////////////////////////

        // 5 - the firebase Array has special commands that we use on it: '$add'
        // we can use this to build an addChat function to push chat objects to our array:
        function addChat(){
            self.chats.$add({message: self.text});
            self.text = null;
        }

        
		
    }
    
