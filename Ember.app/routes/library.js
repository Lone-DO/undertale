Undertale.LibraryRoute = Ember.Route.extend({
  model: function () {
    var content = [];

    $.ajax({
      url: 'albums.json',
      success: function (albums) {
        albums = albums.map(function (album) {
          var tracks = album.tracks.map(function (track) {
            return $.extend(track, {album: album});
          });
          return $.extend(album, {tracks: tracks});
        });

        content.pushObjects(albums);
      }
    });

    return content;
  }
});