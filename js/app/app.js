require(['jQuery', 'mustache'], function ($, Mustache) {
 
    console.log('jQuery version:', $.fn.jquery);
    console.log('Mustache', Mustache);
    

	var App = {};

    var assoc = {
        81: {
            letter: 'q',
            soundId: 1
        },
        87: {
            letter: 'w',
            soundId: 2
        },
        69: {
            letter: 'e',
            soundId: 3
        },
        82: {
            letter: 'r',
            soundId: 4
        },
        84: {
            letter: 't',
            soundId: 5
        },
        89: {
            letter: 'y',
            soundId: 6
        },
        85: {
            letter: 'u',
            soundId: 7
        },
        73: {
            letter: 'i',
            soundId: 8
        },
        79: {
            letter: 'o',
            soundId: 9
        },
        80: {
            letter: 'p',
            soundId: 10
        },
        65: {
            letter: 'a',
            soundId: 11
        },
        83: {
            letter: 's',
            soundId: 12
        },
        68: {
            letter: 'd',
            soundId: 13
        },
        70: {
            letter: 'f',
            soundId: 14
        },
        71: {
            letter: 'g',
            soundId: 15
        },
        72: {
            letter: 'h',
            soundId: 16
        }
    };

    App.Mpc = {
        init: function () {
            this.UI = {};
            this.status = {
                isDisplay: false
            };
            this.UI.mpc = $('.mpc');
            this.UI.btnMpc = $('.mpc-btn');

            this.UI.keyboard = null;

            this.build();
            this.bind();
        },


        build: function () {
            var i, mask,
                that = this,
                height = $('body').height();

            this.UI.keyboard = $('<div>')
                .addClass('mpc-keyboard')
                .appendTo(this.UI.mpc);

            for (i in assoc) {
                this.createKey(i, assoc[i].letter, assoc[i].soundId);
            };


            this.UI.mask = $('<div>')
                .addClass('mpc-mask')
                .css({height: height})
                .appendTo($('body'))
                .on('click', function () {
                    that.display(false);
                });


        },

        bind: function () {

            var that = this;

            this.UI.mpc.on('click', '.mpc-keyboard-key', function () {
                var playerAudio  = $(this).find('audio')[0];
                that.play(playerAudio);
            });

            this.UI.btnMpc.on('click', function () {
                if (that.status.isDisplay) {
                    that.display(false);
                } else {
                    that.display(true);
                }
            });
        },

        display: function (isDisplay) {
            var that = this;

                this.UI.mpc.stop().animate({
                    top: isDisplay ? '80px' : '-800px'
                }, 500, function () {
                    that.bindKeyboard(isDisplay);
                    that.status.isDisplay = isDisplay;
                    
                    if (isDisplay) {                    
                        that.UI.mask.fadeIn();
                    } else {
                        that.UI.mask.fadeOut();
                    }
                });
            
        },

        bindKeyboard: function (isBind) {

            var doc = $(document);

            if (isBind) {
                doc.on('keydown', function(e) {
                    var key  = $('.mpc-keyboard-key[data-code=' + e.keyCode + ']');
                        key.trigger('click');
                        key.addClass('active');
                });

                doc.on('keyup', function(e) {
                    var key  = $('.mpc-keyboard-key[data-code=' + e.keyCode + ']');
                        key.removeClass('active');
                });
            } else {
                doc.unbind('keydown');
                doc.unbind('keyup');
            }
        },

        createKey: function (code, letter, soundId) {
            var key, audio, source;

            key = $('<div>')
                .attr({
                    id: 'key-' + soundId,
                    'data-code': code
                })
                .text(letter)
                .addClass('mpc-keyboard-key')
                .appendTo(this.UI.keyboard);

            audio = $('<audio>')
                .addClass('mpc-sound').addClass('hidden')
                .appendTo(key);

            source = $('<source>')
                .attr({
                    src: 'sounds/' + soundId + '.mp3',
                    type: 'audio/mpeg'
                })
                .appendTo(audio);
        },

        play: function (playerAudio) {

            if (playerAudio.paused) {
                playerAudio.play();
            } else {
                playerAudio.currentTime = 0
            }

        },



    }

	App.Sound = {
		init: function () {
            var that = this;

            this.UI = {};
            this.player = $('#player');

            this.UI.tplTrack = $('#tpl-track');
            this.UI.tracks = $('.tracks');

			this.getSounds(function (sounds) {
				that.build(sounds);
                App.Mpc.init();
			});
		},

		build: function (sounds) {
            var that = this;

            for (var i in sounds) {
                if (sounds[i].id != 15037) {
                    this.UI.tracks.append(
                        Mustache.render(this.UI.tplTrack.html(), sounds[i])
                    );
                }
            }

            this.UI.tracks.on('click', '.tracks-item',  function () {
                var stream = $(this).attr('data-stream');
                that.setHasCurrent($(this));
                that.play(stream);
            });

		},

		getSounds: function (callback) {
			$.ajax({
				url: this.getHost() + '/api/feed.php',
				type: 'GET',
				dataType: "json",
				complete: function (data) {
                    var sounds = data.responseJSON.data.tracks;
					callback(sounds);
				}
			});
		},

        getHost: function () {
            return "http://" + window.location.hostname;
        },

        changeStream: function (stream) {
            this.player.find('source').attr('src', stream);
        },

        play: function (stream) {
           this.changeStream(stream);
           this.player.load();
           this.player.trigger('play');
        },

        setHasCurrent: function (track) {
            this.removeAllCurrentTracks();
            track.addClass('active');
        },

        removeAllCurrentTracks: function () {
            this.UI.tracks.find('.tracks-item').each(function () {
                $(this).removeClass('active');
            });
        }
	}

    App.Sound.init();



});