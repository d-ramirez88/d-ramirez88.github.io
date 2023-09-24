function getMyDate(){
	var today = Date();
	var death = new Date(3/15/1937);
	var diffTime = Math.abs(today-death);
	var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	console.log(death);
	
	document.getElementById("currentDate").innerHTML=diffDays;
}