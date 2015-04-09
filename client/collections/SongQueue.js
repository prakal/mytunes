// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
//songQueue:
  initialize: function(){

  },
  playFirst: function(){
    // console.log('in songQueue',this.models[0]);
    //firstelement in collection invoke play() on it
    this.at(0).play();

  }


});
