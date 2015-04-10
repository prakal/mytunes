// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  //currentSong:
  //songQueue:
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },

  ended: function(){
    // console.log('eeendeed',this);
    // Triggering an event here will also trigger the event on the collection

    // deQueueing current song
    // this.dequeue();
    this.trigger('ended', this)

  }


});
