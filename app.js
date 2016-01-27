window.onload = function() {

	var userInput = [];
	var form = document.getElementById("form");
	var answerList = document.getElementById("answer-list");
	initListener();
	var name = document.getElementById("name");

function initListener () {
	
		form.addEventListener("submit",function (e) {
		e.preventDefault();
		
		
		var newAnswer = document.createElement('li');
		newAnswer.classname = "new-list";
		newAnswer.innerHTML = name.value;
		userInput.push(newAnswer);

		for (var i = 0; i < userInput.length; i++) {
			answerList.appendChild(newAnswer);
		}
		
		

	});

}

};

