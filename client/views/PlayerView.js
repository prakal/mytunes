// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
  songPosition: 0,

  initialize: function() {
    // console.log('playerviews model',this);
    // listening for el tag events
    //this.$el.on('ended',this.ended.bind(this));
  },

  events: {
    "ended" : "ended"
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  ended : function(){

    this.songPosition++;
    // console.log('inner ended trig',this);
    // console.log("this.model.collection", this.model.collection);
    // console.log("number before action",this.model.collection.length)
    // var songPosition = 0
    this.model.ended();
    // this.setSong(this.model.collection.at(songPosition + 1));
    this.setSong(this.model.collection.at(this.songPosition));
    // console.log("number after action",this.model.collection.length)
    // console.log(this.model.collection)

    // this.setSong(this.songQ.at(1));
  },

  render: function(){
    // if this.model exists,
          //then return (this.$el.attr('src',this.model.get('url')).
    //else,
          //return (this.$el.attr('src','')
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
