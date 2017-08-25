$(function() {
  $('.accordion_title').on('click', function() {
    if($(this).hasClass('active_title')) {

      $('.accordion_title').removeClass('active_title');
      $('.accordion_plus').replaceWith('<div class="accordion_plus">+</div>');
      $('.accordion_plus').removeClass('active_plus');
      $('.accordion_title h4').removeClass('active_h4');
      $('.accordion_text').stop(true, true).slideUp(300);

    } else {
      
      $('.accordion_title').removeClass('active_title');
      $(this).addClass('active_title');        

      $('.accordion_title h4').removeClass('active_h4');
      $(this).children('h4').addClass('active_h4');    

      $('.accordion_plus').replaceWith('<div class="accordion_plus">+</div>');
      $(this).children('.accordion_plus').replaceWith('<div class="accordion_plus">&ndash;</div>');

      $('.accordion_plus').removeClass('active_plus');
      $(this).children('.accordion_plus').addClass('active_plus');

      $('.accordion_text').stop(true, true).slideUp(300);
      $(this).siblings('.accordion_text').stop(true, true).slideDown(300);
    };
  });
});

//Carousel
$(function(){
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    dots: true,
  });
});


//lodash
var data = JSON.parse(stringData);

var skills = _.uniq(_.sortBy(_.flatten(_.map(data, 'skills'))));
console.log('skills');
console.log(skills);

var sortedObj = _.sortBy(data, [function(o) { return o.friends.length; }]);
var friendsName = _.map(sortedObj, 'name');
console.log('people sorted by quantity of friends');
console.log(friendsName);

var friendsArr = _.map(data, 'friends');
var friendsObj = _.flattenDeep(friendsArr, 'name');
var friends = _.uniq(_.map(friendsObj, 'name'));
console.log('all friends');
console.log(friends);


var a = 5;
if (true) {
  var a = 6;
  console.log(a)
}
  console.log(a)