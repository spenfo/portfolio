//THE JS YO
console.log("functions.js activated!");

function createStory(){
	
	console.log("createStory activated!");
	
	var name1 = document.getElementById("INname1").value;
	var name2 = document.getElementById("INname2").value;
	var clock = document.getElementById("INclock").value;
	var farOff = document.getElementById("INfarOff").value;
	var clothes = document.getElementById("INclothes").value;
	var food = document.getElementById("INfood").value;
	var fast = document.getElementById("INfast").value;
	var wheels = document.getElementById("INwheels").value;
	var time = document.getElementById("INtime").value;
	
	var out = "One morning <span>" + name1 + "</span> was woken up by <span>" + name2 + "</span> shouting at the top of their lungs. \"<span>" + name1 + "</span>!!!\" <span>" + name2 + "</span> shouted. \"You're going to be late for school AGAIN!!!\" <span>" + name1 + "</span> looked at their <span>" + clock + "</span> shaped clock and read the time. \'7:53 already, huh,\' <span>" + name1 + "</span> thought. \'How am I going to make it all the way to <span>" + farOff + "</span> High in only 7 minutes?\' <span><br><br>" + name1 + "</span> hurried and put on their <span>" + clothes + "</span> and ran down stairs. <span>" + name1 + "</span> grabbed some <span>" + food + "</span> and sprinted out the door. \'Isn\'t there any way I can just fly to school?\' <span>" + name1 + "</span> thought. Just then, across the street, there was a <span>" + fast + " " + wheels + "</span> with a sign that said \"Free\" on it. \"Nice!\" <span>" + name1 + "</span> yelled, grabbing the <span>" + fast + " " + wheels + "</span>. In less than <span>" + time + "</span> seconds <span>" + name1 + "</span> had arrived at school. Everyone cheered them on as they burst through the doors riding their new <span>" + fast + " " + wheels + "</span>.";
	
	document.getElementById("story").innerHTML = out;
}