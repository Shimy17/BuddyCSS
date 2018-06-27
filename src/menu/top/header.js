document.addEventListener('DOMContentLoaded', function() {


    var touchEvent = ('ontouchstart' in document.documentElement ? 'touchstart' : 'click');
    var pageNavOverlay = document.getElementById("pageNavOverlay");
    var body = document.getElementsByTagName("body")[0];
    var triggerNavContainer = document.getElementById("triggerNavContainer");


    var toggleNav = function() {
        if(body.classList.contains('menu-opened')) body.classList.remove('menu-opened');
        else body.classList.add('menu-opened');
    };

    var closeNav = function() {
        body.classList.remove('menu-opened');
    }


    triggerNavContainer.addEventListener(touchEvent, toggleNav);
    pageNavOverlay.addEventListener(touchEvent, closeNav);

    window.onresize = function() {
      if(window.innerWidth > 1023) {
        body.classList.remove('menu-opened');
      }
    };


}, false);
