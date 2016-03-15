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
      $('#flickr').html(photoHTML);
    }
    $.getJSON(flickerAPI, opts, displayPhotos);

  }); //End Flickr

  //TUMBLR API CALLS
  
  $('#showTumblr').click(function () {
    // Authenticate via API Key
    var tumblrAPI = "http://api.tumblr.com/v2/blog/undertale.tumblr.com/info?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
      tumblrAvt = "http://api.tumblr.com/v2/blog/undertale.tumblr.com/avatar/128?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
      tumblrPost = "http://api.tumblr.com/v2/blog/undertale.tumblr.com/posts/text?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
      tumblrPhoto = "http://api.tumblr.com/v2/blog/undertale.tumblr.com/posts/photo?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
      text = '';
    //T-Header
    $.ajax({
      url: tumblrAPI,
      dataType: 'jsonp',
      success: function (results) {
        $("h1").html(results.response.blog.title);
      }
    });
    
    //T-Avatar
//    $.ajax({
//      url: tumblrAvt,
//      dataType: 'jsonp',
//      success: function (avatar) {
//        console.log('Image');
//        $("#myDivId").attr('src', avatar.response.avatar_url);
//      }
//    });
    
    //T-Photos
//    var opts = {
//      format: 'json'
//    };
//    function displayPhotos(data) {
//      var photoHTML = '<ul>';
//      $.each(data.response.posts, function (i, photo) {
//        photoHTML += '<li>' + '<a href="' + photo.image_permalink + '" class="image">';
//        photoHTML += '<img src="' + photo.image_permalink + '"></a></li>';
//      });
//      photoHTML += '</ul>';
//    }
//    $.getJSON(tumblrPhoto, opts, displayPhotos);
    
//    $.getJSON(tumblrPhoto, {
//      tags: 'undertale',
//      format: 'JSONP'
//    },
//      function (data) {
//        var photoHTML = '<ul>';
//        $.each(data.posts.photos, function (i, photo) {
//          photoHTML += '<li>';
//          photoHTML += '<img src="' + photo.original_size.url + '"></li>';
//        });
//        photoHTML += '</ul>';
//        console.log('Rendeering Tumblr');
//        $('#tumblr').html(photoHTML);
//        
//      });

    $.ajax({
      url: tumblrPost,
      dataType: 'jsonp',
      success: function (data) {
        var posts = data.response.posts;
        $.each(posts, function (i) {
          console.log(posts[i].title, posts[i].body);
        });
        console.log('Loop done');
        console.log(posts);
      }
    });
    
  });//emd tumblr
}); // end ready

//API Reference: http://www.developerdrive.com/2014/05/how-to-get-started-with-the-tumblr-api-part-2/