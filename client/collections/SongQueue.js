// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
//songQueue:
  initialize: function(){

      this.on('add', function(){
        if(this.length === 1) this.playFirst()
      })



    //listen for events
    // this.on('ended',this.ended2,this);
  },
  playFirst: function(){
    // console.log('in songQueue',this.models[0]);
    //firstelement in collection invoke play() on it
    console.log('playFirst',this.at(0));
    this.first().play();

  },

  // ended2: function(){
  //   console.log('this',this);
  //   // logic for ending song

  // }


});
