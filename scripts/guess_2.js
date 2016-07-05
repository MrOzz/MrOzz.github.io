function guessMult(){
		var answer = parseInt(Math.random() * 100);
		alert('Игра "Угадайка Мультиплеер"');
		var pl_1, pl_2;
		var p1, p2 = 1;

		pl_1 = prompt("Введите имя первого игрока");
		pl_2 = prompt("Введите имя второго игрока");

		alert("Итак с нами играют " + pl_1 + " и " + pl_2 + ". У каждого есть по пять попыток.");

	for(var i = 5; i > 0; i--){

		var number = parseInt(prompt(p2 + " попытка. Отвечает " + pl_1));

		if(number == answer){
			alert(pl_1 + ' вы угадали число! Поздравляем!');
			break;
		} else if(number < answer){
			alert(pl_1 + ',число меньше загаданного!');
		} else {
			alert(pl_1 + ',число больше загаданного!');
		}
		p1++;
//----------------------------------------------------------------------------------------------------------------
		
		var number = parseInt(prompt(p2 + " попытка. Отвечает " + pl_2));

		if(number == answer){
			alert(pl_2 + ' Вы угадали число! Поздравляем!');
			break;
		} else if(number < answer){
			alert(pl_2 + ',число меньше загаданного!');
		} else {
			alert(pl_2 + ',число больше загаданного!');
		}
		p2++;
	}
	alert('Игра закончена');
}