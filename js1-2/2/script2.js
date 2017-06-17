'use strict'
alert ('hi');


var arr =[];
for (var i=0; i<5; i++) {
  arr[i] = prompt('введите любое имя №'+(i+1));
}

var username = prompt('введите имя пользователя','default');
console.log('Имя пользователя:'+username);
var result=false;
for (var i=0; i<5; i++) {
if (arr[i]===username) {
  result=true;
  break;
}
}

 alert (result ? 'Hi ' + username : 'error');
