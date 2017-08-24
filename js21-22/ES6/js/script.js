$(function(){
	'use strict;'

	let $button = $('.result');
	let $close_button = $('.position');
	let $input = $('input');
	let $modal = $('.modale');
	let counter1 = 0;
	let counter2 = 0;
	let counter3 = 0;

	$button.click(function(e){
		e.preventDefault();
		if ($($input.get(0)).prop('checked') || $($input.get(1)).prop('checked')) {
			counter1 = 0;
		}
		else {
			if ($($input.get(2)).prop('checked')) {
				counter1++;
			}
		}
		if ($($input.get(3)).prop('checked') || $($input.get(5)).prop('checked')) {
			counter2 = 0;
		}
		else {
			if ($($input.get(4)).prop('checked')) {
				counter2++;
			}
		}
		if ($($input.get(7)).prop('checked')) {
			counter3 = 0;
		}
		else {
			if ($($input.get(6)).prop('checked') && $($input.get(8)).prop('checked')) {
				counter3++;
			} else counter3 = 0;
		}

		$modal.removeClass('hide');

		let result = counter1 + counter2 + counter3;

		if (result == 0 || result == 1 || result == 2 ){
			var message = `Вы набрали ${result} бал(а). Вы НЕ ПРОШЛИ тест.`
		} else {
			if (result == 3){
				var message = `Вы набрали ${result} балла. Вы ПРОШЛИ тест.`
			}
		}
		$('.modale-body').append(message);
		console.log(result)
	});

	$close_button.click(function(){
		$modal.addClass('hide');
		counter1 = 0;
		counter2 = 0;
		counter3 = 0;
		for(let i = 0; i < $input.length; i++){
			$($input.get(i)).prop('checked', false);
		}
		$('.modale-body').empty();
	});


});
