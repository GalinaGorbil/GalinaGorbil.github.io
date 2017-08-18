'use strict';

(function() {

  var data = {
    title: 'Test name',
      questions: [
      {
        title: 'Question #1',
        answers: ['Possible answer #1', 'Possible answer #2', 'Possible answer #3', 'Possible answer #4']
      },

      {
        title: 'Question #2',
        answers: ['Possible answer #1', 'Possible answer #2','Possible answer #3','Possible answer #4']
      },

      {
        title: 'Question #3',
        answers: ['Possible answer #1', 'Possible answer #2','Possible answer #3','Possible answer #4']
      }
    ]
  };

  var source = document.getElementById('slider').textContent.trim(),
      root = document.getElementById('carousel-root'),
      compiled = _.template(source);


  renderSlider(sliderData);

  function renderSlider(slides) {
    var htmlString = '';

    slides.forEach( function(item) {
      htmlString += compiled(item);
    });

    root.innerHTML = htmlString;
  }

})();
