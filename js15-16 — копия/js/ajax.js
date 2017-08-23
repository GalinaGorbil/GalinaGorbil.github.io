$(function () {
   form = $('form');
    /** Submit Form */
    form.on('submit', function () {
      $.ajax({
        url: form.attr('action'),
        dataType: 'json',
        method: form.attr('method'),
        data: form.serialize(),
        success: function (response) {
          var results = $('#results');
        results.empty();
        $.each(response.items, function (index, object) {
          var block = $('<div>')
          .addClass('search-item');
         $('<a>').html(object.htmlTitle)
         .attr('href', object.link)
         .attr('target', '_blank')
         .appendTo(block); $('<p>')
         .html(object.displayLink)
         .addClass('green-domain')
         .appendTo(block);
         $('<p>').html(object.htmlSnippet)
         .appendTo(block);
        results.append(block);
        });
          $('#loader').fadeOut();
          $('[type="submit"]').attr('disabled', false);
        },
          error: function (response) {
           $('#results').empty()
          .html(response.responseText);
            $('[type="submit"]')
          .attr('disabled', false);
           $('#loader').fadeOut();
           }
         });
          return false;
       });
 });
