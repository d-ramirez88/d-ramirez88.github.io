function setCurse(state){
	if (state) {
		document.getElementById("mainBody").classList.add("cursed");
		document.getElementById("trapped").style.display="inline"
	}
	else {
		document.getElementById("mainBody").classList.remove("cursed");
		document.getElementById("trapped").style.display="none";
	}
}