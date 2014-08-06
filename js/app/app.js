define(['bootstrap', 'app/Sound', 'app/Band'], function (bootstrap, Sound, Band) {

	var App = {};

    Sound.init();
    
    Band.init($('.hero'));

});