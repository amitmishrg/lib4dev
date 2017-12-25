
(function() {

  $("#option-wrapper").on('click', function() {
    let $options = $(this).parent().find('.options');
    $options.toggle();
  });


})();
