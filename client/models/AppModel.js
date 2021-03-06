// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    // console.log('params are:',params);
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */





    // (event, callback, [context])
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this),

    // params.library.on('ended', function(){
    //   console.log('deq songQ',songQ);
    //   var songQ = this.get('songQueue');
    //   // var songToBeRemoved = this.get('currentSong');
    //   // songQ.remove(songToBeRemoved);
    //   this.set('currentSong', songQ.at(0));
    // }, this),


    params.library.on('enqueue', function(song){
      var songQ = this.get('songQueue');
      songQ.add(song);
      // console.log('enq songQ',songQ);
    }, this);

    params.library.on('dequeue', function(song){
      var songQ = this.get('songQueue');
      songQ.remove(song);
      // console.log('deq songQ',songQ);
    }, this);

    console.log('currentSong', this.get('currentSong'))
    console.log('songQ', this.get('songQueue'))


  }

});
