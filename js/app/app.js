define(['bootstrap', 'app/Song', 'app/Band', 'app/Player'], function (bootstrap, Song, Band, Player) {

	var App = {};

    Song.init();
    
    Band.init($('.hero'));

});