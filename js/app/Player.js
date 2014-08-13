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

            this.UI.slider.rangeslider({

                // Deactivate the feature detection
                polyfill: false,

                // Callback function
                onInit: function() {
                    that.setCurrentTime(0);
                    that.setDuration(that.song.duration);
                    that.UI.rangeslider = $('.rangeslider');
                },

                // Callback function
                onSlide: function(position, value) {
                    // console.log('onSlide');
                    that.setCurrentTime(value);
                    // console.log('position: ' + position, 'value: ' + value);
                },

                // Callback function
                onSlideEnd: function(position, value) {
                    // console.log('onSlideEnd');
                    // console.log('position: ' + position, 'value: ' + value);
                    that.jumpToTime(value);
                }
            });


            this.bind();
        },


        bind: function () {
            var that = this;

            this.UI.rangeslider.on('mousedown', function () {
                that.timelineStop();
            }).on('mouseup', function () {
                that.timelineMove();
            });

        },

        playSong: function (song, params) {
            var that = this;

            this.loadSong(song, function () {
                that.setTitle(params.title);
                that.song.play();
                that.timelineMove();
            });

        },


        loadSong: function (song, callback) {
            var that = this;

            this.song = new Audio(song);

            this.song.addEventListener('loadedmetadata', function() {
                // update player with good properties
                that.createTimeline(that.song.duration);
                that.displayLoader(true);
                that.UI.playerInfo.slideDown();
                callback();
            });

            this.song.addEventListener('canplaythrough', function() {
                that.displayLoader(false);
            });

        },

        pauseSong: function () {
            if (this.song) {
                this.song.pause();
            }
        },

        resumeSong: function () {
            this.song.play();
        },

        jumpToTime: function (time) {
            this.song.pause();
            this.song.currentTime = time;
            this.song.play();
            this.displayLoader(true);
        },

        timelineMove: function () {
            var that = this;

            this.intervalTimeline = setInterval(function() {
                var currentTime = that.song.currentTime;
                that.setCurrentTime(currentTime);
                that.updateTimeLine(currentTime);
            }, 1000);
        },

        timelineStop: function () {
            clearInterval(this.intervalTimeline);
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
        },

        displayLoader: function (isLoading) {
            var that = this,
                loaderInteval,
                rangeslider = this.UI.rangeslider
                pos = 1;

            if (isLoading) {
                rangeslider.addClass('loading');
                loaderInteval = setInterval(function() {
                    that.UI.rangeslider.css({'background-position': pos += 1});
                }, 100);
            } else {
                rangeslider.removeClass('loading');
                pos = 1;
            }

        }

    }

    return Player;

});