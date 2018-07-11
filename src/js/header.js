document.addEventListener('DOMContentLoaded', function() {

    /********** OPEN/CLOSE NAVIGATION  WHEN CLICKING ON NAV TRIGGER  **********/
    const touchEvent = ('ontouchstart' in document.documentElement ? 'touchstart' : 'click'),
          body = document.getElementsByTagName("body")[0],
          pageNavOverlay = document.getElementById("pageNavOverlay"),
          triggerNavContainer = document.getElementById("triggerNavContainer"),
          triggerSubNavPrimary = document.getElementsByClassName('has-sub-level'),
          navPrimaryLI = document.querySelectorAll('.nav-primary > li');

    //toggle the left navbar
    const toggleNav = event =>  {
        event.preventDefault();
        body.classList.contains('menu-opened') ? body.classList.remove('menu-opened') : body.classList.add('menu-opened');
    };

    //close the left navbar
    const closeNav = () => {
        body.classList.remove('menu-opened');
    };

    //toggle the subnav with arrow
    const toggleSubNav = event => {
      event.preventDefault();
      event.currentTarget.classList.toggle('show');
    }

    //for all <li> which have .has-sub-level class
    for(let i=0,x=triggerSubNavPrimary.length; i<x; i++) {
      triggerSubNavPrimary[i].addEventListener(touchEvent, toggleSubNav);
    }

    triggerNavContainer.addEventListener(touchEvent, toggleNav);
    pageNavOverlay.addEventListener(touchEvent, closeNav);

    //on resize, if window width > 1024px then close the nav and if < 1024px then allow click on  <li> which have .has-sub-level class to display sub nav
    window.addEventListener('resize', function() {
      if(this.innerWidth > 1024) closeNav();

      if(this.innerWidth < 1024) {
        for(let i=0,x=triggerSubNavPrimary.length; i<x; i++) {
          triggerSubNavPrimary[i].addEventListener(touchEvent, toggleSubNav);
        }
      }
    });

    //When page is loaded, same thing than above
    if(this.innerWidth < 1024) {
      for(let i=0,x=triggerSubNavPrimary.length; i<x; i++) {
        triggerSubNavPrimary[i].addEventListener(touchEvent, toggleSubNav);
      }
    }

    //accessibility
    for(let i=0, x=navPrimaryLI.length; i<x; i++) {
      navPrimaryLI[i].addEventListener('keyup', event => {
        if(event.currentTarget.classList.contains('has-sub-level')) {
          if(event.keyCode === 13 ) event.currentTarget.classList.add('show');
        }
        else {
          for(let j=0, x=navPrimaryLI.length; j<x; j++) {
            navPrimaryLI[j].classList.remove('show');
          }
        }
      });
    }

    //accessibility
    document.addEventListener("click", function(event) {
      // If user clicks inside the navigation, do nothing, else remove active class
      if (event.target.closest(".has-sub-level")) return;
      else {
        for(let j=0, x=navPrimaryLI.length; j<x; j++) {
          navPrimaryLI[j].classList.remove('show');
        }
      }
    });
    /********** OPEN/CLOSE NAVIGATION WHEN CLICKING ON NAV TRIGGER **********/

}, false);
