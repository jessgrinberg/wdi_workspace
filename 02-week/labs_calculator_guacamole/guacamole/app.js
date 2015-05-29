// var image = document.getElementById("mole");

// document.getElementById("td_one").addEventListener("click",function showMole() {
// document.getElementById("mole").style.display = "";
// });





// document.getElementById("showImage").onclick = function() {
//     document.getElementById("mole").style.visibility = "visible";
// }


// function showImage() {
//     var img = document.getElementById("mole");
//     img.style.visibility = 'visible';
// }

function showImage(){
        document.getElementById("mole").style.visibility=visible;
    }


 function showImage(){
        document.getElementById('loadingImage').style.visibility=visible;
    }

    -->

    </script>
    </head>
<body>
    <input type="button" value="Ajax Button" onclick="showImage();"/>
    <img id="loadingImage" src="ajax-loader.gif" style="visibility:hidden"/>

</body>


var boxes = document.getElementsByClassName("td");

for (var i=0; i<ted.length; i++) {
	boxes[i].addEventListener(click, function(){
		if (this.innerHTML !== ""){
			this.innerHTML = "";
			boxes[randomNumber()].innerHTML = "mole"
		}
	})
}

function randomNumber() {
	return Math.floor(Math.random() * 9)
}
boxes[randomNumber()];