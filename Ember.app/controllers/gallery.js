Undertale.GalleryController = Ember.ObjectController.extend({

  //FLICKR API CALLS
  actions: {
    showFlickr: function () {
      'use strict';
      // AJAX
      var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        opts = {
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
      $.getJSON(flickerAPI, opts, displayPhotos);

  //end showFlickr

  //TUMBLR API CALLS

    }//end Actions
  }//end Controller
});//end ready
