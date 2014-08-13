define(['jQuery'], function ($) {

	Band = {
		init: function (container) {
			this.container = container;
			this.build();
		},

		build: function () {
			if (this.isNight()) {
				this.container.addClass('night');
			} else {
				this.container.addClass('day');
			}
		},

		isNight: function () {
			return (new Date()).getHours() > 20 && (new Date()).getHours() > 8;
		}
	}

	return Band;
});