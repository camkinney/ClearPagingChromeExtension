jQuery(function () {
    console.log("ready!!");
    $("body").prepend("<div id=\"lineMarker\" class=\"lineHorizontal\"></div>");
});
$(window).on("keydown", function (e) {
  var windowHeight = window.innerHeight;
  var scrollTop = $(window).scrollTop();
  var currentoffset = $("#lineMarker").offset();
  if (e.keyCode === KeyCode.PageUp) {
    if (scrollTop === 0) return;

    $("#lineMarker").finish().fadeOut();
    $("#lineMarker").show();
    $("#lineMarker").height(windowHeight);

    $("#lineMarker").offset({
      top: scrollTop,
      left: currentoffset.left
    });

    $("#lineMarker").fadeOut(2000);
  } else if (e.keyCode === KeyCode.PageDown) {
    $("#lineMarker").finish().fadeOut();
    $("#lineMarker").show();
    $("#lineMarker").height(windowHeight);


    $("#lineMarker").offset({
      top: scrollTop,
      left: currentoffset.left
    });
    $("#lineMarker").fadeOut(2000);
  }
});

const KeyCode = {
  PageUp: 33,
  PageDown: 34
};