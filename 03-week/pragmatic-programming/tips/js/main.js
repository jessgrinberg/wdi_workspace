/*
The MainController defined in this script will be used to pull data
from two different APIs:
 * Flickr
 * Firebase

Firebase is used to request information about pragmatic programming tips.
Flickr will be used to pull images of "nature" to go with each tip.

Since both the APIs use AJAX, the UI can't really be updated until responses
from BOTH web services are returned. And because AJAX is asynchronous, it is
very difficult to keep track of when all of the requests have finished.
Fortunately, Javascript includes a feature in ES6 called Promises that makes
tracking asynchronous events easy.

Promises allow us group multiple asynchronous actions (such as API calls)
together, such that something can be done when any, all, or one of those actions
complete or fail. In this case, promises will be used to update the angular view
when all of the data has been returned from each API call.

For more info on promises, see https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/ch3.md#promise-api-recap

You may notice that there were to built-in angular services included in the
arguments to MainController -- $scope and $http. The $http service will be used
to grab data from the Flickr API, and the $scope service will be used to let
angular know that it needs to update the view once data from the API calls is
added to the model.

For more info on $scope.$apply() and $http(), consult the angular docs.

*/

var flickr_search = "ocean";

angular
	.module("my-app", [])
	.controller("MainController", function($scope, $http){

		//Variable capture
		var self = this

		//Use tips as the model
		self.tips = undefined;

		//Create the firebase API request
		var p1 = new Promise(function(resolve, reject){

			//Connect to the Pragmatic Programming Tips data source
			var firebase = new Firebase("https://incandescent-torch-1998.firebaseio.com/")

			//Request the tips from firebase
			firebase.child("/pragmatic-tips").on("value", resolve, reject)

		})

		//Create the flickr API request
		var p2 = new Promise(function(resolve, reject){

			//Use angular's $http service to get image data
			$http
				.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f8979033d45947f26e09b6db39510a10&text=" + flickr_search + "&sort=interestingness-desc&safe_search=1&content_type=1&media=photos&format=json&nojsoncallback=1")
				.success(resolve)
				.error(reject)

		})

		//Delays for 1.75s just in case the API calls finish early
		var p3 = new Promise(function(resolve, reject){

			window.setTimeout(resolve, 1750)

		})

		//Run all of the promises in parallel
		Promise.all([p1, p2, p3]).then(function(results){

			console.log("Promises resolved :-)")

			//We have data!
			var fire_tips = results[0].val()
			var flickr = results[1].photos.photo

			//Load the tips module
			self.tips = []
			for(var i = 0; i < fire_tips.length; i++){

				//Combine the data from both sources
				var tip = fire_tips[i]
				var photo = flickr[i]
				tip.image = "https://farm" + photo['farm'] + ".staticflickr.com/" + photo['server'] + "/" + photo['id'] + "_" + photo['secret'] + "_s.jpg"

				//Store the tip on the model
				self.tips.push(tip)

			}

			//Used to return the CSS animation delay for ng-style
			//Animation delay decays exponentially
			self.setStyleDelay = function(idx){
				return {
					'-webkit-animation-delay': idx * 0.15 * Math.pow(0.98, idx) + 's'
				}
			}

			//Let the angular know that it needs to update the view now
			$scope.$apply()

		})

	})
;
