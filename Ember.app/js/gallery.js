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
      tumblrPost = "http://api.tumblr.com/v2/blog/undertale.tumblr.com/posts?api_key=vloc4eXTLszkJIWjma1zAvx9wcYnXTaGS1QdKiTGHR3epAclxP",
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
    $.ajax({
      url: tumblrAvt,
      dataType: 'jsonp',
      success: function (avatar) {
        console.log();
        $(".avatar").attr('src', avatar.response.avatar_url);
      }
    });
    
    //T-Posts
    function tumblrPosts(data) {
      var postings = posts.response.posts,
        text = '';
      console.log(postings);
      $.each(data.items, function (i, postings) {
        var p = postings[i];
        text += '<li><img src=' + p.photos[0].original_size.url + '><a href=' + p.post_url + '>' + p.source_title + '</a></li>';
      });
      $('ul').append(text);
    }
    $.getJSON(tumblrPost, tumblrPosts);
  });//emd tumblr
}); // end ready

//API Reference: http://www.developerdrive.com/2014/05/how-to-get-started-with-the-tumblr-api-part-2/