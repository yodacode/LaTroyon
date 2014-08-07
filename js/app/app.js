define(['bootstrap', 'app/Sound', 'app/Band', 'app/Player'], function (bootstrap, Sound, Band, Player) {

	var App = {};

    Sound.init();
    
    Band.init($('.hero'));

    Player.init().playSong('js/app/test.mp3');

});