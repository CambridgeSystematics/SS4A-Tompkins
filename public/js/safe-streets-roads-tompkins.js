$(document).ready(function() {
  
  // Annoouncement dropdown

  $(".dropdown-button").click(function() {
    var content = $(this).parent().next();
    var announcement = $(this).closest('.announcement');
    if (content.css("maxHeight") !== "0px"){
      content.css("maxHeight", "0px");
      $(this).children("svg").removeClass("rotate");
      announcement.removeClass('active');
    } else {
      content.css("maxHeight", content.prop("scrollHeight") + "px");
      $(this).children("svg").addClass("rotate");
      announcement.addClass('active');
    } 
  });


  // toggle sticky nav on scroll when it passes the hero

  var heroHeader = document.querySelector('.hero');
  var stickyNav = document.querySelector('.sticky-nav');
  var mqlSticky = window.matchMedia('(max-width: 768px)');
  var isSticky = false; // Flag to track whether the sticky class is currently applied


  var observerAdd = new IntersectionObserver(function(entries) {
    if (!entries[0].isIntersecting && !isSticky) {
      stickyNav.classList.add('sticky');
      isSticky = true;
    }
  }, { threshold: [0.1] });

  var observerRemove = new IntersectionObserver(function(entries) {
    // Remove sticky if it has sticky class, hero header is in view, and viewport width over 768px
    if (entries[0].isIntersecting && isSticky && !mqlSticky.matches){
      stickyNav.classList.remove('sticky');
      $('.sticky-nav').removeClass('menu-small-active');
      isSticky = false;
    }
  }, { threshold: [0.12] });


  observerAdd.observe(heroHeader);
  observerRemove.observe(heroHeader);

// observe viewport width and toggle sticky nav if it is 768px or less

  window.onload = function() {
    if (mqlSticky.matches) {
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
  mqlSticky.addListener(handleViewportChangeSticky);
  handleViewportChangeSticky(mqlSticky);

  // Scroll to top button

  $('.scroll-to-top').click(function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
 

  // Swap to small sticky dropdown nav on viewport width 1300px or less

  var mql = window.matchMedia('(max-width: 1300px)');
  function handleViewportChange(e) {
    if (e.matches) {
      // If viewport width is 1300px or less
      $('.sticky-nav').addClass('nav-small');
    } else {
      // If viewport width is more than 1300px
      $('.sticky-nav').removeClass('nav-small');
    }
  }
  mql.addListener(handleViewportChange); // Attach listener function on state changes
  handleViewportChange(mql); // Call listener function at run time

  $('.menu-icon').click(function() {
    $('.sticky-nav').toggleClass('menu-small-active');
  });

});