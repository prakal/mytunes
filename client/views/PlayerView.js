// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    console.log('playerviews model',this.model);
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  events: {
    'ended': function() {
      console.log('fsdfs');
    }
  },


  render: function(){
    // if this.model exists,
          //then return (this.$el.attr('src',this.model.get('url')).
    //else,
          //return (this.$el.attr('src','')
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
