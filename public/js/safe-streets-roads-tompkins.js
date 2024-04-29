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

  // Main nav active class
  var heroHeader = document.querySelector('.hero');
  var mainNav = document.querySelector('.main-nav');
  var isSticky = false; // Flag to track whether the sticky class is currently applied

  var observerAdd = new IntersectionObserver(function(entries) {
    if (!entries[0].isIntersecting && !isSticky) {
      mainNav.classList.add('sticky');
      isSticky = true;
    }
  }, { threshold: [0.1] }); // Threshold for adding the sticky class

  var observerRemove = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting && isSticky) {
      mainNav.classList.remove('sticky');
      isSticky = false;
    }
  }, { threshold: [0.12] }); // T´hreshold for removing the sticky class


  observerAdd.observe(heroHeader);
  observerRemove.observe(heroHeader);

  // Scroll to top

  $('.scroll-to-top').click(function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
});