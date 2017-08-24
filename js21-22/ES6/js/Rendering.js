$(function(){
	'use strict;'
	let html = $('#it_test').html();

	let questions = JSON.parse(localStorage.getItem('test'));
	console.log(questions);
	let content = tmpl(html, {
		data: questions
	});

	$('body').append(content);
});
