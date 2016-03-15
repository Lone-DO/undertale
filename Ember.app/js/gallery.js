$(document).ready(function () {
  'use strict';

  $('button').click(function () {
    // AJAX
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
      flickrOptions = {
        tags: 'undertale',
        format: "json"
      };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function (i, photo) {
        photoHTML += '<li>' + '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#flickr').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready