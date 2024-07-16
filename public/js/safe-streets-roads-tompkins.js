$(document).ready(function() {

  var stickyNav = document.querySelector('.sticky-nav');
  var mqlSmall= window.matchMedia('(max-width: 768px)');
  var mqlSticky = window.matchMedia('(max-width: 1300px)');
  var isSticky = false; // Flag to track whether the sticky class is currently applied
  
  // observe viewport width and toggle sticky nav if it is 768px or less

  window.onload = function() {
    if (mqlSmall.matches) {
      stickyNav.classList.add('sticky');
      isSticky = true;
    }
  };
  function handleViewportChangeSticky(e) {
    if (e.matches) {
      stickyNav.classList.add('sticky');
      isSticky = true;
    } else {
      if (isSticky && heroHeader.getBoundingClientRect().top >= 0) {
        stickyNav.classList.remove('sticky');
        isSticky = false;
      }
    }
  }
  mqlSmall.addListener(handleViewportChangeSticky);
  handleViewportChangeSticky(mqlSmall);
 

  // Swap to small sticky dropdown nav on viewport width 1300px or less

  function handleViewportChange(e) {
    if (e.matches) {
      // If viewport width is 1300px or less
      $('.sticky-nav').addClass('nav-small');
    } else {
      // If viewport width is more than 1300px
      $('.sticky-nav').removeClass('nav-small');
      $('.sticky-nav').removeClass('menu-small-active');
    }
  }
  mqlSticky.addListener(handleViewportChange); // Attach listener function on state changes
  handleViewportChange(mqlSticky); // Call listener function at run time

  $('.menu-icon').click(function() {
    $('.sticky-nav').toggleClass('menu-small-active');
  });

  if (document.body.classList.contains('homepage')) { // homepage js

  // Annoouncement dropdown

  $(".dropdown-button").click(function() {
    var announcement = $(this).closest('.announcement');
    
    announcement.toggleClass('active');
  });


  // toggle sticky nav on scroll when it passes the hero
  var heroHeader = document.querySelector('.hero');
  var observerAdd = new IntersectionObserver(function(entries) {
    if (!entries[0].isIntersecting && !isSticky) {
      stickyNav.classList.add('sticky');
      isSticky = true;
    }
  }, { threshold: [0.1] });

  var observerRemove = new IntersectionObserver(function(entries) {
    // Remove sticky if it has sticky class, hero header is in view, and viewport width over 768px
    if (entries[0].isIntersecting && isSticky && !mqlSmall.matches){
      stickyNav.classList.remove('sticky');
      $('.sticky-nav').removeClass('menu-small-active');
      isSticky = false;
    }
  }, { threshold: [0.12] });


  observerAdd.observe(heroHeader);
  observerRemove.observe(heroHeader);

  // Scroll to top button

  $('.scroll-to-top').click(function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  } // end of homepage js


  if (document.body.classList.contains('subpage')) { // subpage js

    function handleViewportChangeSubpage(e) {
      if (e.matches) {
        // If viewport width is 1300px or less
        $('.sticky-nav').addClass('sticky');
      } else {
        // If viewport width is more than 1300px
        $('.sticky-nav').removeClass('sticky');
        $('.sticky-nav').removeClass('menu-small-active');
      }
    }
    mqlSticky.addListener(handleViewportChangeSubpage); // Attach listener function on state changes
    handleViewportChangeSubpage(mqlSticky); // Call listener function at run time
  

  }  


});