$(document).ready(function() {
   var isTouchEnabled = ("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch;
  $('.main-nav-list-item ul').hide();  // hiding the UL once page is loaded
  //$('.main-nav-list-item ul').first().show();
  $('.main-nav-list-item').click(function() {   // event listener for click
    $(this).find("ul").toggle();
  });
  
  $('.main-nav-list-item').mouseover(function() {  // event listener for mouseover
    $(this).parent().find('.main-nav-list-item').each(function(){
      $(this).find('ul').hide();
    })
    $(this).find('ul').show();
  });
  $('.main-nav-list-item').mouseleave(function() {  // event listener for mouseleave
   var that = $(this);

     that.find('ul').hide();

});

  /* ------------------------------------------------
  Multiple Stickys
  -------------------------------------------------- */

  // on non-touch devices...
  if (isTouchEnabled != true) {

    $(window).scroll(function() {
      var $headers = $(".main-nav, .social");
      var scrollTop = $(this).scrollTop();

      if (scrollTop <= 0) {
        // reset all
        $headers.css({
          position: "relative",
          top: "0px"
        });
      } else {
      $headers.each(function(index, $el) {

        var $curHeader = $($headers).eq(index);
        var curTop = $curHeader.offset().top;
        var curHeight = $curHeader.height();

        // scroll up
        var isRelative = ($el.isFixed && scrollTop <= $el.exTop);

        // scroll down
        var isFixed = (curTop <= scrollTop);

        var position = "";
        var top = 0;

        if (isRelative) {
          // reset
          positon = "relative";
          top = 0;

          $el.isFixed = false;
        } else if (isFixed) {
          position = "fixed";
          if (0 < index) {
            for (var i = 0; i < index; i++) {
              top += $($headers).eq(i).height();
            }
          }
          scrollTop += curHeight;

          if (!$el.isFixed) {
            $el.isFixed = true;
            $el.exTop = curTop;
          }
        }

        $($el).css({
          position: position,
          top: top + "px"
        });
      });
    }
  });
}
});


