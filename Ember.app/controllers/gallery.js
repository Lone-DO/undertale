//Undertale.GalleryController = Em.Controller.extend({});
$(document).ready(function () {
  'use strict';
  
  //FLICKR API CALLS
  $('#showFlickr').click(function () {
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
      $('#display').html(photoHTML);
    }
    $.getJSON(flickerAPI, opts, displayPhotos);

  }); //End Flickr

  //TUMBLR API CALLS
  
  $('#showTumblr').click(function () {
    // Authenticate via API Key
    var tumblrAPI = "http://api.tumblr.com/v2/blog/undertale.tumblr.com/info?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
      tumblrAvt =
        "http://api.tumblr.com/v2/blog/undertale.tumblr.com/avatar/128?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
      tumblrPost =
        "http://api.tumblr.com/v2/blog/undertale.tumblr.com/posts/text?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
      tumblrPhoto =
        "http://api.tumblr.com/v2/blog/undertale.tumblr.com/posts/photo?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
      text = '';
    //T-Header
    $.ajax({
      url: tumblrAPI,
      dataType: 'jsonp',
      success: function (results) {
        $("h1").html(results.response.blog.title);
      }
    });//end Title Pull
    
    //T-Avatar
//    $.ajax({
//      url: tumblrAvt,
//      dataType: 'jsonp',
//      success: function (avatar) {
//        console.log('AVATAR LOADED ED ED ');
//      }
//    });
    
    //T-Post
    $.ajax({
      url: tumblrPost,
      dataType: 'jsonp',
      success: function (data) {
        var posts = data.response.posts;
        $.each(posts, function (i) {
          console.log(posts[i].title, posts[i].body);
        });
        console.log('Post Loop done');
        console.log(posts);
      }
    });//end Post's Pull
    
    //T-Photos
    $.ajax({
      url: tumblrPhoto,
      dataType: 'jsonp',
      success: function (data) {
        var photos = data.response.posts;
        $.each(photos, function (i) {
          var url = photos[i].photos[0].original_size.url,
            sum = photos[i].summary,
            photo = '<ul>';
          
          photo += '<li>' + '<a href="' + url + '" class="image">';
          photo += '<img src="' + url + '"></a></li>';
          photo += '</ul>';
          console.log(photo, sum);
          $('#display').append(photo);
        });
        console.log('Photo Loop done');
        console.log(photos);
      }
    });//end Photo's Pull
  });//end tumblr
}); // end ready

//API Reference: MEOW!
//Reasons this is written in Jquery vs Ember is for many reasons, 
  //Primary reason is that some Scripts are outside the scopes of my knowledge for the time being, that time being limited and the focus is to not only show but prove that i am aware of what i am doing. 
  //With Jquery i know purely what is going on, as some scopes just are possible when transcripting from one Language to another, Deprecations & installations are bound, in due time features will change as well as this site. ;D i digress, 