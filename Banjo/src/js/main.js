$(document).ready(function() {

// Gets the video src from the data-src on each button
  let $videoSrc;
  $('.video-btn').click(function() {
    $videoSrc = $(this).attr("data-src");
    console.log($videoSrc);
  });

// stop video on modal close
  $('#myModal').on('hidden.bs.modal', function () {
    $("#myModal iframe").attr("src", $("#myModal iframe").attr("src"));
  })
});

$('.fader').fadeIn(3000);

$('.buttonbackground').click(function () {
  alert("Your email has been sent. We'll respond soon. Keep on strumming!");
});

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

