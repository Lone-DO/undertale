////To be worked on, Animation Fade in and out
//$(document).ready(function()
//{
//    $('#navigation').on('click','a',function()
//    {
//        // fade out all open subcontents
//        $('.subcontent:visible').fadeOut();
//        // fade in new selected subcontent
//        $('.subcontent[id='+$(this).attr('id')+']').fadeIn();
//    });
//});


//onclick events that display Ajax links iside #main div,
$(function () {
  'use strict';
  $("#nav_about").on("click", 'a', function () {
    $("#main").load("about.html");
    alert('loaded');
  });
    
  $("#nav_demo").on("click", 'a', function () {
    $("#main").load("demo.html");
    alert('loaded');
  });
    
  $("#nav_contact").on("click", 'a', function () {
    $("#main").load("contact.html");
    alert('loaded');
  });
  
  $("#nav_faq").on("click", 'a', function () {
    $("#main").load("faq.html");
    alert('loaded');
  });
  
  $("#nav_troubleshoot").on("click", 'a', function () {
    $("#main").load("troubleshoot.html");
    alert('loaded');
  });
});

//onclick eevnt that closes #main div

$(this).onclick(function() {
		('#main').hide();
});
//Create Trasnsparent backround overpage upon overview 
//fade in and out Animation
