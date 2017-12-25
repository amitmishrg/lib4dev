
(function() {

  $("#option-wrapper").on('click', function() {
    let $options = $(this).parent().find('.options');
    $options.toggle();
  });

  $("#menu").on('click', function() {
    $('.sidebar').toggleClass('show');
    $('#main').toggleClass('push');
  });

  $("#menu").on('click', function() {
    $('.sidebar').toggleClass('show');
    $('#main').toggleClass('push');
  });

  $('.show-loader').on('click', function() {
    $('.loader').show();
  })

})();
