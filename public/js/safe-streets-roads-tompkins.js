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

});