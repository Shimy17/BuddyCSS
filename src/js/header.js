document.addEventListener('DOMContentLoaded', function() {

    /********** OPEN/CLOSE NAVIGATION  WHEN CLICKING ON NAV TRIGGER  **********/
    const body = document.querySelector("body"),
          pageHeader = document.querySelector('.page-header.left-bar'),
          pageNavOverlay = document.querySelector("#pageNavOverlay"),
          pageNav = document.querySelectorAll(".page-nav"),
          triggerNavContainer = document.querySelectorAll('[data-trigger-nav]'),
          triggerSubNavPrimary = document.querySelectorAll('.has-sub-level'),
          navPrimaryLI = document.querySelectorAll('.nav-primary > li');


    //toggle the left navbar
    const toggleNav = event =>  {
        event.preventDefault();

        const dataTriggerNav = event.currentTarget.dataset.triggerNav;
        let i=0;

        while(i<pageNav.length) {
          if(pageNav[i].id == dataTriggerNav)
            body.classList.contains('menu-opened') ? body.classList.remove('menu-opened') : body.classList.add('menu-opened');
          i++
        }
    };
    let i=0;
    while(i < triggerNavContainer.length) {
      triggerNavContainer[i].addEventListener('click', toggleNav);
      i++;
    }


    //close the left navbar
    const closeNav = () => {
        body.classList.remove('menu-opened');
    };
    pageNavOverlay.addEventListener('click', closeNav);


    //toggle the subnav with arrow (on mobile)
    const toggleSubNav = event => {
      event.preventDefault();
      event.currentTarget.classList.toggle('show');
    }
    let j=0;
    while(j < triggerSubNavPrimary.length) {
      triggerSubNavPrimary[j].addEventListener('click', toggleSubNav);
      j++;
    }


    //on resize, if window width > 1024px then close the nav and if < 1024px then allow click on  <li> which have .has-sub-level class to display sub nav
    window.addEventListener('resize', function() {
      if(this.innerWidth > 1024) closeNav();

      if(this.innerWidth < 1024) {
        let j=0;
        while(j < triggerSubNavPrimary.length) {
          triggerSubNavPrimary[j].addEventListener('click', toggleSubNav);
          j++;
        }
      }
    });


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
    if(!pageHeader) {
      document.addEventListener("click", function(event) {
        // If user clicks inside the navigation, do nothing, else remove active class
        if (event.target.closest(".has-sub-level")) return;
        else {
          for(let j=0, x=navPrimaryLI.length; j<x; j++) {
            navPrimaryLI[j].classList.remove('show');
          }
        }
      });
    }
    /********** OPEN/CLOSE NAVIGATION WHEN CLICKING ON NAV TRIGGER **********/

}, false);
