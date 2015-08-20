(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.debounce = factory();
	}
}(this, function() {
	'use strict';

	return function(callback, delay) {
		var timeout;

		return function() {
			var context = this,
				args = arguments;

			clearTimeout(timeout);

			timeout = setTimeout(function() {
				callback.apply(context, args);
			}, delay);
		};
	};
}));