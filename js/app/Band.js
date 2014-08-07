define(['jQuery'], function ($) {

	Band = {
		init: function (container) {
			this.container = container;
			this.build();
			console.log(this.isNight());
		},

		build: function () {
			var img = this.isNight() ? this.container.addClass('night') : this.container.removeClass('night')

		},

		isNight: function () {			
			return (new Date()).getHours() > 20 && (new Date()).getHours() > 8;
		}
	}

	return Band;
});