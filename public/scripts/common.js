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
    let $icon = $(this).find('.icon');
    $icon.toggleClass('toggle');
    $options.toggle();
  });

  $("#option-list").on('click', 'li', function(event) {
    let $selected = $("#option-wrapper .selected");
    let $icon = $("#option-wrapper .icon");
    let target = event.target;
    let val = event.target.innerText;
    $("#option-list a").removeClass('active');
    $(target).addClass('active');
    $(this).closest('.options').hide();
    $selected.html(val);
    $icon.toggleClass('toggle');
  });

  $("#social-share-wrapper").on('click', '.share-btn', function(event) {
    let $target = $(event.currentTarget).closest('#social-share-wrapper');
    $target.find('#share').toggleClass('open');
  });
})();

let getUrl = function(evt) {
  let type = evt.dataset.type,
    location = window.location.href,
    url = '';
  switch (type) {
    case "twitter":
        url = `http://twitter.com/share?url=${location}`;
      break;
    case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${location}`
      break;
    case "google":
        url = `https://plus.google.com/share?url=${location}`
      break;
  }
  return url;
}
let popup = function(evt) {
  let url = getUrl(evt);
  let width = 580;
  let height = 296;
  let left = (screen.width - width) / 2;
  let top = (screen.height - height) / 2;
  let params = 'width=' + width + ', height=' + height;
  params += ', top=' + top + ', left=' + left;
  params += ', directories=no';
  params += ', location=no';
  params += ', menubar=no';
  params += ', resizable=no';
  params += ', scrollbars=no';
  params += ', status=no';
  params += ', toolbar=no';
  newwin = window.open(url, 'windowname5', params);
  if (window.focus) {
      newwin.focus();
  }
  return false;
}
