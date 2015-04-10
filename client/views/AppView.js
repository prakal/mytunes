// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    // console.log('appviews model',this.model);
    this.playerView = new PlayerView({model: this.model.get('currentSong')});// gets the URL of the song
    // this.playerView['songQ'] = this.model.get('songQueue');
    this.libraryView = new LibraryView({collection: this.model.get('library')}); // gets HTML of the collection of tunes

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    // this.model.on('ended', function(){
    //   console.log('model');
    //   var songQ = this.get('songQueue');
    //   this.playerView.setSong(songQ.at(0));
    // }, this);

    // this.model.on('ended',this.ended,this);

  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});
