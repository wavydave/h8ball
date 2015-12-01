	var magicList = [
		"Don't even try",
		"No",
		"You are a mistake",
		"Fuck you",
		"Your Mom told me you were a mistake",
		"Try again",
		"Just stop",
		"Forget it"
	];
	var magicBall = function(){
	var x = magicList[Math.floor(Math.random() *(magicList.length - 1))];
	alert(x);
	console.log(x);
}

magicBall();