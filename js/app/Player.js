define(['jQuery', 'app/Song', 'rangeslider'], function ($, Song) {

    var Player = {
    	init: function () {                

            this.range = $('[data-rangeslider]');
            this.UI = {
                currentTime: $('.player-currenttime'),
                totalTime: $('.player-totaltime')
            };

            this.song = new Audio('js/app/test.mp3');
            
            this.bind();                

            Song.init();

        },

        create: function (song) {

            var that = this;

            //init size range (song duration)
            this.range.attr('max', Math.floor(song.duration));

            that.setDuration(song.duration);
            that.setCurrentTime(0);

            // Basic rangeslider initialization
            this.range.rangeslider({

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

            this.song.addEventListener('loadedmetadata', function() {
                console.log();
                Player.create({
                    duration: that.song.duration
                });
                
                that.song.play();
            });

            this.song.addEventListener('timeupdate',function (){
                curtime = parseInt(that.song.currentTime, 10);
                that.setCurrentTime(that.song.currentTime);                    
            });
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