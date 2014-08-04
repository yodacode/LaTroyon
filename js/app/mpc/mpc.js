define(
    [
        'jQuery', 
        'app/mpc/src/keyboard-en', 
        'app/mpc/src/keyboard-fr'
    ], function ($, keyboardEN, keyboardFR) {

    Mpc = {
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

            for (i =  0; i < keyboardEN.length; i++) {
                this.createKey(keyboardEN[i].code, keyboardEN[i].letter, keyboardEN[i].soundId);
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
                    console.log(e);
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
                playerAudio.currentTime = 0;
            }

        },
    }

    return Mpc;

});