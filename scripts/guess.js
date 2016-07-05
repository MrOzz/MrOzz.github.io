function checkGuess(){
			var quest = parseInt(Math.random() * 100);
			alert('Мини-игра "Угадайка"');
			

			for(var i = 1; i <= 5; i++){
			var answer = parseInt(prompt("Ваш ответ"));
			if(answer > quest){
				alert("Загаданное число меньше вашего!");
			} else {
				if(answer < quest){
					alert("Загаданное число больше вашего!");
				} else if (answer == quest){
					alert("Вы угадали число!");
					break;
				}
			}
			}
			if(answer == quest){
			} else {
			alert("Вы проиграли!");
			}
		}