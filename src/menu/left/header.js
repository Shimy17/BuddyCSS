document.addEventListener('DOMContentLoaded', function() {


    var touchEvent = ('ontouchstart' in document.documentElement ? 'touchstart' : 'click');
    var pageNavOverlay = document.getElementById("pageNavOverlay");
    var body = document.getElementsByTagName("body")[0];
    var triggerNavContainer = document.getElementById("triggerNavContainer");


    var openNav = function() {
        body.classList.add('menu-opened');
    };

    var closeNav = function() {
        body.classList.remove('menu-opened');
    }


    triggerNavContainer.addEventListener(touchEvent, openNav);
    pageNavOverlay.addEventListener(touchEvent, closeNav);


}, false);
