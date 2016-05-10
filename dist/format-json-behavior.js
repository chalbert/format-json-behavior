(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', 'register-behavior'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('register-behavior'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.registerBehavior);
		global.formatJsonBehavior = mod.exports;
	}
})(this, function (exports, _registerBehavior) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _registerBehavior2 = _interopRequireDefault(_registerBehavior);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function JSONFormatter(value) {
		try {
			return JSON.stringify(value, null, 2);
		} catch (e) {
			console.warn('Could not format JSON');
			return '';
		}
	}

	exports.default = (0, _registerBehavior2.default)('format-json', {
		prototype: {
			attachedCallback: function attachedCallback() {
				this.target.formatter = JSONFormatter;
				this.target.innerHTML = this.target.formatter(this.target.innerHTML);
				this.target.style.whiteSpace = 'pre';
			},
			detachedCallback: function detachedCallback() {
				delete this.target.formatter;
			}
		}
	});
});
