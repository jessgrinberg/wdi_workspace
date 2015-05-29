var instructorApp = angular.module('instructorApp', []);

instructorApp.controller('InstructorController', function() {
  var instructorCtrl = this;
    instructorCtrl.instructors = [
      {name:'Blaise', hobby:"Surfing"},
      {name:'Zach', hobby:"Comedy"},
      {name:'Meredith', hobby:'Hanging with wilson cat'},
      {name:'Lorin', hobby:'Javascript'},
      {name:'Ira', hobby:'Vollyball'}
    ];
  });
