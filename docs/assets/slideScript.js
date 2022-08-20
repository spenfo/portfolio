console.log("Running!");

window.addEventListener("load", addListeners);

var index = 0;
var timer = 0;
var images = new Array("assets/pillars_of_creation.jpg", "assets/rose_galaxies.jpg", "assets/black_hole_star_form.jpg", "assets/puffy_planets.png", "assets/space_triangle.png", "assets/star_forming.jpg");
var captions = new Array("Pillars of Creation", "Rose Galaxy", "A black hole forms a star", "A puffy looking planet", "Triangle Shaped Galaxy", "Another star forming");

function addListeners(){
	
	document.getElementById("next").addEventListener("click", changeImage);
	document.getElementById("play").addEventListener("click", function(){ 
		clearInterval(timer);
		timer = setInterval("changeImage()", 2000);
	});
	document.getElementById("previous").addEventListener("click", function(){
		
		index--;
		if (index <= -1){
			index = images.length-1;
		}
		document.getElementById("picture").src = images[index];
	
		document.getElementById("caption").innerHTML = captions[index];
	});
	document.getElementById("pause").addEventListener("click", pauseSlideShow);
}

function changeImage(){
	
	index++;
		if (index >= images.length){
			index = 0;
		}
	document.getElementById("picture").src = images[index];
	
	document.getElementById("caption").innerHTML = captions[index];
}

function pauseSlideShow(){
	
	clearInterval(timer);
}