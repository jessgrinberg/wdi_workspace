/**
 * Function to be ran by the load event of the page
 */
 var e;
function startup(){


	console.log("Startup called!")

	window.setInterval(animateCharacter, 500)

	document.getElementsByTagName("a")[0].addEventListener('click',linkClick)

	//Add any keyboard event listeners here

	document.addEventListener('keydown',moveCharacter)
	document.addEventListener('keydown',changeDirection)

}

//Write the javascript necessary to call startup() onload
var fired_event;
function linkClick(e) {
	fired_event =e;
	document.writeln("<p>Mouse was clicked at" + e.screenX + "x" + e.screenY + "</p>")
	console.log(e)
	e.preventDefault()
}


window.addEventListener('load', startup)