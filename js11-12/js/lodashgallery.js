
(function() {

  var galleryData = [
    {
      title: 'Guo Pei',
      link: 'img/13.jpg'
    },
    {
      title: 'Fendi',
      link: 'img/14.jpg'
    },
    {
      title: 'Tuhair Murad',
      link: 'img/15.jpg'
    },
    {
      title: 'Tuhair Murad',
      link: 'img/16.jpg'
    },
    {
      title: 'Valentino',
      link: 'img/17.jpg'
    },
    {
      title: 'Ulyana Sergeenko',
      link: 'img/18.jpg'
    },


  ];

  var source = document.getElementById('gallery').textContent.trim(),
      root = document.getElementById('lodashgallery-root'),
      compiled = _.template(source);


  renderGallery(galleryData);

  function renderGallery(photos) {
    var htmlString = '';

    photos.forEach( function(item) {
      htmlString += compiled(item);
    });

    root.innerHTML = htmlString;
  }

})();
