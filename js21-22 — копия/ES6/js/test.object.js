$(function(){
	'use strict;'
	let test = [
	{
		question: 'Вопрос №1',
		answer1: 'Вариант ответа №1 (не верный)',
		answer2: 'Вариант ответа №2 (не верный)',
		answer3: 'Вариант ответа №3 (верный)'
	},
	{
		question: 'Вопрос №2',
		answer1: 'Вариант ответа №1 (не верный)',
		answer2: 'Вариант ответа №2 (верный)',
		answer3: 'Вариант ответа №3 (не верный)'
	},
	{
		question: 'Вопрос №3',
		answer1: 'Вариант ответа №1 (верный)',
		answer2: 'Вариант ответа №2 (не верный)',
		answer3: 'Вариант ответа №3 (верный)'
	}];
	localStorage.setItem('test', JSON.stringify(test));

});
