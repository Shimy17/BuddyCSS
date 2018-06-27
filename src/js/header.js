document.addEventListener('DOMContentLoaded', function() {


    /********** OPEN/CLOSE NAVIGATION  WHEN CLICKING ON NAV TRIGGER  **********/
    const touchEvent = ('ontouchstart' in document.documentElement ? 'touchstart' : 'click'),
          body = document.getElementsByTagName("body")[0],
          pageNavOverlay = document.getElementById("pageNavOverlay"),
          triggerNavContainer = document.getElementById("triggerNavContainer"),
          triggerSubNavPrimary = document.getElementsByClassName('has-sub-level');


    const toggleNav = event =>  { //toggle the left navbar
        event.preventDefault();
        body.classList.contains('menu-opened') ? body.classList.remove('menu-opened') : body.classList.add('menu-opened');
    };

    const closeNav = () => { //close the left navbar
        body.classList.remove('menu-opened');
    };

    const toggleSubNav = event => { //toggle the subnav with arrow
      event.preventDefault();
      event.currentTarget.classList.toggle('show');
    };

    triggerNavContainer.addEventListener(touchEvent, toggleNav);
    pageNavOverlay.addEventListener(touchEvent, closeNav);

    for(let i=0,x=triggerSubNavPrimary.length; i<x; i++) {
      triggerSubNavPrimary[i].addEventListener(touchEvent, toggleSubNav);
    }

    window.addEventListener('resize', function() { //on resize, if window width > 1024px then close the nav
      if(this.innerWidth > 1024) closeNav();
    })
    /********** OPEN/CLOSE NAVIGATION WHEN CLICKING ON NAV TRIGGER **********/

}, false);
