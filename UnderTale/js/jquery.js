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