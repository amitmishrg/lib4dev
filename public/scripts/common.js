
(function() {

  $("#menu").on('click', function() {
    $('.sidebar').toggleClass('show');
    $("#main").toggleClass('push');
    $("body").toggleClass('overflow');
  });

  $('.show-loader').on('click', function(event) {
      if (event.ctrlKey || event.metaKey) return;
      $('.loader').show();
  });

  $("#option-wrapper").on('click', function() {
    let $options = $(this).parent().find('.options');
    $options.toggle();
  });

  $("#option-list").on('click', 'li', function(event) {
    let $selected = $("#option-wrapper .selected")
    let target = event.target;
    let val = event.target.innerText;
    $("#option-list a").removeClass('active');
    $(target).addClass('active');
    $(this).closest('.options').hide();
    $selected.html(val);
  });

})();
