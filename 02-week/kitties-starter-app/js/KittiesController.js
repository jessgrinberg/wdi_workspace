angular
	.module("kittiesApp")
	.controller("KittiesController", KittiesController)

	function KittiesController(){

//Step 5, in our controller do "variable capture"
//"this" is a reserved word, in this isntance it is refering to KittiesController
//http://www.w3schools.com/js/js_reserved.asp
//We attach those to the variable "self" for good practice;
		var self = this;
		self.kittiesList = [
		{
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: true
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

	]
}