define(['jQuery', 'rangeslider'], function ($) {

    var Player = {
    	init: function () {                

            this.song = null;            

            this.UI = {
                player: $('#player'),
                playerInfo: $('.player-info'),
                slider: $('[data-rangeslider]'),
                currentTime: $('.player-currenttime'),
                totalTime: $('.player-totaltime'),
                title: $('.player-title')
            }

            return this;

        },

        createTimeline: function (songDuration) {

            var that = this;

            this.UI.slider.rangeslider('destroy');
            this.UI.slider.attr('max', songDuration);

            var to = this.UI.slider.rangeslider({

                // Deactivate the feature detection
                polyfill: false,

                // Callback function
                onInit: function() {
                    that.setCurrentTime(0);
                    that.setDuration(that.song.duration);                    
                },

                // Callback function
                onSlide: function(position, value) {                    
                    console.log('onSlide');
                    // console.log('position: ' + position, 'value: ' + value);                    
                },

                // Callback function
                onSlideEnd: function(position, value) {
                    // console.log('onSlideEnd');                    
                    // console.log('position: ' + position, 'value: ' + value); 
                    that.jumpToTime(value);
                }
            });

            this.UI.rangeslider = $('.rangeslider');           

            this.UI.rangeslider.on('mousedown', function () {                
                that.pauseSong();
                             
            });
            

            this.bind();
        },


        bind: function () {
            var that = this;
            
        },

        playSong: function (song, params) {
            var that = this;

            this.loadSong(song, function () {
                that.setTitle(params.title);
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
                that.createTimeline(that.song.duration);
                that.UI.playerInfo.slideDown();
                callback();
            });

        },

        pauseSong: function () {
            this.song.pause();
        },

        resumeSong: function () {
            this.song.play();
        },

        jumpToTime: function (time) {
            this.song.pause();
            this.song.currentTime = time;            
            this.song.play();
        },

        updateTimeLine: function (value) {                    
            this.UI.slider.val(value).change();
        },

        setCurrentTime: function (value) {
            var output = this.UI.currentTime;

            output.text(this.readableDuration(value));
        },

        setDuration: function (value) {
            this.UI.totalTime.text(this.readableDuration(value));
        },

        setTitle: function (title) {
            this.UI.title.text(title);
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