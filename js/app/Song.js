define(
    [
        'jQuery',
        'mustache',
        'app/mpc/mpc',
        'app/Player'

    ], function ($, Mustache, Mpc, Player) {

        var Song = {
        	init: function () {
                var that = this;

                this.UI = {};
                this.player = $('#player');

                this.UI.tplTrack = $('#tpl-track');
                this.UI.tracks = $('.tracks');

                this.Player = Player.init({
                    title: name
                });

        		this.getSounds(function (sounds) {
        			that.build(sounds);
                    Mpc.init();
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
                    var stream = $(this).attr('data-stream'),
                        name = $(this).attr('data-name');

                    that.setHasCurrent($(this));
                    that.Player.pauseSong();
                    that.Player.playSong(stream, {title: name});
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

        return Song;

    });