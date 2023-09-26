function setCurse(state){
	if (state) {
		document.getElementById("mainBody").classList.add("cursed");
	}
	else {
		document.getElementById("mainBody").classList.remove("cursed");
	}
}