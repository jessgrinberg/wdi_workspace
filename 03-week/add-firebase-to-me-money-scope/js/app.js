var instructorApp = angular.module('instructorApp', ["firebase"]);
//STEP 5 add "firebase" in the []
instructorApp.controller('InstructorController', function($scope, $firebaseArray) { //STEP 5 adding $firebaseArray to the 2nd part: adding dependancies
   var ref = new Firebase("https://crackling-fire-1007.firebaseio.com/"); //STEP 5

 // create a synchronized array
  $scope.instructors = $firebaseArray(ref);

    // $scope.instructors = [
    //   {name:'Blaise', hobby:"Surfing"},
    //   {name:'Zach', hobby:"Comedy"},
    //   {name:'Meredith', hobby:'Hanging with wilson cat'},
    //   {name:'Lorin', hobby:'Javascript'},
    //   {name:'Ira', hobby:'Volleyball'}
    // ];

    // $scope.addName = function(){
    // 	alert('yo');
    // } do that to try it - it refers to the span form index


//for firebase use add instead of push

    $scope.addName = function(){
      $scope.instructors.$add(
        {
          name: $scope.newName,
          hobby: "Hanging with wilson cat"
        }
      );
        $scope.newName = " "; //reset the placeholder blank
    };
  });