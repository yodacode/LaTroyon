define(['jQuery', 'app/Song', 'rangeslider'], function ($, Song) {

    var Player = {
    	init: function () {                

            this.song = null;

            this.UI = {
                timeline: $('[data-rangeslider]'),
                currentTime: $('.player-currenttime'),
                totalTime: $('.player-totaltime')
            };

            
            this.build();                
            // this.bind();

            Song.init();

            return this;

        },

        build: function () {

            var that = this;

            // Basic rangeslider initialization
            this.UI.timeline.rangeslider({

                // Deactivate the feature detection
                polyfill: false,

                // Callback function
                onInit: function() {
                    that.setCurrentTime();                        
                },

                // Callback function
                onSlide: function(position, value) {
                    console.log('onSlide');
                    console.log('position: ' + position, 'value: ' + value);
                },

                // Callback function
                onSlideEnd: function(position, value) {
                    console.log('onSlideEnd');                    
                    console.log('position: ' + position, 'value: ' + value);
                }
            });


        },


        bind: function () {
            var that = this;

            
        },

        playSong: function (song) {
            var that = this;
            this.loadSong(song, function () {
                that.song.play();
            });

             this.song.addEventListener('timeupdate',function (){                
                that.setCurrentTime(that.song.currentTime);
                that.updateTimeLine(that.song.currentTime);
            });
            
        },

        loadSong: function (song, callback) {
            var that = this;

            this.song = new Audio(song);
            this.song.addEventListener('loadedmetadata', function() {
                // update player with good properties     
                console.log(that.song.duration, 343424);           
                that.UI.timeline.attr('max', that.song.duration);
                that.UI.timeline.rangeslider('update');
                that.setCurrentTime(0);
                that.setDuration(that.song.duration)
                callback();
            });

        },

        updateTimeLine: function (value) {                    
            this.UI.timeline.val(value).change();
        },

        setCurrentTime: function (value) {
            var output = this.UI.currentTime;

            output.text(this.readableDuration(value));
        },

        setDuration: function (value) {
            this.UI.totalTime.text(this.readableDuration(value));
        },

        readableDuration: function (seconds) {
            var sec = Math.floor(seconds),
                min = Math.floor( sec / 60 );

                min = min >= 10 ? min : '0' + min;
                sec = Math.floor( sec % 60 );
                sec = sec >= 10 ? sec : '0' + sec;

            return min + ':' + sec;
        }

    }

    return Player;

});