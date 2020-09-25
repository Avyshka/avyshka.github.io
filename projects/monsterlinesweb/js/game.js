/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/css/style.css":
/*!****************************!*\
  !*** ./data/css/style.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/fpsmeter/dist/fpsmeter.js":
/*!************************************************!*\
  !*** ./node_modules/fpsmeter/dist/fpsmeter.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * FPSMeter 0.3.1 - 9th May 2013
 * https://github.com/Darsain/fpsmeter
 *
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 */
;(function (w, undefined) {
	'use strict';

	/**
	 * Create a new element.
	 *
	 * @param  {String} name Element type name.
	 *
	 * @return {Element}
	 */
	function newEl(name) {
		return document.createElement(name);
	}

	/**
	 * Apply theme CSS properties to element.
	 *
	 * @param  {Element} element DOM element.
	 * @param  {Object}  theme   Theme object.
	 *
	 * @return {Element}
	 */
	function applyTheme(element, theme) {
		for (var name in theme) {
			try {
				element.style[name] = theme[name];
			} catch (e) {}
		}
		return element;
	}

	/**
	 * Return type of the value.
	 *
	 * @param  {Mixed} value
	 *
	 * @return {String}
	 */
	function type(value) {
		if (value == null) {
			return String(value);
		}

		if (typeof value === 'object' || typeof value === 'function') {
			return Object.prototype.toString.call(value).match(/\s([a-z]+)/i)[1].toLowerCase() || 'object';
		}

		return typeof value;
	}

	/**
	 * Check whether the value is in an array.
	 *
	 * @param  {Mixed} value
	 * @param  {Array} array
	 *
	 * @return {Integer} Array index or -1 when not found.
	 */
	function inArray(value, array) {
		if (type(array) !== 'array') {
			return -1;
		}
		if (array.indexOf) {
			return array.indexOf(value);
		}
		for (var i = 0, l = array.length; i < l; i++) {
			if (array[i] === value) {
				return i;
			}
		}
		return -1;
	}

	/**
	 * Poor man's deep object extend.
	 *
	 * Example:
	 *   extend({}, defaults, options);
	 *
	 * @return {Void}
	 */
	function extend() {
		var args = arguments;
		for (var key in args[1]) {
			if (args[1].hasOwnProperty(key)) {
				switch (type(args[1][key])) {
					case 'object':
						args[0][key] = extend({}, args[0][key], args[1][key]);
						break;

					case 'array':
						args[0][key] = args[1][key].slice(0);
						break;

					default:
						args[0][key] = args[1][key];
				}
			}
		}
		return args.length > 2 ?
			extend.apply(null, [args[0]].concat(Array.prototype.slice.call(args, 2))) :
			args[0];
	}

	/**
	 * Convert HSL color to HEX string.
	 *
	 * @param  {Array} hsl Array with [hue, saturation, lightness].
	 *
	 * @return {Array} Array with [red, green, blue].
	 */
	function hslToHex(h, s, l) {
		var r, g, b;
		var v, min, sv, sextant, fract, vsf;

		if (l <= 0.5) {
			v = l * (1 + s);
		} else {
			v = l + s - l * s;
		}

		if (v === 0) {
			return '#000';
		} else {
			min = 2 * l - v;
			sv = (v - min) / v;
			h = 6 * h;
			sextant = Math.floor(h);
			fract = h - sextant;
			vsf = v * sv * fract;
			if (sextant === 0 || sextant === 6) {
				r = v;
				g = min + vsf;
				b = min;
			} else if (sextant === 1) {
				r = v - vsf;
				g = v;
				b = min;
			} else if (sextant === 2) {
				r = min;
				g = v;
				b = min + vsf;
			} else if (sextant === 3) {
				r = min;
				g = v - vsf;
				b = v;
			} else if (sextant === 4) {
				r = min + vsf;
				g = min;
				b = v;
			} else {
				r = v;
				g = min;
				b = v - vsf;
			}
			return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
		}
	}

	/**
	 * Helper function for hslToHex.
	 */
	function componentToHex(c) {
		c = Math.round(c * 255).toString(16);
		return c.length === 1 ? '0' + c : c;
	}

	/**
	 * Manage element event listeners.
	 *
	 * @param  {Node}     element
	 * @param  {Event}    eventName
	 * @param  {Function} handler
	 * @param  {Bool}     remove
	 *
	 * @return {Void}
	 */
	function listener(element, eventName, handler, remove) {
		if (element.addEventListener) {
			element[remove ? 'removeEventListener' : 'addEventListener'](eventName, handler, false);
		} else if (element.attachEvent) {
			element[remove ? 'detachEvent' : 'attachEvent']('on' + eventName, handler);
		}
	}

	// Preferred timing funtion
	var getTime;
	(function () {
		var perf = w.performance;
		if (perf && (perf.now || perf.webkitNow)) {
			var perfNow = perf.now ? 'now' : 'webkitNow';
			getTime = perf[perfNow].bind(perf);
		} else {
			getTime = function () {
				return +new Date();
			};
		}
	}());

	// Local WindowAnimationTiming interface polyfill
	var cAF = w.cancelAnimationFrame || w.cancelRequestAnimationFrame;
	var rAF = w.requestAnimationFrame;
	(function () {
		var vendors = ['moz', 'webkit', 'o'];
		var lastTime = 0;

		// For a more accurate WindowAnimationTiming interface implementation, ditch the native
		// requestAnimationFrame when cancelAnimationFrame is not present (older versions of Firefox)
		for (var i = 0, l = vendors.length; i < l && !cAF; ++i) {
			cAF = w[vendors[i]+'CancelAnimationFrame'] || w[vendors[i]+'CancelRequestAnimationFrame'];
			rAF = cAF && w[vendors[i]+'RequestAnimationFrame'];
		}

		if (!cAF) {
			rAF = function (callback) {
				var currTime = getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				lastTime = currTime + timeToCall;
				return w.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
			};

			cAF = function (id) {
				clearTimeout(id);
			};
		}
	}());

	// Property name for assigning element text content
	var textProp = type(document.createElement('div').textContent) === 'string' ? 'textContent' : 'innerText';

	/**
	 * FPSMeter class.
	 *
	 * @param {Element} anchor  Element to append the meter to. Default is document.body.
	 * @param {Object}  options Object with options.
	 */
	function FPSMeter(anchor, options) {
		// Optional arguments
		if (type(anchor) === 'object' && anchor.nodeType === undefined) {
			options = anchor;
			anchor = document.body;
		}
		if (!anchor) {
			anchor = document.body;
		}

		// Private properties
		var self = this;
		var o = extend({}, FPSMeter.defaults, options || {});

		var el = {};
		var cols = [];
		var theme, heatmaps;
		var heatDepth = 100;
		var heating = [];

		var thisFrameTime = 0;
		var frameTime = o.threshold;
		var frameStart = 0;
		var lastLoop = getTime() - frameTime;
		var time;

		var fpsHistory = [];
		var durationHistory = [];

		var frameID, renderID;
		var showFps = o.show === 'fps';
		var graphHeight, count, i, j;

		// Exposed properties
		self.options = o;
		self.fps = 0;
		self.duration = 0;
		self.isPaused = 0;

		/**
		 * Tick start for measuring the actual rendering duration.
		 *
		 * @return {Void}
		 */
		self.tickStart = function () {
			frameStart = getTime();
		};

		/**
		 * FPS tick.
		 *
		 * @return {Void}
		 */
		self.tick = function () {
			time = getTime();
			thisFrameTime = time - lastLoop;
			frameTime += (thisFrameTime - frameTime) / o.smoothing;
			self.fps = 1000 / frameTime;
			self.duration = frameStart < lastLoop ? frameTime : time - frameStart;
			lastLoop = time;
		};

		/**
		 * Pause display rendering.
		 *
		 * @return {Object} FPSMeter instance.
		 */
		self.pause = function () {
			if (frameID) {
				self.isPaused = 1;
				clearTimeout(frameID);
				cAF(frameID);
				cAF(renderID);
				frameID = renderID = 0;
			}
			return self;
		};

		/**
		 * Resume display rendering.
		 *
		 * @return {Object} FPSMeter instance.
		 */
		self.resume = function () {
			if (!frameID) {
				self.isPaused = 0;
				requestRender();
			}
			return self;
		};

		/**
		 * Update options.
		 *
		 * @param {String} name  Option name.
		 * @param {Mixed}  value New value.
		 *
		 * @return {Object} FPSMeter instance.
		 */
		self.set = function (name, value) {
			o[name] = value;
			showFps = o.show === 'fps';

			// Rebuild or reposition elements when specific option has been updated
			if (inArray(name, rebuilders) !== -1) {
				createMeter();
			}
			if (inArray(name, repositioners) !== -1) {
				positionMeter();
			}
			return self;
		};

		/**
		 * Change meter into rendering duration mode.
		 *
		 * @return {Object} FPSMeter instance.
		 */
		self.showDuration = function () {
			self.set('show', 'ms');
			return self;
		};

		/**
		 * Change meter into FPS mode.
		 *
		 * @return {Object} FPSMeter instance.
		 */
		self.showFps = function () {
			self.set('show', 'fps');
			return self;
		};

		/**
		 * Toggles between show: 'fps' and show: 'duration'.
		 *
		 * @return {Object} FPSMeter instance.
		 */
		self.toggle = function () {
			self.set('show', showFps ? 'ms' : 'fps');
			return self;
		};

		/**
		 * Hide the FPSMeter. Also pauses the rendering.
		 *
		 * @return {Object} FPSMeter instance.
		 */
		self.hide = function () {
			self.pause();
			el.container.style.display = 'none';
			return self;
		};

		/**
		 * Show the FPSMeter. Also resumes the rendering.
		 *
		 * @return {Object} FPSMeter instance.
		 */
		self.show = function () {
			self.resume();
			el.container.style.display = 'block';
			return self;
		};

		/**
		 * Check the current FPS and save it in history.
		 *
		 * @return {Void}
		 */
		function historyTick() {
			for (i = o.history; i--;) {
				fpsHistory[i] = i === 0 ? self.fps : fpsHistory[i-1];
				durationHistory[i] = i === 0 ? self.duration : durationHistory[i-1];
			}
		}

		/**
		 * Returns heat hex color based on values passed.
		 *
		 * @param  {Integer} heatmap
		 * @param  {Integer} value
		 * @param  {Integer} min
		 * @param  {Integer} max
		 *
		 * @return {Integer}
		 */
		function getHeat(heatmap, value, min, max) {
			return heatmaps[0|heatmap][Math.round(Math.min((value - min) / (max - min) * heatDepth, heatDepth))];
		}

		/**
		 * Update counter number and legend.
		 *
		 * @return {Void}
		 */
		function updateCounter() {
			// Update legend only when changed
			if (el.legend.fps !== showFps) {
				el.legend.fps = showFps;
				el.legend[textProp] = showFps ? 'FPS' : 'ms';
			}
			// Update counter with a nicely formated & readable number
			count = showFps ? self.fps : self.duration;
			el.count[textProp] = count > 999 ? '999+' : count.toFixed(count > 99 ? 0 : o.decimals);
		}

		/**
		 * Render current FPS state.
		 *
		 * @return {Void}
		 */
		function render() {
			time = getTime();
			// If renderer stopped reporting, do a simulated drop to 0 fps
			if (lastLoop < time - o.threshold) {
				self.fps -= self.fps / Math.max(1, o.smoothing * 60 / o.interval);
				self.duration = 1000 / self.fps;
			}

			historyTick();
			updateCounter();

			// Apply heat to elements
			if (o.heat) {
				if (heating.length) {
					for (i = heating.length; i--;) {
						heating[i].el.style[theme[heating[i].name].heatOn] = showFps ?
							getHeat(theme[heating[i].name].heatmap, self.fps, 0, o.maxFps) :
							getHeat(theme[heating[i].name].heatmap, self.duration, o.threshold, 0);
					}
				}

				if (el.graph && theme.column.heatOn) {
					for (i = cols.length; i--;) {
						cols[i].style[theme.column.heatOn] = showFps ?
							getHeat(theme.column.heatmap, fpsHistory[i], 0, o.maxFps) :
							getHeat(theme.column.heatmap, durationHistory[i], o.threshold, 0);
					}
				}
			}

			// Update graph columns height
			if (el.graph) {
				for (j = 0; j < o.history; j++) {
					cols[j].style.height = (showFps ?
						(fpsHistory[j] ? Math.round(graphHeight / o.maxFps * Math.min(fpsHistory[j], o.maxFps)) : 0) :
						(durationHistory[j] ? Math.round(graphHeight / o.threshold * Math.min(durationHistory[j], o.threshold)) : 0)
					) + 'px';
				}
			}
		}

		/**
		 * Request rendering loop.
		 *
		 * @return {Int} Animation frame index.
		 */
		function requestRender() {
			if (o.interval < 20) {
				frameID = rAF(requestRender);
				render();
			} else {
				frameID = setTimeout(requestRender, o.interval);
				renderID = rAF(render);
			}
		}

		/**
		 * Meter events handler.
		 *
		 * @return {Void}
		 */
		function eventHandler(event) {
			event = event || window.event;
			if (event.preventDefault) {
				event.preventDefault();
				event.stopPropagation();
			} else {
				event.returnValue = false;
				event.cancelBubble = true;
			}
			self.toggle();
		}

		/**
		 * Destroys the current FPSMeter instance.
		 *
		 * @return {Void}
		 */
		self.destroy = function () {
			// Stop rendering
			self.pause();
			// Remove elements
			removeMeter();
			// Stop listening
			self.tick = self.tickStart = function () {};
		};

		/**
		 * Remove meter element.
		 *
		 * @return {Void}
		 */
		function removeMeter() {
			// Unbind listeners
			if (o.toggleOn) {
				listener(el.container, o.toggleOn, eventHandler, 1);
			}
			// Detach element
			anchor.removeChild(el.container);
		}

		/**
		 * Sets the theme, and generates heatmaps when needed.
		 */
		function setTheme() {
			theme = FPSMeter.theme[o.theme];

			// Generate heatmaps
			heatmaps = theme.compiledHeatmaps || [];
			if (!heatmaps.length && theme.heatmaps.length) {
				for (j = 0; j < theme.heatmaps.length; j++) {
					heatmaps[j] = [];
					for (i = 0; i <= heatDepth; i++) {
						heatmaps[j][i] = hslToHex(0.33 / heatDepth * i, theme.heatmaps[j].saturation, theme.heatmaps[j].lightness);
					}
				}
				theme.compiledHeatmaps = heatmaps;
			}
		}

		/**
		 * Creates and attaches the meter element.
		 *
		 * @return {Void}
		 */
		function createMeter() {
			// Remove old meter if present
			if (el.container) {
				removeMeter();
			}

			// Set theme
			setTheme();

			// Create elements
			el.container = applyTheme(newEl('div'), theme.container);
			el.count = el.container.appendChild(applyTheme(newEl('div'), theme.count));
			el.legend = el.container.appendChild(applyTheme(newEl('div'), theme.legend));
			el.graph = o.graph ? el.container.appendChild(applyTheme(newEl('div'), theme.graph)) : 0;

			// Add elements to heating array
			heating.length = 0;
			for (var key in el) {
				if (el[key] && theme[key].heatOn) {
					heating.push({
						name: key,
						el: el[key]
					});
				}
			}

			// Graph
			cols.length = 0;
			if (el.graph) {
				// Create graph
				el.graph.style.width = (o.history * theme.column.width + (o.history - 1) * theme.column.spacing) + 'px';

				// Add columns
				for (i = 0; i < o.history; i++) {
					cols[i] = el.graph.appendChild(applyTheme(newEl('div'), theme.column));
					cols[i].style.position = 'absolute';
					cols[i].style.bottom = 0;
					cols[i].style.right = (i * theme.column.width + i * theme.column.spacing) + 'px';
					cols[i].style.width = theme.column.width + 'px';
					cols[i].style.height = '0px';
				}
			}

			// Set the initial state
			positionMeter();
			updateCounter();

			// Append container to anchor
			anchor.appendChild(el.container);

			// Retrieve graph height after it was appended to DOM
			if (el.graph) {
				graphHeight = el.graph.clientHeight;
			}

			// Add event listeners
			if (o.toggleOn) {
				if (o.toggleOn === 'click') {
					el.container.style.cursor = 'pointer';
				}
				listener(el.container, o.toggleOn, eventHandler);
			}
		}

		/**
		 * Positions the meter based on options.
		 *
		 * @return {Void}
		 */
		function positionMeter() {
			applyTheme(el.container, o);
		}

		/**
		 * Construct.
		 */
		(function () {
			// Create meter element
			createMeter();
			// Start rendering
			requestRender();
		}());
	}

	// Expose the extend function
	FPSMeter.extend = extend;

	// Expose the FPSMeter class
	window.FPSMeter = FPSMeter;

	// Default options
	FPSMeter.defaults = {
		interval:  100,     // Update interval in milliseconds.
		smoothing: 10,      // Spike smoothing strength. 1 means no smoothing.
		show:      'fps',   // Whether to show 'fps', or 'ms' = frame duration in milliseconds.
		toggleOn:  'click', // Toggle between show 'fps' and 'ms' on this event.
		decimals:  1,       // Number of decimals in FPS number. 1 = 59.9, 2 = 59.94, ...
		maxFps:    60,      // Max expected FPS value.
		threshold: 100,     // Minimal tick reporting interval in milliseconds.

		// Meter position
		position: 'absolute', // Meter position.
		zIndex:   10,         // Meter Z index.
		left:     '5px',      // Meter left offset.
		top:      '5px',      // Meter top offset.
		right:    'auto',     // Meter right offset.
		bottom:   'auto',     // Meter bottom offset.
		margin:   '0 0 0 0',  // Meter margin. Helps with centering the counter when left: 50%;

		// Theme
		theme: 'dark', // Meter theme. Build in: 'dark', 'light', 'transparent', 'colorful'.
		heat:  0,      // Allow themes to use coloring by FPS heat. 0 FPS = red, maxFps = green.

		// Graph
		graph:   0, // Whether to show history graph.
		history: 20 // How many history states to show in a graph.
	};

	// Option names that trigger FPSMeter rebuild or reposition when modified
	var rebuilders = [
		'toggleOn',
		'theme',
		'heat',
		'graph',
		'history'
	];
	var repositioners = [
		'position',
		'zIndex',
		'left',
		'top',
		'right',
		'bottom',
		'margin'
	];
}(window));
;(function (w, FPSMeter, undefined) {
	'use strict';

	// Themes object
	FPSMeter.theme = {};

	// Base theme with layout, no colors
	var base = FPSMeter.theme.base = {
		heatmaps: [],
		container: {
			// Settings
			heatOn: null,
			heatmap: null,

			// Styles
			padding: '5px',
			minWidth: '95px',
			height: '30px',
			lineHeight: '30px',
			textAlign: 'right',
			textShadow: 'none'
		},
		count: {
			// Settings
			heatOn: null,
			heatmap: null,

			// Styles
			position: 'absolute',
			top: 0,
			right: 0,
			padding: '5px 10px',
			height: '30px',
			fontSize: '24px',
			fontFamily: 'Consolas, Andale Mono, monospace',
			zIndex: 2
		},
		legend: {
			// Settings
			heatOn: null,
			heatmap: null,

			// Styles
			position: 'absolute',
			top: 0,
			left: 0,
			padding: '5px 10px',
			height: '30px',
			fontSize: '12px',
			lineHeight: '32px',
			fontFamily: 'sans-serif',
			textAlign: 'left',
			zIndex: 2
		},
		graph: {
			// Settings
			heatOn: null,
			heatmap: null,

			// Styles
			position: 'relative',
			boxSizing: 'padding-box',
			MozBoxSizing: 'padding-box',
			height: '100%',
			zIndex: 1
		},
		column: {
			// Settings
			width: 4,
			spacing: 1,
			heatOn: null,
			heatmap: null
		}
	};

	// Dark theme
	FPSMeter.theme.dark = FPSMeter.extend({}, base, {
		heatmaps: [{
			saturation: 0.8,
			lightness: 0.8
		}],
		container: {
			background: '#222',
			color: '#fff',
			border: '1px solid #1a1a1a',
			textShadow: '1px 1px 0 #222'
		},
		count: {
			heatOn: 'color'
		},
		column: {
			background: '#3f3f3f'
		}
	});

	// Light theme
	FPSMeter.theme.light = FPSMeter.extend({}, base, {
		heatmaps: [{
			saturation: 0.5,
			lightness: 0.5
		}],
		container: {
			color: '#666',
			background: '#fff',
			textShadow: '1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)',
			boxShadow: '0 0 0 1px rgba(0,0,0,.1)'
		},
		count: {
			heatOn: 'color'
		},
		column: {
			background: '#eaeaea'
		}
	});

	// Colorful theme
	FPSMeter.theme.colorful = FPSMeter.extend({}, base, {
		heatmaps: [{
			saturation: 0.5,
			lightness: 0.6
		}],
		container: {
			heatOn: 'backgroundColor',
			background: '#888',
			color: '#fff',
			textShadow: '1px 1px 0 rgba(0,0,0,.2)',
			boxShadow: '0 0 0 1px rgba(0,0,0,.1)'
		},
		column: {
			background: '#777',
			backgroundColor: 'rgba(0,0,0,.2)'
		}
	});

	// Transparent theme
	FPSMeter.theme.transparent = FPSMeter.extend({}, base, {
		heatmaps: [{
			saturation: 0.8,
			lightness: 0.5
		}],
		container: {
			padding: 0,
			color: '#fff',
			textShadow: '1px 1px 0 rgba(0,0,0,.5)'
		},
		count: {
			padding: '0 5px',
			height: '40px',
			lineHeight: '40px'
		},
		legend: {
			padding: '0 5px',
			height: '40px',
			lineHeight: '42px'
		},
		graph: {
			height: '40px'
		},
		column: {
			width: 5,
			background: '#999',
			heatOn: 'backgroundColor',
			opacity: 0.5
		}
	});
}(window, FPSMeter));

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfigs_1 = __webpack_require__(/*! ./config/GameConfigs */ "./src/config/GameConfigs.ts");
var Language_1 = __webpack_require__(/*! ./content/Language */ "./src/content/Language.ts");
var GameDataModel_1 = __webpack_require__(/*! ./data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var exports_1 = __webpack_require__(/*! ./exports */ "./src/exports.ts");
var AmbientSoundPlugin_1 = __webpack_require__(/*! ./plugins/sounds/AmbientSoundPlugin */ "./src/plugins/sounds/AmbientSoundPlugin.ts");
var constants_1 = __webpack_require__(/*! ./scenes/constants */ "./src/scenes/constants.ts");
var BackgroundScene_1 = __webpack_require__(/*! ./scenes/views/BackgroundScene */ "./src/scenes/views/BackgroundScene.ts");
var BootScene_1 = __webpack_require__(/*! ./scenes/views/BootScene */ "./src/scenes/views/BootScene.ts");
var GameScene_1 = __webpack_require__(/*! ./scenes/views/GameScene */ "./src/scenes/views/GameScene.ts");
var LoginScene_1 = __webpack_require__(/*! ./scenes/views/LoginScene */ "./src/scenes/views/LoginScene.ts");
var MenuScene_1 = __webpack_require__(/*! ./scenes/views/MenuScene */ "./src/scenes/views/MenuScene.ts");
var PopupsScene_1 = __webpack_require__(/*! ./scenes/views/PopupsScene */ "./src/scenes/views/PopupsScene.ts");
var PreloaderScene_1 = __webpack_require__(/*! ./scenes/views/PreloaderScene  */ "./src/scenes/views/PreloaderScene .ts");
var SceneManager_1 = __webpack_require__(/*! ./scenes/views/SceneManager */ "./src/scenes/views/SceneManager.ts");
var TutorialScene_1 = __webpack_require__(/*! ./scenes/views/TutorialScene */ "./src/scenes/views/TutorialScene.ts");
var UIScene_1 = __webpack_require__(/*! ./scenes/views/UIScene */ "./src/scenes/views/UIScene.ts");
var FPSMeterApp_1 = __webpack_require__(/*! ./utils/FPSMeterApp */ "./src/utils/FPSMeterApp.ts");
var SeasonsUtils_1 = __webpack_require__(/*! ./utils/SeasonsUtils */ "./src/utils/SeasonsUtils.ts");
var UniverseScene_1 = __webpack_require__(/*! ./scenes/views/UniverseScene */ "./src/scenes/views/UniverseScene.ts");
var EnterFrameManager_1 = __webpack_require__(/*! ./scenes/managers/EnterFrameManager */ "./src/scenes/managers/EnterFrameManager.ts");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this, GameConfigs_1.GameConfigs) || this;
        _this.gameDataModel = new GameDataModel_1.GameDataModel();
        _this.loadData();
        _this.loadLanguage();
        _this.initPlugins();
        _this.initScenes();
        _this.incrementSeason();
        return _this;
    }
    App.prototype.loadData = function () {
        this.gameDataModel.readData();
    };
    App.prototype.loadLanguage = function () {
        switch (GameDataModel_1.GameDataModel.language) {
            case "rus":
                Language_1.Language.setRussian();
                break;
            default:
                Language_1.Language.setEnglish();
                break;
        }
    };
    App.prototype.initPlugins = function () {
        this.plugins.install("ambientSoundPlugin", AmbientSoundPlugin_1.AmbientSoundPlugin, true);
    };
    App.prototype.initScenes = function () {
        this.scene.add(constants_1.ScenesConstants.names.manager, SceneManager_1.SceneManager);
        this.scene.add(constants_1.ScenesConstants.names.boot, BootScene_1.BootScene);
        this.scene.add(constants_1.ScenesConstants.names.background, BackgroundScene_1.BackgroundScene);
        this.scene.add(constants_1.ScenesConstants.names.preloader, PreloaderScene_1.PreloaderScene);
        this.scene.add(constants_1.ScenesConstants.names.login, LoginScene_1.LoginScene);
        this.scene.add(constants_1.ScenesConstants.names.menu, MenuScene_1.MenuScene);
        this.scene.add(constants_1.ScenesConstants.names.game, GameScene_1.GameScene);
        this.scene.add(constants_1.ScenesConstants.names.tutorial, TutorialScene_1.TutorialScene);
        this.scene.add(constants_1.ScenesConstants.names.universe, UniverseScene_1.UniverseScene);
        this.scene.add(constants_1.ScenesConstants.names.ui, UIScene_1.UIScene);
        this.scene.add(constants_1.ScenesConstants.names.popups, PopupsScene_1.PopupsScene);
    };
    App.prototype.incrementSeason = function () {
        GameDataModel_1.GameDataModel.seasonId = (GameDataModel_1.GameDataModel.seasonId + 1) % SeasonsUtils_1.SeasonsUtils.SEASONS_COUNT;
        (new GameDataModel_1.GameDataModel()).saveData();
    };
    App.prototype.start = function () {
        _super.prototype.start.call(this);
        if (true) {
            this.meter = new FPSMeterApp_1.FPSMeterApp();
        }
        this.scale.on("resize", this.onResizeGame, this);
        this.scene.start(constants_1.ScenesConstants.names.boot);
    };
    App.prototype.step = function (time, delta) {
        _super.prototype.step.call(this, time, delta);
        EnterFrameManager_1.EnterFrameManager.update(delta);
        if (this.meter) {
            this.meter.tick();
        }
    };
    App.prototype.onResizeGame = function (gameSize) {
        var _this = this;
        var width = gameSize.width;
        var height = gameSize.height;
        var scaleX = width / +this.config.width;
        var scaleY = height / +this.config.height;
        var scale = {
            scaleMin: Math.min(scaleX, scaleY),
            scaleMax: Math.max(scaleX, scaleY)
        };
        this.scene.scenes.forEach(function (scene) {
            if (scene.resize && _this.scene.isActive(scene.sys.config.toString())) {
                scene.resize(width, height, scale);
            }
        });
    };
    return App;
}(exports_1.Game));
exports.App = App;


/***/ }),

/***/ "./src/config/GameConfigs.ts":
/*!***********************************!*\
  !*** ./src/config/GameConfigs.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameConfigs = {
    title: "Phaser template AIVA GAMES",
    type: Phaser.AUTO,
    parent: "phaser-canvas",
    width: 630,
    height: 1120,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 630,
        height: 1120
    },
    dom: {
        createContainer: true
    },
    disableContextMenu: true
};


/***/ }),

/***/ "./src/content/Language.ts":
/*!*********************************!*\
  !*** ./src/content/Language.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Language = (function () {
    function Language() {
    }
    Language.setEnglish = function () {
        Language.labels[Language.MENU] = "menu";
        Language.labels[Language.LABEL_BEST] = "record";
        Language.labels[Language.LABEL_NOW] = "score";
        Language.labels[Language.CONTINUE] = "continue";
        Language.labels[Language.I_AM_CHAMPION] = "i’m the\nchampion!";
        Language.labels[Language.I_AM_LOOSER] = "i won’t\ngive up!";
        Language.labels[Language.CHAMPION] = "my name is";
        Language.labels[Language.NEW_GAME] = "new game";
        Language.labels[Language.ARE_YOU_SURE] = "are you sure?";
        Language.labels[Language.TUTORIAL] = "game rules";
        Language.labels[Language.SCORES] = "champions";
        Language.labels[Language.OPTIONS] = "options";
        Language.labels[Language.MUSIC] = "music";
        Language.labels[Language.SOUND] = "sounds";
        Language.labels[Language.LANGUAGE] = "language";
        Language.labels[Language.IS_DARK_ESCAPE] = "democracy";
        Language.labels[Language.NOT_DARK_ESCAPE] = "tyranny";
        Language.labels[Language.CREDITS] = "creators";
        Language.labels[Language.BACK] = "back";
        Language.labels[Language.PREV] = "back to menu";
        Language.labels[Language.NEXT] = "next";
        Language.labels[Language.DONE] = "done";
        Language.labels[Language.PLAY] = "play";
        Language.labels[Language.DEL] = "delete profile";
        Language.labels[Language.BONUS] = "bonus from monster";
        Language.labels[Language.YES] = "yes";
        Language.labels[Language.NO] = "no";
        Language.labels[Language.NEXT_MONSTER] = "NEXT";
        Language.labels[Language.LOADING] = "LOADING...";
        Language.labels[Language.CHALLENGE_LINES] = "Combine the line";
        Language.labels[Language.CHALLENGE_COUNTS] = "Collect the monsters";
        Language.labels[Language.TITLE_HELP1] = "playfield";
        Language.labels[Language.TITLE_HELP2] = "how do the monsters appear?";
        Language.labels[Language.TITLE_HELP3] = "how to play?";
        Language.labels[Language.TITLE_HELP4] = "how to play?";
        Language.labels[Language.TITLE_HELP5] = "how to play?";
        Language.labels[Language.TITLE_HELP6] = "the end";
        Language.labels[Language.TITLE_HELP7] = "victory";
        Language.labels[Language.TITLE_HELP8] = "fluffy";
        Language.labels[Language.TITLE_HELP9] = "piggy bank";
        Language.labels[Language.TITLE_HELP10] = "mystic";
        Language.labels[Language.TITLE_HELP11] = "buddy";
        Language.labels[Language.TITLE_HELP12] = "chubby";
        Language.labels[Language.TITLE_HELP13] = "shaman";
        Language.labels[Language.TITLE_HELP14] = "elvis";
        Language.labels[Language.HELP1] = "playfield is a square cell net, where monsters are placed. one monster occupies one cell.";
        Language.labels[Language.HELP2] = "every monster’s move leads to new monster’s appearance on playfield.";
        Language.labels[Language.HELP3] = "move monsters into free cell to build continuous horizontal, vertical or diagonal lines.";
        Language.labels[Language.HELP4] = "when you collect needed quantity of monsters in a line they will disappear and bring you scores.";
        Language.labels[Language.HELP5] = "if the monsters disappear in the line and bring you scores, no new monsters will appear on the playfield.";
        Language.labels[Language.HELP6] = "you lose if there’s no empty cells on playfield or all cells are empty (there’s no monster’s on playfield).";
        Language.labels[Language.HELP7] = "to win the game you should score as much points as you can. you can see all records in the champions menu.";
        Language.labels[Language.HELP8] = "monsters can move vertically and horizontally. fluffies will disappear if you put 5 monsters in a row.";
        Language.labels[Language.HELP9] = "monsters can move vertically and horizontally and score more. piggy banks will disappear if you put 5 monsters in a row.";
        Language.labels[Language.HELP10] = "they can teleport to any free cell. mystics disappear when they stay 5 monsters in a row.";
        Language.labels[Language.HELP11] = "monsters can move vertically and horizontally. they will disappear if you put 5 monsters in a row.";
        Language.labels[Language.HELP12] = "monsters can move vertically and horizontally, but can move only to the nearer cell. they will disappear if you put 4 monsters in a row.";
        Language.labels[Language.HELP13] = "monsters can move vertically and horizontally and can replace other monsters. they will disappear if you put 6 monsters in a row.";
        Language.labels[Language.HELP14] = "monsters can move vertically and horizontally. they will disappear if you put 4 monsters in a row. also if you put other monsters between elvises, they disappear with 4 monsters in a row.";
        Language.labels[Language.TASK_HELP1] = "";
        Language.labels[Language.TASK_HELP2] = "try to move monsters";
        Language.labels[Language.TASK_HELP3] = "move buddy to the indicated point";
        Language.labels[Language.TASK_HELP4] = "";
        Language.labels[Language.TASK_HELP5] = "";
        Language.labels[Language.TASK_HELP6] = "";
        Language.labels[Language.TASK_HELP7] = "";
        Language.labels[Language.TASK_HELP8] = "move fluffy to the indicated point";
        Language.labels[Language.TASK_HELP9] = "move piggy bank Bank to the indicated point";
        Language.labels[Language.TASK_HELP10] = "teleport mystic to the indicated point";
        Language.labels[Language.TASK_HELP11] = "move buddy to the indicated point";
        Language.labels[Language.TASK_HELP12] = "move chubby to the indicated point";
        Language.labels[Language.TASK_HELP13] = "choose shaman, then hold your finger on other monster until you see the lightning";
        Language.labels[Language.TASK_HELP14] = "move elvis to the indicated point";
        Language.labels[Language.PLAYER_NAME_PLACEHOLDER] = "Enter your name";
        Language.current = "eng";
    };
    Language.setRussian = function () {
        Language.labels[Language.MENU] = "меню";
        Language.labels[Language.LABEL_BEST] = "лучший результат";
        Language.labels[Language.LABEL_NOW] = "текущий результат";
        Language.labels[Language.CONTINUE] = "продолжить";
        Language.labels[Language.I_AM_CHAMPION] = "я\nчемпион!";
        Language.labels[Language.I_AM_LOOSER] = "я не\nсдамся!";
        Language.labels[Language.CHAMPION] = "мое имя";
        Language.labels[Language.NEW_GAME] = "новая игра";
        Language.labels[Language.ARE_YOU_SURE] = "вы уверены?";
        Language.labels[Language.TUTORIAL] = "как играть";
        Language.labels[Language.SCORES] = "чемпионы";
        Language.labels[Language.OPTIONS] = "настройки";
        Language.labels[Language.MUSIC] = "музыка";
        Language.labels[Language.SOUND] = "звуки";
        Language.labels[Language.LANGUAGE] = "язык";
        Language.labels[Language.IS_DARK_ESCAPE] = "демократия";
        Language.labels[Language.NOT_DARK_ESCAPE] = "диктатура";
        Language.labels[Language.CREDITS] = "авторы";
        Language.labels[Language.BACK] = "назад";
        Language.labels[Language.PREV] = "назад в меню";
        Language.labels[Language.NEXT] = "вперед";
        Language.labels[Language.DONE] = "готово";
        Language.labels[Language.PLAY] = "играть";
        Language.labels[Language.DEL] = "удалить профиль";
        Language.labels[Language.BONUS] = "бонус от монстра";
        Language.labels[Language.YES] = "да";
        Language.labels[Language.NO] = "нет";
        Language.labels[Language.NEXT_MONSTER] = "на очереди";
        Language.labels[Language.LOADING] = "ЗАГРУЗКА...";
        Language.labels[Language.CHALLENGE_LINES] = "СОБЕРИ ЛИНИЮ ИЗ:";
        Language.labels[Language.CHALLENGE_COUNTS] = "СОБЕРИ ВСЕХ МОНСТРОВ:";
        Language.labels[Language.TITLE_HELP1] = "игровое поле";
        Language.labels[Language.TITLE_HELP2] = "как появляются монстры?";
        Language.labels[Language.TITLE_HELP3] = "как играть?";
        Language.labels[Language.TITLE_HELP4] = "как играть?";
        Language.labels[Language.TITLE_HELP5] = "как играть?";
        Language.labels[Language.TITLE_HELP6] = "конец игры";
        Language.labels[Language.TITLE_HELP7] = "цель игры";
        Language.labels[Language.TITLE_HELP8] = "пушок";
        Language.labels[Language.TITLE_HELP9] = "копилка";
        Language.labels[Language.TITLE_HELP10] = "мистик";
        Language.labels[Language.TITLE_HELP11] = "дружок";
        Language.labels[Language.TITLE_HELP12] = "пухлик";
        Language.labels[Language.TITLE_HELP13] = "шаман";
        Language.labels[Language.TITLE_HELP14] = "элвис";
        Language.labels[Language.HELP1] = "игровое поле представляет собой квадратную сетку ячеек (9х9 клеток), в которых располагаются монстры.";
        Language.labels[Language.HELP2] = "после перемещения любого монстра в ячейках появляются 3 новых монстра.";
        Language.labels[Language.HELP3] = "выстраивай из одинаковых монстров непрерывные горизонтальные, вертикальные или диагональные линии.";
        Language.labels[Language.HELP4] = "когда в линии будет достаточное количество монстров, они исчезнут. при этом игрок получит определенное количество очков.";
        Language.labels[Language.HELP5] = "если монстры исчезают в линии, три новых монстра не появляются.";
        Language.labels[Language.HELP6] = "игра заканчивается, когда все ячейки заполнены монстрами или когда все ячейки пустые.";
        Language.labels[Language.HELP7] = "цель игры - набрать как можно больше очков. рекорды доступны в таблице чемпионов.";
        Language.labels[Language.HELP8] = "перемещаются по вертикали и горизонтали. монстры исчезнут, когда в линии будет 5 пушков.";
        Language.labels[Language.HELP9] = "перемещаются по вертикали и горизонтали и приносят больше очков. монстры исчезнут, когда в линии будет 5 копилок.";
        Language.labels[Language.HELP10] = "монстры перемещаются телепортацией в любую свободную ячейку и исчезнут, когда в линии будет 5 мистиков.";
        Language.labels[Language.HELP11] = "перемещаются по вертикали, горизонтали и диагонали. монстры исчезнут, когда в линии будет 5 дружков.";
        Language.labels[Language.HELP12] = "перемещаются по вертикали, горизонтали и диагонали но только на одну ячейку. монстры исчезнут, когда в линии будет 4 пухлика.";
        Language.labels[Language.HELP13] = "перемещаются по вертикали и горизонтали и могут занимать занятые ячейки. монстры исчезнут, когда в линии будет 6 шаманов.";
        Language.labels[Language.HELP14] = "перемещаются по вертикали и горизонтали. если между двумя элвисами есть два других монстра, линия исчезнет. монстры также исчезнут, когда в линии будет 4 элвиса.";
        Language.labels[Language.TASK_HELP1] = "";
        Language.labels[Language.TASK_HELP2] = "попробуй попередвигать монстров";
        Language.labels[Language.TASK_HELP3] = "заверши линию, отправив дружка в указанную точку";
        Language.labels[Language.TASK_HELP4] = "";
        Language.labels[Language.TASK_HELP5] = "";
        Language.labels[Language.TASK_HELP6] = "";
        Language.labels[Language.TASK_HELP7] = "";
        Language.labels[Language.TASK_HELP8] = "передвинь пушка в указанную точку";
        Language.labels[Language.TASK_HELP9] = "передвинь копилку в указанную точку";
        Language.labels[Language.TASK_HELP10] = "телепортируй мистика в указанную точку";
        Language.labels[Language.TASK_HELP11] = "передвинь дружка в указанную точку";
        Language.labels[Language.TASK_HELP12] = "передвинь пухлика в указанную точку";
        Language.labels[Language.TASK_HELP13] = "выбери шамана. затем нажми на монстра и держи пока не появится сигнал";
        Language.labels[Language.TASK_HELP14] = "передвинь элвиса в указанную точку";
        Language.labels[Language.PLAYER_NAME_PLACEHOLDER] = "Введите свое имя";
        Language.current = "rus";
    };
    Language.getText = function (id) {
        return Language.labels[id] !== undefined ? Language.labels[id].toUpperCase() : ("\u0437\u0430\u043F\u0438\u0441\u044C " + id + " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430").toUpperCase();
    };
    Language.MENU = "btn_menu";
    Language.LABEL_BEST = "_labelBest";
    Language.LABEL_NOW = "_labelNow";
    Language.CONTINUE = "btnContinue";
    Language.I_AM_CHAMPION = "btnChampion";
    Language.I_AM_LOOSER = "btnLooser";
    Language.CHAMPION = "labelChampion";
    Language.NEW_GAME = "btnNewGame";
    Language.ARE_YOU_SURE = "btnAreYouSure";
    Language.TUTORIAL = "btnTutorial";
    Language.SCORES = "btnScores";
    Language.OPTIONS = "btnOptions";
    Language.MUSIC = "btnMusic";
    Language.SOUND = "btnSound";
    Language.LANGUAGE = "btnLanguage";
    Language.IS_DARK_ESCAPE = "btnIsDarkEscape";
    Language.NOT_DARK_ESCAPE = "btnNotDarkEscape";
    Language.CREDITS = "btnCredits";
    Language.BACK = "btnBack";
    Language.PREV = "btnPrev";
    Language.NEXT = "btnNext";
    Language.DONE = "btnDone";
    Language.PLAY = "btnPlay";
    Language.DEL = "btnDel";
    Language.BONUS = "labelBonus";
    Language.YES = "yes";
    Language.NO = "no";
    Language.NEXT_MONSTER = "NEXT_MONSTER";
    Language.LOADING = "LOADING";
    Language.CHALLENGE_LINES = "CHALLENGE_LINES";
    Language.CHALLENGE_COUNTS = "CHALLENGE_COUNTS";
    Language.TITLE_HELP1 = "labelTut1";
    Language.TITLE_HELP2 = "labelTut2";
    Language.TITLE_HELP3 = "labelTut3";
    Language.TITLE_HELP4 = "labelTut4";
    Language.TITLE_HELP5 = "labelTut5";
    Language.TITLE_HELP6 = "labelTut6";
    Language.TITLE_HELP7 = "labelTut7";
    Language.TITLE_HELP8 = "labelTut8";
    Language.TITLE_HELP9 = "labelTut9";
    Language.TITLE_HELP10 = "labelTut10";
    Language.TITLE_HELP11 = "labelTut11";
    Language.TITLE_HELP12 = "labelTut12";
    Language.TITLE_HELP13 = "labelTut13";
    Language.TITLE_HELP14 = "labelTut14";
    Language.HELP1 = "tfInfo1";
    Language.HELP2 = "tfInfo2";
    Language.HELP3 = "tfInfo3";
    Language.HELP4 = "tfInfo4";
    Language.HELP5 = "tfInfo5";
    Language.HELP6 = "tfInfo6";
    Language.HELP7 = "tfInfo7";
    Language.HELP8 = "tfInfo8";
    Language.HELP9 = "tfInfo9";
    Language.HELP10 = "tfInfo10";
    Language.HELP11 = "tfInfo11";
    Language.HELP12 = "tfInfo12";
    Language.HELP13 = "tfInfo13";
    Language.HELP14 = "tfInfo14";
    Language.TASK_HELP1 = "tfTask1";
    Language.TASK_HELP2 = "tfTask2";
    Language.TASK_HELP3 = "tfTask3";
    Language.TASK_HELP4 = "tfTask4";
    Language.TASK_HELP5 = "tfTask5";
    Language.TASK_HELP6 = "tfTask6";
    Language.TASK_HELP7 = "tfTask7";
    Language.TASK_HELP8 = "tfTask8";
    Language.TASK_HELP9 = "tfTask9";
    Language.TASK_HELP10 = "tfTask10";
    Language.TASK_HELP11 = "tfTask11";
    Language.TASK_HELP12 = "tfTask12";
    Language.TASK_HELP13 = "tfTask13";
    Language.TASK_HELP14 = "tfTask14";
    Language.PLAYER_NAME_PLACEHOLDER = "PLAYER_NAME_PLACEHOLDER";
    Language.current = "none";
    Language.labels = {};
    return Language;
}());
exports.Language = Language;


/***/ }),

/***/ "./src/cursor/events/CursorEvents.ts":
/*!*******************************************!*\
  !*** ./src/cursor/events/CursorEvents.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorEvents = {
    RESET: "CursorEvents.RESET",
    CHANGE_POSITION: "CursorEvents.CHANGE_POSITION"
};


/***/ }),

/***/ "./src/cursor/views/Cursour.ts":
/*!*************************************!*\
  !*** ./src/cursor/views/Cursour.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var MapModel_1 = __webpack_require__(/*! ../../map/models/MapModel */ "./src/map/models/MapModel.ts");
var AMath_1 = __webpack_require__(/*! ../../utils/AMath */ "./src/utils/AMath.ts");
var EnterFrameManager_1 = __webpack_require__(/*! ../../scenes/managers/EnterFrameManager */ "./src/scenes/managers/EnterFrameManager.ts");
var CursorEvents_1 = __webpack_require__(/*! ../events/CursorEvents */ "./src/cursor/events/CursorEvents.ts");
var Cursour = (function (_super) {
    __extends(Cursour, _super);
    function Cursour(scene) {
        var _this = _super.call(this, scene) || this;
        _this.timerMagicTotal = 50;
        _this.mapModel = new MapModel_1.MapModel();
        _this.charge = _this.scene.add.sprite(0, 0, "monstersInit2", "sparkBall");
        _this.charge.scaleX = _this.charge.scaleY = 2.5;
        _this.loaderMagic = _this.scene.add.sprite(0, 0, "monstersInit3", "loaderMagic");
        _this.loaderMagic.play("loaderMagic");
        _this.loaderMagic.anims.pause();
        _this.add([
            _this.charge,
            _this.loaderMagic
        ]);
        _this.charge.setVisible(false);
        _this.loaderMagic.setVisible(false);
        return _this;
    }
    Cursour.prototype.activate = function () {
        this.scene.game.events.addListener(CursorEvents_1.CursorEvents.RESET, this.onReset, this);
        this.scene.game.events.addListener(CursorEvents_1.CursorEvents.CHANGE_POSITION, this.onChangePosition, this);
        EnterFrameManager_1.EnterFrameManager.add(this);
    };
    Cursour.prototype.deactivate = function () {
        EnterFrameManager_1.EnterFrameManager.remove(this);
        this.scene.game.events.removeListener(CursorEvents_1.CursorEvents.RESET, this.onReset, this);
        this.scene.game.events.removeListener(CursorEvents_1.CursorEvents.CHANGE_POSITION, this.onChangePosition, this);
    };
    Cursour.prototype.onReset = function () {
        this.timerMagic = this.timerMagicTotal;
        if (this.loaderMagic.visible) {
            this.loaderMagic.setVisible(false);
        }
    };
    Cursour.prototype.onChangePosition = function () {
        this.x = MapModel_1.MapModel.toPix(this.mapModel.pointCursour.x);
        this.y = MapModel_1.MapModel.toPix(this.mapModel.pointCursour.y);
    };
    Cursour.prototype.onUpdate = function (deltaTime) {
        if (this.mapModel.isGreen && this.mapModel.isMagic && !this.mapModel.isKill) {
            if (this.timerMagic > 0) {
                this.timerMagic--;
                this.loadMagic(this.timerMagic, this.timerMagicTotal);
            }
        }
        this.resetMagicCharge();
    };
    Cursour.prototype.resetMagicCharge = function () {
        if (this.mapModel.isMagic && !exports_1.Point.Equals(this.mapModel.pointCursour, this.mapModel.pointMagic)) {
            if (this.mapModel.isGreen) {
                this.mapModel.isKill = false;
                this.mapModel.isMagic = false;
                this.onReset();
            }
        }
    };
    Cursour.prototype.loadMagic = function (time, timeTotal) {
        if (time > 0) {
            if (!this.loaderMagic.visible) {
                this.loaderMagic.setVisible(true);
            }
            this.loaderMagic.anims.setProgress(AMath_1.AMath.toPercent(time, timeTotal));
        }
        else {
            this.mapModel.isKill = true;
            this.onReset();
            this.charge.setVisible(true);
            this.charge.play("sparkBall");
            this.charge.on("animationcomplete", this.onComplete, this);
        }
    };
    Cursour.prototype.onComplete = function () {
        this.charge.off("animationcomplete", this.onComplete, this);
        this.charge.anims.stop();
        this.charge.setVisible(false);
    };
    return Cursour;
}(exports_1.Container));
exports.Cursour = Cursour;


/***/ }),

/***/ "./src/data/constants.ts":
/*!*******************************!*\
  !*** ./src/data/constants.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AssetTypes;
(function (AssetTypes) {
    AssetTypes[AssetTypes["HTML"] = 0] = "HTML";
    AssetTypes[AssetTypes["FONT_BMP"] = 1] = "FONT_BMP";
    AssetTypes[AssetTypes["ATLAS_XML"] = 2] = "ATLAS_XML";
    AssetTypes[AssetTypes["ATLAS_JSON"] = 3] = "ATLAS_JSON";
    AssetTypes[AssetTypes["AUDIO"] = 4] = "AUDIO";
})(AssetTypes = exports.AssetTypes || (exports.AssetTypes = {}));


/***/ }),

/***/ "./src/data/events/GameProcessEvents.ts":
/*!**********************************************!*\
  !*** ./src/data/events/GameProcessEvents.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameProcessEvents = {
    CONTINUE_GAME: "MenuEvents.CONTINUE_GAME",
    STAT_NEW_GAME: "MenuEvents.STAT_NEW_GAME",
    START_TUTORIAL: "MenuEvents.START_TUTORIAL",
    END_GAME: "MenuEvents.END_GAME",
    SET_NEXT_MONSTERS: "GameProcessEvents.SET_NEXT_MONSTERS",
    DELETE_LINES: "GameProcessEvents.DELETE_LINES",
    END_TURN: "GameProcessEvents.END_TURN",
    INIT_SCORE: "GameProcessEvents.INIT_SCORE",
    UPDATE_SCORE: "GameProcessEvents.UPDATE_SCORE"
};


/***/ }),

/***/ "./src/data/models/GameDataModel.ts":
/*!******************************************!*\
  !*** ./src/data/models/GameDataModel.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorageUtils_1 = __webpack_require__(/*! ../../utils/LocalStorageUtils */ "./src/utils/LocalStorageUtils.ts");
var ScoreMenu_1 = __webpack_require__(/*! ../../menu/views/ScoreMenu */ "./src/menu/views/ScoreMenu.ts");
var GameDataModel = (function () {
    function GameDataModel() {
        if (!GameDataModel.instance) {
            GameDataModel.instance = this;
        }
        return GameDataModel.instance;
    }
    GameDataModel.prototype.readData = function () {
        GameDataModel.gameData = LocalStorageUtils_1.LocalStorageUtils.readData() || this.createDefaultData();
        console.log(GameDataModel.gameData);
    };
    GameDataModel.prototype.saveData = function () {
        LocalStorageUtils_1.LocalStorageUtils.saveData(GameDataModel.gameData);
    };
    GameDataModel.prototype.deletePlayerData = function (playerId) {
        GameDataModel.allPlayersData[playerId] = this.getEmptyPlayerData();
        this.saveData();
    };
    GameDataModel.prototype.createDefaultData = function () {
        return {
            volumeSounds: 1,
            volumeMusic: 1,
            season: 0,
            language: "rus",
            playersData: this.getDefaultPlayersData(),
            scores: this.getDefaultScoresData()
        };
    };
    GameDataModel.prototype.getDefaultPlayersData = function () {
        var playersData = [];
        for (var indexPlayer = 0; indexPlayer < GameDataModel.COUNT_PLAYERS; indexPlayer++) {
            playersData[indexPlayer] = this.getEmptyPlayerData();
        }
        return playersData;
    };
    GameDataModel.prototype.getEmptyPlayerData = function () {
        return {
            name: "???",
            monster: "",
            gameOver: true,
            darksEscape: true,
            mapColor: [],
            score: 0,
            nextMonsters: [],
            isVisibilityCells: false,
            quests: []
        };
    };
    GameDataModel.prototype.getDefaultScoresData = function () {
        var scores = [];
        for (var indexPlayer = 0; indexPlayer < ScoreMenu_1.ScoreMenu.COUNT_POSITIONS; indexPlayer++) {
            scores[indexPlayer] = this.getEmptyScoreData();
        }
        return scores;
    };
    GameDataModel.prototype.getEmptyScoreData = function () {
        return {
            playerName: "???",
            score: "---",
            monsterColor: "p"
        };
    };
    Object.defineProperty(GameDataModel, "volumeSounds", {
        get: function () {
            return GameDataModel.gameData.volumeSounds;
        },
        set: function (value) {
            GameDataModel.gameData.volumeSounds = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataModel, "volumeMusic", {
        get: function () {
            return GameDataModel.gameData.volumeMusic;
        },
        set: function (value) {
            GameDataModel.gameData.volumeMusic = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataModel, "allPlayersData", {
        get: function () {
            return GameDataModel.gameData.playersData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataModel, "playerId", {
        get: function () {
            return GameDataModel._playerId;
        },
        set: function (value) {
            if (value < 0 || GameDataModel.COUNT_PLAYERS <= value) {
                return;
            }
            GameDataModel._playerId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataModel, "playerData", {
        get: function () {
            return GameDataModel.gameData.playersData[GameDataModel.playerId];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataModel, "seasonId", {
        get: function () {
            return GameDataModel.gameData.season;
        },
        set: function (value) {
            GameDataModel.gameData.season = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataModel, "language", {
        get: function () {
            return GameDataModel.gameData.language;
        },
        set: function (value) {
            GameDataModel.gameData.language = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataModel, "policy", {
        get: function () {
            return this.playerData.darksEscape;
        },
        set: function (value) {
            this.playerData.darksEscape = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataModel, "scores", {
        get: function () {
            return GameDataModel.gameData.scores;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataModel, "score", {
        set: function (value) {
            GameDataModel.playerData.score = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameDataModel, "quests", {
        get: function () {
            return GameDataModel.playerData.quests;
        },
        set: function (value) {
            GameDataModel.playerData.quests = value;
        },
        enumerable: true,
        configurable: true
    });
    GameDataModel.COUNT_PLAYERS = 7;
    return GameDataModel;
}());
exports.GameDataModel = GameDataModel;


/***/ }),

/***/ "./src/data/models/GameProcessModel.ts":
/*!*********************************************!*\
  !*** ./src/data/models/GameProcessModel.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColorIDsUtils_1 = __webpack_require__(/*! ../../utils/ColorIDsUtils */ "./src/utils/ColorIDsUtils.ts");
var GameProcessEvents_1 = __webpack_require__(/*! ../events/GameProcessEvents */ "./src/data/events/GameProcessEvents.ts");
var GameDataModel_1 = __webpack_require__(/*! ./GameDataModel */ "./src/data/models/GameDataModel.ts");
var GameProcessModel = (function () {
    function GameProcessModel(game) {
        if (!GameProcessModel.instance) {
            GameProcessModel.instance = this;
            this.game = game;
            this.monsterInGameTotal = 3;
        }
        return GameProcessModel.instance;
    }
    GameProcessModel.prototype.createNextMonsters = function () {
        this.arrNextMonsters = [];
        for (var i = 0; i < this.monsterInGameTotal; i++) {
            this.arrNextMonsters[i] = ColorIDsUtils_1.ColorIDsUtils.getRandomColor();
        }
        if (!this.isTutorial) {
            this.game.events.emit(GameProcessEvents_1.GameProcessEvents.SET_NEXT_MONSTERS, this.arrNextMonsters);
        }
    };
    GameProcessModel.prototype.resetScore = function (score) {
        if (score === void 0) { score = 0; }
        this._score = score;
        this.game.events.emit(GameProcessEvents_1.GameProcessEvents.INIT_SCORE);
    };
    Object.defineProperty(GameProcessModel.prototype, "advice", {
        get: function () {
            return this._advice;
        },
        set: function (value) {
            this._advice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameProcessModel.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
            GameDataModel_1.GameDataModel.score = this.score;
            this.game.events.emit(GameProcessEvents_1.GameProcessEvents.UPDATE_SCORE);
        },
        enumerable: true,
        configurable: true
    });
    return GameProcessModel;
}());
exports.GameProcessModel = GameProcessModel;


/***/ }),

/***/ "./src/data/models/LoadingAssetsModel.ts":
/*!***********************************************!*\
  !*** ./src/data/models/LoadingAssetsModel.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./src/data/constants.ts");
var LoadingAssetsModel = (function () {
    function LoadingAssetsModel(scene) {
        this.scene = scene;
    }
    LoadingAssetsModel.prototype.loadPreloadAssets = function () {
        this.loadAssets(LoadingAssetsModel.preloadingAssets);
    };
    LoadingAssetsModel.prototype.loadInitialAssets = function () {
        this.loadAssets(LoadingAssetsModel.initLoadingAssets);
    };
    LoadingAssetsModel.prototype.loadAssets = function (assets) {
        var _this = this;
        assets.forEach(function (asset) {
            switch (asset.type) {
                case constants_1.AssetTypes.ATLAS_XML:
                    _this.scene.load.atlasXML(asset.key, asset.textureUrl, asset.url);
                    break;
                case constants_1.AssetTypes.ATLAS_JSON:
                    _this.scene.load.atlas(asset.key, asset.textureUrl, asset.url);
                    break;
                case constants_1.AssetTypes.AUDIO:
                    _this.scene.load.audio(asset.key, asset.audioUrl);
                    break;
                case constants_1.AssetTypes.FONT_BMP:
                    _this.scene.load.bitmapFont(asset.key, asset.textureUrl, asset.url);
                    break;
                case constants_1.AssetTypes.HTML:
                    _this.scene.load.html(asset.key, asset.url);
                    break;
                default:
                    console.error(asset.type + " is not define!");
                    break;
            }
        });
    };
    LoadingAssetsModel.preloadingAssets = [
        { type: constants_1.AssetTypes.ATLAS_XML, key: "preloader", url: "./assets/img/preloader.xml", textureUrl: "./assets/img/preloader.png" },
        { type: constants_1.AssetTypes.FONT_BMP, key: "aivaStroke", url: "./assets/fonts/fontAivaStroke.fnt", textureUrl: "./assets/fonts/fontAivaStroke.png" }
    ];
    LoadingAssetsModel.initLoadingAssets = [
        { type: constants_1.AssetTypes.FONT_BMP, key: "aivaWhite", url: "./assets/fonts/fontAivaWhite.fnt", textureUrl: "./assets/fonts/fontAivaWhite.png" },
        { type: constants_1.AssetTypes.FONT_BMP, key: "aivaGold", url: "./assets/fonts/fontAivaGold.fnt", textureUrl: "./assets/fonts/fontAivaGold.png" },
        { type: constants_1.AssetTypes.ATLAS_XML, key: "backgrounds", url: "./assets/img/backgrounds.xml", textureUrl: "./assets/img/backgrounds.png" },
        { type: constants_1.AssetTypes.ATLAS_JSON, key: "profiles", url: "./assets/img/profiles.json", textureUrl: "./assets/img/profiles.png" },
        { type: constants_1.AssetTypes.ATLAS_XML, key: "menu", url: "./assets/img/menu.xml", textureUrl: "./assets/img/menu.png" },
        { type: constants_1.AssetTypes.ATLAS_JSON, key: "ui", url: "./assets/img/ui.json", textureUrl: "./assets/img/ui.png" },
        { type: constants_1.AssetTypes.ATLAS_XML, key: "monstersInit1", url: "./assets/img/monstersInit1.xml", textureUrl: "./assets/img/monstersInit1.png" },
        { type: constants_1.AssetTypes.ATLAS_XML, key: "monstersInit2", url: "./assets/img/monstersInit2.xml", textureUrl: "./assets/img/monstersInit2.png" },
        { type: constants_1.AssetTypes.ATLAS_XML, key: "monstersInit3", url: "./assets/img/monstersInit3.xml", textureUrl: "./assets/img/monstersInit3.png" },
        { type: constants_1.AssetTypes.ATLAS_XML, key: "scores", url: "./assets/img/scores.xml", textureUrl: "./assets/img/scores.png" },
        { type: constants_1.AssetTypes.ATLAS_JSON, key: "spark", url: "./assets/img/spark.json", textureUrl: "./assets/img/spark.png" },
        { type: constants_1.AssetTypes.AUDIO, key: "menuMusic", audioUrl: ["./assets/music/Menu.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "gameMusic", audioUrl: ["./assets/music/Game.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "Move", audioUrl: ["./assets/sounds/Move.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "Choice", audioUrl: ["./assets/sounds/Choice.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "Bell", audioUrl: ["./assets/sounds/Bell.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "Bonus", audioUrl: ["./assets/sounds/Bonus.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "Key", audioUrl: ["./assets/sounds/Key.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "Spark", audioUrl: ["./assets/sounds/Spark.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "QuestComplete", audioUrl: ["./assets/sounds/QuestComplete.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "Portal", audioUrl: ["./assets/sounds/Portal.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "Abort", audioUrl: ["./assets/sounds/Abort.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "Ingame", audioUrl: ["./assets/sounds/Ingame.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "GClickAnim3", audioUrl: ["./assets/sounds/GClickAnim3.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "OClickAnim1", audioUrl: ["./assets/sounds/OClickAnim1.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "OOverAnim2", audioUrl: ["./assets/sounds/OOverAnim2.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "POverAnim3", audioUrl: ["./assets/sounds/POverAnim3.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "YClickAnim2", audioUrl: ["./assets/sounds/YClickAnim2.mp3"] },
        { type: constants_1.AssetTypes.AUDIO, key: "YInsult", audioUrl: ["./assets/sounds/YInsult.mp3"] },
        { type: constants_1.AssetTypes.HTML, key: "playerName", url: "./assets/html/signUp.html" }
    ];
    return LoadingAssetsModel;
}());
exports.LoadingAssetsModel = LoadingAssetsModel;


/***/ }),

/***/ "./src/exports.ts":
/*!************************!*\
  !*** ./src/exports.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Config = Phaser.Core.Config;
exports.Config = Config;
var File = Phaser.Loader.File;
exports.File = File;
var Game = Phaser.Game;
exports.Game = Game;
var Scene = Phaser.Scene;
exports.Scene = Scene;
var Graphics = Phaser.GameObjects.Graphics;
exports.Graphics = Graphics;
var Text = Phaser.GameObjects.Text;
exports.Text = Text;
var BitmapText = Phaser.GameObjects.BitmapText;
exports.BitmapText = BitmapText;
var DynamicBitmapText = Phaser.GameObjects.DynamicBitmapText;
exports.DynamicBitmapText = DynamicBitmapText;
var TimerEvent = Phaser.Time.TimerEvent;
exports.TimerEvent = TimerEvent;
var Shape = Phaser.Geom;
exports.Shape = Shape;
var Texture = Phaser.Textures.Texture;
exports.Texture = Texture;
var Sprite = Phaser.GameObjects.Sprite;
exports.Sprite = Sprite;
var Image = Phaser.GameObjects.Image;
exports.Image = Image;
var Group = Phaser.GameObjects.Group;
exports.Group = Group;
var GameObject = Phaser.GameObjects.GameObject;
exports.GameObject = GameObject;
var Container = Phaser.GameObjects.Container;
exports.Container = Container;
var Pointer = Phaser.Input.Pointer;
exports.Pointer = Pointer;
var Zone = Phaser.GameObjects.Zone;
exports.Zone = Zone;
var Tween = Phaser.Tweens.Tween;
exports.Tween = Tween;
var BaseSound = Phaser.Sound.BaseSound;
exports.BaseSound = BaseSound;
var HTML5AudioSound = Phaser.Sound.HTML5AudioSound;
exports.HTML5AudioSound = HTML5AudioSound;
var WebAudioSound = Phaser.Sound.WebAudioSound;
exports.WebAudioSound = WebAudioSound;
var PluginManager = Phaser.Plugins.PluginManager;
exports.PluginManager = PluginManager;
var BasePlugin = Phaser.Plugins.BasePlugin;
exports.BasePlugin = BasePlugin;
var BaseSoundManager = Phaser.Sound.BaseSoundManager;
exports.BaseSoundManager = BaseSoundManager;
var HTML5AudioSoundManager = Phaser.Sound.HTML5AudioSoundManager;
exports.HTML5AudioSoundManager = HTML5AudioSoundManager;
var WebAudioSoundManager = Phaser.Sound.WebAudioSoundManager;
exports.WebAudioSoundManager = WebAudioSoundManager;
var Actions = Phaser.Actions;
exports.Actions = Actions;
var DOMElement = Phaser.GameObjects.DOMElement;
exports.DOMElement = DOMElement;
var Vector2 = Phaser.Math.Vector2;
exports.Vector2 = Vector2;
var Point = Phaser.Geom.Point;
exports.Point = Point;
var Circle = Phaser.Geom.Circle;
exports.Circle = Circle;
var Color = Phaser.Display.Color;
exports.Color = Color;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../data/css/style.css */ "./data/css/style.css");
var App_1 = __webpack_require__(/*! ./App */ "./src/App.ts");
function launchGame() {
    window.focus();
    var game = new App_1.App();
}
window.onload = launchGame;


/***/ }),

/***/ "./src/login/events/LoginEvents.ts":
/*!*****************************************!*\
  !*** ./src/login/events/LoginEvents.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginEvents = {
    BACK_TO_LOGIN: "LoginEvents.BACK_TO_LOGIN",
    SELECT_PROFILE: "LoginEvents.SELECT_PROFILE",
    CREATE_PROFILE: "LoginEvents.CREATE_PROFILE",
    DELETE_PROFILE: "LoginEvents.DELETE_PROFILE",
    PLAY_GAME: "LoginEvents.PLAY_GAME"
};


/***/ }),

/***/ "./src/login/views/Profile.ts":
/*!************************************!*\
  !*** ./src/login/views/Profile.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var ColorIDsUtils_1 = __webpack_require__(/*! ../../utils/ColorIDsUtils */ "./src/utils/ColorIDsUtils.ts");
var LoginEvents_1 = __webpack_require__(/*! ../events/LoginEvents */ "./src/login/events/LoginEvents.ts");
var Profile = (function (_super) {
    __extends(Profile, _super);
    function Profile(scene, x, y, children) {
        var _this = _super.call(this, scene, x, y, children) || this;
        _this.arrPos = ["Out", "Up"];
        _this.monster = _this.scene.add.sprite(0, 0, "").setScale(1.6).play("addUser");
        _this.tfPlayerName = _this.scene.add.bitmapText(0, 80, "aivaStroke", "PLAYER", 36).setOrigin(.5);
        _this.graphics = _this.scene.add.graphics({ fillStyle: { color: 0xaa0000, alpha: 0 } });
        _this.hitArea = new exports_1.Shape.Circle(0, 0, 60);
        _this.graphics.fillCircleShape(_this.hitArea);
        _this.add([
            _this.monster,
            _this.tfPlayerName,
            _this.graphics
        ]);
        _this.hitArea.setPosition(_this.monster.x, _this.monster.y);
        _this.init();
        _this.show();
        return _this;
    }
    Profile.prototype.init = function () {
        this.scaleX = 0;
        this.scaleY = 0;
    };
    Profile.prototype.free = function () {
        this.monster.anims.pause();
    };
    Profile.prototype.setProfileData = function (namePlayer, color, id) {
        this.tfPlayerName.text = namePlayer;
        var postfix = "";
        var prefix = ColorIDsUtils_1.ColorIDsUtils.getColorFromID(color);
        if (prefix !== "addUser") {
            postfix = this.arrPos[Phaser.Math.Between(0, this.arrPos.length - 1)];
        }
        this.monster.play(prefix + postfix, true, Phaser.Math.Between(0, this.monster.anims.getTotalFrames() - 1));
        this.idProfile = id;
        this.init();
        this.show();
    };
    Profile.prototype.hide = function () {
        var _this = this;
        this.removeListeners();
        this.removeTweens();
        this.tween = this.scene.add.tween({
            targets: this,
            scaleX: 0,
            scaleY: 0,
            duration: 300,
            onComplete: function () { return _this.free(); }
        });
    };
    Profile.prototype.show = function () {
        var _this = this;
        this.monster.anims.resume();
        this.removeTweens();
        this.tween = this.scene.add.tween({
            targets: this,
            scaleX: 1,
            scaleY: 1,
            duration: 500,
            onComplete: function () { return _this.addListeners(); }
        });
    };
    Profile.prototype.removeTweens = function () {
        if (this.tween) {
            this.tween.remove();
        }
    };
    Profile.prototype.addListeners = function () {
        this.setInteractive(this.hitArea, exports_1.Shape.Circle.Contains);
        this.on("pointerup", this.onClick, this);
    };
    Profile.prototype.removeListeners = function () {
        this.disableInteractive();
        this.off("pointerup", this.onClick, this);
    };
    Profile.prototype.onClick = function () {
        this.scene.sound.play("Move", { volume: GameDataModel_1.GameDataModel.volumeSounds });
        this.scene.events.emit(LoginEvents_1.LoginEvents.SELECT_PROFILE, this.id);
    };
    Object.defineProperty(Profile.prototype, "id", {
        get: function () {
            return this.idProfile;
        },
        enumerable: true,
        configurable: true
    });
    return Profile;
}(exports_1.Container));
exports.Profile = Profile;


/***/ }),

/***/ "./src/login/views/SignIn.ts":
/*!***********************************!*\
  !*** ./src/login/views/SignIn.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var constants_1 = __webpack_require__(/*! ../../popups/constants */ "./src/popups/constants.ts");
var Button_1 = __webpack_require__(/*! ../../ui/views/Button */ "./src/ui/views/Button.ts");
var LoginEvents_1 = __webpack_require__(/*! ../events/LoginEvents */ "./src/login/events/LoginEvents.ts");
var SignUpInBase_1 = __webpack_require__(/*! ./SignUpInBase */ "./src/login/views/SignUpInBase.ts");
var PopupEvents_1 = __webpack_require__(/*! ../../popups/events/PopupEvents */ "./src/popups/events/PopupEvents.ts");
var SignIn = (function (_super) {
    __extends(SignIn, _super);
    function SignIn(scene, x, y, children) {
        var _this = _super.call(this, scene, x, y, children) || this;
        _this.monster = _this.scene.add.sprite(0, 0, "").setScale(1.8).play("redUp");
        _this.monster.y = -40;
        _this.tfName = _this.scene.add.bitmapText(0, 70, "aivaGold", "", 70).setOrigin(.5);
        _this.btnBack = new Button_1.Button(_this.scene, "btnPink", "", function () { return _this.back(); });
        _this.btnBack.addLabel("BACK", "aivaStroke", 36, 0, -12);
        _this.btnBack.y = -180;
        _this.arrButtons.push(_this.btnBack);
        _this.btnDelete = new Button_1.Button(_this.scene, "btnGreenPoint", "iconDel", function () { return _this.areYouSure(); });
        _this.btnDelete.y = _this.btnBack.y;
        _this.btnDelete.x = _this.btnBack.x + _this.btnBack.getBounds().width / 2 + _this.btnDelete.getBounds().width / 2 + 10;
        _this.arrButtons.push(_this.btnDelete);
        _this.btnPlay = new Button_1.Button(_this.scene, "btnGreen", "", function () { return _this.playGame(); });
        _this.btnPlay.addLabel("PLAY", "aivaStroke", 36, 0, -12);
        _this.btnPlay.y = 180;
        _this.arrButtons.push(_this.btnPlay);
        _this.add([
            _this.monster,
            _this.tfName,
            _this.btnBack,
            _this.btnDelete,
            _this.btnPlay
        ]);
        return _this;
    }
    SignIn.prototype.resetData = function (animName, playerName) {
        this.animName = animName;
        this.playerName = playerName;
    };
    SignIn.prototype.init = function () {
        this.monster.play(this.animName + "Up");
        this.tfName.text = this.playerName;
        _super.prototype.init.call(this);
    };
    SignIn.prototype.show = function () {
        this.monster.play(this.animName + "Up");
        _super.prototype.show.call(this);
    };
    SignIn.prototype.free = function () {
        var _this = this;
        if (this.showMessageBox) {
            this.showMessageBox = false;
            var popupOptions = {
                id: constants_1.PopupConstants.ids.POPUP_APPROVE,
                yes: function () { return _this.scene.events.emit(LoginEvents_1.LoginEvents.DELETE_PROFILE); },
                no: function () { return _this.show(); }
            };
            this.scene.game.events.emit(PopupEvents_1.PopupEvents.SHOW_POPUP, popupOptions);
        }
        this.monster.anims.stop();
        _super.prototype.free.call(this);
    };
    SignIn.prototype.back = function () {
        this.scene.events.emit(LoginEvents_1.LoginEvents.BACK_TO_LOGIN);
        this.hide();
    };
    SignIn.prototype.areYouSure = function () {
        this.showMessageBox = true;
        this.hide();
    };
    SignIn.prototype.playGame = function () {
        this.scene.events.emit(LoginEvents_1.LoginEvents.PLAY_GAME);
        this.hide();
    };
    SignIn.prototype.language = function () {
        this.btnPlay.text = Language_1.Language.getText(Language_1.Language.PLAY);
        this.btnBack.text = Language_1.Language.getText(Language_1.Language.BACK);
    };
    return SignIn;
}(SignUpInBase_1.SignUpInBase));
exports.SignIn = SignIn;


/***/ }),

/***/ "./src/login/views/SignUp.ts":
/*!***********************************!*\
  !*** ./src/login/views/SignUp.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var Button_1 = __webpack_require__(/*! ../../ui/views/Button */ "./src/ui/views/Button.ts");
var LoginEvents_1 = __webpack_require__(/*! ../events/LoginEvents */ "./src/login/events/LoginEvents.ts");
var SignUpInBase_1 = __webpack_require__(/*! ./SignUpInBase */ "./src/login/views/SignUpInBase.ts");
var UserChoise_1 = __webpack_require__(/*! ./UserChoise */ "./src/login/views/UserChoise.ts");
var SignUp = (function (_super) {
    __extends(SignUp, _super);
    function SignUp(scene, x, y, children) {
        var _this = _super.call(this, scene, x, y, children) || this;
        _this.monsterChoise = new UserChoise_1.UserChoise(scene);
        _this.monsterChoise.scaleX = _this.monsterChoise.scaleY = 1.25;
        _this.monsterChoise.y = -60;
        _this.tfLabelMonster = _this.scene.add.bitmapText(0, -170, "aivaGold", "", 48).setOrigin(.5);
        _this.tfLabelPlayer = _this.scene.add.bitmapText(0, 100, "aivaGold", "", 48).setOrigin(.5);
        _this.tfNamePlayer = _this.scene.add.dom(0, 165).createFromCache("playerName");
        _this.btnBack = new Button_1.Button(_this.scene, "btnPink", "", function () { return _this.back(); });
        _this.btnBack.addLabel("BACK", "aivaStroke", 36, 0, -12);
        _this.btnBack.y = -260;
        _this.arrButtons.push(_this.btnBack);
        _this.btnDone = new Button_1.Button(_this.scene, "btnGreen", "", function () { return _this.done(); });
        _this.btnDone.addLabel("CREATE", "aivaStroke", 36, 0, -12);
        _this.btnDone.y = 260;
        _this.arrButtons.push(_this.btnDone);
        _this.add([
            _this.monsterChoise,
            _this.tfLabelMonster,
            _this.tfLabelPlayer,
            _this.btnBack,
            _this.btnDone,
            _this.tfNamePlayer
        ]);
        return _this;
    }
    SignUp.prototype.init = function () {
        this.monsterChoise.init();
        this.monsterChoise.random();
        this.tfNamePlayer.getChildByName("namePlayer").placeholder = Language_1.Language.getText(Language_1.Language.PLAYER_NAME_PLACEHOLDER);
        this.tfNamePlayer.getChildByName("namePlayer").value = "";
        _super.prototype.init.call(this);
    };
    SignUp.prototype.free = function () {
        this.monsterChoise.free();
        _super.prototype.free.call(this);
    };
    SignUp.prototype.back = function () {
        this.scene.events.emit(LoginEvents_1.LoginEvents.BACK_TO_LOGIN);
        this.hide();
    };
    SignUp.prototype.done = function () {
        var playerData = {
            playerName: this.tfNamePlayer.getChildByName("namePlayer").value,
            playerColor: this.monsterChoise.getColor()
        };
        this.scene.events.emit(LoginEvents_1.LoginEvents.CREATE_PROFILE, playerData);
        this.hide();
    };
    SignUp.prototype.language = function () {
        this.btnDone.text = Language_1.Language.getText(Language_1.Language.DONE);
        this.btnBack.text = Language_1.Language.getText(Language_1.Language.BACK);
        this.tfLabelPlayer.text = Language_1.Language.getText(Language_1.Language.CHAMPION);
        this.tfLabelMonster.text = Language_1.Language.getText(Language_1.Language.BONUS);
    };
    return SignUp;
}(SignUpInBase_1.SignUpInBase));
exports.SignUp = SignUp;


/***/ }),

/***/ "./src/login/views/SignUpInBase.ts":
/*!*****************************************!*\
  !*** ./src/login/views/SignUpInBase.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var ChangeVisibilityUtils_1 = __webpack_require__(/*! ../../utils/ChangeVisibilityUtils */ "./src/utils/ChangeVisibilityUtils.ts");
var SignUpInBase = (function (_super) {
    __extends(SignUpInBase, _super);
    function SignUpInBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrButtons = [];
        return _this;
    }
    SignUpInBase.prototype.init = function () {
        this.setEnableButtons(false);
        this.show();
    };
    SignUpInBase.prototype.free = function () {
        this.visible = false;
    };
    SignUpInBase.prototype.show = function () {
        var _this = this;
        this.alpha = 0;
        ChangeVisibilityUtils_1.ChangeVisibilityUtils.show(this.scene, this, 500, function () { return _this.addListeners(); });
    };
    SignUpInBase.prototype.hide = function () {
        var _this = this;
        this.removeListeners();
        ChangeVisibilityUtils_1.ChangeVisibilityUtils.hide(this.scene, this, 300, function () { return _this.free(); });
    };
    SignUpInBase.prototype.addListeners = function () {
        this.setEnableButtons(true);
    };
    SignUpInBase.prototype.removeListeners = function () {
        this.setEnableButtons(false);
    };
    SignUpInBase.prototype.setEnableButtons = function (isEnabled) {
        this.arrButtons.forEach(function (button) {
            isEnabled ? button.activate() : button.deactivate();
        });
    };
    return SignUpInBase;
}(exports_1.Container));
exports.SignUpInBase = SignUpInBase;


/***/ }),

/***/ "./src/login/views/UserChoise.ts":
/*!***************************************!*\
  !*** ./src/login/views/UserChoise.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var Button_1 = __webpack_require__(/*! ../../ui/views/Button */ "./src/ui/views/Button.ts");
var ColorIDsUtils_1 = __webpack_require__(/*! ../../utils/ColorIDsUtils */ "./src/utils/ColorIDsUtils.ts");
var UserChoise = (function (_super) {
    __extends(UserChoise, _super);
    function UserChoise(scene, x, y, children) {
        var _this = _super.call(this, scene, x, y, children) || this;
        _this.RANGE_FOR_BUTTONS = 150;
        _this.POS_Y_FOR_BUTTONS = 20;
        _this.monster = _this.scene.add.sprite(0, 0, "").setScale(1.5).play("redUp");
        _this.btnNext = new Button_1.Button(_this.scene, "btnGreenPoint", "iconRight", function () { return _this.onNext(); });
        _this.btnNext.x = _this.RANGE_FOR_BUTTONS;
        _this.btnNext.y = _this.POS_Y_FOR_BUTTONS;
        _this.btnPrev = new Button_1.Button(_this.scene, "btnGreenPoint", "iconLeft", function () { return _this.onPrev(); });
        _this.btnPrev.x = -_this.RANGE_FOR_BUTTONS;
        _this.btnPrev.y = _this.POS_Y_FOR_BUTTONS;
        _this.tf = _this.scene.add.bitmapText(0, 45, "aivaStroke", "", 40).setOrigin(.5, 0);
        _this.add([
            _this.monster,
            _this.btnNext,
            _this.btnPrev,
            _this.tf
        ]);
        _this.txtCountMonsters = "/" + ColorIDsUtils_1.ColorIDsUtils.count;
        return _this;
    }
    UserChoise.prototype.init = function () {
        this.random();
        this.btnNext.activate();
        this.btnPrev.activate();
    };
    UserChoise.prototype.free = function () {
        this.monster.anims.stop();
        this.btnNext.deactivate();
        this.btnPrev.deactivate();
    };
    UserChoise.prototype.random = function () {
        this.index = Phaser.Math.Between(0, ColorIDsUtils_1.ColorIDsUtils.count - 1);
        this.refreshMonster();
    };
    UserChoise.prototype.refreshMonster = function () {
        var color = ColorIDsUtils_1.ColorIDsUtils.getColorFromIndex(this.index);
        this.monster.play(color + "Up");
        this.tf.text = (this.index + 1) + this.txtCountMonsters;
    };
    UserChoise.prototype.getColor = function () {
        return ColorIDsUtils_1.ColorIDsUtils.getColorFromChar(this.index);
    };
    UserChoise.prototype.onNext = function () {
        if (this.index < ColorIDsUtils_1.ColorIDsUtils.count - 1) {
            this.index++;
            this.refreshMonster();
        }
    };
    UserChoise.prototype.onPrev = function () {
        if (this.index > 0) {
            this.index--;
            this.refreshMonster();
        }
    };
    return UserChoise;
}(exports_1.Container));
exports.UserChoise = UserChoise;


/***/ }),

/***/ "./src/map/events/MapEvents.ts":
/*!*************************************!*\
  !*** ./src/map/events/MapEvents.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MapEvents = {
    CHANGE_VISIBILITY_MAP_CELLS: "MapEvents.CHANGE_VISIBILITY_MAP_CELLS",
    CHOICE_SHOW: "MapEvents.CHOICE_SHOW",
    CHOICE_HIDE: "MapEvents.CHOICE_HIDE",
    CHOICE_RESET: "MapEvents.CHOICE_RESET",
    ADD_MONSTER: "MapEvents.ADD_MONSTER",
    UPDATE_DEPTHS: "MapEvents.UPDATE_DEPTHS",
    ADD_COST_MONSTER: "MapEvents.ADD_COST_MONSTER",
    ADD_STARS: "MapEvents.ADD_STARS"
};


/***/ }),

/***/ "./src/map/models/MapModel.ts":
/*!************************************!*\
  !*** ./src/map/models/MapModel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var MapModel = (function () {
    function MapModel() {
        if (!MapModel.instance) {
            MapModel.instance = this;
            this.countMonsterMax = MapModel.MAP_WIDTH_MAX * MapModel.MAP_HEIGHT_MAX;
            this.pointStart = new exports_1.Point(0, 0);
            this.pointEnd = new exports_1.Point(0, 0);
            this.pointCursour = new exports_1.Point(0, 0);
            this.pointMagic = new exports_1.Point(0, 0);
            this.aimMonsterData = {
                isAimed: false,
                position: new exports_1.Point(),
                cost: 0
            };
            this._allMonsters = [];
        }
        return MapModel.instance;
    }
    MapModel.toTile = function (value) {
        if (value > 0) {
            return Math.floor(value / MapModel.MAP_CELL_SIZE);
        }
        return -1;
    };
    MapModel.toPix = function (value) {
        return MapModel.MAP_CELL_HALF + value * MapModel.MAP_CELL_SIZE;
    };
    MapModel.inMap = function (i, j) {
        return (i >= 0 && j >= 0 && i < MapModel.MAP_HEIGHT_MAX && j < MapModel.MAP_WIDTH_MAX);
    };
    MapModel.prototype.createMap = function () {
        this.freeAllMonsters();
        this._mapMask = [];
        this._mapColor = [];
        this._mapMonsters = [];
        for (var ay = 0; ay < MapModel.MAP_HEIGHT_MAX; ay++) {
            this._mapMask[ay] = [];
            this._mapColor[ay] = [];
            this._mapMonsters[ay] = [];
            for (var ax = 0; ax < MapModel.MAP_WIDTH_MAX; ax++) {
                this._mapMask[ay][ax] = 0;
                this._mapColor[ay][ax] = "";
                this._mapMonsters[ay][ax] = null;
            }
        }
    };
    MapModel.prototype.freeAllMonsters = function () {
        this.activeMonster = null;
        this._allMonsters.forEach(function (monster) {
            monster.free();
        });
        this._allMonsters.length = 0;
    };
    MapModel.prototype.leavePlace = function (tileY, tileX) {
        this._mapMask[tileY][tileX] = 0;
        this._mapColor[tileY][tileX] = "";
        this._mapMonsters[tileY][tileX] = null;
    };
    MapModel.prototype.takePlace = function (monster) {
        var tileY = monster.point.y;
        var tileX = monster.point.x;
        this._mapMask[tileY][tileX] = 1;
        this._mapColor[tileY][tileX] = monster.color;
        this._mapMonsters[tileY][tileX] = monster;
    };
    MapModel.prototype.addMonster = function (monster) {
        this._allMonsters.push(monster);
    };
    MapModel.prototype.removeMonster = function (monster) {
        var indexMonster = this._allMonsters.indexOf(monster);
        if (indexMonster >= 0) {
            this._allMonsters.splice(indexMonster, 1);
        }
    };
    MapModel.prototype.calcMonsters = function () {
        this._countMonster = 0;
        var n = this.mapMask.length;
        for (var i = 0; i < n; i++) {
            var m = this.mapMask[i].length;
            for (var j = 0; j < m; j++) {
                if (this.mapMask[i][j] === 1 || this.mapMask[i][j] === -1) {
                    this._countMonster++;
                }
            }
        }
    };
    MapModel.prototype.calcMonstersColor = function (color) {
        var count = 0;
        var n = this.mapColor.length;
        for (var i = 0; i < n; i++) {
            var m = this.mapColor[i].length;
            for (var j = 0; j < m; j++) {
                if (this.mapColor[i][j] === color) {
                    count++;
                }
            }
        }
        return count;
    };
    Object.defineProperty(MapModel.prototype, "mapMask", {
        get: function () {
            return this._mapMask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapModel.prototype, "mapColor", {
        get: function () {
            return this._mapColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapModel.prototype, "mapMonsters", {
        get: function () {
            return this._mapMonsters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapModel.prototype, "allMonsters", {
        get: function () {
            return this._allMonsters;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapModel.prototype, "countMonster", {
        get: function () {
            return this._countMonster;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapModel.prototype, "mapIsFull", {
        get: function () {
            return this.countMonster >= this.countMonsterMax;
        },
        enumerable: true,
        configurable: true
    });
    MapModel.MAP_POS = 245;
    MapModel.MAP_WIDTH_MAX = 9;
    MapModel.MAP_HEIGHT_MAX = 9;
    MapModel.MAP_WIDTH_MAX_INDEX = MapModel.MAP_WIDTH_MAX - 1;
    MapModel.MAP_HEIGHT_MAX_INDEX = MapModel.MAP_HEIGHT_MAX - 1;
    MapModel.MAP_CELL_SIZE = 70;
    MapModel.MAP_CELL_HALF = 35;
    return MapModel;
}());
exports.MapModel = MapModel;


/***/ }),

/***/ "./src/map/utils/LinefinderUtils.ts":
/*!******************************************!*\
  !*** ./src/map/utils/LinefinderUtils.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameProcessEvents_1 = __webpack_require__(/*! ../../data/events/GameProcessEvents */ "./src/data/events/GameProcessEvents.ts");
var GameProcessModel_1 = __webpack_require__(/*! ../../data/models/GameProcessModel */ "./src/data/models/GameProcessModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var constants_1 = __webpack_require__(/*! ../../monsters/constants */ "./src/monsters/constants.ts");
var ComponentPool_1 = __webpack_require__(/*! ../../utils/ComponentPool */ "./src/utils/ComponentPool.ts");
var MapModel_1 = __webpack_require__(/*! ../models/MapModel */ "./src/map/models/MapModel.ts");
var LinefinderUtils = (function () {
    function LinefinderUtils(game) {
        this.mapModel = new MapModel_1.MapModel();
        this.componentPool = new ComponentPool_1.ComponentPool();
        this._arr = [];
        this._arrLeft = [];
        this._arrRight = [];
        this._left = false;
        this._right = false;
        if (!LinefinderUtils.instance) {
            LinefinderUtils.instance = this;
            this.game = game;
            this.gameProcessModel = new GameProcessModel_1.GameProcessModel(this.game);
        }
        return LinefinderUtils.instance;
    }
    LinefinderUtils.prototype.searchMain = function (i, j, color, min, cost) {
        if (color !== constants_1.MonsterColor.YELLOW) {
            this.searchLines(i, j, color, min, cost);
        }
        else {
            this.searchElvis(i, j, color, min, cost);
        }
        this.searchAllElvis();
        this.game.events.emit(GameProcessEvents_1.GameProcessEvents.END_TURN);
    };
    LinefinderUtils.prototype.searchAllElvis = function () {
        var _this = this;
        this.mapModel.allMonsters.forEach(function (monster) {
            if (monster.color === constants_1.MonsterColor.YELLOW) {
                _this.searchElvis(MapModel_1.MapModel.toTile(monster.y), MapModel_1.MapModel.toTile(monster.x), monster.color, monster.min, monster.cost);
            }
        });
    };
    LinefinderUtils.prototype.searchLines = function (i, j, color, min, cost) {
        this._arrHorizontal = this.getLine(i, j, color, min, "h");
        this._arrVertical = this.getLine(i, j, color, min, "v");
        this._arrDiagonal1 = this.getLine(i, j, color, min, "d1");
        this._arrDiagonal2 = this.getLine(i, j, color, min, "d2");
        this._arrDelete = [];
        var p = this.componentPool.get(exports_1.Point);
        p.x = j;
        p.y = i;
        this._arrDelete = this._arrHorizontal.concat(this._arrVertical, this._arrDiagonal1, this._arrDiagonal2);
        this._arrDelete.unshift(p);
        if (this._arrDelete.length >= min) {
            this.gameProcessModel.monsterIsDel = true;
            this.deleteLines(min, cost, color);
        }
    };
    LinefinderUtils.prototype.searchElvis = function (i, j, color, min, cost) {
        this._arrHorizontal = this.getLineElvis(i, j, color, "h");
        this._arrVertical = this.getLineElvis(i, j, color, "v");
        this._arrDiagonal1 = this.getLineElvis(i, j, color, "d1");
        this._arrDiagonal2 = this.getLineElvis(i, j, color, "d2");
        this._arrDelete = [];
        var p = this.componentPool.get(exports_1.Point);
        p.x = j;
        p.y = i;
        this._arrDelete = this._arrHorizontal.concat(this._arrVertical, this._arrDiagonal1, this._arrDiagonal2);
        this._arrDelete.unshift(p);
        if (this._arrDelete.length >= min) {
            this.gameProcessModel.elvisIsDel = true;
            this.gameProcessModel.monsterIsDel = true;
            this.deleteLines(min, cost, color);
        }
    };
    LinefinderUtils.prototype.deleteLines = function (min, cost, color) {
        var deletedLine = {
            line: this._arrDelete,
            min: min,
            cost: cost,
            color: color
        };
        this.game.events.emit(GameProcessEvents_1.GameProcessEvents.DELETE_LINES, deletedLine);
    };
    LinefinderUtils.prototype.getLine = function (i, j, color, min, type) {
        this._arr = [];
        switch (type) {
            case "h":
                this._indexI = 0;
                this._indexJ = 1;
                break;
            case "v":
                this._indexI = 1;
                this._indexJ = 0;
                break;
            case "d1":
                this._indexI = -1;
                this._indexJ = 1;
                break;
            case "d2":
                this._indexI = 1;
                this._indexJ = 1;
                break;
        }
        this._n = this._indexI;
        this._m = this._indexJ;
        while (true) {
            if (MapModel_1.MapModel.inMap(i + this._n, j + this._m)) {
                if (this.mapModel.mapColor[i + this._n][j + this._m] === color) {
                    var pr = this.componentPool.get(exports_1.Point);
                    pr.x = j + this._m;
                    pr.y = i + this._n;
                    this._arr.push(pr);
                    this._n += this._indexI;
                    this._m += this._indexJ;
                }
                else {
                    break;
                }
            }
            else {
                break;
            }
        }
        this._indexI *= -1;
        this._indexJ *= -1;
        this._n = this._indexI;
        this._m = this._indexJ;
        while (true) {
            if (MapModel_1.MapModel.inMap(i + this._n, j + this._m)) {
                if (this.mapModel.mapColor[i + this._n][j + this._m] === color) {
                    var pl = this.componentPool.get(exports_1.Point);
                    pl.x = j + this._m;
                    pl.y = i + this._n;
                    this._arr.push(pl);
                    this._n += this._indexI;
                    this._m += this._indexJ;
                }
                else {
                    break;
                }
            }
            else {
                break;
            }
        }
        return this._arr.length >= min - 1 ? this._arr : [];
    };
    LinefinderUtils.prototype.getLineElvis = function (i, j, color, type) {
        this._arr = [];
        this._arrLeft = [];
        this._arrRight = [];
        this._left = false;
        this._right = false;
        switch (type) {
            case "h":
                this._indexI = 0;
                this._indexJ = 1;
                break;
            case "v":
                this._indexI = 1;
                this._indexJ = 0;
                break;
            case "d1":
                this._indexI = -1;
                this._indexJ = 1;
                break;
            case "d2":
                this._indexI = 1;
                this._indexJ = 1;
                break;
        }
        this._n = this._indexI;
        this._m = this._indexJ;
        this._count = 0;
        while (this._count < 3) {
            if (MapModel_1.MapModel.inMap(i + this._n, j + this._m)) {
                if (this._count < 2) {
                    if (this.mapModel.mapMask[i + this._n][j + this._m] === 1) {
                        var p1 = this.componentPool.get(exports_1.Point);
                        p1.x = j + this._m;
                        p1.y = i + this._n;
                        this._arrRight.push(p1);
                        this._n += this._indexI;
                        this._m += this._indexJ;
                    }
                    else {
                        this._arrRight = [];
                        break;
                    }
                }
                else {
                    if (this.mapModel.mapColor[i + this._n][j + this._m] === color) {
                        var p2 = this.componentPool.get(exports_1.Point);
                        p2.x = j + this._m;
                        p2.y = i + this._n;
                        this._arrRight.push(p2);
                        this._right = true;
                    }
                }
            }
            this._count++;
        }
        this._indexI *= -1;
        this._indexJ *= -1;
        this._n = this._indexI;
        this._m = this._indexJ;
        this._count = 0;
        while (this._count < 3) {
            if (MapModel_1.MapModel.inMap(i + this._n, j + this._m)) {
                if (this._count < 2) {
                    if (this.mapModel.mapMask[i + this._n][j + this._m] === 1) {
                        var p3 = this.componentPool.get(exports_1.Point);
                        p3.x = j + this._m;
                        p3.y = i + this._n;
                        this._arrLeft.push(p3);
                        this._n += this._indexI;
                        this._m += this._indexJ;
                    }
                    else {
                        this._arrLeft = [];
                        break;
                    }
                }
                else {
                    if (this.mapModel.mapColor[i + this._n][j + this._m] === color) {
                        var p4 = this.componentPool.get(exports_1.Point);
                        p4.x = j + this._m;
                        p4.y = i + this._n;
                        this._arrLeft.push(p4);
                        this._left = true;
                    }
                }
            }
            this._count++;
        }
        if (this._left) {
            this._arr = this._arr.concat(this._arrLeft);
        }
        if (this._right) {
            this._arr = this._arr.concat(this._arrRight);
        }
        return this._arr;
    };
    return LinefinderUtils;
}());
exports.LinefinderUtils = LinefinderUtils;


/***/ }),

/***/ "./src/map/utils/PathfinderUtils.ts":
/*!******************************************!*\
  !*** ./src/map/utils/PathfinderUtils.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var ComponentPool_1 = __webpack_require__(/*! ../../utils/ComponentPool */ "./src/utils/ComponentPool.ts");
var MapModel_1 = __webpack_require__(/*! ../models/MapModel */ "./src/map/models/MapModel.ts");
var PathfinderUtils = (function () {
    function PathfinderUtils() {
        this.componentPool = new ComponentPool_1.ComponentPool();
        this.mapModel = new MapModel_1.MapModel();
        this.arrI = [-1, 0, 1, 0];
        this.arrJ = [0, 1, 0, -1];
        this.arrIDiagonal = [-1, 0, 1, 0, -1, -1, 1, 1];
        this.arrJDiagonal = [0, 1, 0, -1, -1, 1, 1, -1];
        this.arrPoints = [];
        if (!PathfinderUtils.instance) {
            PathfinderUtils.instance = this;
        }
        return PathfinderUtils.instance;
    }
    PathfinderUtils.prototype.free = function () {
        var _this = this;
        this.arrPoints.forEach(function (point) { return _this.componentPool.dispose(point); });
        this.arrPoints.length = 0;
    };
    PathfinderUtils.prototype.clearMaskStone = function () {
        this.step = 1;
        this.way = false;
        this.mapMaskStone = [];
        for (var i = 0; i < this.mapModel.mapMask.length; i++) {
            this.mapMaskStone[i] = [];
            for (var j = 0; j < this.mapModel.mapMask[i].length; j++) {
                if (this.mapModel.mapMask[i][j] !== 0) {
                    this.mapMaskStone[i][j] = -1;
                }
                else {
                    this.mapMaskStone[i][j] = 0;
                }
            }
        }
        this.mapMaskStone[this.pointStart.y][this.pointStart.x] = 1;
    };
    PathfinderUtils.prototype.setStartAndEndPoints = function (pointStart, pointEnd) {
        this.pointStart = pointStart;
        this.pointEnd = pointEnd;
    };
    PathfinderUtils.prototype.getWay = function (type, turnMax) {
        this.turnMax = turnMax;
        this.free();
        var point = this.componentPool.get(exports_1.Point);
        point.x = this.pointEnd.x;
        point.y = this.pointEnd.y;
        this.arrPoints.push(point);
        if (type === PathfinderUtils.TYPE_NORMAL) {
            this.activeArrayI = this.arrI;
            this.activeArrayJ = this.arrJ;
        }
        else {
            this.activeArrayI = this.arrIDiagonal;
            this.activeArrayJ = this.arrJDiagonal;
        }
        this.clearMaskStone();
        this.turn = 0;
        while (this.turn < this.turnMax) {
            if (!this.way) {
                this.step++;
                for (var i = 0; i < this.mapMaskStone.length; i++) {
                    for (var j = 0; j < this.mapMaskStone[i].length; j++) {
                        if (this.mapMaskStone[i][j] === this.step - 1) {
                            this.goWater(i, j);
                        }
                    }
                }
            }
            else {
                this.step--;
                this.searchStep(this.pointEnd.y, this.pointEnd.x, this.step);
                break;
            }
            this.turn++;
        }
        return this.arrPoints;
    };
    PathfinderUtils.prototype.goWater = function (i, j) {
        for (var a = 0; a < this.activeArrayI.length; a++) {
            if (i + this.activeArrayI[a] === this.pointEnd.y && j + this.activeArrayJ[a] === this.pointEnd.x) {
                this.way = true;
                return;
            }
            if (MapModel_1.MapModel.inMap(i + this.activeArrayI[a], j + this.activeArrayJ[a]) &&
                this.mapMaskStone[i + this.activeArrayI[a]][j + this.activeArrayJ[a]] === 0 &&
                this.mapModel.mapMask[i + this.activeArrayI[a]][j + this.activeArrayJ[a]] === 0) {
                this.mapMaskStone[i + this.activeArrayI[a]][j + this.activeArrayJ[a]] = this.step;
            }
        }
    };
    PathfinderUtils.prototype.searchStep = function (i, j, step) {
        if (step <= 0) {
            return;
        }
        for (var a = 0; a < this.activeArrayI.length; a++) {
            if (MapModel_1.MapModel.inMap(i + this.activeArrayI[a], j + this.activeArrayJ[a]) && this.mapMaskStone[i + this.activeArrayI[a]][j + this.activeArrayJ[a]] === step) {
                var point = this.componentPool.get(exports_1.Point);
                point.x = j + this.activeArrayJ[a];
                point.y = i + this.activeArrayI[a];
                this.arrPoints.push(point);
                this.step--;
                this.searchStep(i + this.activeArrayI[a], j + this.activeArrayJ[a], this.step);
                break;
            }
        }
    };
    PathfinderUtils.TYPE_NORMAL = "normal";
    PathfinderUtils.TYPE_DIAGONAL = "diagonal";
    PathfinderUtils.MAX_TURN = 50;
    return PathfinderUtils;
}());
exports.PathfinderUtils = PathfinderUtils;


/***/ }),

/***/ "./src/map/views/Choice.ts":
/*!*********************************!*\
  !*** ./src/map/views/Choice.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CursorEvents_1 = __webpack_require__(/*! ../../cursor/events/CursorEvents */ "./src/cursor/events/CursorEvents.ts");
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var EnterFrameManager_1 = __webpack_require__(/*! ../../scenes/managers/EnterFrameManager */ "./src/scenes/managers/EnterFrameManager.ts");
var MapEvents_1 = __webpack_require__(/*! ../events/MapEvents */ "./src/map/events/MapEvents.ts");
var MapModel_1 = __webpack_require__(/*! ../models/MapModel */ "./src/map/models/MapModel.ts");
var Choice = (function (_super) {
    __extends(Choice, _super);
    function Choice(scene) {
        var _this = _super.call(this, scene) || this;
        _this.mapModel = new MapModel_1.MapModel();
        var img1 = _this.scene.add.image(0, 0, "monstersInit2", "choise");
        var img2 = _this.scene.add.image(0, 0, "monstersInit2", "choise");
        img2.rotation = Phaser.Math.DegToRad(45);
        _this.add([
            img1,
            img2
        ]);
        _this.visible = false;
        return _this;
    }
    Choice.prototype.activate = function () {
        this.scene.game.events.addListener(MapEvents_1.MapEvents.CHOICE_SHOW, this.onShow, this);
        this.scene.game.events.addListener(MapEvents_1.MapEvents.CHOICE_HIDE, this.onHide, this);
        this.scene.game.events.addListener(MapEvents_1.MapEvents.CHOICE_RESET, this.onReset, this);
    };
    Choice.prototype.deactivate = function () {
        this.scene.game.events.removeListener(MapEvents_1.MapEvents.CHOICE_SHOW, this.onShow, this);
        this.scene.game.events.removeListener(MapEvents_1.MapEvents.CHOICE_HIDE, this.onHide, this);
        this.scene.game.events.removeListener(MapEvents_1.MapEvents.CHOICE_RESET, this.onReset, this);
    };
    Choice.prototype.onUpdate = function (time) {
        this.deltaTime += time;
        this.angleChoice++;
        if (this.deltaTime >= 100) {
            this.deltaTime %= 100;
        }
        this.scaleChoice = Math.cos(this.deltaTime * 4) * .25 + 1.1;
        this.scaleX = this.scaleY = this.scaleChoice;
        this.rotation = Phaser.Math.DegToRad(this.angleChoice);
    };
    Choice.prototype.init = function () {
        this.deltaTime = 0;
        this.angleChoice = 0;
        this.visible = true;
        this.scaleX = this.scaleY = this.scaleChoice;
        EnterFrameManager_1.EnterFrameManager.add(this);
    };
    Choice.prototype.free = function () {
        this.visible = false;
        EnterFrameManager_1.EnterFrameManager.remove(this);
    };
    Choice.prototype.onShow = function (position) {
        this.x = position.x;
        this.y = position.y;
        this.init();
        this.scene.sound.play("Choice", { volume: GameDataModel_1.GameDataModel.volumeSounds });
    };
    Choice.prototype.onHide = function (tile) {
        this.free();
        this.mapModel.isGreen = false;
        this.mapModel.isMagic = false;
        this.mapModel.isKill = false;
        if (tile.x > -1 && tile.y > -1) {
            this.scene.game.events.emit(CursorEvents_1.CursorEvents.RESET);
        }
    };
    Choice.prototype.onReset = function () {
        var tile = {
            x: -1,
            y: -1
        };
        var n = this.mapModel.allMonsters.length;
        for (var i = 0; i < n; i++) {
            if (this.mapModel.allMonsters[i].select) {
                tile.y = MapModel_1.MapModel.toTile(this.mapModel.allMonsters[i].y);
                tile.x = MapModel_1.MapModel.toTile(this.mapModel.allMonsters[i].x);
                break;
            }
        }
        this.onHide(tile);
    };
    return Choice;
}(exports_1.Container));
exports.Choice = Choice;


/***/ }),

/***/ "./src/map/views/CostPerMonster.ts":
/*!*****************************************!*\
  !*** ./src/map/views/CostPerMonster.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var ComponentPool_1 = __webpack_require__(/*! ../../utils/ComponentPool */ "./src/utils/ComponentPool.ts");
var MapModel_1 = __webpack_require__(/*! ../models/MapModel */ "./src/map/models/MapModel.ts");
var MapEvents_1 = __webpack_require__(/*! ../events/MapEvents */ "./src/map/events/MapEvents.ts");
var CostPerMonster = (function (_super) {
    __extends(CostPerMonster, _super);
    function CostPerMonster(scene) {
        var _this = _super.call(this, scene) || this;
        _this.componentPool = new ComponentPool_1.ComponentPool();
        _this.tf = _this.scene.add.bitmapText(0, 0, "aivaGold", "", 60).setOrigin(.5);
        _this.add(_this.tf);
        return _this;
    }
    CostPerMonster.prototype.init = function (tileX, tileY, txt, color) {
        var _this = this;
        this.x = MapModel_1.MapModel.toPix(tileX);
        this.y = MapModel_1.MapModel.toPix(tileY);
        this.tf.text = txt;
        this.scaleX = this.scaleY = 1;
        this.tween = this.scene.add.tween({
            targets: this,
            scaleX: .3,
            scaleY: .3,
            duration: CostPerMonster.DIASPPEAR_DURATION,
            onComplete: function () {
                var mapCellData = {
                    tileX: MapModel_1.MapModel.toTile(_this.x),
                    tileY: MapModel_1.MapModel.toTile(_this.y),
                    color: color
                };
                _this.scene.game.events.emit(MapEvents_1.MapEvents.ADD_STARS, mapCellData);
                _this.free();
            }
        });
    };
    CostPerMonster.prototype.removeTweens = function () {
        if (this.tween) {
            this.tween.remove();
        }
    };
    CostPerMonster.prototype.free = function () {
        this.removeTweens();
        this.componentPool.dispose(this);
        this.parentContainer.remove(this);
    };
    CostPerMonster.DIASPPEAR_DURATION = 1000;
    return CostPerMonster;
}(exports_1.Container));
exports.CostPerMonster = CostPerMonster;


/***/ }),

/***/ "./src/map/views/MapView.ts":
/*!**********************************!*\
  !*** ./src/map/views/MapView.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CursorEvents_1 = __webpack_require__(/*! ../../cursor/events/CursorEvents */ "./src/cursor/events/CursorEvents.ts");
var Cursour_1 = __webpack_require__(/*! ../../cursor/views/Cursour */ "./src/cursor/views/Cursour.ts");
var GameProcessEvents_1 = __webpack_require__(/*! ../../data/events/GameProcessEvents */ "./src/data/events/GameProcessEvents.ts");
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var GameProcessModel_1 = __webpack_require__(/*! ../../data/models/GameProcessModel */ "./src/data/models/GameProcessModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var constants_1 = __webpack_require__(/*! ../../monsters/constants */ "./src/monsters/constants.ts");
var Monster_1 = __webpack_require__(/*! ../../monsters/views/Monster */ "./src/monsters/views/Monster.ts");
var Spark_1 = __webpack_require__(/*! ../../monsters/views/Spark */ "./src/monsters/views/Spark.ts");
var ComponentPool_1 = __webpack_require__(/*! ../../utils/ComponentPool */ "./src/utils/ComponentPool.ts");
var SeasonsUtils_1 = __webpack_require__(/*! ../../utils/SeasonsUtils */ "./src/utils/SeasonsUtils.ts");
var MapEvents_1 = __webpack_require__(/*! ../events/MapEvents */ "./src/map/events/MapEvents.ts");
var MapModel_1 = __webpack_require__(/*! ../models/MapModel */ "./src/map/models/MapModel.ts");
var LinefinderUtils_1 = __webpack_require__(/*! ../utils/LinefinderUtils */ "./src/map/utils/LinefinderUtils.ts");
var PathfinderUtils_1 = __webpack_require__(/*! ../utils/PathfinderUtils */ "./src/map/utils/PathfinderUtils.ts");
var Choice_1 = __webpack_require__(/*! ./Choice */ "./src/map/views/Choice.ts");
var CostPerMonster_1 = __webpack_require__(/*! ./CostPerMonster */ "./src/map/views/CostPerMonster.ts");
var MonsterNavigator_1 = __webpack_require__(/*! ./MonsterNavigator */ "./src/map/views/MonsterNavigator.ts");
var Star_1 = __webpack_require__(/*! ./Star */ "./src/map/views/Star.ts");
var ColorIDsUtils_1 = __webpack_require__(/*! ../../utils/ColorIDsUtils */ "./src/utils/ColorIDsUtils.ts");
var MapView = (function (_super) {
    __extends(MapView, _super);
    function MapView(scene) {
        var _this = _super.call(this, scene) || this;
        _this.mapModel = new MapModel_1.MapModel();
        _this.gameProcessModel = new GameProcessModel_1.GameProcessModel(_this.scene.game);
        _this.linefinder = new LinefinderUtils_1.LinefinderUtils(_this.scene.game);
        _this.pathfinder = new PathfinderUtils_1.PathfinderUtils();
        _this.componentPool = new ComponentPool_1.ComponentPool();
        _this.layerBackground = _this.scene.add.container(0, 0);
        _this.layerCell = _this.scene.add.graphics();
        _this.layerChoice = _this.scene.add.container(0, 0);
        _this.layerObjects = _this.scene.add.container(0, 0);
        _this.layerMonsters = _this.scene.add.container(0, 0);
        _this.add([
            _this.layerCell,
            _this.layerBackground,
            _this.layerChoice,
            _this.layerMonsters,
            _this.layerObjects
        ]);
        _this.choice = new Choice_1.Choice(scene);
        _this.layerChoice.add(_this.choice);
        _this._navigator = new MonsterNavigator_1.MonsterNavigator(_this.scene);
        _this._navigator.x = _this.layerBackground.x;
        _this._navigator.y = _this.layerBackground.y;
        _this.add(_this._navigator);
        _this.cursor = new Cursour_1.Cursour(scene);
        _this.add(_this.cursor);
        _this.drawMap();
        return _this;
    }
    MapView.prototype.onUpdateDepths = function () {
        this.layerMonsters.sort("depth");
    };
    MapView.prototype.activate = function () {
        this.scene.game.events.addListener(MapEvents_1.MapEvents.CHANGE_VISIBILITY_MAP_CELLS, this.changeVisibilityCell, this);
        this.scene.game.events.addListener(MapEvents_1.MapEvents.ADD_MONSTER, this.addMonster, this);
        this.scene.game.events.addListener(MapEvents_1.MapEvents.UPDATE_DEPTHS, this.onUpdateDepths, this);
        this.scene.game.events.addListener(MapEvents_1.MapEvents.ADD_COST_MONSTER, this.onAddCostOfMonster, this);
        this.scene.game.events.addListener(MapEvents_1.MapEvents.ADD_STARS, this.onAddStars, this);
        this.layerBackground.setInteractive(new Phaser.Geom.Rectangle(0, 0, MapModel_1.MapModel.MAP_WIDTH_MAX * MapModel_1.MapModel.MAP_CELL_SIZE, MapModel_1.MapModel.MAP_HEIGHT_MAX * MapModel_1.MapModel.MAP_CELL_SIZE), Phaser.Geom.Rectangle.Contains);
        this.layerBackground.on("pointerdown", this.onMapDown, this);
        this.layerBackground.on("pointerup", this.onMapUp, this);
        this.choice.activate();
        this.cursor.activate();
    };
    MapView.prototype.deactivate = function () {
        this.scene.game.events.removeListener(MapEvents_1.MapEvents.CHANGE_VISIBILITY_MAP_CELLS, this.changeVisibilityCell, this);
        this.scene.game.events.removeListener(MapEvents_1.MapEvents.ADD_MONSTER, this.addMonster, this);
        this.scene.game.events.removeListener(MapEvents_1.MapEvents.UPDATE_DEPTHS, this.onUpdateDepths, this);
        this.scene.game.events.removeListener(MapEvents_1.MapEvents.ADD_COST_MONSTER, this.onAddCostOfMonster, this);
        this.scene.game.events.removeListener(MapEvents_1.MapEvents.ADD_STARS, this.onAddStars, this);
        this.layerBackground.disableInteractive();
        this.layerBackground.off("pointerdown", this.onMapDown, this);
        this.layerBackground.off("pointerup", this.onMapUp, this);
        this.choice.deactivate();
        this.cursor.deactivate();
    };
    MapView.prototype.drawMap = function () {
        var hitArea = this.scene.add.graphics();
        hitArea.fillStyle(0xFF00FF, 0);
        hitArea.fillRect(0, 0, MapModel_1.MapModel.MAP_WIDTH_MAX * MapModel_1.MapModel.MAP_CELL_SIZE, MapModel_1.MapModel.MAP_HEIGHT_MAX * MapModel_1.MapModel.MAP_CELL_SIZE);
        this.layerBackground.add(hitArea);
        this.vBackgroundCells = [];
        var seasonName = SeasonsUtils_1.SeasonsUtils.getSeasonNameByID(GameDataModel_1.GameDataModel.seasonId);
        for (var ay = 0; ay <= MapModel_1.MapModel.MAP_HEIGHT_MAX; ay++) {
            for (var ax = 0; ax <= MapModel_1.MapModel.MAP_WIDTH_MAX; ax++) {
                var wood = this.scene.add.image(MapModel_1.MapModel.MAP_CELL_SIZE * ay, MapModel_1.MapModel.MAP_CELL_SIZE * ax, "backgrounds", "cell" + seasonName);
                this.layerBackground.add(wood);
                this.vBackgroundCells.push(wood);
            }
        }
    };
    MapView.prototype.drawCell = function () {
        this.layerCell.clear();
        var color = SeasonsUtils_1.SeasonsUtils.getColorSeasonByID(GameDataModel_1.GameDataModel.seasonId);
        this.layerCell.fillStyle(color, .5);
        for (var ay = 0; ay < MapModel_1.MapModel.MAP_HEIGHT_MAX; ay++) {
            for (var ax = 0; ax < MapModel_1.MapModel.MAP_WIDTH_MAX; ax++) {
                if ((ay * MapModel_1.MapModel.MAP_WIDTH_MAX + ax) % 2 === 0) {
                    this.layerCell.fillRect(MapModel_1.MapModel.MAP_CELL_SIZE * ax, MapModel_1.MapModel.MAP_CELL_SIZE * ay, MapModel_1.MapModel.MAP_CELL_SIZE, MapModel_1.MapModel.MAP_CELL_SIZE);
                }
            }
        }
        this.changeVisibilityCell();
    };
    MapView.prototype.changeVisibilityCell = function () {
        this.layerCell.visible = GameDataModel_1.GameDataModel.playerData.isVisibilityCells;
    };
    MapView.prototype.redrawMap = function () {
        var seasonName = SeasonsUtils_1.SeasonsUtils.getSeasonNameByID(GameDataModel_1.GameDataModel.seasonId);
        var countCells = this.vBackgroundCells.length;
        for (var i = 0; i < countCells; i++) {
            this.vBackgroundCells[i].frame = this.scene.sys.textures.getFrame("backgrounds", "cell" + seasonName);
        }
    };
    MapView.prototype.loadMonsters = function () {
        this.gameProcessModel.addingMonsters = this.gameProcessModel.addingInRoom;
        for (var i = 0; i < this.mapModel.mapColor.length; i++) {
            for (var j = 0; j < this.mapModel.mapColor[i].length; j++) {
                if (this.mapModel.mapColor[i][j] !== "") {
                    var strMonster = this.mapModel.mapColor[i][j];
                    var monster = this.getMonster(strMonster);
                    this.mapModel.mapMask[i][j] = 1;
                    this.mapModel.mapMonsters[i][j] = monster;
                    monster.init(j, i);
                    this.layerMonsters.add(monster);
                    if (this.mapModel.mapIsFull) {
                        this.scene.game.events.emit(GameProcessEvents_1.GameProcessEvents.END_GAME);
                    }
                }
            }
        }
        this.gameProcessModel.addingMonsters = false;
        this.gameProcessModel.dontMove = this.gameProcessModel.dontMoveInRoom;
    };
    MapView.prototype.addMonster = function () {
        if (!this.gameProcessModel.gameOver) {
            var j = void 0;
            var i = void 0;
            while (true) {
                j = Phaser.Math.Between(0, MapModel_1.MapModel.MAP_WIDTH_MAX_INDEX);
                i = Phaser.Math.Between(0, MapModel_1.MapModel.MAP_HEIGHT_MAX_INDEX);
                if (this.mapModel.mapMask[i][j] === 0) {
                    break;
                }
            }
            var strMonster = this.gameProcessModel.arrNextMonsters[this.gameProcessModel.monsterInGameTotal - this.gameProcessModel.monsterInGame];
            var monster = this.getMonster(strMonster);
            this.mapModel.mapMask[i][j] = 1;
            this.mapModel.mapColor[i][j] = strMonster;
            this.mapModel.mapMonsters[i][j] = monster;
            monster.init(j, i);
            this.layerMonsters.add(monster);
            this.linefinder.searchMain(i, j, monster.color, monster.min, monster.cost);
        }
    };
    MapView.prototype.getMonster = function (color) {
        var monster = this.componentPool.get(Monster_1.Monster, this.scene);
        var model = constants_1.MonsterConstants[color];
        monster.setMonsterData(model);
        return monster;
    };
    MapView.prototype.onMapDown = function (pointer, pointerX, pointerY) {
        var indexI = MapModel_1.MapModel.toTile(pointerY);
        var indexJ = MapModel_1.MapModel.toTile(pointerX);
        if (MapModel_1.MapModel.inMap(indexI, indexJ)) {
            this.mapModel.pointCursour.x = indexJ;
            this.mapModel.pointCursour.y = indexI;
            this.scene.game.events.emit(CursorEvents_1.CursorEvents.CHANGE_POSITION);
            if (this.mapModel.isGreen) {
                if (this.mapModel.mapMask[indexI][indexJ] > 0
                    && this.mapModel.mapColor[indexI][indexJ] !== constants_1.MonsterColor.GREEN) {
                    this.mapModel.isMagic = true;
                    this.mapModel.pointMagic.x = indexJ;
                    this.mapModel.pointMagic.y = indexI;
                    this.scene.game.events.emit(CursorEvents_1.CursorEvents.RESET);
                }
            }
        }
    };
    MapView.prototype.onMapUp = function (pointer, pointerX, pointerY) {
        var indexI = MapModel_1.MapModel.toTile(pointerY);
        var indexJ = MapModel_1.MapModel.toTile(pointerX);
        if (indexI < 0 || indexJ < 0) {
            return;
        }
        if (MapModel_1.MapModel.inMap(indexI, indexJ) && this.mapModel.mapMask[indexI][indexJ] === -1) {
            return;
        }
        if (!this.gameProcessModel.gameOver) {
            if (MapModel_1.MapModel.inMap(indexI, indexJ) && this.mapModel.mapMask[indexI][indexJ] === 1) {
                if (!this.mapModel.isKill) {
                    this.mapModel.mapMonsters[indexI][indexJ].onClickHandler();
                    return;
                }
                else {
                    if (indexI === this.mapModel.pointMagic.y && indexJ === this.mapModel.pointMagic.x) {
                        this.mapModel.aimMonster = this.mapModel.mapMonsters[indexI][indexJ];
                        this.freeCell(MapModel_1.MapModel.toTile(this.mapModel.aimMonster.y), MapModel_1.MapModel.toTile(this.mapModel.aimMonster.x), this.mapModel.aimMonster.cost);
                        this.mapModel.isKill = false;
                    }
                }
            }
            this.onOutHandler();
            if (this.mapModel.activeMonster) {
                if (!this.gameProcessModel.dontMove) {
                    if (MapModel_1.MapModel.inMap(indexI, indexJ)) {
                        if (this.mapModel.mapMask[indexI][indexJ] === 0) {
                            this.mapModel.pointEnd.y = indexI;
                            this.mapModel.pointEnd.x = indexJ;
                            this.scene.game.events.emit(CursorEvents_1.CursorEvents.RESET);
                        }
                        else {
                            return;
                        }
                    }
                    else {
                        return;
                    }
                    if (this.gameProcessModel.isTutorial) {
                        this.gameProcessModel.turns++;
                    }
                    this.pathfinder.setStartAndEndPoints(this.mapModel.pointStart, this.mapModel.pointEnd);
                    switch (this.mapModel.activeMonster.color) {
                        case constants_1.MonsterColor.BLUE:
                            this.mapModel.activeMonster.portal();
                            break;
                        case constants_1.MonsterColor.GREEN:
                            this.mapModel.activeMonster.setWay(this.pathfinder.getWay(this.mapModel.activeMonster.typePathfinder, this.mapModel.activeMonster.maxTurn));
                            if (this.mapModel.aimMonsterData.isAimed) {
                                if (this.mapModel.activeMonster == null) {
                                    this.killMonster(this.mapModel.aimMonsterData.position.y, this.mapModel.aimMonsterData.position.x, this.mapModel.aimMonsterData.cost);
                                }
                                else {
                                    this.keepCell(this.mapModel.aimMonsterData.position.y, this.mapModel.aimMonsterData.position.x);
                                }
                            }
                            break;
                        default:
                            this.mapModel.activeMonster.setWay(this.pathfinder.getWay(this.mapModel.activeMonster.typePathfinder, this.mapModel.activeMonster.maxTurn));
                    }
                }
            }
            else {
                return;
            }
        }
    };
    MapView.prototype.onOutHandler = function () {
        if (this.mapModel.isGreen) {
            this.mapModel.isKill = false;
            this.mapModel.isMagic = false;
            this.scene.game.events.emit(CursorEvents_1.CursorEvents.RESET);
        }
    };
    MapView.prototype.freeCell = function (i, j, cost) {
        this.mapModel.mapMask[i][j] = 0;
        this.mapModel.aimMonsterData.isAimed = true;
        this.mapModel.aimMonsterData.position.x = j;
        this.mapModel.aimMonsterData.position.y = i;
        this.mapModel.aimMonsterData.cost = cost;
    };
    MapView.prototype.keepCell = function (i, j) {
        this.mapModel.mapMask[i][j] = 1;
        this.mapModel.aimMonsterData.isAimed = false;
    };
    MapView.prototype.killMonster = function (i, j, cost) {
        var mapCellData = {
            tileX: j,
            tileY: i,
            color: ColorIDsUtils_1.ColorIDsUtils.getCharColorFromColor(this.mapModel.mapColor[i][j]),
            cost: "+" + cost
        };
        this.onAddCostOfMonster(mapCellData);
        this.mapModel.aimMonsterData.isAimed = false;
        this.mapModel.mapMask[i][j] = 0;
        this.mapModel.mapColor[i][j] = "";
        this.mapModel.mapMonsters[i][j].outGame();
        this.mapModel.mapMonsters[i][j] = null;
        var spark = this.componentPool.get(Spark_1.Spark, this.scene);
        spark.init(MapModel_1.MapModel.toPix(j), MapModel_1.MapModel.toPix(i));
        this.layerObjects.add(spark);
        if (this.scene.game.cache.audio.get("Spark")) {
            this.scene.sound.play("Spark", { volume: GameDataModel_1.GameDataModel.volumeSounds });
        }
        this.gameProcessModel.score += cost;
    };
    MapView.prototype.onAddCostOfMonster = function (mapCellData) {
        var costPerMonster = this.componentPool.get(CostPerMonster_1.CostPerMonster, this.scene);
        costPerMonster.init(mapCellData.tileX, mapCellData.tileY, mapCellData.cost, mapCellData.color);
        this.layerObjects.add(costPerMonster);
    };
    MapView.prototype.onAddStars = function (mapCellData) {
        var particlesCountMIN = 8;
        var particlesCountMAX = 15;
        var particlesScaleMIN = .3;
        var particlesScaleMAX = 1;
        var countStars = Phaser.Math.Between(particlesCountMIN, particlesCountMAX);
        for (var i = 0; i < countStars; i++) {
            var star = this.componentPool.get(Star_1.Star, this.scene);
            star.init(MapModel_1.MapModel.toPix(mapCellData.tileX), MapModel_1.MapModel.toPix(mapCellData.tileY), particlesScaleMAX * Math.random() + particlesScaleMIN);
            this.layerObjects.add(star);
        }
        if (mapCellData.color === GameDataModel_1.GameDataModel.playerData.monster) {
            this.scene.sound.removeByKey("Bonus");
            this.scene.sound.play("Bonus", { volume: GameDataModel_1.GameDataModel.volumeSounds });
        }
        else {
            this.scene.sound.removeByKey("Bell");
            this.scene.sound.play("Bell", { volume: GameDataModel_1.GameDataModel.volumeSounds });
        }
    };
    Object.defineProperty(MapView.prototype, "navigator", {
        get: function () {
            return this._navigator;
        },
        enumerable: true,
        configurable: true
    });
    return MapView;
}(exports_1.Container));
exports.MapView = MapView;


/***/ }),

/***/ "./src/map/views/MonsterNavigator.ts":
/*!*******************************************!*\
  !*** ./src/map/views/MonsterNavigator.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var constants_1 = __webpack_require__(/*! ../../monsters/constants */ "./src/monsters/constants.ts");
var TutorialEvents_1 = __webpack_require__(/*! ../../panels/events/TutorialEvents */ "./src/panels/events/TutorialEvents.ts");
var MapModel_1 = __webpack_require__(/*! ../models/MapModel */ "./src/map/models/MapModel.ts");
var PathfinderUtils_1 = __webpack_require__(/*! ../utils/PathfinderUtils */ "./src/map/utils/PathfinderUtils.ts");
var MonsterNavigator = (function (_super) {
    __extends(MonsterNavigator, _super);
    function MonsterNavigator(scene) {
        var _this = _super.call(this, scene) || this;
        _this.pathfinder = new PathfinderUtils_1.PathfinderUtils();
        _this.tweens = [];
        if (!MonsterNavigator.instance) {
            _this.imgStartPoint = _this.scene.add.image(0, 0, "ui", "pointBegan");
            _this.imgStopPoint = _this.scene.add.image(0, 0, "ui", "pointEnd");
            _this.wayPoints = [];
            _this.add([
                _this.imgStartPoint,
                _this.imgStopPoint
            ]);
            _this.hide();
            MonsterNavigator.instance = _this;
        }
        return MonsterNavigator.instance;
    }
    MonsterNavigator.prototype.init = function (targetObj, pointEnd) {
        this.hide();
        this.targetMonster = targetObj;
        this.pointEnd = pointEnd;
        this.imgStopPoint.y = MapModel_1.MapModel.toPix(this.pointEnd.y);
        this.imgStopPoint.x = MapModel_1.MapModel.toPix(this.pointEnd.x);
        this.scene.game.events.addListener(TutorialEvents_1.TutorialEvents.NAVIGATOR_SHOW, this.show, this);
        this.scene.game.events.addListener(TutorialEvents_1.TutorialEvents.NAVIGATOR_HIDE, this.hide, this);
    };
    MonsterNavigator.prototype.free = function () {
        this.reset();
        this.scene.game.events.removeListener(TutorialEvents_1.TutorialEvents.NAVIGATOR_SHOW, this.show, this);
        this.scene.game.events.removeListener(TutorialEvents_1.TutorialEvents.NAVIGATOR_HIDE, this.hide, this);
    };
    MonsterNavigator.prototype.show = function (monster) {
        if (this.targetMonster && this.targetMonster === monster && !this.targetMonster.isFree) {
            this.imgStartPoint.visible = true;
            this.imgStopPoint.visible = true;
            this.refreshWay();
            this.addTweenAnimation(this.imgStartPoint);
            this.addTweenAnimation(this.imgStopPoint);
        }
    };
    MonsterNavigator.prototype.hide = function () {
        this.imgStartPoint.scale = 1;
        this.imgStopPoint.scale = 1;
        this.imgStartPoint.visible = false;
        this.imgStopPoint.visible = false;
        this.clear();
    };
    MonsterNavigator.prototype.reset = function () {
        this.hide();
        this.targetMonster = null;
    };
    MonsterNavigator.prototype.refreshWay = function () {
        this.clear();
        this.pathfinder.setStartAndEndPoints(this.targetMonster.point, this.pointEnd);
        this.way = this.pathfinder.getWay(this.targetMonster.typePathfinder, this.targetMonster.maxTurn);
        this.imgStartPoint.x = MapModel_1.MapModel.toPix(this.targetMonster.point.x);
        this.imgStartPoint.y = MapModel_1.MapModel.toPix(this.targetMonster.point.y);
        if (this.targetMonster.x === this.imgStopPoint.x && this.targetMonster.y === this.imgStopPoint.y) {
            this.imgStartPoint.visible = false;
            this.imgStopPoint.visible = false;
            return;
        }
        else {
            this.imgStartPoint.visible = true;
            this.imgStopPoint.visible = true;
        }
        if (this.targetMonster.color !== constants_1.MonsterColor.BLUE) {
            var lengthWay = this.way.length;
            if (lengthWay > 1) {
                for (var i = 1; i < lengthWay - 1; i++) {
                    var pointWay = this.scene.add.image(0, 0, "ui", "pointWay");
                    pointWay.x = MapModel_1.MapModel.toPix(this.way[i].x);
                    pointWay.y = MapModel_1.MapModel.toPix(this.way[i].y);
                    this.wayPoints.push(pointWay);
                    this.add(pointWay);
                }
            }
        }
        this.add(this.imgStartPoint);
    };
    MonsterNavigator.prototype.clear = function () {
        var countPointsWay = this.wayPoints.length;
        for (var i = 0; i < countPointsWay; i++) {
            this.remove(this.wayPoints[i]);
        }
        this.wayPoints.length = 0;
        this.tweens.forEach(function (tween) {
            tween.stop();
            tween.remove();
        });
        this.tweens.length = 0;
    };
    MonsterNavigator.prototype.addTweenAnimation = function (image) {
        image.setScale(1);
        this.tweens.push(this.scene.add.tween({
            targets: image,
            scaleX: 1.2,
            scaleY: 1.2,
            duration: 500,
            loop: -1,
            yoyo: true
        }));
    };
    return MonsterNavigator;
}(exports_1.Container));
exports.MonsterNavigator = MonsterNavigator;


/***/ }),

/***/ "./src/map/views/Star.ts":
/*!*******************************!*\
  !*** ./src/map/views/Star.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var ComponentPool_1 = __webpack_require__(/*! ../../utils/ComponentPool */ "./src/utils/ComponentPool.ts");
var Star = (function (_super) {
    __extends(Star, _super);
    function Star(scene) {
        var _this = _super.call(this, scene) || this;
        _this.componentPool = new ComponentPool_1.ComponentPool();
        _this.color = new exports_1.Color();
        _this.vector = new exports_1.Vector2();
        _this.sprite = _this.scene.add.image(0, 0, "monstersInit3", "particle0");
        _this.add(_this.sprite);
        return _this;
    }
    Star.prototype.init = function (posX, posY, scale, power) {
        var _this = this;
        if (power === void 0) { power = 1; }
        this.x = posX;
        this.y = posY;
        this.sprite.x = 0;
        this.sprite.y = 0;
        this.sprite.alpha = 0;
        this.sprite.scaleX = this.sprite.scaleY = scale;
        this.sprite.setTexture("monstersInit3", "particle" + Phaser.Math.Between(0, 2));
        var arrColors = [];
        arrColors.push(255 * Math.random());
        arrColors.push(255 * Math.random());
        arrColors.push(255 * Math.random());
        var index = 0;
        var max = arrColors[index];
        if (arrColors[1] > max) {
            max = arrColors[1];
            index = 1;
        }
        if (arrColors[2] > max) {
            max = arrColors[2];
            index = 2;
        }
        arrColors[index] = 254;
        this.color.setTo(arrColors[0], arrColors[1], arrColors[2]);
        this.sprite.tint = this.color.color;
        var startSpeed = (power - (1 - scale)) * Star.POWER;
        this.speed = Phaser.Math.Between(startSpeed * .8, startSpeed * 1.2);
        this.angle = Phaser.Math.DegToRad(360 * Math.random());
        this.vector.setToPolar(this.angle, this.speed);
        this.tween = this.scene.add.tween({
            targets: this.sprite,
            x: this.vector.x,
            y: this.vector.y,
            alpha: 1,
            duration: 500 * Math.random() + 250,
            ease: Phaser.Math.Easing.Sine.Out,
            onComplete: function () {
                _this.free();
            }
        });
    };
    Star.prototype.removeTweens = function () {
        if (this.tween) {
            this.tween.remove();
        }
    };
    Star.prototype.free = function () {
        this.removeTweens();
        this.componentPool.dispose(this);
        this.parentContainer.remove(this);
    };
    Star.POWER = 50;
    return Star;
}(exports_1.Container));
exports.Star = Star;


/***/ }),

/***/ "./src/menu/builders/MenuButtonsBuilder.ts":
/*!*************************************************!*\
  !*** ./src/menu/builders/MenuButtonsBuilder.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BtnLarge_1 = __webpack_require__(/*! ../../ui/views/BtnLarge */ "./src/ui/views/BtnLarge.ts");
var SoundToggle_1 = __webpack_require__(/*! ../../ui/views/SoundToggle */ "./src/ui/views/SoundToggle.ts");
var Button_1 = __webpack_require__(/*! ../../ui/views/Button */ "./src/ui/views/Button.ts");
var MenuButtonsBuilder = (function () {
    function MenuButtonsBuilder() {
    }
    MenuButtonsBuilder.createBtnLargeActive = function (scene, menu, menuButtonsList, iconColor, command) {
        if (iconColor === void 0) { iconColor = "u"; }
        var btn = new BtnLarge_1.BtnLarge(scene, iconColor, "", command);
        menu.add(btn);
        menuButtonsList.push(btn);
    };
    MenuButtonsBuilder.createBtnLargePassive = function (scene, menu, menuButtonsList, toggleId, iconColor) {
        if (iconColor === void 0) { iconColor = "u"; }
        var btn = new SoundToggle_1.SoundToggle(scene, toggleId, iconColor);
        menu.add(btn);
        menuButtonsList.push(btn);
        return btn;
    };
    MenuButtonsBuilder.createBtnSmall = function (scene, menu, menuButtonsList, command) {
        var btn = new Button_1.Button(scene, "btnPink", "", command);
        btn.addLabel("", "aivaStroke", 36, 0, -12);
        btn.x = scene.gameWidth / 2;
        btn.y = 900;
        menu.add(btn);
        menuButtonsList.push(btn);
        return btn;
    };
    return MenuButtonsBuilder;
}());
exports.MenuButtonsBuilder = MenuButtonsBuilder;


/***/ }),

/***/ "./src/menu/constants.ts":
/*!*******************************!*\
  !*** ./src/menu/constants.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuConstants = {
    GAP_BETWEEN_BUTTONS: 125,
    START_BUTTONS_POSITION_Y: 315,
    subMenus: {
        MAIN: 0,
        OPTIONS: 1,
        SCORES: 2
    },
    mainMenu: {
        CONTINUE_GAME: 0,
        NEW_GAME: 1,
        TUTORIAL: 2,
        SCORES: 3,
        OPTIONS: 4
    },
    optionsMenu: {
        SOUNDS: 0,
        MUSIC: 1,
        LANGUAGE: 2,
        POLICY: 3,
        BACK: 4
    }
};


/***/ }),

/***/ "./src/menu/events/MenuEvents.ts":
/*!***************************************!*\
  !*** ./src/menu/events/MenuEvents.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuEvents = {
    RESET_MENU_BUTTONS: "MenuEvents.RESET_MENU_BUTTONS",
    CHANGE_TITLE: "MenuEvents.CHANGE_TITLE",
    HIDE_SUBMENU: "MenuEvents.HIDE_SUBMENU",
    SHOW_SUBMENU: "MenuEvents.SHOW_SUBMENU",
    MUTE_SOUNDS: "MenuEvents.MUTE_SOUNDS"
};


/***/ }),

/***/ "./src/menu/managers/ResetMenuManager.ts":
/*!***********************************************!*\
  !*** ./src/menu/managers/ResetMenuManager.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./src/menu/constants.ts");
var MenuEvents_1 = __webpack_require__(/*! ../events/MenuEvents */ "./src/menu/events/MenuEvents.ts");
var ResetMenuManager = (function () {
    function ResetMenuManager(game) {
        this.game = game;
    }
    ResetMenuManager.prototype.init = function () {
        this.game.events.addListener(MenuEvents_1.MenuEvents.RESET_MENU_BUTTONS, this.onResetMenu, this);
    };
    ResetMenuManager.prototype.free = function () {
        this.game.events.removeListener(MenuEvents_1.MenuEvents.RESET_MENU_BUTTONS, this.onResetMenu, this);
    };
    ResetMenuManager.prototype.onResetMenu = function (data) {
        var countButtons = data.buttons.length - (data.odd || 0);
        var range = +this.game.config.width - data.buttons[0].width;
        var correction = data.buttons[0].width / 2;
        var buttonsIndecies = this.getAllButtonsIndecies(countButtons);
        for (var indexButton = 0; indexButton < countButtons; indexButton++) {
            var indexButtonTemp = buttonsIndecies.splice(Phaser.Math.Between(0, buttonsIndecies.length - 1), 1)[0];
            var button = data.buttons[indexButtonTemp];
            data.menu.remove(button);
            button.y = constants_1.MenuConstants.GAP_BETWEEN_BUTTONS * indexButton + constants_1.MenuConstants.START_BUTTONS_POSITION_Y;
            button.x = range * Math.random() + correction;
            data.menu.add(button);
        }
    };
    ResetMenuManager.prototype.getAllButtonsIndecies = function (count) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(i);
        }
        return arr;
    };
    return ResetMenuManager;
}());
exports.ResetMenuManager = ResetMenuManager;


/***/ }),

/***/ "./src/menu/views/ContainerWithButtons.ts":
/*!************************************************!*\
  !*** ./src/menu/views/ContainerWithButtons.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var ChangeVisibilityUtils_1 = __webpack_require__(/*! ../../utils/ChangeVisibilityUtils */ "./src/utils/ChangeVisibilityUtils.ts");
var ContainerWithButtons = (function (_super) {
    __extends(ContainerWithButtons, _super);
    function ContainerWithButtons() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrButtons = [];
        return _this;
    }
    ContainerWithButtons.prototype.init = function () {
        var _this = this;
        this.language();
        this.alpha = 0;
        ChangeVisibilityUtils_1.ChangeVisibilityUtils.show(this.scene, this, 500, function () { return _this.addListeners(); });
    };
    ContainerWithButtons.prototype.addListeners = function () {
        this.arrButtons.forEach(function (button) {
            button.activate();
        });
    };
    ContainerWithButtons.prototype.removeListeners = function () {
        this.arrButtons.forEach(function (button) {
            button.deactivate();
        });
    };
    ContainerWithButtons.prototype.free = function () {
        this.removeListeners();
    };
    return ContainerWithButtons;
}(exports_1.Container));
exports.ContainerWithButtons = ContainerWithButtons;


/***/ }),

/***/ "./src/menu/views/MainMenu.ts":
/*!************************************!*\
  !*** ./src/menu/views/MainMenu.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var GameProcessEvents_1 = __webpack_require__(/*! ../../data/events/GameProcessEvents */ "./src/data/events/GameProcessEvents.ts");
var ButtonIconsUtils_1 = __webpack_require__(/*! ../../utils/ButtonIconsUtils */ "./src/utils/ButtonIconsUtils.ts");
var MenuButtonsBuilder_1 = __webpack_require__(/*! ../builders/MenuButtonsBuilder */ "./src/menu/builders/MenuButtonsBuilder.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/menu/constants.ts");
var MenuEvents_1 = __webpack_require__(/*! ../events/MenuEvents */ "./src/menu/events/MenuEvents.ts");
var SubMenu_1 = __webpack_require__(/*! ./SubMenu */ "./src/menu/views/SubMenu.ts");
var MainMenu = (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu(scene) {
        var _this = _super.call(this, scene) || this;
        _this.createBtnLargeActive("p", function () { return _this.onContinueGame(); });
        _this.createBtnLargeActive("d", function () { return _this.newGame(); });
        _this.createBtnLargeActive("b", function () { return _this.onStartTutorial(); });
        _this.createBtnLargeActive("r", function () { return _this.onOpenScores(); });
        _this.createBtnLargeActive("g", function () { return _this.onOpenOptions(); });
        return _this;
    }
    MainMenu.prototype.createBtnLargeActive = function (iconColor, command) {
        MenuButtonsBuilder_1.MenuButtonsBuilder.createBtnLargeActive(this.scene, this, this.arrButtons, iconColor, command);
    };
    MainMenu.prototype.onContinueGame = function () {
        this.scene.game.events.emit(GameProcessEvents_1.GameProcessEvents.CONTINUE_GAME);
    };
    MainMenu.prototype.newGame = function () {
        if (!this.isNewGame) {
            this.arrButtons[constants_1.MenuConstants.mainMenu.NEW_GAME].text = Language_1.Language.getText(Language_1.Language.ARE_YOU_SURE);
            var iconName = ButtonIconsUtils_1.ButtonIconsUtils.getIconAnimationName("d2");
            this.arrButtons[constants_1.MenuConstants.mainMenu.NEW_GAME].setIcon(iconName);
            this.isNewGame = true;
        }
        else {
            this.scene.game.events.emit(GameProcessEvents_1.GameProcessEvents.STAT_NEW_GAME);
        }
    };
    MainMenu.prototype.onStartTutorial = function () {
        this.scene.game.events.emit(GameProcessEvents_1.GameProcessEvents.START_TUTORIAL);
    };
    MainMenu.prototype.onOpenScores = function () {
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.SHOW_SUBMENU, constants_1.MenuConstants.subMenus.SCORES);
    };
    MainMenu.prototype.onOpenOptions = function () {
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.SHOW_SUBMENU, constants_1.MenuConstants.subMenus.OPTIONS);
    };
    MainMenu.prototype.init = function () {
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.CHANGE_TITLE, Language_1.Language.getText(Language_1.Language.MENU));
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.RESET_MENU_BUTTONS, {
            menu: this,
            buttons: this.arrButtons
        });
        _super.prototype.init.call(this);
        this.arrButtons[constants_1.MenuConstants.mainMenu.NEW_GAME].text = Language_1.Language.getText(Language_1.Language.NEW_GAME);
        var iconName = ButtonIconsUtils_1.ButtonIconsUtils.getIconAnimationName("d");
        this.arrButtons[constants_1.MenuConstants.mainMenu.NEW_GAME].setIcon(iconName);
        this.isNewGame = false;
    };
    MainMenu.prototype.language = function () {
        this.arrButtons[constants_1.MenuConstants.mainMenu.CONTINUE_GAME].text = Language_1.Language.getText(Language_1.Language.CONTINUE);
        this.arrButtons[constants_1.MenuConstants.mainMenu.NEW_GAME].text = Language_1.Language.getText(Language_1.Language.NEW_GAME);
        this.arrButtons[constants_1.MenuConstants.mainMenu.TUTORIAL].text = Language_1.Language.getText(Language_1.Language.TUTORIAL);
        this.arrButtons[constants_1.MenuConstants.mainMenu.SCORES].text = Language_1.Language.getText(Language_1.Language.SCORES);
        this.arrButtons[constants_1.MenuConstants.mainMenu.OPTIONS].text = Language_1.Language.getText(Language_1.Language.OPTIONS);
    };
    return MainMenu;
}(SubMenu_1.SubMenu));
exports.MainMenu = MainMenu;


/***/ }),

/***/ "./src/menu/views/OptionsMenu.ts":
/*!***************************************!*\
  !*** ./src/menu/views/OptionsMenu.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var Button_1 = __webpack_require__(/*! ../../ui/views/Button */ "./src/ui/views/Button.ts");
var SoundToggle_1 = __webpack_require__(/*! ../../ui/views/SoundToggle */ "./src/ui/views/SoundToggle.ts");
var MenuButtonsBuilder_1 = __webpack_require__(/*! ../builders/MenuButtonsBuilder */ "./src/menu/builders/MenuButtonsBuilder.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/menu/constants.ts");
var MenuEvents_1 = __webpack_require__(/*! ../events/MenuEvents */ "./src/menu/events/MenuEvents.ts");
var SubMenu_1 = __webpack_require__(/*! ./SubMenu */ "./src/menu/views/SubMenu.ts");
var ButtonIconsUtils_1 = __webpack_require__(/*! ../../utils/ButtonIconsUtils */ "./src/utils/ButtonIconsUtils.ts");
var OptionsMenu = (function (_super) {
    __extends(OptionsMenu, _super);
    function OptionsMenu(scene) {
        var _this = _super.call(this, scene) || this;
        _this.URL = "https://play.google.com/store/apps/dev?id=8998397624813711389";
        _this.isDarkEscape = false;
        _this.regulatorSound = MenuButtonsBuilder_1.MenuButtonsBuilder.createBtnLargePassive(_this.scene, _this, _this.arrButtons, SoundToggle_1.SoundToggle.SOUNDS, "o");
        _this.regulatorMusic = MenuButtonsBuilder_1.MenuButtonsBuilder.createBtnLargePassive(_this.scene, _this, _this.arrButtons, SoundToggle_1.SoundToggle.MUSIC, "y");
        MenuButtonsBuilder_1.MenuButtonsBuilder.createBtnLargeActive(_this.scene, _this, _this.arrButtons, "g", function () { return _this.switchLanguage(); });
        MenuButtonsBuilder_1.MenuButtonsBuilder.createBtnLargeActive(_this.scene, _this, _this.arrButtons, "d3", function () { return _this.darkPolicy(); });
        _this.btnBack = MenuButtonsBuilder_1.MenuButtonsBuilder.createBtnSmall(_this.scene, _this, _this.arrButtons, function () { return _this.backToMainMenu(); });
        _this.btnPlayMarket = new Button_1.Button(_this.scene, "playMarket", "", function () { return _this.goToTheAivaGames(); });
        _this.btnPlayMarket.x = _this.scene.gameWidth / 2;
        _this.btnPlayMarket.y = _this.btnBack.y - 100;
        _this.arrButtons.push(_this.btnPlayMarket);
        _this.add(_this.btnPlayMarket);
        return _this;
    }
    OptionsMenu.prototype.backToMainMenu = function () {
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.HIDE_SUBMENU, constants_1.MenuConstants.subMenus.OPTIONS);
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.SHOW_SUBMENU, constants_1.MenuConstants.subMenus.MAIN);
    };
    OptionsMenu.prototype.init = function () {
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.CHANGE_TITLE, Language_1.Language.getText(Language_1.Language.OPTIONS));
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.HIDE_SUBMENU, constants_1.MenuConstants.subMenus.MAIN);
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.RESET_MENU_BUTTONS, {
            menu: this,
            buttons: this.arrButtons,
            odd: 2
        });
        _super.prototype.init.call(this);
        this.regulatorSound.loadVolume(GameDataModel_1.GameDataModel.volumeSounds);
        this.regulatorMusic.loadVolume(GameDataModel_1.GameDataModel.volumeMusic);
    };
    OptionsMenu.prototype.language = function () {
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.CHANGE_TITLE, Language_1.Language.getText(Language_1.Language.OPTIONS));
        this.arrButtons[constants_1.MenuConstants.optionsMenu.SOUNDS].text = Language_1.Language.getText(Language_1.Language.SOUND);
        this.arrButtons[constants_1.MenuConstants.optionsMenu.MUSIC].text = Language_1.Language.getText(Language_1.Language.MUSIC);
        this.arrButtons[constants_1.MenuConstants.optionsMenu.LANGUAGE].text = Language_1.Language.getText(Language_1.Language.LANGUAGE);
        this.switchDark();
        this.arrButtons[constants_1.MenuConstants.optionsMenu.BACK].text = Language_1.Language.getText(Language_1.Language.BACK);
        var iconName = Language_1.Language.current === "rus" ? "g2" : "g3";
        var iconFullName = ButtonIconsUtils_1.ButtonIconsUtils.getIconAnimationName(iconName);
        this.arrButtons[constants_1.MenuConstants.optionsMenu.LANGUAGE].setIcon(iconFullName);
    };
    OptionsMenu.prototype.switchLanguage = function () {
        Language_1.Language.current === "eng"
            ? Language_1.Language.setRussian()
            : Language_1.Language.setEnglish();
        GameDataModel_1.GameDataModel.language = Language_1.Language.current;
        this.scene.gameDataModel.saveData();
        this.language();
    };
    OptionsMenu.prototype.darkPolicy = function () {
        this.isDarkEscape = !this.isDarkEscape;
        GameDataModel_1.GameDataModel.policy = this.isDarkEscape;
        this.scene.gameDataModel.saveData();
        this.switchDark();
    };
    OptionsMenu.prototype.switchDark = function () {
        this.isDarkEscape = true;
        if (GameDataModel_1.GameDataModel.policy !== undefined) {
            this.isDarkEscape = GameDataModel_1.GameDataModel.policy;
        }
        var labelText = this.isDarkEscape
            ? Language_1.Language.getText(Language_1.Language.IS_DARK_ESCAPE)
            : Language_1.Language.getText(Language_1.Language.NOT_DARK_ESCAPE);
        this.arrButtons[constants_1.MenuConstants.optionsMenu.POLICY].text = labelText;
        var iconName = this.isDarkEscape ? "d3" : "d4";
        var iconFullName = ButtonIconsUtils_1.ButtonIconsUtils.getIconAnimationName(iconName);
        this.arrButtons[constants_1.MenuConstants.optionsMenu.POLICY].setIcon(iconFullName);
    };
    OptionsMenu.prototype.goToTheAivaGames = function () {
        if (this.URL !== "") {
            window.open(this.URL);
        }
    };
    return OptionsMenu;
}(SubMenu_1.SubMenu));
exports.OptionsMenu = OptionsMenu;


/***/ }),

/***/ "./src/menu/views/ScoreMenu.ts":
/*!*************************************!*\
  !*** ./src/menu/views/ScoreMenu.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var Achievement_1 = __webpack_require__(/*! ../../ui/components/Achievement */ "./src/ui/components/Achievement.ts");
var Button_1 = __webpack_require__(/*! ../../ui/views/Button */ "./src/ui/views/Button.ts");
var SubMenu_1 = __webpack_require__(/*! ./SubMenu */ "./src/menu/views/SubMenu.ts");
var MenuButtonsBuilder_1 = __webpack_require__(/*! ../builders/MenuButtonsBuilder */ "./src/menu/builders/MenuButtonsBuilder.ts");
var MenuEvents_1 = __webpack_require__(/*! ../events/MenuEvents */ "./src/menu/events/MenuEvents.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/menu/constants.ts");
var constants_2 = __webpack_require__(/*! ../../popups/constants */ "./src/popups/constants.ts");
var PopupEvents_1 = __webpack_require__(/*! ../../popups/events/PopupEvents */ "./src/popups/events/PopupEvents.ts");
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var ScoreMenu = (function (_super) {
    __extends(ScoreMenu, _super);
    function ScoreMenu(scene) {
        var _this = _super.call(this, scene) || this;
        _this.RANGE_Y = 7;
        _this.DELTA_Y_FOR_TABLE = 5;
        _this.btnBack = MenuButtonsBuilder_1.MenuButtonsBuilder.createBtnSmall(_this.scene, _this, _this.arrButtons, function () { return _this.backToMainMenu(); });
        _this.createTable();
        _this.btnTrash = new Button_1.Button(_this.scene, "btnPinkPoint", "iconNo", function () { return _this.clearScores(); });
        _this.btnTrash.x = _this.scene.gameWidth - 35;
        _this.btnTrash.y = 250;
        _this.add(_this.btnTrash);
        return _this;
    }
    ScoreMenu.prototype.backToMainMenu = function () {
        for (var i = 0; i < ScoreMenu.COUNT_POSITIONS; i++) {
            this.table[i].free();
        }
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.HIDE_SUBMENU, constants_1.MenuConstants.subMenus.SCORES);
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.SHOW_SUBMENU, constants_1.MenuConstants.subMenus.MAIN);
    };
    ScoreMenu.prototype.clearScores = function () {
        var _this = this;
        this.spriteTable.alpha = 0;
        this.btnBack.deactivate();
        this.btnTrash.deactivate();
        var popupOptions = {
            id: constants_2.PopupConstants.ids.POPUP_APPROVE,
            yes: function () { return _this.clearScoresAnyway(); },
            no: function () { return _this.init(); }
        };
        this.scene.game.events.emit(PopupEvents_1.PopupEvents.SHOW_POPUP, popupOptions);
    };
    ScoreMenu.prototype.clearScoresAnyway = function () {
        for (var i = 0; i < ScoreMenu.COUNT_POSITIONS; i++) {
            this.table[i].free();
        }
        this.init();
    };
    ScoreMenu.prototype.createTable = function () {
        this.spriteTable = this.scene.add.container(this.scene.gameWidth * .5, this.scene.gameHeight * .5);
        this.add(this.spriteTable);
        var achievement;
        this.table = [];
        for (var i = 0; i < ScoreMenu.COUNT_POSITIONS; i++) {
            achievement = new Achievement_1.Achievement(this.scene);
            this.spriteTable.add(achievement);
            this.table.push(achievement);
        }
    };
    ScoreMenu.prototype.init = function (index) {
        if (index === void 0) { index = -1; }
        this.index = index;
        this.btnBack.activate();
        this.btnTrash.activate();
        this.spriteTable.alpha = 1;
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.CHANGE_TITLE, Language_1.Language.getText(Language_1.Language.SCORES));
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.HIDE_SUBMENU, constants_1.MenuConstants.subMenus.MAIN);
        _super.prototype.init.call(this);
        this.showScores(index);
    };
    ScoreMenu.prototype.showScores = function (indexActive) {
        if (indexActive === void 0) { indexActive = -1; }
        var index = 0;
        var state = "active";
        for (var i = 0; i < ScoreMenu.COUNT_POSITIONS; i++) {
            var score = GameDataModel_1.GameDataModel.scores[i];
            var color = score.monsterColor === "unknown"
                ? score.monsterColor
                : state + score.monsterColor.toUpperCase() + this.round(i);
            this.updateAchevement(i, index, color, score.playerName, score.score, indexActive);
        }
        this.refreshPositionsTable();
    };
    ScoreMenu.prototype.updateAchevement = function (indexInTable, index, color, playerName, score, isActive) {
        if (color === void 0) { color = "u"; }
        if (playerName === void 0) { playerName = "???"; }
        if (score === void 0) { score = "---"; }
        if (isActive === void 0) { isActive = -1; }
        this.table[indexInTable].init(color, playerName, score, isActive === indexInTable);
        var scale = 1 - Math.abs(indexInTable - index) * .1;
        scale = scale < .7 ? .7 : scale;
        this.table[indexInTable].scaleX = this.table[indexInTable].scaleY = scale;
    };
    ScoreMenu.prototype.refreshPositionsTable = function () {
        this.table[0].y = 0;
        for (var i = 1; i < ScoreMenu.COUNT_POSITIONS; i++) {
            this.table[i].x = 0;
            this.table[i].y = this.table[i - 1].y + this.table[i - 1].height * .5 + this.table[i].height * .5 + this.RANGE_Y;
        }
        this.spriteTable.y = this.scene.gameWidth * .5 - this.spriteTable.height / 2 + this.DELTA_Y_FOR_TABLE;
    };
    ScoreMenu.prototype.round = function (index) {
        index++;
        index = index > 4 ? 4 : index;
        return index;
    };
    ScoreMenu.prototype.language = function () {
        this.btnBack.text = Language_1.Language.getText(Language_1.Language.BACK);
    };
    ScoreMenu.COUNT_POSITIONS = 6;
    return ScoreMenu;
}(SubMenu_1.SubMenu));
exports.ScoreMenu = ScoreMenu;


/***/ }),

/***/ "./src/menu/views/SubMenu.ts":
/*!***********************************!*\
  !*** ./src/menu/views/SubMenu.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ContainerWithButtons_1 = __webpack_require__(/*! ./ContainerWithButtons */ "./src/menu/views/ContainerWithButtons.ts");
var SubMenu = (function (_super) {
    __extends(SubMenu, _super);
    function SubMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubMenu.prototype.hide = function () {
        this.free();
        this.alpha = 0;
    };
    SubMenu.prototype.language = function () {
    };
    return SubMenu;
}(ContainerWithButtons_1.ContainerWithButtons));
exports.SubMenu = SubMenu;


/***/ }),

/***/ "./src/menu/views/TitleMenu.ts":
/*!*************************************!*\
  !*** ./src/menu/views/TitleMenu.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var MenuEvents_1 = __webpack_require__(/*! ../events/MenuEvents */ "./src/menu/events/MenuEvents.ts");
var TitleMenu = (function (_super) {
    __extends(TitleMenu, _super);
    function TitleMenu(scene) {
        var _this = _super.call(this, scene) || this;
        _this.background = _this.scene.add.image(0, 0, "ui", "panelBottom");
        _this.background.setOrigin(.5, 0);
        _this.add(_this.background);
        _this.tfTitle = _this.scene.add.bitmapText(0, _this.background.height / 5 * 2, "aivaGold", "", 65);
        _this.tfTitle.setOrigin(.5);
        _this.add(_this.tfTitle);
        return _this;
    }
    TitleMenu.prototype.init = function () {
        this.scene.game.events.addListener(MenuEvents_1.MenuEvents.CHANGE_TITLE, this.onChangeTitle, this);
    };
    TitleMenu.prototype.free = function () {
        this.scene.game.events.removeListener(MenuEvents_1.MenuEvents.CHANGE_TITLE, this.onChangeTitle, this);
    };
    TitleMenu.prototype.onChangeTitle = function (txt) {
        this.tfTitle.text = txt;
    };
    return TitleMenu;
}(exports_1.Container));
exports.TitleMenu = TitleMenu;


/***/ }),

/***/ "./src/monsters/constants.ts":
/*!***********************************!*\
  !*** ./src/monsters/constants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PathfinderUtils_1 = __webpack_require__(/*! ../map/utils/PathfinderUtils */ "./src/map/utils/PathfinderUtils.ts");
var MonsterColor;
(function (MonsterColor) {
    MonsterColor["RED"] = "RED";
    MonsterColor["ORANGE"] = "ORANGE";
    MonsterColor["YELLOW"] = "YELLOW";
    MonsterColor["GREEN"] = "GREEN";
    MonsterColor["BLUE"] = "BLUE";
    MonsterColor["PURPLE"] = "PURPLE";
    MonsterColor["DARK"] = "DARK";
})(MonsterColor = exports.MonsterColor || (exports.MonsterColor = {}));
exports.MonsterConstants = {
    RED: {
        color: MonsterColor.RED,
        colorChar: "R",
        countInLineMin: 5,
        costOne: 2,
        typePathfinder: PathfinderUtils_1.PathfinderUtils.TYPE_NORMAL,
        pathfinderMaxTurns: PathfinderUtils_1.PathfinderUtils.MAX_TURN
    },
    ORANGE: {
        color: MonsterColor.ORANGE,
        colorChar: "O",
        countInLineMin: 5,
        costOne: 1,
        typePathfinder: PathfinderUtils_1.PathfinderUtils.TYPE_NORMAL,
        pathfinderMaxTurns: PathfinderUtils_1.PathfinderUtils.MAX_TURN
    },
    YELLOW: {
        color: MonsterColor.YELLOW,
        colorChar: "Y",
        countInLineMin: 4,
        costOne: 1,
        typePathfinder: PathfinderUtils_1.PathfinderUtils.TYPE_NORMAL,
        pathfinderMaxTurns: PathfinderUtils_1.PathfinderUtils.MAX_TURN
    },
    GREEN: {
        color: MonsterColor.GREEN,
        colorChar: "G",
        countInLineMin: 6,
        costOne: 1,
        typePathfinder: PathfinderUtils_1.PathfinderUtils.TYPE_NORMAL,
        pathfinderMaxTurns: PathfinderUtils_1.PathfinderUtils.MAX_TURN
    },
    BLUE: {
        color: MonsterColor.BLUE,
        colorChar: "B",
        countInLineMin: 5,
        costOne: 1,
        typePathfinder: PathfinderUtils_1.PathfinderUtils.TYPE_NORMAL,
        pathfinderMaxTurns: PathfinderUtils_1.PathfinderUtils.MAX_TURN
    },
    PURPLE: {
        color: MonsterColor.PURPLE,
        colorChar: "P",
        countInLineMin: 5,
        costOne: 1,
        typePathfinder: PathfinderUtils_1.PathfinderUtils.TYPE_DIAGONAL,
        pathfinderMaxTurns: PathfinderUtils_1.PathfinderUtils.MAX_TURN
    },
    DARK: {
        color: MonsterColor.DARK,
        colorChar: "D",
        countInLineMin: 4,
        costOne: 0,
        typePathfinder: PathfinderUtils_1.PathfinderUtils.TYPE_DIAGONAL,
        pathfinderMaxTurns: 2
    }
};


/***/ }),

/***/ "./src/monsters/views/Monster.ts":
/*!***************************************!*\
  !*** ./src/monsters/views/Monster.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CursorEvents_1 = __webpack_require__(/*! ../../cursor/events/CursorEvents */ "./src/cursor/events/CursorEvents.ts");
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var GameProcessModel_1 = __webpack_require__(/*! ../../data/models/GameProcessModel */ "./src/data/models/GameProcessModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var MapEvents_1 = __webpack_require__(/*! ../../map/events/MapEvents */ "./src/map/events/MapEvents.ts");
var MapModel_1 = __webpack_require__(/*! ../../map/models/MapModel */ "./src/map/models/MapModel.ts");
var LinefinderUtils_1 = __webpack_require__(/*! ../../map/utils/LinefinderUtils */ "./src/map/utils/LinefinderUtils.ts");
var TutorialEvents_1 = __webpack_require__(/*! ../../panels/events/TutorialEvents */ "./src/panels/events/TutorialEvents.ts");
var EnterFrameManager_1 = __webpack_require__(/*! ../../scenes/managers/EnterFrameManager */ "./src/scenes/managers/EnterFrameManager.ts");
var AMath_1 = __webpack_require__(/*! ../../utils/AMath */ "./src/utils/AMath.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/monsters/constants.ts");
var TutorialScene_1 = __webpack_require__(/*! ../../scenes/views/TutorialScene */ "./src/scenes/views/TutorialScene.ts");
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster(scene) {
        var _this = _super.call(this, scene) || this;
        _this._way = [];
        _this.mapModel = new MapModel_1.MapModel();
        _this.gameProcessModel = new GameProcessModel_1.GameProcessModel(_this.scene.game);
        _this.linefinder = new LinefinderUtils_1.LinefinderUtils(_this.scene.game);
        _this.sprite = _this.scene.add.sprite(0, 0, "");
        _this.vector = new exports_1.Vector2();
        _this._point = new exports_1.Point();
        _this.numberOfAnim = 1;
        return _this;
    }
    Monster.prototype.setMonsterData = function (model) {
        this.model = model;
    };
    Monster.prototype.init = function (tileX, tileY) {
        this._move = false;
        this._isFree = false;
        this._select = false;
        this._isWaiting = false;
        this._isOutGame = false;
        this.x = MapModel_1.MapModel.toPix(tileX);
        this.y = MapModel_1.MapModel.toPix(tileY);
        this._point.x = MapModel_1.MapModel.toTile(this.x);
        this._point.y = MapModel_1.MapModel.toTile(this.y);
        this._state = Monster.INGAME;
        this.switchAnim("ingame", false, 1.5);
        this.add(this.sprite);
        this.mapModel.addMonster(this);
        EnterFrameManager_1.EnterFrameManager.add(this);
        this.updateDepth();
    };
    Monster.prototype.onUpdate = function (delta) {
        if (this._isFree) {
            this.free();
            return;
        }
        if (this.sprite.anims.getProgress() >= 1) {
            var tileX = MapModel_1.MapModel.toTile(this.x);
            var tileY = MapModel_1.MapModel.toTile(this.y);
            switch (this._state) {
                case Monster.OUT:
                    break;
                case Monster.INGAME:
                    this._state = Monster.OUT;
                    this.switchAnim("out", false);
                    if (this.gameProcessModel.isTutorial) {
                        this.scene.game.events.emit(TutorialEvents_1.TutorialEvents.NAVIGATOR_SHOW, this);
                    }
                    break;
                case Monster.OUTGAME:
                    this.mapModel.removeMonster(this);
                    this._isFree = true;
                    break;
                case Monster.PORTAL_VISIBLE:
                    this._state = Monster.OUT;
                    this.switchAnim("out", false);
                    this.sprite.anims.reverse();
                    this.gameProcessModel.dontMove = false;
                    this.mapModel.mapMask[tileY][tileX] = 1;
                    this.mapModel.mapColor[tileY][tileX] = this.color;
                    this.mapModel.mapMonsters[tileY][tileX] = this;
                    this.linefinder.searchMain(tileY, tileX, this.color, this.min, this.cost);
                    this.updateDepth();
                    if (this.gameProcessModel.isTutorial && this._state !== Monster.OUTGAME) {
                        this.scene.game.events.emit(TutorialEvents_1.TutorialEvents.NAVIGATOR_SHOW, this);
                    }
                    break;
                case Monster.PORTAL_INVISIBLE:
                    this.scene.game.events.emit(TutorialEvents_1.TutorialEvents.NAVIGATOR_HIDE);
                    this.x = MapModel_1.MapModel.toPix(this.mapModel.pointEnd.x);
                    this.y = MapModel_1.MapModel.toPix(this.mapModel.pointEnd.y);
                    this._point.x = tileX;
                    this._point.y = tileX;
                    this._state = Monster.PORTAL_VISIBLE;
                    this.sprite.anims.reverse();
                    this.playSound(this.animName);
                    break;
                case Monster.OVER:
                    this._state = Monster.OVER_STOP;
                    this.switchAnim("overStop", true);
                    break;
                case Monster.CLICK:
                    this._state = Monster.CLICK_STOP;
                    this.switchAnim("clickStop", true);
                    break;
                case Monster.ANIM_OUT:
                    this._state = Monster.OUT;
                    this.switchAnim("out", false);
                    break;
                case Monster.ANIM_OVER:
                    this._state = Monster.OVER_STOP;
                    this.switchAnim("overStop", true);
                    break;
                case Monster.ANIM_CLICK:
                    this._state = Monster.CLICK_STOP;
                    this.switchAnim("clickStop", true);
                    break;
                case Monster.ESCAPE:
                    this._state = Monster.ESCAPE_STOP;
                    this.switchAnim("escapeStop", true, 1.5);
                    this.gameProcessModel.dontMove = true;
                    this._move = true;
                    break;
                case Monster.INSULT:
                    this._state = Monster.OUT;
                    this.switchAnim("out", false);
                    break;
                case Monster.ABORT:
                    this._state = Monster.CLICK_STOP;
                    this.switchAnim("clickStop", true);
                    break;
            }
        }
        if (this._move) {
            this._wayX = MapModel_1.MapModel.toPix(this._way[this._step].x);
            this._wayY = MapModel_1.MapModel.toPix(this._way[this._step].y);
            if (!AMath_1.AMath.equal(this.x, this._wayX, Math.abs(this.vector.x * delta))) {
                this.x += this.vector.x * delta;
            }
            else {
                this.x = this._wayX;
            }
            if (!AMath_1.AMath.equal(this.y, this._wayY, Math.abs(this.vector.y * delta))) {
                this.y += this.vector.y * delta;
            }
            else {
                this.y = this._wayY;
            }
            this.updateDepth();
            if (AMath_1.AMath.distance(this.x, this.y, this._wayX, this._wayY) <= 4) {
                if (this._step > 0) {
                    var angle = AMath_1.AMath.getAngleRad(this._way[this._step].x, this._way[this._step].y, this._way[this._step - 1].x, this._way[this._step - 1].y);
                    if (this._state === Monster.ESCAPE_STOP) {
                        this.vector.setToPolar(angle, Monster.SPEED * .25);
                    }
                    else {
                        this.vector.setToPolar(angle, Monster.SPEED);
                    }
                }
                this._step--;
                if (this._step < 0) {
                    this.x = MapModel_1.MapModel.toPix(this._way[0].x);
                    this.y = MapModel_1.MapModel.toPix(this._way[0].y);
                    this._point.x = MapModel_1.MapModel.toTile(this.x);
                    this._point.y = MapModel_1.MapModel.toTile(this.y);
                    this.updateDepth();
                    this._move = false;
                    this._way = [];
                    this.sprite.off("animationcomplete", this.jump, this);
                    this._state = Monster.OUT;
                    this.switchAnim("out", false);
                    this.mapModel.takePlace(this);
                    this.gameProcessModel.dontMove = false;
                    this.linefinder.searchMain(MapModel_1.MapModel.toTile(this.y), MapModel_1.MapModel.toTile(this.x), this.color, this.min, this.cost);
                    if (this.gameProcessModel.isTutorial && this._state !== Monster.OUTGAME) {
                        this.scene.game.events.emit(TutorialEvents_1.TutorialEvents.NAVIGATOR_SHOW, this);
                    }
                }
            }
            return;
        }
        this.cursorReaction();
    };
    Monster.prototype.updateDepth = function () {
        this._depth = this.x + this.y * 10;
        this.setDepth(this._depth);
        this.scene.game.events.emit(MapEvents_1.MapEvents.UPDATE_DEPTHS);
    };
    Monster.prototype.cursorReaction = function () {
    };
    Monster.prototype.setAnim = function () {
        switch (this._state) {
            case Monster.OUT:
                this._state = Monster.ANIM_OUT;
                this.switchAnim("outAnim" + this.numberOfAnim, false);
                this.playSound(this.animName);
                break;
            case Monster.OVER_STOP:
                this._state = Monster.ANIM_OVER;
                this.switchAnim("overAnim" + this.numberOfAnim, false);
                this.playSound(this.animName);
                break;
            case Monster.CLICK_STOP:
                this._state = Monster.ANIM_CLICK;
                this.switchAnim("clickAnim" + this.numberOfAnim, false);
                this.playSound(this.animName);
                break;
        }
        this.numberOfAnim %= Monster.COUNT_ANIMATIONS;
        this.numberOfAnim++;
    };
    Monster.prototype.free = function () {
        this.sprite.anims.stop();
        this.parentContainer.remove(this);
        this._select = false;
        this.showMoveZoneWithCheck();
        EnterFrameManager_1.EnterFrameManager.remove(this);
    };
    Monster.prototype.setWay = function (arr) {
        this._way = arr;
        if (this.isWay() && !this.gameProcessModel.dontMove) {
            this.scene.game.events.emit(MapEvents_1.MapEvents.CHOICE_HIDE, { y: MapModel_1.MapModel.toTile(this.y), x: MapModel_1.MapModel.toTile(this.x) });
            this.mapModel.activeMonster = null;
            this.gameProcessModel.dontMove = true;
            this._move = true;
            this._step = this._way.length - 1;
            this._select = false;
            this._isWaiting = false;
            this.mapModel.isGreen = false;
            this.mapModel.isMagic = false;
            this._state = Monster.MOVE;
            this.switchAnim("move", false, Monster.MOVE_ANIMATION_KOEF);
            this.playSound(this.animName);
            this.sprite.on("animationcomplete", this.jump, this);
            var angle = AMath_1.AMath.getAngleRad(this._way[this._step].x, this._way[this._step].y, this._way[this._step - 1].x, this._way[this._step - 1].y);
            this.vector.setToPolar(angle, Monster.SPEED);
            this.mapModel.leavePlace(this.point.y, this.point.x);
            if (this.gameProcessModel.isTutorial) {
                this.scene.game.events.emit(TutorialEvents_1.TutorialEvents.NAVIGATOR_HIDE);
            }
            this.showMoveZoneWithCheck();
        }
        else {
            this._state = Monster.ABORT;
            this.switchAnim("abort", false);
            this.playSound(this.animName);
            if (this.gameProcessModel.isTutorial) {
                this.scene.game.events.emit(TutorialEvents_1.TutorialEvents.NAVIGATOR_SHOW, this);
            }
        }
    };
    Monster.prototype.isWay = function () {
        return this._way.length > 1;
    };
    Monster.prototype.portal = function () {
        if (!this.gameProcessModel.dontMove) {
            var tileX = MapModel_1.MapModel.toTile(this.x);
            var tileY = MapModel_1.MapModel.toTile(this.y);
            this.scene.game.events.emit(MapEvents_1.MapEvents.CHOICE_HIDE, { y: tileY, x: tileX });
            this.mapModel.activeMonster = null;
            this.gameProcessModel.dontMove = true;
            this._select = false;
            this._isWaiting = false;
            this._state = Monster.PORTAL_INVISIBLE;
            this.switchAnim("portal", false, 1.5);
            this.playSound(this.animName);
            this.mapModel.mapMask[tileY][tileX] = 0;
            this.mapModel.mapColor[tileY][tileX] = "";
        }
    };
    Monster.prototype.setEscape = function (arr) {
    };
    Monster.prototype.outGame = function () {
        if (this._select) {
            this.scene.game.events.emit(MapEvents_1.MapEvents.CHOICE_HIDE, { y: MapModel_1.MapModel.toTile(this.y), x: MapModel_1.MapModel.toTile(this.x) });
            this.mapModel.isGreen = false;
            this.mapModel.activeMonster = null;
        }
        this._select = false;
        this._isWaiting = false;
        this._isOutGame = true;
        this._state = Monster.OUTGAME;
        this.switchAnim("outgame", false);
        this.playSound(this.animName);
    };
    Monster.prototype.playSound = function (soundID) {
        this.str = this.colorChar.toUpperCase();
        this.str2 = soundID.charAt(0).toUpperCase();
        this.str3 = soundID.substr(1);
        if (soundID === "move" || soundID === "portal" || soundID === "abort") {
            this.fullID = this.str2 + this.str3;
        }
        else {
            this.fullID = this.str + this.str2 + this.str3;
        }
        if (this.scene.game.cache.audio.get(this.fullID)) {
            this.scene.sound.play(this.fullID, { volume: GameDataModel_1.GameDataModel.volumeSounds });
        }
    };
    Monster.prototype.isPortal = function () {
        return (this._state === Monster.PORTAL_VISIBLE || this._state === Monster.PORTAL_INVISIBLE);
    };
    Monster.prototype.switchAnim = function (anim, loop, koeff) {
        if (koeff === void 0) { koeff = 1; }
        this.sprite.play(anim + this.colorChar, false, 0);
        this.sprite.anims.setRepeat(loop ? -1 : 0);
        this.sprite.anims.setTimeScale(koeff);
        this.animName = anim;
    };
    Monster.prototype.jump = function () {
        this.switchAnim("move", false, Monster.MOVE_ANIMATION_KOEF);
        this.playSound(this.animName);
    };
    Monster.prototype.onClickHandler = function () {
        if (!this._move && !this.isPortal()) {
            if (this._state !== Monster.OUTGAME && this._state !== Monster.INGAME) {
                if (!this.mapModel.isKill) {
                    if (this.mapModel.activeMonster && this.mapModel.activeMonster !== this) {
                        this.mapModel.activeMonster.select = false;
                        this.mapModel.activeMonster.isWaiting = false;
                        this.mapModel.activeMonster._state = Monster.INSULT;
                        this.mapModel.activeMonster.switchAnim("insult", false);
                        this.mapModel.activeMonster.playSound(this.animName);
                        this.showMoveZoneWithCheck();
                    }
                    if (!this._isWaiting) {
                        this.scene.game.events.emit(MapEvents_1.MapEvents.CHOICE_SHOW, { y: this.y, x: this.x });
                        this._select = true;
                        this._isWaiting = true;
                        this._state = Monster.CLICK;
                        this.switchAnim("click", false);
                        this.playSound(this.animName);
                        if (this.color === constants_1.MonsterColor.GREEN) {
                            this.mapModel.isGreen = true;
                        }
                        else {
                            this.mapModel.isGreen = false;
                            this.scene.game.events.emit(CursorEvents_1.CursorEvents.RESET);
                        }
                        this.mapModel.activeMonster = this;
                        this.showMoveZoneWithCheck();
                    }
                    this._point.x = MapModel_1.MapModel.toTile(this.x);
                    this._point.y = MapModel_1.MapModel.toTile(this.y);
                    this.mapModel.pointStart = this._point;
                }
            }
        }
    };
    Monster.prototype.showMoveZoneWithCheck = function () {
        if (this.gameProcessModel.isTutorial) {
            if (this._select && this.color === constants_1.MonsterColor.DARK && this.gameProcessModel.advice === TutorialScene_1.TutorialScene.TUTORIAL_12) {
                this.scene.game.events.emit(TutorialEvents_1.TutorialEvents.MOVE_ZONE_SHOW, this);
                return;
            }
            this.scene.game.events.emit(TutorialEvents_1.TutorialEvents.MOVE_ZONE_HIDE);
        }
    };
    Object.defineProperty(Monster.prototype, "color", {
        get: function () {
            return this.model.color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "colorChar", {
        get: function () {
            return this.model.colorChar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "min", {
        get: function () {
            return this.model.countInLineMin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "cost", {
        get: function () {
            return this.model.costOne;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "isElvis", {
        get: function () {
            return this.model.color === constants_1.MonsterColor.YELLOW;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "isFree", {
        get: function () {
            return this._isFree;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "select", {
        get: function () { return this._select; },
        set: function (value) { this._select = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "isWaiting", {
        get: function () { return this._isWaiting; },
        set: function (value) { this._isWaiting = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "depth", {
        get: function () { return this._depth; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "point", {
        get: function () { return this._point; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "typePathfinder", {
        get: function () { return this.model.typePathfinder; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "maxTurn", {
        get: function () { return this.model.pathfinderMaxTurns; },
        enumerable: true,
        configurable: true
    });
    Monster.INGAME = 1;
    Monster.OUT = 2;
    Monster.OVER = 3;
    Monster.OVER_STOP = 4;
    Monster.CLICK = 5;
    Monster.CLICK_STOP = 6;
    Monster.MOVE = 7;
    Monster.PORTAL_INVISIBLE = 8;
    Monster.PORTAL_VISIBLE = 9;
    Monster.OUTGAME = 10;
    Monster.INSULT = 11;
    Monster.ANIM_OUT = 12;
    Monster.ANIM_OVER = 13;
    Monster.ANIM_CLICK = 14;
    Monster.ABORT = 15;
    Monster.ESCAPE_STOP = 16;
    Monster.ESCAPE = 17;
    Monster.SPEED = 700;
    Monster.MOVE_ANIMATION_KOEF = 2.5;
    Monster.RADIUS = 130;
    Monster.COUNT_ANIMATIONS = 3;
    return Monster;
}(exports_1.Container));
exports.Monster = Monster;


/***/ }),

/***/ "./src/monsters/views/Spark.ts":
/*!*************************************!*\
  !*** ./src/monsters/views/Spark.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var ShakerUtils_1 = __webpack_require__(/*! ../../utils/ShakerUtils */ "./src/utils/ShakerUtils.ts");
var ComponentPool_1 = __webpack_require__(/*! ../../utils/ComponentPool */ "./src/utils/ComponentPool.ts");
var Spark = (function (_super) {
    __extends(Spark, _super);
    function Spark(scene) {
        var _this = _super.call(this, scene) || this;
        _this.shaker = new ShakerUtils_1.ShakerUtils();
        _this.componentPool == new ComponentPool_1.ComponentPool();
        _this.sprite = _this.scene.add.sprite(0, 0, "");
        return _this;
    }
    Spark.prototype.init = function (posX, posY) {
        this.x = posX;
        this.y = posY;
        this.sprite.play("spark");
        this.add(this.sprite);
        this.sprite.on(Phaser.Animations.Events.ANIMATION_COMPLETE, this.free, this);
        this.shaker.start(this.scene.resizeContainer);
    };
    Spark.prototype.free = function () {
        this.sprite.off(Phaser.Animations.Events.ANIMATION_COMPLETE, this.free, this);
        this.sprite.anims.stop();
        this.remove(this.sprite);
        this.parentContainer.remove(this);
        this.componentPool.dispose(this);
    };
    return Spark;
}(exports_1.Container));
exports.Spark = Spark;


/***/ }),

/***/ "./src/panels/data/QuestsVO.ts":
/*!*************************************!*\
  !*** ./src/panels/data/QuestsVO.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var QuestsVO = (function () {
    function QuestsVO() {
        this.COUNTDOWN_TOTAL = 20;
        this.QUEST_ID = 0;
        this.QUEST_COUNTDOWN = 1;
        this.QUEST_CHALLENGES = 2;
        this.arrQuests = [];
        this.arrChallenges = [[], [], []];
        this.gameDataModel = new GameDataModel_1.GameDataModel();
        this.init();
    }
    QuestsVO.prototype.init = function () {
        this.arrChallenges = [[], [], []];
        this.arrQuests[this.QUEST_ID] = "";
        this.arrQuests[this.QUEST_COUNTDOWN] = this.COUNTDOWN_TOTAL;
        this.arrQuests[this.QUEST_CHALLENGES] = this.arrChallenges;
    };
    QuestsVO.prototype.parseLoadingData = function (arr) {
        if (arr && arr.length > 0) {
            this.arrQuests[this.QUEST_ID] = arr[this.QUEST_ID];
            this.arrQuests[this.QUEST_COUNTDOWN] = arr[this.QUEST_COUNTDOWN];
            this.arrChallenges = arr[this.QUEST_CHALLENGES];
        }
        else {
            this.init();
        }
    };
    QuestsVO.prototype.initNewQuests = function (questID) {
        this.arrQuests[this.QUEST_ID] = questID;
    };
    QuestsVO.prototype.updateCountdown = function (countdown) {
        this.arrQuests[this.QUEST_COUNTDOWN] = countdown;
    };
    QuestsVO.prototype.updateChallenge = function (index, color, points, count) {
        this.arrChallenges[index][QuestsVO.CHALLENGE_COLOR] = color;
        this.arrChallenges[index][QuestsVO.CHALLENGE_POINTS] = points;
        this.arrChallenges[index][QuestsVO.CHALLENGE_COUNT] = count;
        this.arrQuests[this.QUEST_CHALLENGES] = this.arrChallenges;
    };
    QuestsVO.prototype.updateChallengeFromQuest = function (quest) {
        var countQuests = this.arrChallenges.length;
        for (var i = 0; i < countQuests; i++) {
            if (this.arrChallenges[i][QuestsVO.CHALLENGE_COLOR] == quest.color) {
                this.arrChallenges[i][QuestsVO.CHALLENGE_COUNT] = quest.count;
            }
        }
    };
    QuestsVO.prototype.clearChallenge = function (color) {
        for (var i = 0; i < this.arrChallenges.length; i++) {
            if (this.arrChallenges[i][QuestsVO.CHALLENGE_COLOR] == color) {
                this.updateChallenge(i, -1, 0, 0);
                break;
            }
        }
    };
    QuestsVO.prototype.getColor = function (index) {
        if (this.arrChallenges[index][QuestsVO.CHALLENGE_COLOR] == undefined) {
            return -1;
        }
        return this.arrChallenges[index][QuestsVO.CHALLENGE_COLOR];
    };
    QuestsVO.prototype.getCount = function (index) {
        return this.arrChallenges[index][QuestsVO.CHALLENGE_COUNT];
    };
    QuestsVO.prototype.getPoints = function (index) {
        return this.arrChallenges[index][QuestsVO.CHALLENGE_POINTS];
    };
    QuestsVO.prototype.getValueFromColor = function (color, value) {
        for (var i = 0; i < this.arrChallenges.length; i++) {
            if (this.arrChallenges[i][QuestsVO.CHALLENGE_COLOR] == color) {
                return this.arrChallenges[i][value];
            }
        }
        return 0;
    };
    QuestsVO.prototype.saveData = function () {
        GameDataModel_1.GameDataModel.quests = this.arrQuests;
        this.gameDataModel.saveData();
    };
    Object.defineProperty(QuestsVO.prototype, "questID", {
        get: function () { return this.arrQuests[this.QUEST_ID]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestsVO.prototype, "countdown", {
        get: function () { return this.arrQuests[this.QUEST_COUNTDOWN]; },
        enumerable: true,
        configurable: true
    });
    QuestsVO.CHALLENGE_COLOR = 0;
    QuestsVO.CHALLENGE_POINTS = 1;
    QuestsVO.CHALLENGE_COUNT = 2;
    return QuestsVO;
}());
exports.QuestsVO = QuestsVO;


/***/ }),

/***/ "./src/panels/events/SeasonsEvents.ts":
/*!********************************************!*\
  !*** ./src/panels/events/SeasonsEvents.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonsEvents = {
    CHANGE_SEASON: "SeasonsEvents.CHANGE_SEASON"
};


/***/ }),

/***/ "./src/panels/events/TutorialEvents.ts":
/*!*********************************************!*\
  !*** ./src/panels/events/TutorialEvents.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialEvents = {
    CHANGE_TUTORIAL: "TutorialEvents.CHANGE_TUTORIAL",
    NAVIGATOR_SHOW: "TutorialEvents.NAVIGATOR_SHOW",
    NAVIGATOR_HIDE: "TutorialEvents.NAVIGATOR_HIDE",
    MOVE_ZONE_SHOW: "TutorialEvents.MOVE_ZONE_SHOW",
    MOVE_ZONE_HIDE: "TutorialEvents.MOVE_ZONE_HIDE"
};


/***/ }),

/***/ "./src/panels/views/Nexter.ts":
/*!************************************!*\
  !*** ./src/panels/views/Nexter.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var GameProcessEvents_1 = __webpack_require__(/*! ../../data/events/GameProcessEvents */ "./src/data/events/GameProcessEvents.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var ColorIDsUtils_1 = __webpack_require__(/*! ../../utils/ColorIDsUtils */ "./src/utils/ColorIDsUtils.ts");
var Nexter = (function (_super) {
    __extends(Nexter, _super);
    function Nexter(scene) {
        var _this = _super.call(this, scene) || this;
        _this.COUNT_MONSTERS = 3;
        _this.POS_X = 70;
        _this.add(_this.scene.add.image(0, 0, "ui", "panelNext"));
        _this.title = _this.scene.add.bitmapText(0, 0, "aivaStroke", "", 23).setOrigin(.5, 0);
        _this.add(_this.title);
        _this.vNexts = [];
        for (var i = 0, j = -1; i < _this.COUNT_MONSTERS; i++, j++) {
            var mc = _this.scene.add.image(0, 0, "ui", "next0");
            mc.setOrigin(.5, 1);
            mc.y = (i % 2 == 0) ? 0 : 10;
            mc.x = j * _this.POS_X;
            _this.add(mc);
            _this.vNexts.push(mc);
        }
        return _this;
    }
    Nexter.prototype.init = function () {
        this.vNexts.forEach(function (nextMonster) { return nextMonster.setScale(0); });
        this.scene.game.events.addListener(GameProcessEvents_1.GameProcessEvents.SET_NEXT_MONSTERS, this.onSetNextMonster, this);
    };
    Nexter.prototype.free = function () {
        this.scene.game.events.removeListener(GameProcessEvents_1.GameProcessEvents.SET_NEXT_MONSTERS, this.onSetNextMonster, this);
    };
    Nexter.prototype.onSetNextMonster = function (data) {
        var _this = this;
        this.arrNext = data;
        var _loop_1 = function (i) {
            this_1.scene.add.tween({
                targets: this_1.vNexts[i],
                scaleX: 0,
                scaleY: 0,
                duration: 200,
                onComplete: function () { return (i == _this.COUNT_MONSTERS - 1) ? _this.showNextMonster() : null; }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.COUNT_MONSTERS; i++) {
            _loop_1(i);
        }
    };
    Nexter.prototype.showNextMonster = function () {
        for (var i = 0; i < this.COUNT_MONSTERS; i++) {
            this.vNexts[i].setTexture("ui", "next" + ColorIDsUtils_1.ColorIDsUtils.getIndexFromColor(this.arrNext[i]));
            this.scene.add.tween({
                targets: this.vNexts[i],
                scaleX: 1,
                scaleY: 1,
                duration: 200
            });
        }
    };
    Nexter.prototype.language = function () {
        this.title.text = Language_1.Language.getText(Language_1.Language.NEXT_MONSTER);
    };
    return Nexter;
}(exports_1.Container));
exports.Nexter = Nexter;


/***/ }),

/***/ "./src/panels/views/Panel.ts":
/*!***********************************!*\
  !*** ./src/panels/views/Panel.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var Button_1 = __webpack_require__(/*! ../../ui/views/Button */ "./src/ui/views/Button.ts");
var Nexter_1 = __webpack_require__(/*! ./Nexter */ "./src/panels/views/Nexter.ts");
var Tablo_1 = __webpack_require__(/*! ./Tablo */ "./src/panels/views/Tablo.ts");
var SceneEvents_1 = __webpack_require__(/*! ../../scenes/events/SceneEvents */ "./src/scenes/events/SceneEvents.ts");
var constants_1 = __webpack_require__(/*! ../../scenes/constants */ "./src/scenes/constants.ts");
var Panel = (function (_super) {
    __extends(Panel, _super);
    function Panel(scene) {
        var _this = _super.call(this, scene) || this;
        var gameWidthHalf = _this.scene.gameWidth * .5;
        var leftPanel = _this.scene.add.image(0, 0, "ui", "panelScore");
        leftPanel.setOrigin(1, 0);
        leftPanel.x = gameWidthHalf;
        leftPanel.y = 80;
        _this.add(leftPanel);
        var rightPanel = _this.scene.add.image(0, 0, "ui", "panelScore");
        rightPanel.setOrigin(1, 0);
        rightPanel.scaleX = -1;
        rightPanel.x = gameWidthHalf;
        rightPanel.y = 80;
        _this.add(rightPanel);
        var dX = 32;
        var dY = 68;
        var dYTablo = 35;
        var fontSize = 23;
        _this.scoreBest = new Tablo_1.Tablo(_this.scene, "left", 0xFFFF00);
        _this.scoreBest.x = leftPanel.x - leftPanel.width + dX;
        _this.scoreBest.y = leftPanel.y + dYTablo;
        _this.scoreBest.setScore(0);
        _this.add(_this.scoreBest);
        _this.scoreNow = new Tablo_1.Tablo(_this.scene, "right");
        _this.scoreNow.x = rightPanel.x + rightPanel.width - dX;
        _this.scoreNow.y = rightPanel.y + dYTablo;
        _this.scoreNow.setScore(0);
        _this.add(_this.scoreNow);
        _this.labelBest = _this.scene.add.bitmapText(leftPanel.x - leftPanel.width + dX, leftPanel.y + dY, "aivaStroke", "", fontSize).setOrigin(0, 0);
        _this.labelBest.setMaxWidth(130);
        _this.labelBest.setLeftAlign();
        _this.add(_this.labelBest);
        _this.labelNow = _this.scene.add.bitmapText(rightPanel.x + rightPanel.width - dX, rightPanel.y + dY, "aivaStroke", "", fontSize).setOrigin(1, 0);
        _this.labelNow.setMaxWidth(130);
        _this.labelNow.setRightAlign();
        _this.add(_this.labelNow);
        _this.nexter = new Nexter_1.Nexter(_this.scene);
        _this.nexter.x = gameWidthHalf;
        _this.nexter.y = leftPanel.y + 130;
        _this.add(_this.nexter);
        _this.butMenu = new Button_1.Button(_this.scene, "btnPink", "", function () { return _this.onBack(); });
        _this.butMenu.addLabel("MENU", "aivaStroke", 36, 0, -12);
        _this.butMenu.x = gameWidthHalf;
        _this.butMenu.y = 45;
        _this.add(_this.butMenu);
        _this.language();
        return _this;
    }
    Panel.prototype.init = function () {
        this.visible = true;
        this.nexter.init();
        this.butMenu.activate();
    };
    Panel.prototype.free = function () {
        this.visible = false;
        this.nexter.free();
        this.butMenu.deactivate();
    };
    Panel.prototype.setScoreBest = function (score) {
        this.scoreBest.setScoreNow(score);
    };
    Panel.prototype.scoreInitialize = function (score) {
        this.scoreNow.setScoreNow(score);
    };
    Panel.prototype.setScore = function (score) {
        this.scoreNow.setScore(score);
    };
    Panel.prototype.onBack = function () {
        this.scene.game.events.emit(SceneEvents_1.SceneEvents.CHANGE_SCENE, constants_1.ScenesConstants.names.menu);
    };
    Panel.prototype.language = function () {
        this.labelBest.text = Language_1.Language.getText(Language_1.Language.LABEL_BEST);
        this.labelNow.text = Language_1.Language.getText(Language_1.Language.LABEL_NOW);
        this.butMenu.text = Language_1.Language.getText(Language_1.Language.MENU);
        this.nexter.language();
    };
    return Panel;
}(exports_1.Container));
exports.Panel = Panel;


/***/ }),

/***/ "./src/panels/views/PanelQuest.ts":
/*!****************************************!*\
  !*** ./src/panels/views/PanelQuest.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var GameProcessModel_1 = __webpack_require__(/*! ../../data/models/GameProcessModel */ "./src/data/models/GameProcessModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var MapModel_1 = __webpack_require__(/*! ../../map/models/MapModel */ "./src/map/models/MapModel.ts");
var constants_1 = __webpack_require__(/*! ../../monsters/constants */ "./src/monsters/constants.ts");
var ColorIDsUtils_1 = __webpack_require__(/*! ../../utils/ColorIDsUtils */ "./src/utils/ColorIDsUtils.ts");
var ComponentPool_1 = __webpack_require__(/*! ../../utils/ComponentPool */ "./src/utils/ComponentPool.ts");
var QuestsVO_1 = __webpack_require__(/*! ../data/QuestsVO */ "./src/panels/data/QuestsVO.ts");
var Quest_1 = __webpack_require__(/*! ./Quest */ "./src/panels/views/Quest.ts");
var PanelQuest = (function (_super) {
    __extends(PanelQuest, _super);
    function PanelQuest(scene) {
        var _this = _super.call(this, scene) || this;
        _this.COUNT_QUEST = 3;
        _this.COUNT_MIN = 20;
        _this.COUNT_MAX = 50;
        _this.LINE_MAX = 2;
        _this.MULTIPLIER_LINES = 3;
        _this.MULTIPLIER_COUNTS = 5;
        _this.RANGE_BETWEEN_QUESTS = 170;
        _this.QUESTS_POS_Y = 115;
        _this.CHALLENGES = [PanelQuest.CHALLENGE_LINES, PanelQuest.CHALLENGE_COUNTS];
        _this.arrColors = [];
        _this.challenge = PanelQuest.CHALLENGE_COUNTS;
        _this.questsVO = new QuestsVO_1.QuestsVO();
        _this.gameDataModel = new GameDataModel_1.GameDataModel();
        _this.gameProcessModel = new GameProcessModel_1.GameProcessModel(_this.scene.game);
        _this.componentPool = new ComponentPool_1.ComponentPool();
        var bg = _this.scene.add.image(0, 0, "ui", "panelBottom").setOrigin(.5, 0);
        _this.add(bg);
        _this.tfTitle = _this.scene.add.bitmapText(bg.x, 20, "aivaWhite", "", 28);
        _this.tfTitle.setOrigin(.5, 0);
        _this.add(_this.tfTitle);
        _this.vQuests = [];
        _this.vQuestsComplete = [];
        var startPosX = _this.getQuestsStartPosX(_this.COUNT_QUEST);
        for (var i = 0; i < _this.COUNT_QUEST; i++) {
            var quest = _this.componentPool.get(Quest_1.Quest, _this.scene);
            quest.x = i * _this.RANGE_BETWEEN_QUESTS + startPosX;
            quest.y = _this.QUESTS_POS_Y;
            _this.add(quest);
            _this.vQuestsComplete.push(quest);
        }
        _this.x = _this.scene.gameWidth * .5;
        return _this;
    }
    PanelQuest.prototype.getQuestsStartPosX = function (countQuests) {
        return ((countQuests - 1) * this.RANGE_BETWEEN_QUESTS) / -2;
    };
    PanelQuest.prototype.setPointsForMoveble = function () {
        this.startPositionsForStars = this.componentPool.get(exports_1.Point);
        this.startPositionsForStars.x = this.x;
        this.startPositionsForStars.y = this.y - MapModel_1.MapModel.MAP_POS;
    };
    PanelQuest.prototype.startNewQuests = function () {
        this._isAllChallengesCompleted = true;
        this.challenge = this.CHALLENGES[Phaser.Math.Between(0, this.CHALLENGES.length - 1)];
        this.countdown = 0;
        this.questsVO.initNewQuests(this.challenge);
        this.questsVO.updateCountdown(this.countdown);
        this.fillAllColors();
        for (var i = 0; i < this.COUNT_QUEST; i++) {
            var color = this.arrColors.splice(Phaser.Math.Between(0, this.arrColors.length - 1), 1)[0];
            var fullColor = ColorIDsUtils_1.ColorIDsUtils.getFullColorFromIndex(color);
            var minInLine = constants_1.MonsterConstants[constants_1.MonsterColor[fullColor]].countInLineMin;
            var count = this.getCount(minInLine);
            var points = this.getPoints(count, minInLine);
            this.vQuestsComplete[0].init(color, points, count, i * Quest_1.Quest.SHOWING_DELAY);
            this.add(this.vQuestsComplete[0]);
            this.vQuests = this.vQuests.concat(this.vQuestsComplete.splice(0, 1));
            this.questsVO.updateChallenge(i, color, points, count);
        }
        this.questsVO.saveData();
        this.shiftQuests(true);
        this.language();
    };
    PanelQuest.prototype.loadQuests = function () {
        this.challenge = this.questsVO.questID;
        for (var i = 0; i < this.COUNT_QUEST; i++) {
            var color = this.questsVO.getColor(i);
            var count = this.questsVO.getCount(i);
            var points = this.questsVO.getPoints(i);
            if (color >= 0 && count > 0) {
                this.vQuestsComplete[0].init(color, points, count, i * Quest_1.Quest.SHOWING_DELAY);
                this.add(this.vQuestsComplete[0]);
                this.vQuests = this.vQuests.concat(this.vQuestsComplete.splice(0, 1));
            }
        }
        this.shiftQuests(true);
        this.language();
    };
    PanelQuest.prototype.init = function () {
        this.visible = true;
        this.questsVO.parseLoadingData(GameDataModel_1.GameDataModel.quests);
        this._isAllChallengesCompleted = this.checkAllChallenges();
        if (this._isAllChallengesCompleted) {
            if (this.questsVO.countdown == 0) {
                this.allChallengesCompleted();
            }
            this.countdown = this.questsVO.countdown;
        }
        else {
            this.loadQuests();
        }
    };
    PanelQuest.prototype.checkAllChallenges = function () {
        var isChallengeCompleted = true;
        for (var i = 0; i < this.COUNT_QUEST; i++) {
            var color = this.questsVO.getColor(i);
            if (color >= 0) {
                isChallengeCompleted = false;
                break;
            }
        }
        return isChallengeCompleted;
    };
    PanelQuest.prototype.onQuestCountdown = function (evt) {
        this.countdown--;
        this.questsVO.updateCountdown(this.countdown);
        this.questsVO.saveData();
        if (this.countdown <= 0) {
        }
    };
    PanelQuest.prototype.onChallengeComplete = function (questComplete) {
        this.isChallengeComplete = false;
        var indexOfCompletedQuest = this.vQuests.indexOf(questComplete);
        this.gameProcessModel.score += this.questsVO.getValueFromColor(questComplete.color, QuestsVO_1.QuestsVO.CHALLENGE_POINTS);
        ;
        this.gameDataModel.saveData();
        this.questsVO.clearChallenge(questComplete.color);
        this.questsVO.saveData();
        this.vQuestsComplete = this.vQuestsComplete.concat(this.vQuests.splice(indexOfCompletedQuest, 1));
        this.remove(questComplete);
        if (this.visible) {
            if (this.vQuests.length > 0) {
                this.shiftQuests();
            }
            else {
                this.allChallengesCompleted();
            }
        }
    };
    PanelQuest.prototype.allChallengesCompleted = function () {
        this.questsVO.init();
        this.countdown = this.questsVO.countdown;
        this._isAllChallengesCompleted = true;
        this.questsVO.saveData();
    };
    PanelQuest.prototype.shiftQuests = function (force) {
        if (force === void 0) { force = false; }
        if (this.isOtherQuestsComplete()) {
            return;
        }
        var countQuests = this.vQuests.length;
        var startPosX = this.getQuestsStartPosX(countQuests);
        for (var i = 0; i < countQuests; i++) {
            if (force) {
                this.vQuests[i].x = i * this.RANGE_BETWEEN_QUESTS + startPosX;
                this.vQuests[i].y = this.QUESTS_POS_Y;
            }
            else {
            }
        }
    };
    PanelQuest.prototype.onStepToChallenge = function (challenge) {
        var countQuests = this.vQuests.length;
        for (var i = 0; i < countQuests; i++) {
            if (this.vQuests[i].color == challenge.color) {
                if (this.challenge === PanelQuest.CHALLENGE_COUNTS) {
                    this.vQuests[i].refresh(challenge.count);
                }
                else {
                    if (challenge.count >= this.questsVO.getValueFromColor(challenge.color, QuestsVO_1.QuestsVO.CHALLENGE_COUNT)) {
                        this.vQuests[i].refresh(challenge.count);
                    }
                }
                this.isChallengeComplete = this.vQuests[i].isComplete;
                this.questsVO.updateChallengeFromQuest(this.vQuests[i]);
                this.questsVO.saveData();
                break;
            }
        }
    };
    PanelQuest.prototype.free = function () {
        this.visible = false;
        this.vQuestsComplete = this.vQuestsComplete.concat(this.vQuests);
        this.vQuests = [];
        for (var i = 0; i < this.COUNT_QUEST; i++) {
            if (this.vQuestsComplete[i].isComplete) {
                this.vQuestsComplete[i].free();
            }
            this.remove(this.vQuestsComplete[i]);
        }
    };
    PanelQuest.prototype.isOtherQuestsComplete = function () {
        for (var i = 0; i < this.vQuests.length; i++) {
            if (this.vQuests[i].isComplete) {
                return true;
            }
        }
        return false;
    };
    PanelQuest.prototype.reset = function () {
        this.questsVO.init();
        this.questsVO.saveData();
    };
    PanelQuest.prototype.getCount = function (minInLine) {
        var count;
        switch (this.challenge) {
            case PanelQuest.CHALLENGE_LINES:
                count = minInLine + Phaser.Math.Between(0, this.LINE_MAX);
                break;
            case PanelQuest.CHALLENGE_COUNTS:
                count = Phaser.Math.Between(this.COUNT_MIN, this.COUNT_MAX);
                break;
        }
        return count;
    };
    PanelQuest.prototype.getPoints = function (count, minInLine) {
        var points;
        switch (this.challenge) {
            case PanelQuest.CHALLENGE_LINES:
                points = count * (count - minInLine + this.MULTIPLIER_LINES);
                break;
            case PanelQuest.CHALLENGE_COUNTS:
                points = count * this.MULTIPLIER_COUNTS;
                break;
        }
        return points;
    };
    PanelQuest.prototype.fillAllColors = function () {
        this.arrColors = [];
        for (var i = 0; i < ColorIDsUtils_1.ColorIDsUtils.count; i++) {
            this.arrColors.push(i);
        }
    };
    PanelQuest.prototype.language = function () {
        this.tfTitle.text = Language_1.Language.getText(Language_1.Language[this.challenge]);
    };
    Object.defineProperty(PanelQuest.prototype, "isAllChallengesCompleted", {
        get: function () {
            return this._isAllChallengesCompleted;
        },
        enumerable: true,
        configurable: true
    });
    PanelQuest.CHALLENGE_LINES = "CHALLENGE_LINES";
    PanelQuest.CHALLENGE_COUNTS = "CHALLENGE_COUNTS";
    return PanelQuest;
}(exports_1.Container));
exports.PanelQuest = PanelQuest;


/***/ }),

/***/ "./src/panels/views/PanelRowButtons.ts":
/*!*********************************************!*\
  !*** ./src/panels/views/PanelRowButtons.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var URLButton_1 = __webpack_require__(/*! ../../ui/views/URLButton */ "./src/ui/views/URLButton.ts");
var PanelRowButtons = (function (_super) {
    __extends(PanelRowButtons, _super);
    function PanelRowButtons(scene, range, dist) {
        if (dist === void 0) { dist = 100; }
        var _this = _super.call(this, scene) || this;
        _this.DELAY_BETWEEN_SHOWING_BUTTONS = 150;
        _this.vBtns = [];
        _this.range = range;
        _this.countButtons = 0;
        return _this;
    }
    PanelRowButtons.prototype.addBtn = function (iconName, url) {
        var urlButton = new URLButton_1.URLButton(this.scene, iconName, this.countButtons * this.DELAY_BETWEEN_SHOWING_BUTTONS);
        urlButton.addURL(url);
        this.vBtns.push(urlButton);
        this.add(urlButton);
        this.countButtons++;
        this.arrangeButtons();
    };
    PanelRowButtons.prototype.arrangeButtons = function () {
        var startPosition = -(this.range * (this.countButtons - 1)) / 2;
        for (var i = 0; i < this.countButtons; i++) {
            this.vBtns[i].x = this.range * i + startPosition;
        }
    };
    PanelRowButtons.prototype.init = function () {
        for (var i = 0; i < this.countButtons; i++) {
            this.vBtns[i].init();
            this.add(this.vBtns[i]);
        }
    };
    PanelRowButtons.prototype.free = function () {
        for (var i = 0; i < this.countButtons; i++) {
            this.vBtns[i].free();
        }
    };
    PanelRowButtons.prototype.clear = function () {
        if (this.parentContainer) {
            this.parentContainer.remove(this);
        }
        this.removeAll();
    };
    return PanelRowButtons;
}(exports_1.Container));
exports.PanelRowButtons = PanelRowButtons;


/***/ }),

/***/ "./src/panels/views/PanelSeasons.ts":
/*!******************************************!*\
  !*** ./src/panels/views/PanelSeasons.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var Button_1 = __webpack_require__(/*! ../../ui/views/Button */ "./src/ui/views/Button.ts");
var SeasonsUtils_1 = __webpack_require__(/*! ../../utils/SeasonsUtils */ "./src/utils/SeasonsUtils.ts");
var SeasonsEvents_1 = __webpack_require__(/*! ../events/SeasonsEvents */ "./src/panels/events/SeasonsEvents.ts");
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var PanelSeasons = (function (_super) {
    __extends(PanelSeasons, _super);
    function PanelSeasons(scene, x, y, children) {
        var _this = _super.call(this, scene, x, y, children) || this;
        _this.DX = 70;
        _this.vButtons = [];
        for (var indexSeason = 0; indexSeason < SeasonsUtils_1.SeasonsUtils.SEASONS_COUNT; indexSeason++) {
            var btn = _this.createButton(SeasonsUtils_1.SeasonsUtils.getSeasonNameByID(indexSeason), indexSeason);
            btn.x = indexSeason * _this.DX;
            _this.vButtons.push(btn);
        }
        _this.showPosY = _this.y;
        _this.hidePosY = _this.showPosY - 50;
        _this.alpha = 0;
        _this.y = _this.hidePosY;
        return _this;
    }
    PanelSeasons.prototype.createButton = function (seasonName, indexSeason) {
        var _this = this;
        var btn = new Button_1.Button(this.scene, "btnSeason" + seasonName, "icon" + seasonName, function () { return _this.onChangeSeason(indexSeason); });
        this.add(btn);
        return btn;
    };
    PanelSeasons.prototype.show = function () {
        var _this = this;
        this.scene.add.tween({
            targets: this,
            y: this.showPosY,
            alpha: 1,
            duration: 500,
            onComplete: function () { return _this.addListeners(); }
        });
    };
    PanelSeasons.prototype.hide = function () {
        this.removeListeners();
        this.scene.add.tween({
            targets: this,
            y: this.hidePosY,
            alpha: 0,
            duration: 500
        });
    };
    PanelSeasons.prototype.addListeners = function () {
        for (var indexButton = 0; indexButton < SeasonsUtils_1.SeasonsUtils.SEASONS_COUNT; indexButton++) {
            this.vButtons[indexButton].activate();
        }
    };
    PanelSeasons.prototype.removeListeners = function () {
        for (var indexButton = 0; indexButton < SeasonsUtils_1.SeasonsUtils.SEASONS_COUNT; indexButton++) {
            this.vButtons[indexButton].deactivate();
        }
    };
    PanelSeasons.prototype.onChangeSeason = function (seasonId) {
        GameDataModel_1.GameDataModel.seasonId = seasonId;
        console.log(seasonId);
        this.scene.game.events.emit(SeasonsEvents_1.SeasonsEvents.CHANGE_SEASON);
    };
    return PanelSeasons;
}(exports_1.Container));
exports.PanelSeasons = PanelSeasons;


/***/ }),

/***/ "./src/panels/views/PanelTutorialBottom.ts":
/*!*************************************************!*\
  !*** ./src/panels/views/PanelTutorialBottom.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var MapModel_1 = __webpack_require__(/*! ../../map/models/MapModel */ "./src/map/models/MapModel.ts");
var PanelTutorialBottom = (function (_super) {
    __extends(PanelTutorialBottom, _super);
    function PanelTutorialBottom(scene) {
        var _this = _super.call(this, scene) || this;
        _this.tfInfo = _this.scene.add.bitmapText(30, 850, "aivaStroke", "", 38).setOrigin(0, 1);
        _this.tfInfo.setTint(0xFFFFFF, 0xFFFFFF, 0xFFFF99, 0xFFFF99);
        _this.tfInfo.setMaxWidth(420);
        _this.tfInfo.setLeftAlign();
        _this.add(_this.tfInfo);
        _this.countMonsterInLine = _this.scene.add.container(0, 0);
        _this.countMonsterInLine.x = MapModel_1.MapModel.toPix(7);
        _this.add(_this.countMonsterInLine);
        _this.countMonsterInLine.add(_this.scene.add.image(0, 0, "ui", "labelLine"));
        _this.tfCountMonsterInLine = _this.scene.add.bitmapText(0, 35, "aivaStroke", "", 50).setOrigin(.5);
        _this.countMonsterInLine.add(_this.tfCountMonsterInLine);
        return _this;
    }
    PanelTutorialBottom.prototype.init = function () {
        this.hideCountMonster();
        this.visible = true;
    };
    PanelTutorialBottom.prototype.free = function () {
        this.visible = false;
    };
    PanelTutorialBottom.prototype.showCountMonster = function (tileY, count) {
        this.countMonsterInLine.y = MapModel_1.MapModel.toPix(tileY) + MapModel_1.MapModel.MAP_POS - MapModel_1.MapModel.MAP_CELL_HALF;
        this.countMonsterInLine.visible = true;
        this.tfCountMonsterInLine.text = count.toString();
    };
    PanelTutorialBottom.prototype.hideCountMonster = function () {
        this.countMonsterInLine.visible = false;
    };
    PanelTutorialBottom.prototype.updatePanel = function (advice) {
        this.tfInfoText = Language_1.Language.getText(Language_1.Language["HELP" + advice]);
    };
    Object.defineProperty(PanelTutorialBottom.prototype, "tfInfoText", {
        set: function (str) {
            this.tfInfo.text = str;
        },
        enumerable: true,
        configurable: true
    });
    return PanelTutorialBottom;
}(exports_1.Container));
exports.PanelTutorialBottom = PanelTutorialBottom;


/***/ }),

/***/ "./src/panels/views/PanelTutorialTop.ts":
/*!**********************************************!*\
  !*** ./src/panels/views/PanelTutorialTop.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var GameProcessEvents_1 = __webpack_require__(/*! ../../data/events/GameProcessEvents */ "./src/data/events/GameProcessEvents.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var MapModel_1 = __webpack_require__(/*! ../../map/models/MapModel */ "./src/map/models/MapModel.ts");
var TutorialScene_1 = __webpack_require__(/*! ../../scenes/views/TutorialScene */ "./src/scenes/views/TutorialScene.ts");
var Button_1 = __webpack_require__(/*! ../../ui/views/Button */ "./src/ui/views/Button.ts");
var TutorialEvents_1 = __webpack_require__(/*! ../events/TutorialEvents */ "./src/panels/events/TutorialEvents.ts");
var PanelTutorialTop = (function (_super) {
    __extends(PanelTutorialTop, _super);
    function PanelTutorialTop(scene) {
        var _this = _super.call(this, scene) || this;
        _this.moveZoneJubby = _this.scene.add.image(0, 0, "ui", "moveZone");
        _this.add(_this.moveZoneJubby);
        var gameWidthHalf = _this.scene.gameWidth * .5;
        _this.sprite = _this.scene.add.image(0, 0, "ui", "panelBottom");
        _this.sprite.setOrigin(.5, 0);
        _this.sprite.x = gameWidthHalf;
        _this.sprite.y = 80;
        _this.sprite.scaleY = .9;
        _this.add(_this.sprite);
        _this._butMenu = new Button_1.Button(_this.scene, "btnPink", "", function () { return _this.exitFromTutorial(); });
        _this.butMenu.addLabel("BACK", "aivaStroke", 36, 0, -12);
        _this.butMenu.x = gameWidthHalf;
        _this.butMenu.y = 45;
        _this.add(_this.butMenu);
        _this.tfCount = _this.scene.add.bitmapText(_this.sprite.x, _this.sprite.y + 28, "aivaGold", "", 36).setOrigin(.5);
        _this.tfCount.tint = 0xFFFF00;
        _this.add(_this.tfCount);
        _this.tfLabel = _this.scene.add.bitmapText(_this.sprite.x, _this.sprite.y + 70, "aivaGold", "", 42).setOrigin(.5);
        _this.add(_this.tfLabel);
        _this.tfTask = _this.scene.add.bitmapText(_this.sprite.x, _this.sprite.y + 95, "aivaStroke", "", 24).setOrigin(.5, 0);
        _this.tfTask.setTint(0xFFFFFF, 0xFFFFFF, 0x99FFFF, 0x99FFFF);
        _this.tfTask.setMaxWidth(490);
        _this.tfTask.setCenterAlign();
        _this.add(_this.tfTask);
        _this._butPrev = new Button_1.Button(_this.scene, "btnPink", "", function () { return _this.onPrevTutorial(); });
        _this.butPrev.addLabel("BACK", "aivaStroke", 36, 0, -12);
        _this.butPrev.x = gameWidthHalf - 175;
        _this.butPrev.y = 935;
        _this.add(_this.butPrev);
        _this._butNext = new Button_1.Button(_this.scene, "btnGreen", "", function () { return _this.onNextTutorial(); });
        _this.butNext.addLabel("BACK", "aivaStroke", 36, 0, -12);
        _this.butNext.x = gameWidthHalf + 175;
        _this.butNext.y = 935;
        _this.add(_this.butNext);
        return _this;
    }
    PanelTutorialTop.prototype.init = function () {
        this.onMoveZoneHide();
        this.visible = true;
        this.butMenu.activate();
        this.butPrev.activate();
        this.butNext.activate();
        this.butPrev.visible = true;
        this.butNext.visible = true;
        this.scene.game.events.addListener(TutorialEvents_1.TutorialEvents.MOVE_ZONE_SHOW, this.onMoveZoneShow, this);
        this.scene.game.events.addListener(TutorialEvents_1.TutorialEvents.MOVE_ZONE_HIDE, this.onMoveZoneHide, this);
        this.language();
    };
    PanelTutorialTop.prototype.onPrevTutorial = function () {
        this.scene.game.events.emit(TutorialEvents_1.TutorialEvents.CHANGE_TUTORIAL, -1);
    };
    PanelTutorialTop.prototype.onNextTutorial = function () {
        this.scene.game.events.emit(TutorialEvents_1.TutorialEvents.CHANGE_TUTORIAL, 1);
    };
    PanelTutorialTop.prototype.exitFromTutorial = function () {
        this.scene.game.events.emit(GameProcessEvents_1.GameProcessEvents.END_GAME);
    };
    PanelTutorialTop.prototype.free = function () {
        this.visible = false;
        this.butMenu.deactivate();
        this.butPrev.deactivate();
        this.butNext.deactivate();
        this.scene.game.events.removeListener(TutorialEvents_1.TutorialEvents.MOVE_ZONE_SHOW, this.onMoveZoneShow, this);
        this.scene.game.events.removeListener(TutorialEvents_1.TutorialEvents.MOVE_ZONE_HIDE, this.onMoveZoneHide, this);
    };
    PanelTutorialTop.prototype.onMoveZoneShow = function (monster) {
        this.moveZoneJubby.x = monster.x;
        this.moveZoneJubby.y = monster.y + MapModel_1.MapModel.MAP_POS;
        this.addAt(this.moveZoneJubby, 0);
    };
    PanelTutorialTop.prototype.onMoveZoneHide = function () {
        if (this.exists(this.moveZoneJubby)) {
            this.remove(this.moveZoneJubby);
        }
    };
    PanelTutorialTop.prototype.language = function () {
        this.butPrev.text = Language_1.Language.getText(Language_1.Language.BACK);
        this.butNext.text = Language_1.Language.getText(Language_1.Language.NEXT);
        this.butMenu.text = Language_1.Language.getText(Language_1.Language.MENU);
    };
    PanelTutorialTop.prototype.updatePanel = function (advice) {
        this.tfTaskText = Language_1.Language.getText(Language_1.Language["TASK_HELP" + advice]);
        this.tfCountText = "#" + advice;
        this.tfLabelText = Language_1.Language.getText(Language_1.Language["TITLE_HELP" + advice]);
        if (advice >= TutorialScene_1.TutorialScene.TUTORIAL_1 && advice <= TutorialScene_1.TutorialScene.TUTORIAL_14) {
            if (!this.butPrev.visible) {
                this.butPrev.visible = true;
            }
            if (!this.butNext.visible) {
                this.butNext.visible = true;
            }
        }
        if (advice <= TutorialScene_1.TutorialScene.TUTORIAL_1) {
            this.butPrev.visible = false;
        }
        if (advice >= TutorialScene_1.TutorialScene.TUTORIAL_14 || advice === TutorialScene_1.TutorialScene.TUTORIAL_3) {
            this.butNext.visible = false;
        }
    };
    Object.defineProperty(PanelTutorialTop.prototype, "tfCountText", {
        set: function (str) {
            this.tfCount.text = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelTutorialTop.prototype, "tfLabelText", {
        set: function (str) {
            this.tfLabel.text = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelTutorialTop.prototype, "tfTaskText", {
        set: function (str) {
            this.tfTask.text = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelTutorialTop.prototype, "butMenu", {
        get: function () {
            return this._butMenu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelTutorialTop.prototype, "butPrev", {
        get: function () {
            return this._butPrev;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelTutorialTop.prototype, "butNext", {
        get: function () {
            return this._butNext;
        },
        enumerable: true,
        configurable: true
    });
    return PanelTutorialTop;
}(exports_1.Container));
exports.PanelTutorialTop = PanelTutorialTop;


/***/ }),

/***/ "./src/panels/views/Quest.ts":
/*!***********************************!*\
  !*** ./src/panels/views/Quest.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var Quest = (function (_super) {
    __extends(Quest, _super);
    function Quest(scene) {
        var _this = _super.call(this, scene) || this;
        _this.iks = _this.scene.add.image(5, -30, "ui", "iks");
        _this.iks.x = 5;
        _this.iks.y = -30;
        _this.add(_this.iks);
        _this.icon = _this.scene.add.image(_this.iks.x - 45, _this.iks.y + 35, "ui", "next0");
        _this.icon.setOrigin(.5, 1);
        _this.icon.x = _this.iks.x - 45;
        _this.icon.y = _this.iks.y + 35;
        _this.add(_this.icon);
        _this.tfPoints = _this.scene.add.bitmapText(_this.icon.x, _this.icon.y, "aivaGold", "", 35);
        _this.tfPoints.setOrigin(.5, 0);
        _this.add(_this.tfPoints);
        _this.tfCount = _this.scene.add.bitmapText(_this.iks.x + 15, _this.iks.y - 3, "aivaStroke", "", 50);
        _this.tfCount.tint = 0xFFFFCC;
        _this.tfCount.setOrigin(0, .5);
        _this.tfCount.setLeftAlign();
        _this.add(_this.tfCount);
        ;
        return _this;
    }
    Quest.prototype.init = function (color, points, count, delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        this.scaleX = this.scaleY = 0;
        this.tfPoints.scaleX = this.tfPoints.scaleY = 1;
        setTimeout(function () { return _this.show(); }, delay);
        this._color = color;
        this._total = count;
        this.icon.setTexture("ui", "next" + this._color);
        this.tfPoints.text = points.toString();
        this.tfCount.text = this._total.toString();
        this.icon.visible = this.tfCount.visible = this.iks.visible = true;
        this.tfPoints.setOrigin(.5, 0);
        this.tfPoints.x = this.icon.x;
        this.tfPoints.y = this.icon.y;
        this._isComplete = false;
    };
    Quest.prototype.onTouch = function (evt) {
    };
    Quest.prototype.show = function () {
        this.scene.add.tween({
            targets: this,
            scaleX: 1,
            scaleY: 1,
            duration: 1200,
            ease: Phaser.Math.Easing.Elastic.Out,
            easeParams: [1, .5]
        });
    };
    Quest.prototype.refresh = function (count) {
        var _this = this;
        if (this._isComplete) {
            return;
        }
        this._total -= count;
        if (this._total <= 0) {
            this._isComplete = true;
            this._total = 0;
            this.scene.add.tween({
                targets: this,
                scaleX: 1.3,
                scaleY: 1.3,
                duration: 1200,
                ease: Phaser.Math.Easing.Elastic.Out,
                easeParams: [1, .5],
                onComplete: function () { return _this.hideQuest(); }
            });
        }
        this.tfCount.text = this._total.toString();
    };
    Quest.prototype.hideQuest = function () {
        var _this = this;
        this.scene.add.tween({
            targets: this,
            scaleX: 0,
            scaleY: 0,
            duration: 300,
            ease: Phaser.Math.Easing.Sine.Out,
            onComplete: function () { return _this.showPoints(); }
        });
    };
    Quest.prototype.showPoints = function () {
        var _this = this;
        this.icon.visible = this.tfCount.visible = this.iks.visible = false;
        this.scaleX = this.scaleY = 1;
        this.tfPoints.setOrigin(.5);
        this.tfPoints.x = 0;
        this.tfPoints.y = Quest.POS_Y;
        this.scene.add.tween({
            targets: this.tfPoints,
            scaleX: 2,
            scaleY: 2,
            duration: 1000,
            ease: Phaser.Math.Easing.Elastic.Out,
            easeParams: [1, .5],
            onComplete: function () { return _this.addPoints(); }
        });
    };
    Quest.prototype.addPoints = function () {
    };
    Quest.prototype.free = function () {
        this.scene.tweens.killTweensOf(this);
        this.scene.tweens.killTweensOf(this.tfPoints);
        this.addPoints();
    };
    Object.defineProperty(Quest.prototype, "color", {
        get: function () { return this._color; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "total", {
        get: function () { return this._total; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Quest.prototype, "isComplete", {
        get: function () { return this._isComplete; },
        enumerable: true,
        configurable: true
    });
    Quest.SHOWING_DELAY = 250;
    Quest.POS_Y = -20;
    return Quest;
}(exports_1.Container));
exports.Quest = Quest;


/***/ }),

/***/ "./src/panels/views/Tablo.ts":
/*!***********************************!*\
  !*** ./src/panels/views/Tablo.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var Tablo = (function (_super) {
    __extends(Tablo, _super);
    function Tablo(scene, hAlign, color, colorBot, size) {
        if (color === void 0) { color = 0xFFFF99; }
        if (colorBot === void 0) { colorBot = 0xFF9900; }
        if (size === void 0) { size = 60; }
        var _this = _super.call(this, scene) || this;
        _this.color = color;
        _this.tfAmount = _this.scene.add.bitmapText(0, 0, "aivaGold", "", size);
        if (hAlign === "left") {
            _this.tfAmount.setOrigin(0, .5);
            _this.tfAmount.setLeftAlign();
        }
        else {
            _this.tfAmount.setOrigin(1, .5);
            _this.tfAmount.setRightAlign();
        }
        _this.add(_this.tfAmount);
        _this.timer = _this.scene.time.addEvent({
            delay: Tablo.BLINK_INTERVAL,
            callback: _this.onTick,
            callbackScope: _this,
            loop: true
        });
        _this.timer.paused = true;
        _this.init();
        return _this;
    }
    Tablo.prototype.init = function (score) {
        if (score === void 0) { score = 0; }
        this.score = score - 1;
    };
    Tablo.prototype.free = function () {
        this.tfAmount.text = "";
        this.timer.paused = true;
    };
    Tablo.prototype.setScoreNow = function (score) {
        this.score = score;
        this.tfAmount.text = this.score.toString();
    };
    Tablo.prototype.setScore = function (score) {
        this.scoreLimit = score;
        this.blick();
        this.timer.paused = false;
    };
    Tablo.prototype.blick = function () {
        this.tfAmount.tint = Tablo.COLOR_BLINK;
    };
    Tablo.prototype.stopBlick = function () {
        this.tfAmount.tint = 0xFFFFFF;
    };
    Tablo.prototype.onTick = function () {
        if (this.score < this.scoreLimit) {
            this.score++;
            this.setScoreNow(this.score);
        }
        else {
            this.stopBlick();
            this.timer.paused = true;
        }
    };
    Tablo.COLOR_BLINK = 0xFFFF00;
    Tablo.BLINK_INTERVAL = 100;
    return Tablo;
}(exports_1.Container));
exports.Tablo = Tablo;


/***/ }),

/***/ "./src/plugins/sounds/AmbientSoundPlugin.ts":
/*!**************************************************!*\
  !*** ./src/plugins/sounds/AmbientSoundPlugin.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var AmbientSoundPlugin = (function (_super) {
    __extends(AmbientSoundPlugin, _super);
    function AmbientSoundPlugin(pluginManager) {
        var _this = _super.call(this, pluginManager) || this;
        _this.soundManager = _this.game.sound;
        return _this;
    }
    AmbientSoundPlugin.prototype.setActive = function (soundId) {
        if (this.currentSoundId !== soundId) {
            this.stopSound();
            this.currentSoundId = soundId;
            this.currentSound = this.soundManager.add(this.currentSoundId, { volume: GameDataModel_1.GameDataModel.volumeMusic, loop: true });
            this.playSound();
        }
    };
    AmbientSoundPlugin.prototype.stopSound = function () {
        if (this.currentSound) {
            this.currentSound.stop();
        }
    };
    AmbientSoundPlugin.prototype.playSound = function () {
        if (this.currentSound) {
            this.currentSound.play();
        }
    };
    AmbientSoundPlugin.prototype.setVolume = function (volume) {
        if (this.currentSound) {
            this.currentSound.setVolume(volume);
        }
    };
    return AmbientSoundPlugin;
}(exports_1.BasePlugin));
exports.AmbientSoundPlugin = AmbientSoundPlugin;


/***/ }),

/***/ "./src/popups/constants.ts":
/*!*********************************!*\
  !*** ./src/popups/constants.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupConstants = {
    ids: {
        POPUP_APPROVE: "POPUP_APPROVE"
    }
};


/***/ }),

/***/ "./src/popups/events/PopupEvents.ts":
/*!******************************************!*\
  !*** ./src/popups/events/PopupEvents.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupEvents = {
    SHOW_POPUP: "PopupEvents.SHOW_POPUP"
};


/***/ }),

/***/ "./src/popups/views/PopupBase.ts":
/*!***************************************!*\
  !*** ./src/popups/views/PopupBase.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ContainerWithButtons_1 = __webpack_require__(/*! ../../menu/views/ContainerWithButtons */ "./src/menu/views/ContainerWithButtons.ts");
var PopupBase = (function (_super) {
    __extends(PopupBase, _super);
    function PopupBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopupBase.prototype.free = function () {
        _super.prototype.free.call(this);
        this.destroy(true);
    };
    return PopupBase;
}(ContainerWithButtons_1.ContainerWithButtons));
exports.PopupBase = PopupBase;


/***/ }),

/***/ "./src/popups/views/PopupInfo.ts":
/*!***************************************!*\
  !*** ./src/popups/views/PopupInfo.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var PopupBase_1 = __webpack_require__(/*! ./PopupBase */ "./src/popups/views/PopupBase.ts");
var SeasonsEvents_1 = __webpack_require__(/*! ../../panels/events/SeasonsEvents */ "./src/panels/events/SeasonsEvents.ts");
var PopupInfo = (function (_super) {
    __extends(PopupInfo, _super);
    function PopupInfo(scene, x, y, children) {
        var _this = _super.call(this, scene, x, y, children) || this;
        _this.sizeForText = 35;
        _this.sprite = _this.scene.add.image(0, 0, "ui", "messageBoxDialog");
        _this.sprite.setOrigin(.5);
        _this.tfMessage = _this.scene.add.bitmapText(0, -50, "aivaStroke", "", _this.sizeForText);
        _this.tfMessage.setOrigin(.5, 0);
        _this.imgHeader = _this.scene.add.image(0, -35, "ui", "messageBoxDialogHeader0");
        _this.imgHeader.setOrigin(.5, 1);
        _this.add([
            _this.sprite,
            _this.tfMessage,
            _this.imgHeader
        ]);
        return _this;
    }
    PopupInfo.prototype.callPopup = function (data) {
        this.onChangeSeason();
        this.init();
    };
    PopupInfo.prototype.addListeners = function () {
        this.scene.game.events.addListener(SeasonsEvents_1.SeasonsEvents.CHANGE_SEASON, this.onChangeSeason, this);
        _super.prototype.addListeners.call(this);
    };
    PopupInfo.prototype.removeListeners = function () {
        this.scene.game.events.removeListener(SeasonsEvents_1.SeasonsEvents.CHANGE_SEASON, this.onChangeSeason, this);
        _super.prototype.removeListeners.call(this);
    };
    PopupInfo.prototype.onChangeSeason = function () {
        this.imgHeader.setTexture("ui", "messageBoxDialogHeader" + GameDataModel_1.GameDataModel.seasonId);
    };
    PopupInfo.prototype.language = function () {
        this.tfMessage.text = Language_1.Language.getText(Language_1.Language.LOADING);
    };
    return PopupInfo;
}(PopupBase_1.PopupBase));
exports.PopupInfo = PopupInfo;


/***/ }),

/***/ "./src/popups/views/PopupYesNo.ts":
/*!****************************************!*\
  !*** ./src/popups/views/PopupYesNo.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PopupInfo_1 = __webpack_require__(/*! ./PopupInfo */ "./src/popups/views/PopupInfo.ts");
var Button_1 = __webpack_require__(/*! ../../ui/views/Button */ "./src/ui/views/Button.ts");
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var PopupYesNo = (function (_super) {
    __extends(PopupYesNo, _super);
    function PopupYesNo(scene, x, y, children) {
        var _this = _super.call(this, scene, x, y, children) || this;
        _this.tfMessage.y = -40;
        _this.btnYes = new Button_1.Button(_this.scene, "btnGreenPoint", "iconYes", function () { return _this.answerYes(); });
        _this.btnYes.x = -70;
        _this.btnYes.y = 50;
        _this.arrButtons.push(_this.btnYes);
        _this.btnNo = new Button_1.Button(_this.scene, "btnPinkPoint", "iconNo", function () { return _this.answerNo(); });
        _this.btnNo.x = 70;
        _this.btnNo.y = 50;
        _this.arrButtons.push(_this.btnNo);
        _this.add([
            _this.btnYes,
            _this.btnNo
        ]);
        return _this;
    }
    PopupYesNo.prototype.callPopup = function (data) {
        if (data.yes) {
            this.setYes(data.yes);
        }
        if (data.no) {
            this.setNo(data.no);
        }
        this.language();
        _super.prototype.callPopup.call(this);
    };
    PopupYesNo.prototype.setYes = function (yesFunction) {
        this.yesFunction = yesFunction;
    };
    PopupYesNo.prototype.setNo = function (noFunction) {
        this.noFunction = noFunction;
    };
    PopupYesNo.prototype.answerYes = function () {
        if (this.yesFunction) {
            this.yesFunction();
            this.free();
        }
        else {
            console.warn("PopupYesNo: Функция answerYes не назначена!");
            this.answerNo();
        }
    };
    PopupYesNo.prototype.answerNo = function () {
        if (this.noFunction) {
            this.noFunction();
        }
        this.free();
    };
    PopupYesNo.prototype.language = function () {
        this.tfMessage.text = Language_1.Language.getText(Language_1.Language.ARE_YOU_SURE);
    };
    return PopupYesNo;
}(PopupInfo_1.PopupInfo));
exports.PopupYesNo = PopupYesNo;


/***/ }),

/***/ "./src/scenes/constants.ts":
/*!*********************************!*\
  !*** ./src/scenes/constants.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenesConstants = {
    names: {
        manager: "SceneManager",
        boot: "Boot",
        background: "Background",
        ui: "ui",
        popups: "Popups",
        preloader: "Preloader",
        login: "Login",
        menu: "Menu",
        tutorial: "Tutorial",
        game: "Game",
        universe: "UniverseScene"
    }
};


/***/ }),

/***/ "./src/scenes/events/SceneEvents.ts":
/*!******************************************!*\
  !*** ./src/scenes/events/SceneEvents.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneEvents = {
    CHANGE_SCENE: "SceneEvents.CHANGE_SCENE",
    MUTE_SOUNDS: "SceneEvents.MUTE_SOUNDS"
};


/***/ }),

/***/ "./src/scenes/events/TutorialSceneEvents.ts":
/*!**************************************************!*\
  !*** ./src/scenes/events/TutorialSceneEvents.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialSceneEvents = {
    AUTO_CHANGE_ADVICE: "TutorialSceneEvents.AUTO_CHANGE_ADVICE"
};


/***/ }),

/***/ "./src/scenes/events/UISceneEvents.ts":
/*!********************************************!*\
  !*** ./src/scenes/events/UISceneEvents.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UISceneEvents = {
    CHANGE_VISIBILITY_SEASONS_PANEL: "UISceneEvents.CHANGE_VISIBILITY_SEASONS_PANEL",
    CHANGE_VISIBILITY_PROFILE_BUTTON: "UISceneEvents.CHANGE_VISIBILITY_PROFILE_BUTTON",
    CHANGE_VISIBILITY_SOCIAL_BUTTONS: "UISceneEvents.CHANGE_VISIBILITY_SOCIAL_BUTTONS",
    CHANGE_VISIBILITY_MAP_CELLS_TOGGLE: "UISceneEvents.CHANGE_VISIBILITY_MAP_CELLS_TOGGLE"
};


/***/ }),

/***/ "./src/scenes/managers/EnterFrameManager.ts":
/*!**************************************************!*\
  !*** ./src/scenes/managers/EnterFrameManager.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EnterFrameManager = (function () {
    function EnterFrameManager() {
    }
    EnterFrameManager.add = function (object) {
        var objectIndex = EnterFrameManager.objects.indexOf(object);
        if (objectIndex < 0) {
            EnterFrameManager.objects.push(object);
            EnterFrameManager.countObjects = EnterFrameManager.objects.length;
        }
    };
    EnterFrameManager.remove = function (object) {
        var objectIndex = EnterFrameManager.objects.indexOf(object);
        if (objectIndex >= 0) {
            EnterFrameManager.objects.splice(objectIndex, 1);
            EnterFrameManager.countObjects = EnterFrameManager.objects.length;
        }
    };
    EnterFrameManager.clear = function () {
        EnterFrameManager.objects.length = 0;
        EnterFrameManager.countObjects = EnterFrameManager.objects.length;
    };
    EnterFrameManager.update = function (deltaTime) {
        var deltaInSeconds = deltaTime * .001;
        for (var i = 0; i < EnterFrameManager.countObjects; i++) {
            EnterFrameManager.objects[i].onUpdate(deltaInSeconds);
        }
    };
    EnterFrameManager.objects = [];
    EnterFrameManager.countObjects = 0;
    return EnterFrameManager;
}());
exports.EnterFrameManager = EnterFrameManager;


/***/ }),

/***/ "./src/scenes/views/BackgroundScene.ts":
/*!*********************************************!*\
  !*** ./src/scenes/views/BackgroundScene.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var SeasonsEvents_1 = __webpack_require__(/*! ../../panels/events/SeasonsEvents */ "./src/panels/events/SeasonsEvents.ts");
var SeasonsUtils_1 = __webpack_require__(/*! ../../utils/SeasonsUtils */ "./src/utils/SeasonsUtils.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/scenes/constants.ts");
var BaseScene_1 = __webpack_require__(/*! ./BaseScene */ "./src/scenes/views/BaseScene.ts");
var BackgroundScene = (function (_super) {
    __extends(BackgroundScene, _super);
    function BackgroundScene() {
        return _super.call(this, constants_1.ScenesConstants.names.background) || this;
    }
    BackgroundScene.prototype.buildScene = function () {
        this.setBackground("preloader");
        this.game.events.addListener(SeasonsEvents_1.SeasonsEvents.CHANGE_SEASON, this.onChangeBackground, this);
    };
    BackgroundScene.prototype.setBackground = function (backgroundId) {
        if (!this.background) {
            this.background = this.add.image(this.gameWidth / 2, this.gameHeight / 2, backgroundId);
            this.background.setScale(1.17);
            this.background.setOrigin(.5, .5);
            this.resizeContainer.add(this.background);
        }
        else {
            this.background.setTexture("backgrounds", backgroundId);
        }
    };
    BackgroundScene.prototype.onChangeBackground = function () {
        this.setBackground("background" + SeasonsUtils_1.SeasonsUtils.getSeasonNameByID(GameDataModel_1.GameDataModel.seasonId));
    };
    return BackgroundScene;
}(BaseScene_1.BaseScene));
exports.BackgroundScene = BackgroundScene;


/***/ }),

/***/ "./src/scenes/views/BaseScene.ts":
/*!***************************************!*\
  !*** ./src/scenes/views/BaseScene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var BaseScene = (function (_super) {
    __extends(BaseScene, _super);
    function BaseScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.RESIZE_AREA_OPACITY = 0;
        _this.isMinScale = true;
        _this._isCreated = false;
        _this.autoActivated = true;
        return _this;
    }
    BaseScene.prototype.preload = function () {
        var resizeArea = this.add.graphics();
        resizeArea.fillStyle(0xFF00FF, this.RESIZE_AREA_OPACITY);
        resizeArea.fillRect(0, 0, this.gameWidth, this.gameHeight);
        this.resizeZone = this.add.zone(0, 0, this.gameWidth, this.gameHeight);
        this._resizeContainer = this.add.container(0, 0, resizeArea);
        this.preResize();
    };
    BaseScene.prototype.create = function () {
        if (!this.isCreated) {
            if (true) {
                var windowId = "s_" + this.sys.config;
                window[windowId] = this;
            }
            this.buildScene();
            this._isCreated = true;
            if (this.autoActivated) {
                this.activate();
            }
        }
    };
    BaseScene.prototype.launchInnerScenes = function () {
    };
    BaseScene.prototype.activate = function () {
        this.preResize();
    };
    BaseScene.prototype.deactivate = function () {
    };
    BaseScene.prototype.preResize = function () {
        var width = this.game.canvas.width;
        var height = this.game.canvas.height;
        var scaleX = width / this.gameWidth;
        var scaleY = height / this.gameHeight;
        var scale = {
            scaleMin: Math.min(scaleX, scaleY),
            scaleMax: Math.max(scaleX, scaleY)
        };
        this.resize(width, height, scale);
    };
    BaseScene.prototype.resize = function (width, height, scaleMinMax) {
        if (this.resizeContainer) {
            this._localScale = this.isMinScale ? scaleMinMax.scaleMin : scaleMinMax.scaleMax;
            this._globalScale = 1 / this._localScale;
            this.resizeContainer.scale = this.localScale;
            Phaser.Display.Align.In.Center(this.resizeContainer, this.add.zone(width * .5, height * .5, width, height));
            var offsetX = (this.resizeZone.width * .5) * this.localScale;
            var offsetY = (this.resizeZone.height * .5) * this.localScale;
            this.resizeContainer.x -= offsetX;
            this.resizeContainer.y -= offsetY;
        }
    };
    Object.defineProperty(BaseScene.prototype, "gameWidth", {
        get: function () {
            return this.sys.game.config.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "gameHeight", {
        get: function () {
            return this.sys.game.config.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "gameDataModel", {
        get: function () {
            return this.game.gameDataModel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "isCreated", {
        get: function () {
            return this._isCreated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "x", {
        get: function () {
            return this.resizeContainer.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "y", {
        get: function () {
            return this.resizeContainer.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "localScale", {
        get: function () {
            return this._localScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "globalScale", {
        get: function () {
            return this._globalScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseScene.prototype, "resizeContainer", {
        get: function () {
            return this._resizeContainer;
        },
        enumerable: true,
        configurable: true
    });
    return BaseScene;
}(exports_1.Scene));
exports.BaseScene = BaseScene;


/***/ }),

/***/ "./src/scenes/views/BootScene.ts":
/*!***************************************!*\
  !*** ./src/scenes/views/BootScene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LoadingAssetsModel_1 = __webpack_require__(/*! ../../data/models/LoadingAssetsModel */ "./src/data/models/LoadingAssetsModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/scenes/constants.ts");
var BootScene = (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, constants_1.ScenesConstants.names.boot) || this;
    }
    BootScene.prototype.preload = function () {
        (new LoadingAssetsModel_1.LoadingAssetsModel(this)).loadPreloadAssets();
    };
    BootScene.prototype.create = function () {
        this.scene.start(constants_1.ScenesConstants.names.manager);
        this.scene.start(constants_1.ScenesConstants.names.background);
        this.scene.start(constants_1.ScenesConstants.names.preloader);
        this.scene.start(constants_1.ScenesConstants.names.popups);
        this.scene.remove(constants_1.ScenesConstants.names.boot);
    };
    return BootScene;
}(exports_1.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/views/GameScene.ts":
/*!***************************************!*\
  !*** ./src/scenes/views/GameScene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameProcessEvents_1 = __webpack_require__(/*! ../../data/events/GameProcessEvents */ "./src/data/events/GameProcessEvents.ts");
var GameProcessModel_1 = __webpack_require__(/*! ../../data/models/GameProcessModel */ "./src/data/models/GameProcessModel.ts");
var Panel_1 = __webpack_require__(/*! ../../panels/views/Panel */ "./src/panels/views/Panel.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/scenes/constants.ts");
var BaseScene_1 = __webpack_require__(/*! ./BaseScene */ "./src/scenes/views/BaseScene.ts");
var PanelQuest_1 = __webpack_require__(/*! ../../panels/views/PanelQuest */ "./src/panels/views/PanelQuest.ts");
var MapModel_1 = __webpack_require__(/*! ../../map/models/MapModel */ "./src/map/models/MapModel.ts");
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, constants_1.ScenesConstants.names.game) || this;
        _this.autoActivated = false;
        return _this;
    }
    GameScene.prototype.buildScene = function () {
        this.ambientSoundPlugin = this.plugins.get("ambientSoundPlugin");
        this.gameProcessModel = new GameProcessModel_1.GameProcessModel(this.game);
        this.panel = new Panel_1.Panel(this);
        this.panelQuest = new PanelQuest_1.PanelQuest(this);
        this.panelQuest.y = MapModel_1.MapModel.MAP_POS + MapModel_1.MapModel.MAP_CELL_SIZE * MapModel_1.MapModel.MAP_HEIGHT_MAX;
        this.panelQuest.setPointsForMoveble();
        this.panel.free();
        this.panelQuest.free();
    };
    GameScene.prototype.setMapView = function (mapView) {
        this.mapView = mapView;
    };
    GameScene.prototype.activate = function () {
        _super.prototype.activate.call(this);
        this.panel.init();
        this.panelQuest.reset();
        this.panelQuest.init();
        this.panelQuest.startNewQuests();
        this.resizeContainer.add([
            this.panel,
            this.mapView,
            this.panelQuest
        ]);
        this.ambientSoundPlugin.setActive("gameMusic");
        this.game.events.addListener(GameProcessEvents_1.GameProcessEvents.INIT_SCORE, this.onInitScore, this);
        this.game.events.addListener(GameProcessEvents_1.GameProcessEvents.UPDATE_SCORE, this.onUpdateScore, this);
    };
    GameScene.prototype.deactivate = function () {
        this.game.events.removeListener(GameProcessEvents_1.GameProcessEvents.INIT_SCORE, this.onInitScore, this);
        this.game.events.removeListener(GameProcessEvents_1.GameProcessEvents.UPDATE_SCORE, this.onUpdateScore, this);
        this.panel.free();
        this.panelQuest.free();
        this.resizeContainer.remove([
            this.panel,
            this.mapView,
            this.panelQuest
        ]);
    };
    GameScene.prototype.onInitScore = function () {
        this.panel.scoreInitialize(this.gameProcessModel.score);
    };
    GameScene.prototype.onUpdateScore = function () {
        this.panel.setScore(this.gameProcessModel.score);
    };
    return GameScene;
}(BaseScene_1.BaseScene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scenes/views/LoginScene.ts":
/*!****************************************!*\
  !*** ./src/scenes/views/LoginScene.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = __webpack_require__(/*! ../../content/Language */ "./src/content/Language.ts");
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var LoginEvents_1 = __webpack_require__(/*! ../../login/events/LoginEvents */ "./src/login/events/LoginEvents.ts");
var Profile_1 = __webpack_require__(/*! ../../login/views/Profile */ "./src/login/views/Profile.ts");
var SignIn_1 = __webpack_require__(/*! ../../login/views/SignIn */ "./src/login/views/SignIn.ts");
var SignUp_1 = __webpack_require__(/*! ../../login/views/SignUp */ "./src/login/views/SignUp.ts");
var SeasonsEvents_1 = __webpack_require__(/*! ../../panels/events/SeasonsEvents */ "./src/panels/events/SeasonsEvents.ts");
var ColorIDsUtils_1 = __webpack_require__(/*! ../../utils/ColorIDsUtils */ "./src/utils/ColorIDsUtils.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/scenes/constants.ts");
var SceneEvents_1 = __webpack_require__(/*! ../events/SceneEvents */ "./src/scenes/events/SceneEvents.ts");
var BaseScene_1 = __webpack_require__(/*! ./BaseScene */ "./src/scenes/views/BaseScene.ts");
var UISceneEvents_1 = __webpack_require__(/*! ../events/UISceneEvents */ "./src/scenes/events/UISceneEvents.ts");
var LoginScene = (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene() {
        var _this = _super.call(this, constants_1.ScenesConstants.names.login) || this;
        _this.RADIUS_BLOW = 210;
        _this.monsterDefaultNames = {
            r: Language_1.Language.getText(Language_1.Language.TITLE_HELP9),
            o: Language_1.Language.getText(Language_1.Language.TITLE_HELP8),
            y: Language_1.Language.getText(Language_1.Language.TITLE_HELP14),
            g: Language_1.Language.getText(Language_1.Language.TITLE_HELP13),
            b: Language_1.Language.getText(Language_1.Language.TITLE_HELP10),
            p: Language_1.Language.getText(Language_1.Language.TITLE_HELP11),
            d: Language_1.Language.getText(Language_1.Language.TITLE_HELP12)
        };
        _this.vCellsPlayers = [];
        return _this;
    }
    LoginScene.prototype.preload = function () {
        _super.prototype.preload.call(this);
        this.anims.create({ key: "addUser", frames: this.anims.generateFrameNames("profiles", { prefix: "addUser", end: 39, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "blueOut", frames: this.anims.generateFrameNames("profiles", { prefix: "blueOut", end: 73, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "orangeOut", frames: this.anims.generateFrameNames("profiles", { prefix: "orangeOut", end: 82, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "redOut", frames: this.anims.generateFrameNames("profiles", { prefix: "redOut", end: 60, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "greenOut", frames: this.anims.generateFrameNames("profiles", { prefix: "greenOut", end: 91, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "yellowOut", frames: this.anims.generateFrameNames("profiles", { prefix: "yellowOut", end: 58, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "darkOut", frames: this.anims.generateFrameNames("profiles", { prefix: "darkOut", end: 54, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "purpleOut", frames: this.anims.generateFrameNames("profiles", { prefix: "purpleOut", end: 7, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "blueUp", frames: this.anims.generateFrameNames("profiles", { prefix: "blueUp", end: 54, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "orangeUp", frames: this.anims.generateFrameNames("profiles", { prefix: "orangeUp", end: 21, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "redUp", frames: this.anims.generateFrameNames("profiles", { prefix: "redUp", end: 10, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "greenUp", frames: this.anims.generateFrameNames("profiles", { prefix: "greenUp", end: 29, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "yellowUp", frames: this.anims.generateFrameNames("profiles", { prefix: "yellowUp", end: 58, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "darkUp", frames: this.anims.generateFrameNames("profiles", { prefix: "darkUp", end: 12, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "purpleUp", frames: this.anims.generateFrameNames("profiles", { prefix: "purpleUp", end: 19, zeroPad: 4 }), repeat: -1 });
    };
    LoginScene.prototype.buildScene = function () {
        this.ambientSoundPlugin = this.plugins.get("ambientSoundPlugin");
        this.game.events.emit(SeasonsEvents_1.SeasonsEvents.CHANGE_SEASON);
        this.signIN = new SignIn_1.SignIn(this, this.gameWidth / 2, this.gameHeight / 2);
        this.resizeContainer.add(this.signIN);
        this.signUP = new SignUp_1.SignUp(this, this.gameWidth / 2, this.gameHeight / 2);
        this.resizeContainer.add(this.signUP);
        for (var indexPlayer = 0; indexPlayer < GameDataModel_1.GameDataModel.COUNT_PLAYERS; indexPlayer++) {
            var profile = new Profile_1.Profile(this);
            profile.init();
            this.resizeContainer.add(profile);
            this.vCellsPlayers.push(profile);
        }
        var circle = new exports_1.Shape.Circle(this.gameWidth * .5, this.gameHeight * .5, this.RADIUS_BLOW);
        exports_1.Actions.PlaceOnCircle(this.vCellsPlayers, circle);
    };
    LoginScene.prototype.activate = function () {
        _super.prototype.activate.call(this);
        this.ambientSoundPlugin.setActive("menuMusic");
        this.game.events.emit(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_SEASONS_PANEL, true);
        this.refreshCells();
        this.freeSigns();
        for (var indexPlayer = 0; indexPlayer < GameDataModel_1.GameDataModel.COUNT_PLAYERS; indexPlayer++) {
            this.vCellsPlayers[indexPlayer].init();
        }
        this.events.addListener(LoginEvents_1.LoginEvents.BACK_TO_LOGIN, this.onBack, this);
        this.events.addListener(LoginEvents_1.LoginEvents.SELECT_PROFILE, this.onSelectProfile, this);
        this.events.addListener(LoginEvents_1.LoginEvents.CREATE_PROFILE, this.onCreateProfile, this);
        this.events.addListener(LoginEvents_1.LoginEvents.DELETE_PROFILE, this.onDeleteProfile, this);
        this.events.addListener(LoginEvents_1.LoginEvents.PLAY_GAME, this.onPlayGame, this);
        this.language();
    };
    LoginScene.prototype.deactivate = function () {
        for (var indexPlayer = 0; indexPlayer < GameDataModel_1.GameDataModel.COUNT_PLAYERS; indexPlayer++) {
            this.vCellsPlayers[indexPlayer].free();
        }
        this.events.removeListener(LoginEvents_1.LoginEvents.BACK_TO_LOGIN, this.onBack, this);
        this.events.removeListener(LoginEvents_1.LoginEvents.SELECT_PROFILE, this.onSelectProfile, this);
        this.events.removeListener(LoginEvents_1.LoginEvents.CREATE_PROFILE, this.onCreateProfile, this);
        this.events.removeListener(LoginEvents_1.LoginEvents.DELETE_PROFILE, this.onDeleteProfile, this);
        this.events.removeListener(LoginEvents_1.LoginEvents.PLAY_GAME, this.onPlayGame, this);
    };
    LoginScene.prototype.freeSigns = function () {
        this.signUP.free();
        this.signIN.free();
    };
    LoginScene.prototype.refreshCells = function () {
        for (var indexPlayer = 0; indexPlayer < GameDataModel_1.GameDataModel.COUNT_PLAYERS; indexPlayer++) {
            this.vCellsPlayers[indexPlayer].setProfileData(GameDataModel_1.GameDataModel.allPlayersData[indexPlayer].name, GameDataModel_1.GameDataModel.allPlayersData[indexPlayer].monster, indexPlayer);
        }
    };
    LoginScene.prototype.onSelectProfile = function (id) {
        GameDataModel_1.GameDataModel.playerId = id;
        if (GameDataModel_1.GameDataModel.playerData.name !== "???") {
            var animName = ColorIDsUtils_1.ColorIDsUtils.getColorFromID(GameDataModel_1.GameDataModel.playerData.monster);
            var playerName = GameDataModel_1.GameDataModel.playerData.name;
            this.signIN.resetData(animName, playerName);
            this.signIN.init();
        }
        else {
            this.signUP.init();
        }
        for (var indexPlayer = 0; indexPlayer < GameDataModel_1.GameDataModel.COUNT_PLAYERS; indexPlayer++) {
            this.vCellsPlayers[indexPlayer].hide();
        }
    };
    LoginScene.prototype.onBack = function () {
        for (var indexPlayer = 0; indexPlayer < GameDataModel_1.GameDataModel.COUNT_PLAYERS; indexPlayer++) {
            this.vCellsPlayers[indexPlayer].show();
        }
    };
    LoginScene.prototype.onCreateProfile = function (playerData) {
        GameDataModel_1.GameDataModel.playerData.name = playerData.playerName.length === 0
            ? this.choiseName(playerData.playerColor)
            : this.cutName(playerData.playerName);
        GameDataModel_1.GameDataModel.playerData.monster = playerData.playerColor;
        this.gameDataModel.saveData();
        this.refreshCells();
        this.onBack();
    };
    LoginScene.prototype.onDeleteProfile = function () {
        this.gameDataModel.deletePlayerData(GameDataModel_1.GameDataModel.playerId);
        this.refreshCells();
        this.onBack();
    };
    LoginScene.prototype.onPlayGame = function () {
        var _this = this;
        this.game.events.emit(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_SEASONS_PANEL, false);
        this.add.tween({
            targets: this,
            alpha: 0,
            duration: 750,
            onComplete: function () {
                _this.loadMenu();
            }
        });
    };
    LoginScene.prototype.choiseName = function (colorChar) {
        return this.monsterDefaultNames[colorChar];
    };
    LoginScene.prototype.cutName = function (playerName) {
        return playerName.substr(0, 10).toUpperCase();
    };
    LoginScene.prototype.language = function () {
        this.signUP.language();
        this.signIN.language();
    };
    LoginScene.prototype.loadMenu = function () {
        this.game.events.emit(SceneEvents_1.SceneEvents.CHANGE_SCENE, constants_1.ScenesConstants.names.menu);
    };
    return LoginScene;
}(BaseScene_1.BaseScene));
exports.LoginScene = LoginScene;


/***/ }),

/***/ "./src/scenes/views/MenuScene.ts":
/*!***************************************!*\
  !*** ./src/scenes/views/MenuScene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../../menu/constants */ "./src/menu/constants.ts");
var MenuEvents_1 = __webpack_require__(/*! ../../menu/events/MenuEvents */ "./src/menu/events/MenuEvents.ts");
var ResetMenuManager_1 = __webpack_require__(/*! ../../menu/managers/ResetMenuManager */ "./src/menu/managers/ResetMenuManager.ts");
var MainMenu_1 = __webpack_require__(/*! ../../menu/views/MainMenu */ "./src/menu/views/MainMenu.ts");
var OptionsMenu_1 = __webpack_require__(/*! ../../menu/views/OptionsMenu */ "./src/menu/views/OptionsMenu.ts");
var ScoreMenu_1 = __webpack_require__(/*! ../../menu/views/ScoreMenu */ "./src/menu/views/ScoreMenu.ts");
var TitleMenu_1 = __webpack_require__(/*! ../../menu/views/TitleMenu */ "./src/menu/views/TitleMenu.ts");
var constants_2 = __webpack_require__(/*! ../constants */ "./src/scenes/constants.ts");
var UISceneEvents_1 = __webpack_require__(/*! ../events/UISceneEvents */ "./src/scenes/events/UISceneEvents.ts");
var BaseScene_1 = __webpack_require__(/*! ./BaseScene */ "./src/scenes/views/BaseScene.ts");
var SceneEvents_1 = __webpack_require__(/*! ../events/SceneEvents */ "./src/scenes/events/SceneEvents.ts");
var GameProcessModel_1 = __webpack_require__(/*! ../../data/models/GameProcessModel */ "./src/data/models/GameProcessModel.ts");
var GameProcessEvents_1 = __webpack_require__(/*! ../../data/events/GameProcessEvents */ "./src/data/events/GameProcessEvents.ts");
var MenuScene = (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        return _super.call(this, constants_2.ScenesConstants.names.menu) || this;
    }
    MenuScene.prototype.preload = function () {
        _super.prototype.preload.call(this);
        this.anims.create({ key: "isEscape", frames: this.anims.generateFrameNames("menu", { prefix: "isEscape", end: 9, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "notEscape", frames: this.anims.generateFrameNames("menu", { prefix: "notEscape", end: 3, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "d2", frames: this.anims.generateFrameNames("menu", { prefix: "d2", end: 7, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "animMusic", frames: this.anims.generateFrameNames("menu", { prefix: "animMusic", end: 10, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "animSounds", frames: this.anims.generateFrameNames("menu", { prefix: "animSounds", end: 31, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "langEn", frames: this.anims.generateFrameNames("menu", { prefix: "langEn", end: 91, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "langRu", frames: this.anims.generateFrameNames("menu", { prefix: "langRu", end: 91, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeR1", frames: this.anims.generateFrameNames("scores", { prefix: "activeR1", end: 10, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeR2", frames: this.anims.generateFrameNames("scores", { prefix: "activeR2", end: 10, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeR3", frames: this.anims.generateFrameNames("scores", { prefix: "activeR3", end: 11, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeO1", frames: this.anims.generateFrameNames("scores", { prefix: "activeO1", end: 29, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeO2", frames: this.anims.generateFrameNames("scores", { prefix: "activeO2", end: 29, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeO3", frames: this.anims.generateFrameNames("scores", { prefix: "activeO3", end: 21, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeY1", frames: this.anims.generateFrameNames("scores", { prefix: "activeY1", end: 10, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeY2", frames: this.anims.generateFrameNames("scores", { prefix: "activeY2", end: 15, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeY3", frames: this.anims.generateFrameNames("scores", { prefix: "activeY3", end: 10, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeG1", frames: this.anims.generateFrameNames("scores", { prefix: "activeG1", end: 24, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeG2", frames: this.anims.generateFrameNames("scores", { prefix: "activeG2", end: 7, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeG3", frames: this.anims.generateFrameNames("scores", { prefix: "activeG3", end: 59, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeB1", frames: this.anims.generateFrameNames("scores", { prefix: "activeB1", end: 18, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeB2", frames: this.anims.generateFrameNames("scores", { prefix: "activeB2", end: 12, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeB3", frames: this.anims.generateFrameNames("scores", { prefix: "activeB3", end: 74, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeP1", frames: this.anims.generateFrameNames("scores", { prefix: "activeP1", end: 10, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeP2", frames: this.anims.generateFrameNames("scores", { prefix: "activeP2", end: 11, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeP3", frames: this.anims.generateFrameNames("scores", { prefix: "activeP3", end: 27, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeD1", frames: this.anims.generateFrameNames("scores", { prefix: "activeD1", end: 12, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeD2", frames: this.anims.generateFrameNames("scores", { prefix: "activeD2", end: 15, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "activeD3", frames: this.anims.generateFrameNames("scores", { prefix: "activeD3", end: 13, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "spark", frames: this.anims.generateFrameNames("spark", { prefix: "spark", end: 19, zeroPad: 4 }), repeat: 0 });
    };
    MenuScene.prototype.buildScene = function () {
        this.ambientSoundPlugin = this.plugins.get("ambientSoundPlugin");
        this.resetMenuManager = new ResetMenuManager_1.ResetMenuManager(this.game);
        this.gameProcessModel = new GameProcessModel_1.GameProcessModel(this.game);
        this.title = new TitleMenu_1.TitleMenu(this);
        this.title.x = this.gameWidth / 2;
        this.title.y = 25;
        this.resizeContainer.add(this.title);
        this.scoreMenu = new ScoreMenu_1.ScoreMenu(this);
        this.resizeContainer.add(this.scoreMenu);
        this.optionsMenu = new OptionsMenu_1.OptionsMenu(this);
        this.resizeContainer.add(this.optionsMenu);
        this.mainMenu = new MainMenu_1.MainMenu(this);
        this.resizeContainer.add(this.mainMenu);
    };
    MenuScene.prototype.hideAllMenus = function () {
        this.hideSubmenu(constants_1.MenuConstants.subMenus.MAIN);
        this.hideSubmenu(constants_1.MenuConstants.subMenus.SCORES);
        this.hideSubmenu(constants_1.MenuConstants.subMenus.OPTIONS);
    };
    MenuScene.prototype.showSubmenu = function (menuId) {
        this.getSubMenuById(menuId).init();
    };
    MenuScene.prototype.hideSubmenu = function (menuId) {
        this.getSubMenuById(menuId).hide();
    };
    MenuScene.prototype.getSubMenuById = function (menuId) {
        switch (menuId) {
            case constants_1.MenuConstants.subMenus.MAIN:
                return this.mainMenu;
            case constants_1.MenuConstants.subMenus.OPTIONS:
                return this.optionsMenu;
            case constants_1.MenuConstants.subMenus.SCORES:
                return this.scoreMenu;
        }
        return this.mainMenu;
    };
    MenuScene.prototype.activate = function () {
        _super.prototype.activate.call(this);
        this.ambientSoundPlugin.setActive("menuMusic");
        this.game.events.emit(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_PROFILE_BUTTON, true);
        this.game.events.emit(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_SOCIAL_BUTTONS, true);
        this.game.events.addListener(MenuEvents_1.MenuEvents.SHOW_SUBMENU, this.showSubmenu, this);
        this.game.events.addListener(MenuEvents_1.MenuEvents.HIDE_SUBMENU, this.hideSubmenu, this);
        this.game.events.addListener(GameProcessEvents_1.GameProcessEvents.START_TUTORIAL, this.startTutorial, this);
        this.game.events.addListener(GameProcessEvents_1.GameProcessEvents.STAT_NEW_GAME, this.startNewGame, this);
        this.game.events.addListener(GameProcessEvents_1.GameProcessEvents.CONTINUE_GAME, this.continueGame, this);
        this.resetMenuManager.init();
        this.title.init();
        this.hideAllMenus();
        this.showSubmenu(constants_1.MenuConstants.subMenus.MAIN);
    };
    MenuScene.prototype.deactivate = function () {
        this.resetMenuManager.free();
        this.title.free();
        this.game.events.emit(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_SOCIAL_BUTTONS, false);
        this.game.events.removeListener(MenuEvents_1.MenuEvents.SHOW_SUBMENU, this.showSubmenu, this);
        this.game.events.removeListener(MenuEvents_1.MenuEvents.HIDE_SUBMENU, this.hideSubmenu, this);
        this.game.events.removeListener(GameProcessEvents_1.GameProcessEvents.START_TUTORIAL, this.startTutorial, this);
        this.game.events.removeListener(GameProcessEvents_1.GameProcessEvents.STAT_NEW_GAME, this.startNewGame, this);
        this.game.events.removeListener(GameProcessEvents_1.GameProcessEvents.CONTINUE_GAME, this.continueGame, this);
    };
    MenuScene.prototype.language = function () {
        this.mainMenu.language();
        this.scoreMenu.language();
        this.optionsMenu.language();
    };
    MenuScene.prototype.startTutorial = function () {
        this.gameProcessModel.isTutorial = true;
        this.gameProcessModel.isNewGame = false;
        this.game.events.emit(SceneEvents_1.SceneEvents.CHANGE_SCENE, constants_2.ScenesConstants.names.universe);
    };
    MenuScene.prototype.startNewGame = function () {
        this.gameProcessModel.isTutorial = false;
        this.gameProcessModel.isNewGame = true;
        this.game.events.emit(SceneEvents_1.SceneEvents.CHANGE_SCENE, constants_2.ScenesConstants.names.universe);
    };
    MenuScene.prototype.continueGame = function () {
        this.gameProcessModel.isTutorial = false;
        this.gameProcessModel.isNewGame = false;
        this.game.events.emit(SceneEvents_1.SceneEvents.CHANGE_SCENE, constants_2.ScenesConstants.names.universe);
    };
    return MenuScene;
}(BaseScene_1.BaseScene));
exports.MenuScene = MenuScene;


/***/ }),

/***/ "./src/scenes/views/PopupsScene.ts":
/*!*****************************************!*\
  !*** ./src/scenes/views/PopupsScene.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../../popups/constants */ "./src/popups/constants.ts");
var PopupEvents_1 = __webpack_require__(/*! ../../popups/events/PopupEvents */ "./src/popups/events/PopupEvents.ts");
var PopupYesNo_1 = __webpack_require__(/*! ../../popups/views/PopupYesNo */ "./src/popups/views/PopupYesNo.ts");
var constants_2 = __webpack_require__(/*! ../constants */ "./src/scenes/constants.ts");
var BaseScene_1 = __webpack_require__(/*! ./BaseScene */ "./src/scenes/views/BaseScene.ts");
var PopupsScene = (function (_super) {
    __extends(PopupsScene, _super);
    function PopupsScene() {
        return _super.call(this, constants_2.ScenesConstants.names.popups) || this;
    }
    PopupsScene.prototype.buildScene = function () {
        this.game.events.addListener(PopupEvents_1.PopupEvents.SHOW_POPUP, this.onShowPopup, this);
    };
    PopupsScene.prototype.onShowPopup = function (popupOptions) {
        switch (popupOptions.id) {
            case constants_1.PopupConstants.ids.POPUP_APPROVE:
                this.callApprovePopup(popupOptions);
                break;
        }
        this.scene.bringToTop(constants_2.ScenesConstants.names.popups);
    };
    PopupsScene.prototype.callApprovePopup = function (popupOptions) {
        this.popup = new PopupYesNo_1.PopupYesNo(this, this.gameWidth * .5, this.gameHeight * .5);
        this.popup.callPopup(popupOptions);
        this.resizeContainer.add(this.popup);
    };
    return PopupsScene;
}(BaseScene_1.BaseScene));
exports.PopupsScene = PopupsScene;


/***/ }),

/***/ "./src/scenes/views/PreloaderScene .ts":
/*!*********************************************!*\
  !*** ./src/scenes/views/PreloaderScene .ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LoadingAssetsModel_1 = __webpack_require__(/*! ../../data/models/LoadingAssetsModel */ "./src/data/models/LoadingAssetsModel.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/scenes/constants.ts");
var SceneEvents_1 = __webpack_require__(/*! ../events/SceneEvents */ "./src/scenes/events/SceneEvents.ts");
var BaseScene_1 = __webpack_require__(/*! ./BaseScene */ "./src/scenes/views/BaseScene.ts");
var PreloaderScene = (function (_super) {
    __extends(PreloaderScene, _super);
    function PreloaderScene() {
        var _this = _super.call(this, constants_1.ScenesConstants.names.preloader) || this;
        _this.autoActivated = false;
        return _this;
    }
    PreloaderScene.prototype.preload = function () {
        _super.prototype.preload.call(this);
        this.createLoadingScene();
        this.addListeners();
        (new LoadingAssetsModel_1.LoadingAssetsModel(this)).loadInitialAssets();
    };
    PreloaderScene.prototype.setAnims = function () {
        this.anims.create({ key: "ingameB", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "ingameB", end: 38, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "ingameD", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "ingameD", end: 37, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "ingameG", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "ingameG", end: 34, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "ingameO", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "ingameO", end: 21, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "ingameP", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "ingameP", end: 17, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "ingameR", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "ingameR", end: 37, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "ingameY", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "ingameY", end: 27, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outgameB", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "outgameB", end: 23, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outgameD", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "outgameD", end: 22, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outgameG", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "outgameG", end: 23, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outgameO", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "outgameO", end: 23, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outgameP", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "outgameP", end: 23, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outgameR", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "outgameR", end: 23, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outgameY", frames: this.anims.generateFrameNames("monstersInit1", { prefix: "outgameY", end: 23, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "abortB", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "abortB", end: 0, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "abortD", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "abortD", end: 24, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "abortG", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "abortG", end: 24, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "abortO", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "abortO", end: 32, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "abortP", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "abortP", end: 24, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "abortR", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "abortR", end: 12, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "abortY", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "abortY", end: 23, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "escapeD", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "escapeD", end: 21, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "escapeStopD", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "escapeStopD", end: 9, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "insultB", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "insultB", end: 26, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "insultD", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "insultD", end: 34, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "insultG", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "insultG", end: 24, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "insultO", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "insultO", end: 57, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "insultP", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "insultP", end: 37, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "insultR", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "insultR", end: 43, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "insultY", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "insultY", end: 21, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "sparkBall", frames: this.anims.generateFrameNames("monstersInit2", { prefix: "sparkBall", end: 26, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickB", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickB", end: 7, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickD", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickD", end: 26, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickG", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickG", end: 6, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickO", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickO", end: 4, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickP", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickP", end: 9, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickR", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickR", end: 8, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickY", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickY", end: 6, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickStopB", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickStopB", end: 0, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickStopD", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickStopD", end: 9, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickStopG", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickStopG", end: 4, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickStopO", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickStopO", end: 21, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickStopP", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickStopP", end: 7, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickStopR", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickStopR", end: 5, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "clickStopY", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "clickStopY", end: 39, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "loaderMagic", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "loaderMagic", end: 15, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "moveD", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "moveD", end: 13, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "moveG", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "moveG", end: 13, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "moveO", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "moveO", end: 13, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "moveP", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "moveP", end: 13, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "moveR", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "moveR", end: 13, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "moveY", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "moveY", end: 13, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "portalB", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "portalB", end: 13, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outB", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "outB", end: 0, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outD", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "outD", end: 0, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outG", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "outG", end: 0, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outO", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "outO", end: 0, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outP", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "outP", end: 0, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outR", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "outR", end: 0, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "outY", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "outY", end: 0, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "overB", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overB", end: 9, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "overD", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overD", end: 8, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "overG", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overG", end: 4, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "overO", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overO", end: 7, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "overP", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overP", end: 9, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "overR", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overR", end: 64, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "overY", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overY", end: 7, zeroPad: 4 }), repeat: -1 });
        this.anims.create({ key: "overStopB", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overStopB", end: 3, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "overStopD", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overStopD", end: 7, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "overStopG", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overStopG", end: 7, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "overStopO", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overStopO", end: 5, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "overStopP", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overStopP", end: 3, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "overStopR", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overStopR", end: 9, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "overStopY", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "overStopY", end: 9, zeroPad: 4 }), repeat: 0 });
        this.anims.create({ key: "particle", frames: this.anims.generateFrameNames("monstersInit3", { prefix: "particle", end: 2, zeroPad: 4 }), repeat: 0 });
    };
    PreloaderScene.prototype.buildScene = function () {
        this.scene.start(constants_1.ScenesConstants.names.ui);
        this.game.events.emit(SceneEvents_1.SceneEvents.CHANGE_SCENE, constants_1.ScenesConstants.names.login);
        this.scene.remove(constants_1.ScenesConstants.names.preloader);
    };
    PreloaderScene.prototype.createLoadingScene = function () {
        this.percentText = this.add.bitmapText(0, 0, "aivaStroke", "0%", 120);
        this.percentText.setOrigin(.5, .5).setCenterAlign();
        var loadingContainer = this.add.container(0, 0, [
            this.percentText
        ]);
        Phaser.Display.Align.In.Center(loadingContainer, this.add.zone(this.gameWidth / 2, this.gameHeight / 2, this.gameWidth, this.gameHeight));
        this.resizeContainer.add(loadingContainer);
    };
    PreloaderScene.prototype.addListeners = function () {
        this.load.on("progress", this.onProgress, this);
        this.load.on("fileprogress", this.onFileProgress, this);
        this.load.on("complete", this.ready, this);
    };
    PreloaderScene.prototype.removeListeners = function () {
        this.load.off("progress", this.onProgress, this);
        this.load.off("fileprogress", this.onFileProgress, this);
        this.load.off("complete", this.ready, this);
    };
    PreloaderScene.prototype.onProgress = function (value) {
        this.percentText.setText(Math.round(value * 100) + "%");
    };
    PreloaderScene.prototype.onFileProgress = function (file) {
        if (file.percentComplete === 1) {
            console.log("Loaded asset: " + file.key + "." + file.type);
        }
    };
    PreloaderScene.prototype.ready = function () {
        this.setAnims();
        this.removeListeners();
        this.percentText.destroy();
    };
    return PreloaderScene;
}(BaseScene_1.BaseScene));
exports.PreloaderScene = PreloaderScene;


/***/ }),

/***/ "./src/scenes/views/SceneManager.ts":
/*!******************************************!*\
  !*** ./src/scenes/views/SceneManager.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/scenes/constants.ts");
var SceneEvents_1 = __webpack_require__(/*! ../events/SceneEvents */ "./src/scenes/events/SceneEvents.ts");
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        return _super.call(this, constants_1.ScenesConstants.names.manager) || this;
    }
    SceneManager.prototype.init = function () {
        this.game.events.addListener(SceneEvents_1.SceneEvents.CHANGE_SCENE, this.onChangeScene, this);
    };
    SceneManager.prototype.onChangeScene = function (sceneId) {
        this.stopCurrentScene();
        this.currentSceneId = sceneId;
        this.startNewScene();
    };
    SceneManager.prototype.stopCurrentScene = function () {
        if (this.currentSceneId) {
            this.scene.setActive(false, this.currentSceneId);
            this.scene.setVisible(false, this.currentSceneId);
            var currentScene = this.game.scene.getScene(this.currentSceneId);
            currentScene.deactivate();
        }
    };
    SceneManager.prototype.startNewScene = function () {
        var newScene = this.game.scene.getScene(this.currentSceneId);
        if (newScene.isCreated) {
            newScene.activate();
        }
        else {
            newScene.launchInnerScenes();
            this.scene.launch(this.currentSceneId);
        }
        this.scene.setActive(true, this.currentSceneId);
        this.scene.setVisible(true, this.currentSceneId);
    };
    return SceneManager;
}(exports_1.Scene));
exports.SceneManager = SceneManager;


/***/ }),

/***/ "./src/scenes/views/TutorialScene.ts":
/*!*******************************************!*\
  !*** ./src/scenes/views/TutorialScene.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameProcessModel_1 = __webpack_require__(/*! ../../data/models/GameProcessModel */ "./src/data/models/GameProcessModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var MapEvents_1 = __webpack_require__(/*! ../../map/events/MapEvents */ "./src/map/events/MapEvents.ts");
var MapModel_1 = __webpack_require__(/*! ../../map/models/MapModel */ "./src/map/models/MapModel.ts");
var constants_1 = __webpack_require__(/*! ../../monsters/constants */ "./src/monsters/constants.ts");
var TutorialEvents_1 = __webpack_require__(/*! ../../panels/events/TutorialEvents */ "./src/panels/events/TutorialEvents.ts");
var PanelTutorialBottom_1 = __webpack_require__(/*! ../../panels/views/PanelTutorialBottom */ "./src/panels/views/PanelTutorialBottom.ts");
var PanelTutorialTop_1 = __webpack_require__(/*! ../../panels/views/PanelTutorialTop */ "./src/panels/views/PanelTutorialTop.ts");
var constants_2 = __webpack_require__(/*! ../constants */ "./src/scenes/constants.ts");
var TutorialSceneEvents_1 = __webpack_require__(/*! ../events/TutorialSceneEvents */ "./src/scenes/events/TutorialSceneEvents.ts");
var UISceneEvents_1 = __webpack_require__(/*! ../events/UISceneEvents */ "./src/scenes/events/UISceneEvents.ts");
var BaseScene_1 = __webpack_require__(/*! ./BaseScene */ "./src/scenes/views/BaseScene.ts");
var TutorialScene = (function (_super) {
    __extends(TutorialScene, _super);
    function TutorialScene() {
        var _this = _super.call(this, constants_2.ScenesConstants.names.tutorial) || this;
        _this.autoActivated = false;
        return _this;
    }
    TutorialScene.prototype.buildScene = function () {
        this.gameProcessModel = new GameProcessModel_1.GameProcessModel(this.game);
        this.mapModel = new MapModel_1.MapModel();
        this.panelTutorialTop = new PanelTutorialTop_1.PanelTutorialTop(this);
        this.panelTutorialBottom = new PanelTutorialBottom_1.PanelTutorialBottom(this);
    };
    TutorialScene.prototype.setMapView = function (mapView) {
        this.mapView = mapView;
    };
    TutorialScene.prototype.activate = function () {
        _super.prototype.activate.call(this);
        this.resizeContainer.add([
            this.panelTutorialTop,
            this.mapView,
            this.panelTutorialBottom
        ]);
        this.game.events.emit(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_PROFILE_BUTTON, false);
        this.game.events.emit(MapEvents_1.MapEvents.CHANGE_VISIBILITY_MAP_CELLS, true);
        this.game.events.addListener(TutorialEvents_1.TutorialEvents.CHANGE_TUTORIAL, this.onChangeTutorial, this);
        this.game.events.addListener(TutorialSceneEvents_1.TutorialSceneEvents.AUTO_CHANGE_ADVICE, this.onAutoChangeAdvice, this);
        this.panelTutorialTop.init();
        this.panelTutorialBottom.init();
        this.getAdvice();
    };
    TutorialScene.prototype.deactivate = function () {
        this.panelTutorialTop.free();
        this.panelTutorialBottom.free();
        this.resizeContainer.remove([
            this.panelTutorialTop,
            this.mapView,
            this.panelTutorialBottom
        ]);
        this.game.events.emit(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_MAP_CELLS_TOGGLE, false);
        this.game.events.emit(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_PROFILE_BUTTON, true);
        this.game.events.removeListener(TutorialEvents_1.TutorialEvents.CHANGE_TUTORIAL, this.onChangeTutorial, this);
        this.game.events.removeListener(TutorialSceneEvents_1.TutorialSceneEvents.AUTO_CHANGE_ADVICE, this.onAutoChangeAdvice, this);
    };
    TutorialScene.prototype.onChangeTutorial = function (step) {
        this.gameProcessModel.advice += step;
        this.getAdvice();
    };
    TutorialScene.prototype.getAdvice = function () {
        this.panelTutorialBottom.hideCountMonster();
        this.game.events.emit(MapEvents_1.MapEvents.CHOICE_RESET);
        this.mapModel.createMap();
        this.mapView.navigator.free();
        this.gameProcessModel.monsterInGame = this.gameProcessModel.monsterInGameTotal;
        this.panelTutorialTop.updatePanel(this.gameProcessModel.advice);
        this.panelTutorialBottom.updatePanel(this.gameProcessModel.advice);
        this.setConfigAdvice();
    };
    TutorialScene.prototype.setConfigAdvice = function () {
        this.gameProcessModel.dontMoveInRoom = true;
        this.gameProcessModel.addingInRoom = true;
        this.gameProcessModel.countOfTurns = 3;
        this.gameProcessModel.turns = 0;
        if (this.gameProcessModel.advice > TutorialScene.TUTORIAL_1) {
            this.gameProcessModel.dontMoveInRoom = false;
        }
        if (this.gameProcessModel.advice > TutorialScene.TUTORIAL_2) {
            this.gameProcessModel.addingInRoom = false;
        }
        switch (this.gameProcessModel.advice) {
            case TutorialScene.TUTORIAL_1:
            case TutorialScene.TUTORIAL_2:
                break;
            case TutorialScene.TUTORIAL_3:
                this.mapModel.mapColor[2][2] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[1][7] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[3][7] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[4][7] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[5][7] = constants_1.MonsterColor.PURPLE;
                this.mapView.loadMonsters();
                this.mapView.navigator.init(this.mapModel.mapMonsters[2][2], new exports_1.Point(7, 2));
                break;
            case TutorialScene.TUTORIAL_8:
                this.mapModel.mapColor[2][2] = constants_1.MonsterColor.ORANGE;
                this.mapModel.mapColor[2][3] = constants_1.MonsterColor.BLUE;
                this.mapModel.mapColor[1][3] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[0][3] = constants_1.MonsterColor.DARK;
                this.mapModel.mapColor[2][5] = constants_1.MonsterColor.YELLOW;
                this.mapModel.mapColor[3][5] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[1][7] = constants_1.MonsterColor.ORANGE;
                this.mapModel.mapColor[3][7] = constants_1.MonsterColor.ORANGE;
                this.mapModel.mapColor[4][7] = constants_1.MonsterColor.ORANGE;
                this.mapModel.mapColor[5][7] = constants_1.MonsterColor.ORANGE;
                this.mapView.loadMonsters();
                this.mapView.navigator.init(this.mapModel.mapMonsters[2][2], new exports_1.Point(7, 2));
                this.panelTutorialBottom.showCountMonster(6, constants_1.MonsterConstants[constants_1.MonsterColor.ORANGE].countInLineMin);
                break;
            case TutorialScene.TUTORIAL_9:
                this.mapModel.mapColor[2][2] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[2][3] = constants_1.MonsterColor.BLUE;
                this.mapModel.mapColor[1][3] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[0][3] = constants_1.MonsterColor.DARK;
                this.mapModel.mapColor[2][5] = constants_1.MonsterColor.YELLOW;
                this.mapModel.mapColor[3][5] = constants_1.MonsterColor.ORANGE;
                this.mapModel.mapColor[1][7] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[3][7] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[4][7] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[5][7] = constants_1.MonsterColor.RED;
                this.mapView.loadMonsters();
                this.mapView.navigator.init(this.mapModel.mapMonsters[2][2], new exports_1.Point(7, 2));
                this.panelTutorialBottom.showCountMonster(6, constants_1.MonsterConstants[constants_1.MonsterColor.RED].countInLineMin);
                break;
            case TutorialScene.TUTORIAL_10:
                this.mapModel.mapColor[1][1] = constants_1.MonsterColor.ORANGE;
                this.mapModel.mapColor[1][2] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[1][3] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[2][1] = constants_1.MonsterColor.DARK;
                this.mapModel.mapColor[2][2] = constants_1.MonsterColor.BLUE;
                this.mapModel.mapColor[2][3] = constants_1.MonsterColor.ORANGE;
                this.mapModel.mapColor[3][1] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[3][2] = constants_1.MonsterColor.YELLOW;
                this.mapModel.mapColor[3][3] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[1][7] = constants_1.MonsterColor.BLUE;
                this.mapModel.mapColor[3][7] = constants_1.MonsterColor.BLUE;
                this.mapModel.mapColor[4][7] = constants_1.MonsterColor.BLUE;
                this.mapModel.mapColor[5][7] = constants_1.MonsterColor.BLUE;
                this.mapView.loadMonsters();
                this.mapView.navigator.init(this.mapModel.mapMonsters[2][2], new exports_1.Point(7, 2));
                this.panelTutorialBottom.showCountMonster(6, constants_1.MonsterConstants[constants_1.MonsterColor.BLUE].countInLineMin);
                break;
            case TutorialScene.TUTORIAL_11:
                this.mapModel.mapColor[2][2] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[0][3] = constants_1.MonsterColor.DARK;
                this.mapModel.mapColor[2][3] = constants_1.MonsterColor.BLUE;
                this.mapModel.mapColor[3][2] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[1][3] = constants_1.MonsterColor.ORANGE;
                this.mapModel.mapColor[3][4] = constants_1.MonsterColor.YELLOW;
                this.mapModel.mapColor[2][5] = constants_1.MonsterColor.DARK;
                this.mapModel.mapColor[1][5] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[1][7] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[3][7] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[4][7] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[5][7] = constants_1.MonsterColor.PURPLE;
                this.mapView.loadMonsters();
                this.mapView.navigator.init(this.mapModel.mapMonsters[2][2], new exports_1.Point(7, 2));
                this.panelTutorialBottom.showCountMonster(6, constants_1.MonsterConstants[constants_1.MonsterColor.PURPLE].countInLineMin);
                break;
            case TutorialScene.TUTORIAL_12:
                this.mapModel.mapColor[1][6] = constants_1.MonsterColor.DARK;
                this.mapModel.mapColor[2][6] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[1][7] = constants_1.MonsterColor.DARK;
                this.mapModel.mapColor[3][7] = constants_1.MonsterColor.DARK;
                this.mapModel.mapColor[4][7] = constants_1.MonsterColor.DARK;
                this.mapView.loadMonsters();
                this.mapView.navigator.init(this.mapModel.mapMonsters[1][6], new exports_1.Point(7, 2));
                this.panelTutorialBottom.showCountMonster(5, constants_1.MonsterConstants[constants_1.MonsterColor.DARK].countInLineMin);
                break;
            case TutorialScene.TUTORIAL_13:
                this.mapModel.mapColor[2][2] = constants_1.MonsterColor.GREEN;
                this.mapModel.mapColor[2][3] = constants_1.MonsterColor.BLUE;
                this.mapModel.mapColor[1][3] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[0][3] = constants_1.MonsterColor.DARK;
                this.mapModel.mapColor[2][5] = constants_1.MonsterColor.YELLOW;
                this.mapModel.mapColor[3][5] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[1][7] = constants_1.MonsterColor.GREEN;
                this.mapModel.mapColor[2][7] = constants_1.MonsterColor.ORANGE;
                this.mapModel.mapColor[3][7] = constants_1.MonsterColor.GREEN;
                this.mapModel.mapColor[4][7] = constants_1.MonsterColor.GREEN;
                this.mapModel.mapColor[5][7] = constants_1.MonsterColor.GREEN;
                this.mapModel.mapColor[6][7] = constants_1.MonsterColor.GREEN;
                this.mapView.loadMonsters();
                this.mapView.navigator.init(this.mapModel.mapMonsters[2][2], new exports_1.Point(7, 2));
                this.panelTutorialBottom.showCountMonster(7, constants_1.MonsterConstants[constants_1.MonsterColor.GREEN].countInLineMin);
                break;
            case TutorialScene.TUTORIAL_14:
                this.mapModel.mapColor[2][2] = constants_1.MonsterColor.YELLOW;
                this.mapModel.mapColor[2][3] = constants_1.MonsterColor.BLUE;
                this.mapModel.mapColor[1][3] = constants_1.MonsterColor.PURPLE;
                this.mapModel.mapColor[0][3] = constants_1.MonsterColor.DARK;
                this.mapModel.mapColor[2][5] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[3][5] = constants_1.MonsterColor.ORANGE;
                this.mapModel.mapColor[2][7] = constants_1.MonsterColor.BLUE;
                this.mapModel.mapColor[3][7] = constants_1.MonsterColor.RED;
                this.mapModel.mapColor[4][7] = constants_1.MonsterColor.YELLOW;
                this.mapView.loadMonsters();
                this.mapView.navigator.init(this.mapModel.mapMonsters[2][2], new exports_1.Point(7, 1));
                this.panelTutorialBottom.showCountMonster(5, constants_1.MonsterConstants[constants_1.MonsterColor.YELLOW].countInLineMin);
                break;
        }
        this.gameProcessModel.addingMonsters = this.gameProcessModel.addingInRoom;
    };
    TutorialScene.prototype.onAutoChangeAdvice = function () {
        var _this = this;
        switch (this.gameProcessModel.advice) {
            case TutorialScene.TUTORIAL_3:
                if (this.mapModel.calcMonstersColor(constants_1.MonsterColor.PURPLE) === 0) {
                    this.onChangeTutorial(1);
                }
                break;
            case TutorialScene.TUTORIAL_8:
                if (this.mapModel.calcMonstersColor(constants_1.MonsterColor.ORANGE) === 0) {
                    this.panelTutorialTop.butPrev.visible = false;
                }
                this.panelTutorialTop.butNext.visible = false;
                setTimeout(function () { return _this.onChangeTutorial(1); }, 1000);
                break;
            case TutorialScene.TUTORIAL_9:
                if (this.mapModel.calcMonstersColor(constants_1.MonsterColor.RED) === 0) {
                    this.panelTutorialTop.butPrev.visible = false;
                }
                this.panelTutorialTop.butNext.visible = false;
                setTimeout(function () { return _this.onChangeTutorial(1); }, 1000);
                break;
            case TutorialScene.TUTORIAL_10:
                if (this.mapModel.calcMonstersColor(constants_1.MonsterColor.BLUE) === 0) {
                    this.panelTutorialTop.butPrev.visible = false;
                }
                this.panelTutorialTop.butNext.visible = false;
                setTimeout(function () { return _this.onChangeTutorial(1); }, 1000);
                break;
            case TutorialScene.TUTORIAL_11:
                if (this.mapModel.calcMonstersColor(constants_1.MonsterColor.PURPLE) === 0) {
                    this.panelTutorialTop.butPrev.visible = false;
                }
                this.panelTutorialTop.butNext.visible = false;
                setTimeout(function () { return _this.onChangeTutorial(1); }, 1000);
                break;
            case TutorialScene.TUTORIAL_12:
                if (this.mapModel.calcMonstersColor(constants_1.MonsterColor.DARK) === 0) {
                    this.panelTutorialTop.butPrev.visible = false;
                }
                this.panelTutorialTop.butNext.visible = false;
                setTimeout(function () { return _this.onChangeTutorial(1); }, 1000);
                break;
            case TutorialScene.TUTORIAL_13:
                if (this.mapModel.calcMonstersColor(constants_1.MonsterColor.GREEN) === 0) {
                    this.panelTutorialTop.butPrev.visible = false;
                }
                this.panelTutorialTop.butNext.visible = false;
                setTimeout(function () { return _this.onChangeTutorial(1); }, 1000);
                break;
            case TutorialScene.TUTORIAL_14:
                if (this.mapModel.calcMonstersColor(constants_1.MonsterColor.YELLOW) === 0) {
                    this.panelTutorialTop.butPrev.visible = false;
                }
                this.panelTutorialTop.butNext.visible = false;
                this.panelTutorialBottom.hideCountMonster();
                this.panelTutorialTop.butMenu.deactivate();
                setTimeout(function () { return _this.panelTutorialTop.exitFromTutorial(); }, 3000);
                break;
        }
    };
    TutorialScene.TUTORIAL_1 = 1;
    TutorialScene.TUTORIAL_2 = 2;
    TutorialScene.TUTORIAL_3 = 3;
    TutorialScene.TUTORIAL_8 = 8;
    TutorialScene.TUTORIAL_9 = 9;
    TutorialScene.TUTORIAL_10 = 10;
    TutorialScene.TUTORIAL_11 = 11;
    TutorialScene.TUTORIAL_12 = 12;
    TutorialScene.TUTORIAL_13 = 13;
    TutorialScene.TUTORIAL_14 = 14;
    return TutorialScene;
}(BaseScene_1.BaseScene));
exports.TutorialScene = TutorialScene;


/***/ }),

/***/ "./src/scenes/views/UIScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/views/UIScene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var MapEvents_1 = __webpack_require__(/*! ../../map/events/MapEvents */ "./src/map/events/MapEvents.ts");
var MenuEvents_1 = __webpack_require__(/*! ../../menu/events/MenuEvents */ "./src/menu/events/MenuEvents.ts");
var PanelRowButtons_1 = __webpack_require__(/*! ../../panels/views/PanelRowButtons */ "./src/panels/views/PanelRowButtons.ts");
var PanelSeasons_1 = __webpack_require__(/*! ../../panels/views/PanelSeasons */ "./src/panels/views/PanelSeasons.ts");
var ButtonProfile_1 = __webpack_require__(/*! ../../ui/views/ButtonProfile */ "./src/ui/views/ButtonProfile.ts");
var SoundToggle_1 = __webpack_require__(/*! ../../ui/views/SoundToggle */ "./src/ui/views/SoundToggle.ts");
var Toggle_1 = __webpack_require__(/*! ../../ui/views/Toggle */ "./src/ui/views/Toggle.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/scenes/constants.ts");
var SceneEvents_1 = __webpack_require__(/*! ../events/SceneEvents */ "./src/scenes/events/SceneEvents.ts");
var UISceneEvents_1 = __webpack_require__(/*! ../events/UISceneEvents */ "./src/scenes/events/UISceneEvents.ts");
var BaseScene_1 = __webpack_require__(/*! ./BaseScene */ "./src/scenes/views/BaseScene.ts");
var UIScene = (function (_super) {
    __extends(UIScene, _super);
    function UIScene() {
        return _super.call(this, constants_1.ScenesConstants.names.ui) || this;
    }
    UIScene.prototype.buildScene = function () {
        var _this = this;
        this.ambientSoundPlugin = this.plugins.get("ambientSoundPlugin");
        this.panelSeasons = new PanelSeasons_1.PanelSeasons(this, 35, 45);
        this.resizeContainer.add(this.panelSeasons);
        this.toggleSounds = new Toggle_1.Toggle(this, "btnGreenPoint", Toggle_1.Toggle.ICON_SOUND, function () { return _this.muteSounds(); });
        this.toggleSounds.x = this.gameWidth - 110;
        this.toggleSounds.y = 45;
        this.toggleSounds.activate();
        GameDataModel_1.GameDataModel.volumeSounds > 0 ? this.toggleSounds.switchOn() : this.toggleSounds.switchOff();
        this.resizeContainer.add(this.toggleSounds);
        this.toggleMusic = new Toggle_1.Toggle(this, "btnGreenPoint", Toggle_1.Toggle.ICON_MUSIC, function () { return _this.muteMusic(); });
        this.toggleMusic.x = this.gameWidth - 35;
        this.toggleMusic.y = 45;
        this.toggleMusic.activate();
        GameDataModel_1.GameDataModel.volumeMusic > 0 ? this.toggleMusic.switchOn() : this.toggleMusic.switchOff();
        this.resizeContainer.add(this.toggleMusic);
        this.toggleMapCells = new Toggle_1.Toggle(this, "btnGreenPoint", Toggle_1.Toggle.ICON_CELL, function () { return _this.setMapCellsVisibility(); });
        this.toggleMapCells.x = 35;
        this.toggleMapCells.y = -50;
        this.toggleMapCells.alpha = 0;
        this.resizeContainer.add(this.toggleMapCells);
        this.buttonProfile = new ButtonProfile_1.ButtonProfile(this, function () {
            _this.game.events.emit(SceneEvents_1.SceneEvents.CHANGE_SCENE, constants_1.ScenesConstants.names.login);
            _this.changeVisibilityProfileButton(false);
        });
        this.buttonProfile.x = this.gameWidth - this.buttonProfile.getBounds().width / 2 - 10;
        this.buttonProfile.y = this.gameHeight - this.buttonProfile.getBounds().height / 2;
        this.resizeContainer.add(this.buttonProfile);
        this.panelRowSocialButtons = new PanelRowButtons_1.PanelRowButtons(this, 100);
        this.panelRowSocialButtons.addBtn("socialVK", "https://vk.com/aivagame");
        this.panelRowSocialButtons.addBtn("socialOK", "https://ok.ru/group/53163777130695");
        this.panelRowSocialButtons.addBtn("socialFB", "https://www.facebook.com/aivaapps/?fref=ts");
        this.panelRowSocialButtons.x = this.gameWidth / 2;
        this.panelRowSocialButtons.y = this.gameHeight + 50;
        this.resizeContainer.add(this.panelRowSocialButtons);
    };
    UIScene.prototype.activate = function () {
        _super.prototype.activate.call(this);
        this.game.events.addListener(MenuEvents_1.MenuEvents.MUTE_SOUNDS, this.updateSoundsUI, this);
        this.game.events.addListener(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_SEASONS_PANEL, this.changeVisibilitySeasonsPanel, this);
        this.game.events.addListener(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_PROFILE_BUTTON, this.changeVisibilityProfileButton, this);
        this.game.events.addListener(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_SOCIAL_BUTTONS, this.changeVisibilitySocialButtons, this);
        this.game.events.addListener(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_MAP_CELLS_TOGGLE, this.changeVisibilityMapCells, this);
    };
    UIScene.prototype.deactivate = function () {
        this.game.events.removeListener(MenuEvents_1.MenuEvents.MUTE_SOUNDS, this.updateSoundsUI, this);
        this.game.events.removeListener(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_SEASONS_PANEL, this.changeVisibilitySeasonsPanel, this);
        this.game.events.removeListener(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_PROFILE_BUTTON, this.changeVisibilityProfileButton, this);
        this.game.events.removeListener(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_SOCIAL_BUTTONS, this.changeVisibilitySocialButtons, this);
        this.game.events.removeListener(UISceneEvents_1.UISceneEvents.CHANGE_VISIBILITY_MAP_CELLS_TOGGLE, this.changeVisibilityMapCells, this);
    };
    UIScene.prototype.updateSoundsUI = function (data) {
        if (data.toggleId === SoundToggle_1.SoundToggle.MUSIC) {
            data.muted ? this.toggleMusic.switchOff() : this.toggleMusic.switchOn();
        }
        else {
            data.muted ? this.toggleSounds.switchOff() : this.toggleSounds.switchOn();
        }
    };
    UIScene.prototype.changeVisibilitySeasonsPanel = function (visibility) {
        visibility ? this.panelSeasons.show() : this.panelSeasons.hide();
    };
    UIScene.prototype.changeVisibilityProfileButton = function (visibility) {
        if (visibility) {
            this.buttonProfile.setProfile(GameDataModel_1.GameDataModel.playerData.name, GameDataModel_1.GameDataModel.playerData.monster);
            this.buttonProfile.show();
        }
        else {
            this.buttonProfile.hide();
        }
    };
    UIScene.prototype.changeVisibilitySocialButtons = function (visibility) {
        visibility ? this.panelRowSocialButtons.init() : this.panelRowSocialButtons.free();
    };
    UIScene.prototype.changeVisibilityMapCells = function (visibility) {
        var _this = this;
        if (visibility) {
            GameDataModel_1.GameDataModel.playerData.isVisibilityCells
                ? this.toggleMapCells.switchOn()
                : this.toggleMapCells.switchOff();
            this.add.tween({
                targets: this.toggleMapCells,
                y: 45,
                alpha: 1,
                duration: 500,
                onComplete: function () { return _this.toggleMapCells.activate(); }
            });
        }
        else {
            this.toggleMapCells.deactivate();
            this.add.tween({
                targets: this.toggleMapCells,
                y: -50,
                alpha: 0,
                duration: 500
            });
        }
    };
    UIScene.prototype.muteSounds = function () {
        var volume = this.toggleSounds.switched ? 1 : 0;
        GameDataModel_1.GameDataModel.volumeSounds = volume;
        this.gameDataModel.saveData();
        this.game.events.emit(SceneEvents_1.SceneEvents.MUTE_SOUNDS, {
            toggleId: SoundToggle_1.SoundToggle.SOUNDS,
            muted: this.toggleSounds.switched
        });
    };
    UIScene.prototype.muteMusic = function () {
        var volume = this.toggleMusic.switched ? 1 : 0;
        GameDataModel_1.GameDataModel.volumeMusic = volume;
        this.gameDataModel.saveData();
        this.ambientSoundPlugin.setVolume(GameDataModel_1.GameDataModel.volumeMusic);
        this.game.events.emit(SceneEvents_1.SceneEvents.MUTE_SOUNDS, {
            toggleId: SoundToggle_1.SoundToggle.MUSIC,
            muted: this.toggleMusic.switched
        });
    };
    UIScene.prototype.setMapCellsVisibility = function () {
        GameDataModel_1.GameDataModel.playerData.isVisibilityCells = this.toggleMapCells.switched;
        this.gameDataModel.saveData();
        this.game.events.emit(MapEvents_1.MapEvents.CHANGE_VISIBILITY_MAP_CELLS);
    };
    return UIScene;
}(BaseScene_1.BaseScene));
exports.UIScene = UIScene;


/***/ }),

/***/ "./src/scenes/views/UniverseScene.ts":
/*!*******************************************!*\
  !*** ./src/scenes/views/UniverseScene.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CursorEvents_1 = __webpack_require__(/*! ../../cursor/events/CursorEvents */ "./src/cursor/events/CursorEvents.ts");
var GameProcessEvents_1 = __webpack_require__(/*! ../../data/events/GameProcessEvents */ "./src/data/events/GameProcessEvents.ts");
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var GameProcessModel_1 = __webpack_require__(/*! ../../data/models/GameProcessModel */ "./src/data/models/GameProcessModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var MapEvents_1 = __webpack_require__(/*! ../../map/events/MapEvents */ "./src/map/events/MapEvents.ts");
var MapModel_1 = __webpack_require__(/*! ../../map/models/MapModel */ "./src/map/models/MapModel.ts");
var MapView_1 = __webpack_require__(/*! ../../map/views/MapView */ "./src/map/views/MapView.ts");
var ColorIDsUtils_1 = __webpack_require__(/*! ../../utils/ColorIDsUtils */ "./src/utils/ColorIDsUtils.ts");
var ComponentPool_1 = __webpack_require__(/*! ../../utils/ComponentPool */ "./src/utils/ComponentPool.ts");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/scenes/constants.ts");
var SceneEvents_1 = __webpack_require__(/*! ../events/SceneEvents */ "./src/scenes/events/SceneEvents.ts");
var TutorialSceneEvents_1 = __webpack_require__(/*! ../events/TutorialSceneEvents */ "./src/scenes/events/TutorialSceneEvents.ts");
var BaseScene_1 = __webpack_require__(/*! ./BaseScene */ "./src/scenes/views/BaseScene.ts");
var TutorialScene_1 = __webpack_require__(/*! ./TutorialScene */ "./src/scenes/views/TutorialScene.ts");
var UniverseScene = (function (_super) {
    __extends(UniverseScene, _super);
    function UniverseScene() {
        var _this = _super.call(this, constants_1.ScenesConstants.names.universe) || this;
        _this.timeMIN = 5;
        _this.timeMAX = 15;
        _this.vTimers = [];
        _this._timerAddingTotal = 15;
        return _this;
    }
    UniverseScene.prototype.launchInnerScenes = function () {
        if (!this.tutorialScene) {
            this.scene.launch(constants_1.ScenesConstants.names.tutorial);
        }
        if (!this.gameScene) {
            this.scene.launch(constants_1.ScenesConstants.names.game);
        }
    };
    UniverseScene.prototype.buildScene = function () {
        this.ambientSoundPlugin = this.plugins.get("ambientSoundPlugin");
        this.tutorialScene = this.game.scene.getScene(constants_1.ScenesConstants.names.tutorial);
        this.gameScene = this.game.scene.getScene(constants_1.ScenesConstants.names.game);
        this.gameProcessModel = new GameProcessModel_1.GameProcessModel(this.game);
        this.componentPool = new ComponentPool_1.ComponentPool();
        this.mapModel = new MapModel_1.MapModel();
        this.mapView = new MapView_1.MapView(this);
        this.mapView.y = MapModel_1.MapModel.MAP_POS;
        this.particlesCountMIN = 8;
        this.particlesCountMAX = 15;
        this.particlesScaleMIN = .3;
        this.particlesScaleMAX = 1;
        this.tutorialScene.setMapView(this.mapView);
        this.gameScene.setMapView(this.mapView);
    };
    UniverseScene.prototype.activate = function () {
        _super.prototype.activate.call(this);
        this.mapView.drawCell();
        this.mapView.redrawMap();
        this.mapView.activate();
        this._ticket = 0;
        this.isLoadMonsters = false;
        this.mapModel.isKill = false;
        this.mapModel.isMagic = false;
        this.mapModel.isGreen = false;
        this.game.events.emit(CursorEvents_1.CursorEvents.RESET);
        this.game.events.addListener(GameProcessEvents_1.GameProcessEvents.DELETE_LINES, this.onDeleteLines, this);
        this.game.events.addListener(GameProcessEvents_1.GameProcessEvents.END_TURN, this.onEndTurn, this);
        this.game.events.addListener(GameProcessEvents_1.GameProcessEvents.END_GAME, this.endGame, this);
        this.startGame();
    };
    UniverseScene.prototype.deactivate = function () {
        if (this.gameProcessModel.isTutorial) {
            this.tutorialScene.deactivate();
        }
        else {
            this.gameScene.deactivate();
        }
        this.game.events.emit(MapEvents_1.MapEvents.CHOICE_RESET);
        this.gameProcessModel.gameOver = true;
        this.mapView.deactivate();
        this.removeBlackthorns(true);
        this.game.events.removeListener(GameProcessEvents_1.GameProcessEvents.DELETE_LINES, this.onDeleteLines, this);
        this.game.events.removeListener(GameProcessEvents_1.GameProcessEvents.END_TURN, this.onEndTurn, this);
        this.game.events.removeListener(GameProcessEvents_1.GameProcessEvents.END_GAME, this.endGame, this);
    };
    UniverseScene.prototype.clearSharedObject = function () {
    };
    UniverseScene.prototype.loadRecord = function () {
    };
    UniverseScene.prototype.startGame = function () {
        this.gameProcessModel.gameOver = false;
        if (this.gameProcessModel.isTutorial) {
            this.startTutorial();
        }
        else if (this.gameProcessModel.isNewGame) {
            this.newGame();
        }
        else {
            this.continueGame();
        }
        this.ambientSoundPlugin.setActive("gameMusic");
    };
    UniverseScene.prototype.startTutorial = function () {
        this.gameProcessModel.monsterInGame = this.gameProcessModel.monsterInGameTotal;
        this.gameProcessModel.advice = TutorialScene_1.TutorialScene.TUTORIAL_1;
        this.mapModel.aimMonsterData.isAimed = false;
        this.mapModel.createMap();
        this.mapModel.calcMonsters();
        this.gameProcessModel.createNextMonsters();
        this.tutorialScene.activate();
    };
    UniverseScene.prototype.newGame = function () {
        this.gameScene.activate();
        this.gameProcessModel.addingInRoom = true;
        this.gameProcessModel.dontMoveInRoom = false;
        this.gameProcessModel.monsterInGame = this.gameProcessModel.monsterInGameTotal;
        this._timerAdding = this._timerAddingTotal;
        this.gameProcessModel.addingMonsters = this.gameProcessModel.addingInRoom;
        this.gameProcessModel.dontMove = true;
        this.gameProcessModel.resetScore();
        this.mapModel.createMap();
        this.gameProcessModel.createNextMonsters();
    };
    UniverseScene.prototype.continueGame = function () {
        this.gameScene.activate();
        this.gameProcessModel.addingInRoom = true;
        this.gameProcessModel.dontMoveInRoom = false;
    };
    UniverseScene.prototype.endGame = function () {
        this.gameProcessModel.gameOver = true;
        this.autosave();
        this.game.events.emit(SceneEvents_1.SceneEvents.CHANGE_SCENE, constants_1.ScenesConstants.names.menu);
    };
    UniverseScene.prototype.addStars = function (tileX, tileY) {
    };
    UniverseScene.prototype.addStarsOnQuest = function (posX, posY, countStars) {
        if (countStars === void 0) { countStars = 20; }
    };
    UniverseScene.prototype.addBlackthorns = function (tileX, tileY) {
        if (tileX === void 0) { tileX = -1; }
        if (tileY === void 0) { tileY = -1; }
    };
    UniverseScene.prototype.removeBlackthorns = function (dispose) {
        if (dispose === void 0) { dispose = false; }
    };
    UniverseScene.prototype.onDeleteLines = function (deletedLine) {
        var _this = this;
        var str;
        var bonus = (deletedLine.color === GameDataModel_1.GameDataModel.playerData.monster) ? 1 : 0;
        var n = deletedLine.line.length;
        var score = n * (n - deletedLine.min + deletedLine.cost + bonus);
        this.gameProcessModel.score += score;
        this._countDarks = Math.floor(this.gameProcessModel.score / UniverseScene.LIMIT_SCORE_DARK);
        str = "+" + Number(n - deletedLine.min + deletedLine.cost + bonus);
        for (var i = 0; i < n; i++) {
            var tileY = deletedLine.line[i].y;
            var tileX = deletedLine.line[i].x;
            this.mapModel.mapMask[tileY][tileX] = 0;
            this.mapModel.mapColor[tileY][tileX] = "";
            this.mapModel.mapMonsters[tileY][tileX].outGame();
            this.mapModel.mapMonsters[tileY][tileX] = null;
            var mapCellData = {
                tileX: tileX,
                tileY: tileY,
                color: ColorIDsUtils_1.ColorIDsUtils.getCharColorFromColor(deletedLine.color),
                cost: str,
            };
            this.game.events.emit(MapEvents_1.MapEvents.ADD_COST_MONSTER, mapCellData);
        }
        deletedLine.line.forEach(function (point) { return _this.componentPool.dispose(point); });
        deletedLine.line.length = 0;
        this.mapModel.calcMonsters();
        if (this.mapModel.countMonster === 0 && !this.gameProcessModel.isTutorial) {
            this.endGame();
        }
        if (this.gameProcessModel.isTutorial) {
            this.game.events.emit(TutorialSceneEvents_1.TutorialSceneEvents.AUTO_CHANGE_ADVICE);
        }
    };
    UniverseScene.prototype.onEndTurn = function () {
        this.mapModel.calcMonsters();
        if (this.mapModel.mapIsFull) {
            this.endGame();
        }
        if (this._isDarkEscape && this._countDarks > 0) {
            if (!this.gameProcessModel.gameOver && this.gameProcessModel.monsterIsDel || !this.gameProcessModel.gameOver && this.gameProcessModel.elvisIsDel) {
                if (!this.gameProcessModel.addingMonsters) {
                    this.gameProcessModel.dontMove = true;
                    this.searchDarkMonsters();
                }
            }
        }
        if (!this.gameProcessModel.addingMonsters) {
            this.calcPlants();
        }
        if (this._ticket <= 0) {
            if (!this.gameProcessModel.gameOver && !this.gameProcessModel.monsterIsDel && !this.gameProcessModel.elvisIsDel) {
                if (!this.gameProcessModel.addingMonsters) {
                    this.gameProcessModel.addingMonsters = this.gameProcessModel.addingInRoom;
                    this.gameProcessModel.monsterInGame = this.gameProcessModel.monsterInGameTotal;
                    if (this.gameProcessModel.addingMonsters) {
                        this.gameProcessModel.dontMove = true;
                    }
                }
            }
        }
        else {
            this._ticket--;
        }
        this.gameProcessModel.elvisIsDel = false;
        this.gameProcessModel.monsterIsDel = false;
        if (!this.gameProcessModel.addingMonsters && !this.gameProcessModel.isTutorial) {
            this.autosave();
        }
    };
    UniverseScene.prototype.calcPlants = function () {
        this._turnsPlant--;
        if (this._turnsPlant === 0 && !this.gameProcessModel.isTutorial) {
            if (this.gameProcessModel.isBlackthorn) {
                this.removeBlackthorns();
                this._turnsPlant = UniverseScene.TURNS_TO_GROWTH;
            }
            else {
                this.addBlackthorns();
                this._turnsPlant = UniverseScene.TURNS_TO_BLIGHT;
            }
            this.gameProcessModel.isBlackthorn = !this.gameProcessModel.isBlackthorn;
        }
    };
    UniverseScene.prototype.searchDarkMonsters = function () {
        this._arrDarks = [];
        if (this._arrDarks.length > 0) {
            this.choiseDarkRandom();
        }
        else {
            this.gameProcessModel.dontMove = this.gameProcessModel.dontMoveInRoom;
        }
    };
    UniverseScene.prototype.choiseDarkRandom = function () {
        while (this._arrDarks.length > this._countDarks) {
            this._arrDarks.splice(Phaser.Math.Between(0, this._arrDarks.length - 1), 1);
        }
        this._ticket = this._arrDarks.length + 1;
        this.setDarksPoints();
    };
    UniverseScene.prototype.setDarksPoints = function () {
        var _this = this;
        this.mapModel.mapMaskTemp = this.copyArray2D(this.mapModel.mapMask);
        this._arrDarks.forEach(function (monster) {
            monster.setEscape(_this.setEscape(MapModel_1.MapModel.toTile(monster.x), MapModel_1.MapModel.toTile(monster.y)));
        });
    };
    UniverseScene.prototype.setEscape = function (indexJ, indexI) {
        var arr = [];
        for (var i = -1; i < 2; i++) {
            for (var j = -1; j < 2; j++) {
                if (i === 0 && j === 0) {
                    break;
                }
                else {
                    if (MapModel_1.MapModel.inMap(indexI + i, indexJ + j)) {
                        if (this.mapModel.mapMaskTemp[indexI + i][indexJ + j] === 0) {
                            arr.push(new exports_1.Point(indexJ + j, indexI + i));
                            this.mapModel.mapMaskTemp[indexI + i][indexJ + j] = 1;
                        }
                    }
                }
            }
        }
        while (arr.length > 1) {
            var rand = Phaser.Math.Between(0, arr.length - 1);
            this.mapModel.mapMaskTemp[arr[rand].y][arr[rand].x] = 0;
            arr.splice(rand, 1);
        }
        arr.push(new exports_1.Point(indexJ, indexI));
        return arr;
    };
    UniverseScene.prototype.movable = function (indexJ, indexI) {
        for (var i = -1; i < 2; i++) {
            for (var j = -1; j < 2; j++) {
                if (i === 0 && j === 0) {
                    break;
                }
                else {
                    if (MapModel_1.MapModel.inMap(indexI + i, indexJ + j)) {
                        if (this.mapModel.mapMask[indexI + i][indexJ + j] === 0) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    };
    UniverseScene.prototype.autosave = function () {
    };
    UniverseScene.prototype.update = function (time, deltaTime) {
        if (!this.gameProcessModel.gameOver && this.gameProcessModel.addingMonsters) {
            this.timerAdding();
        }
        this.changeAnimationForMonstersWithCheck();
    };
    UniverseScene.prototype.changeAnimationForMonstersWithCheck = function () {
        var n = this.vTimers.length;
        for (var i = 0; i < n; i++) {
            if (this.vTimers[i] > 0) {
                this.vTimers[i]--;
            }
            else {
            }
        }
    };
    UniverseScene.prototype.timerAdding = function () {
        if (this._timerAdding > 0) {
            this._timerAdding--;
        }
        else {
            if (this.gameProcessModel.monsterInGame === this.gameProcessModel.monsterInGameTotal) {
                if (this.game.cache.audio.get("Ingame")) {
                    this.sound.play("Ingame", { volume: GameDataModel_1.GameDataModel.volumeSounds });
                }
            }
            this.game.events.emit(MapEvents_1.MapEvents.ADD_MONSTER);
            this.gameProcessModel.monsterInGame--;
            if (this.gameProcessModel.monsterInGame <= 0) {
                this.gameProcessModel.addingMonsters = false;
                this.gameProcessModel.dontMove = this.gameProcessModel.dontMoveInRoom;
                this.gameProcessModel.createNextMonsters();
                if (!this.gameProcessModel.isTutorial) {
                    this.autosave();
                }
                else {
                    this.mapModel.calcMonsters();
                    if (this.mapModel.countMonster > this.gameProcessModel.countOfTurns) {
                        this.outOfTheGame();
                    }
                }
            }
            this._timerAdding = this._timerAddingTotal;
        }
    };
    UniverseScene.prototype.outOfTheGame = function () {
        while (true) {
            if (this.mapModel.countMonster > 3) {
                var m = this.mapModel.allMonsters[0];
                m.outGame();
                this.mapModel.mapMask[MapModel_1.MapModel.toTile(m.y)][MapModel_1.MapModel.toTile(m.x)] = 0;
                this.mapModel.mapColor[MapModel_1.MapModel.toTile(m.y)][MapModel_1.MapModel.toTile(m.x)] = "";
                this.mapModel.mapMonsters[MapModel_1.MapModel.toTile(m.y)][MapModel_1.MapModel.toTile(m.x)] = null;
                this.mapModel.removeMonster(m);
                this.mapModel.calcMonsters();
            }
            else {
                return;
            }
        }
    };
    UniverseScene.prototype.copyArray2D = function (arr) {
        var a = [];
        for (var i = 0; i < arr.length; i++) {
            a[i] = [];
            for (var j = 0; j < arr[i].length; j++) {
                a[i][j] = arr[i][j];
            }
        }
        return a;
    };
    UniverseScene.I_AM_LOOSER = 0;
    UniverseScene.I_AM_CHAMPION = 1;
    UniverseScene.LIMIT_SCORE_DARK = 500;
    UniverseScene.TURNS_TO_GROWTH = 20;
    UniverseScene.TURNS_TO_BLIGHT = 15;
    return UniverseScene;
}(BaseScene_1.BaseScene));
exports.UniverseScene = UniverseScene;


/***/ }),

/***/ "./src/ui/components/Achievement.ts":
/*!******************************************!*\
  !*** ./src/ui/components/Achievement.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var ButtonIconsUtils_1 = __webpack_require__(/*! ../../utils/ButtonIconsUtils */ "./src/utils/ButtonIconsUtils.ts");
var Achievement = (function (_super) {
    __extends(Achievement, _super);
    function Achievement(scene) {
        var _this = _super.call(this, scene) || this;
        _this.bg = _this.scene.add.image(0, 0, "menu", "btnWood").setOrigin(.5);
        _this.add(_this.bg);
        var widthBg = _this.bg.width;
        var dX = -widthBg / 2;
        _this.icon = _this.scene.add.sprite(0, 0, "scores", "unknown").setOrigin(0);
        _this.icon.x = widthBg / 5 + dX;
        _this.icon.y = -15;
        _this.add(_this.icon);
        _this.tfName = _this.scene.add.bitmapText(widthBg / 8 * 5 + dX, -40, "aivaStroke", "", 30).setOrigin(.5);
        _this.add(_this.tfName);
        _this.tfScore = _this.scene.add.bitmapText(widthBg / 8 * 5 + dX, 0, "aivaGold", "", 50).setOrigin(.5);
        _this.add(_this.tfScore);
        return _this;
    }
    Achievement.prototype.init = function (color, name, score, isActive) {
        if (isActive === void 0) { isActive = false; }
        this.icon.play(ButtonIconsUtils_1.ButtonIconsUtils.getIconAnimationName(color));
        var index = +color.substr(color.length - 1);
        if (index < 4) {
            this.icon.setOrigin(1);
        }
        else {
            this.icon.setOrigin(.5);
        }
        this.tfName.text = name;
        this.tfScore.text = score;
        if (isActive) {
        }
    };
    Achievement.prototype.free = function () {
        this.icon.anims.stop();
    };
    Object.defineProperty(Achievement.prototype, "height", {
        get: function () { return this.bg.height * this.scaleY; },
        enumerable: true,
        configurable: true
    });
    return Achievement;
}(exports_1.Container));
exports.Achievement = Achievement;


/***/ }),

/***/ "./src/ui/components/MoveH.ts":
/*!************************************!*\
  !*** ./src/ui/components/MoveH.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var MenuEvents_1 = __webpack_require__(/*! ../../menu/events/MenuEvents */ "./src/menu/events/MenuEvents.ts");
var AMath_1 = __webpack_require__(/*! ../../utils/AMath */ "./src/utils/AMath.ts");
var SoundToggle_1 = __webpack_require__(/*! ../views/SoundToggle */ "./src/ui/views/SoundToggle.ts");
var ScrollMonster_1 = __webpack_require__(/*! ./ScrollMonster */ "./src/ui/components/ScrollMonster.ts");
var MoveH = (function (_super) {
    __extends(MoveH, _super);
    function MoveH(scene, toggleId, color) {
        var _this = _super.call(this, scene) || this;
        _this.ambientSoundPlugin = _this.scene.plugins.get("ambientSoundPlugin");
        _this.toggleId = toggleId;
        var circleL = _this.scene.add.image(-SoundToggle_1.SoundToggle.RANGE / 2, 0, "menu", "soundToggleCircle");
        circleL.setOrigin(.5);
        var circleR = _this.scene.add.image(SoundToggle_1.SoundToggle.RANGE / 2, 0, "menu", "soundToggleCircle");
        circleR.setOrigin(.5);
        _this.scrollMonster = new ScrollMonster_1.ScrollMonster(scene, color);
        _this.scrollMonster.init();
        _this.add([circleL, circleR, _this.scrollMonster]);
        return _this;
    }
    MoveH.prototype.startMoveScroll = function () {
        this.scrollMonster.startMove();
    };
    MoveH.prototype.stopMoveScroll = function () {
        this.scrollMonster.stopMove();
    };
    MoveH.prototype.update = function (x1, x2) {
        var val = x2 - x1;
        this.calc(val > SoundToggle_1.SoundToggle.RANGE
            ? SoundToggle_1.SoundToggle.RANGE
            : val < 0
                ? 0
                : val);
    };
    MoveH.prototype.saveVolume = function () {
        this.toggleId === SoundToggle_1.SoundToggle.SOUNDS
            ? GameDataModel_1.GameDataModel.volumeSounds = this._volumeLevel
            : GameDataModel_1.GameDataModel.volumeMusic = this._volumeLevel;
        this.scene.gameDataModel.saveData();
    };
    MoveH.prototype.calc = function (val) {
        this.scrollMonster.move(val - SoundToggle_1.SoundToggle.RANGE_HALF);
        this._volumeLevel = AMath_1.AMath.toPercent(val, SoundToggle_1.SoundToggle.RANGE);
        this._percent = Math.floor(this._volumeLevel * 100);
        if (this.toggleId === SoundToggle_1.SoundToggle.MUSIC) {
            this.ambientSoundPlugin.setVolume(this._volumeLevel);
        }
        this.scene.game.events.emit(MenuEvents_1.MenuEvents.MUTE_SOUNDS, {
            toggleId: this.toggleId,
            muted: this._volumeLevel <= 0
        });
    };
    Object.defineProperty(MoveH.prototype, "volumeLevel", {
        get: function () { return this._volumeLevel; },
        set: function (val) {
            this.calc(val * SoundToggle_1.SoundToggle.RANGE);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoveH.prototype, "percent", {
        get: function () { return this._percent; },
        enumerable: true,
        configurable: true
    });
    return MoveH;
}(exports_1.Container));
exports.MoveH = MoveH;


/***/ }),

/***/ "./src/ui/components/ScrollMonster.ts":
/*!********************************************!*\
  !*** ./src/ui/components/ScrollMonster.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var ScrollMonster = (function (_super) {
    __extends(ScrollMonster, _super);
    function ScrollMonster(scene, animName) {
        var _this = _super.call(this, scene) || this;
        _this.color = animName.toUpperCase();
        _this.sprite = _this.scene.add.sprite(0, 0, "");
        _this.sprite.y = -40;
        _this.add([
            _this.scene.add.image(0, 0, "menu", "soundTogglePoint"),
            _this.sprite
        ]);
        return _this;
    }
    ScrollMonster.prototype.init = function () {
        this.sprite.play(this.setAnim(this.color));
    };
    ScrollMonster.prototype.free = function () {
        this.sprite.anims.stop();
    };
    ScrollMonster.prototype.setIcon = function (animName) {
        this.sprite.play(this.setAnim(animName), true, this.getRandomFrame());
    };
    ScrollMonster.prototype.getRandomFrame = function () {
        return Phaser.Math.Between(0, this.sprite.anims.getTotalFrames() - 1) || 0;
    };
    ScrollMonster.prototype.startMove = function () {
        this.setIcon("move" + this.color);
        this.sprite.anims.setRepeat(-1);
    };
    ScrollMonster.prototype.stopMove = function () {
        this.setIcon(this.color);
    };
    ScrollMonster.prototype.move = function (posX) {
        this.x = posX;
    };
    ScrollMonster.prototype.setAnim = function (animName) {
        var animNameFull = animName;
        switch (animName) {
            case "Y":
                animNameFull = "animMusic";
                break;
            case "O":
                animNameFull = "animSounds";
                break;
        }
        return animNameFull;
    };
    return ScrollMonster;
}(exports_1.Container));
exports.ScrollMonster = ScrollMonster;


/***/ }),

/***/ "./src/ui/views/BtnLarge.ts":
/*!**********************************!*\
  !*** ./src/ui/views/BtnLarge.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonIconsUtils_1 = __webpack_require__(/*! ../../utils/ButtonIconsUtils */ "./src/utils/ButtonIconsUtils.ts");
var Button_1 = __webpack_require__(/*! ./Button */ "./src/ui/views/Button.ts");
var BtnLarge = (function (_super) {
    __extends(BtnLarge, _super);
    function BtnLarge(scene, colorIcon, text, command) {
        var _this = _super.call(this, scene, "btnWood", ButtonIconsUtils_1.ButtonIconsUtils.getIconAnimationName(colorIcon), command) || this;
        _this.addLabel(text, "aivaStroke", 40, _this.button.width / 10, -20);
        return _this;
    }
    BtnLarge.prototype.createIcon = function (iconName) {
        this.icon = this.scene.add.sprite(-this.button.width / 3, -20, iconName);
        this.setIcon(iconName);
        this.buttonContainer.add(this.icon);
    };
    BtnLarge.prototype.setIcon = function (anim) {
        this.icon.play(anim);
    };
    return BtnLarge;
}(Button_1.Button));
exports.BtnLarge = BtnLarge;


/***/ }),

/***/ "./src/ui/views/Button.ts":
/*!********************************!*\
  !*** ./src/ui/views/Button.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(scene, textureName, iconName, command) {
        var _this = _super.call(this, scene) || this;
        _this.uiTextures = ["ui", "menu"];
        _this.scene = scene;
        if (command) {
            _this.command = command;
        }
        _this.buttonContainer = _this.scene.add.container(0, 0);
        _this.add(_this.buttonContainer);
        _this.createButton(textureName);
        _this.createHover(textureName);
        _this.createIcon(iconName);
        _this.scene.add.existing(_this);
        return _this;
    }
    Button.prototype.createHover = function (textureName) {
        this.hover = this.getView(textureName);
        this.hover.blendMode = Phaser.BlendModes.ADD;
        this.hover.alpha = 0;
        this.buttonContainer.add(this.hover);
    };
    Button.prototype.createIcon = function (iconName) {
        if (iconName === "") {
            return;
        }
        this.icon = this.getView(iconName);
        this.buttonContainer.add(this.icon);
    };
    Button.prototype.createButton = function (textureName) {
        this.button = this.getView(textureName);
        this.buttonContainer.add(this.button);
    };
    Button.prototype.activate = function () {
        this.onOut();
        this.button.setInteractive();
        this.addListeners();
    };
    Button.prototype.deactivate = function () {
        this.removeListeners();
        this.button.disableInteractive();
        this.onOut();
    };
    Button.prototype.addLabel = function (text, font, size, offsetX, offsetY) {
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        this.textLabel = this.getTextLabel(text, font, size);
        this.textLabel.setPosition(offsetX, offsetY);
        this.buttonContainer.add(this.textLabel);
    };
    Button.prototype.setIcon = function (frame) {
        if (this.icon) {
            var atlasName = this.getAtlasName(frame);
            this.icon.setTexture(atlasName, frame);
        }
    };
    Button.prototype.getView = function (frame) {
        var atlasName = this.getAtlasName(frame);
        return this.scene.add.image(0, 0, atlasName, frame);
    };
    Button.prototype.getAtlasName = function (frame) {
        var atlasName = this.uiTextures[0];
        var countAtlases = this.uiTextures.length;
        for (var indexAtlas = 0; indexAtlas < countAtlases; indexAtlas++) {
            var atlasNameTemp = this.uiTextures[indexAtlas];
            var texture = this.scene.sys.textures.get(atlasNameTemp);
            if (texture.getFrameNames().indexOf(frame) >= 0) {
                atlasName = atlasNameTemp;
                break;
            }
        }
        return atlasName;
    };
    Button.prototype.getTextLabel = function (text, font, size) {
        return this.scene.add.bitmapText(0, 0, font, text, size).setOrigin(.5);
    };
    Button.prototype.addListeners = function () {
        this.button.on("pointerover", this.onOver, this);
        this.button.on("pointerout", this.onOut, this);
        this.button.on("pointerdown", this.onDown, this);
        this.button.on("pointerup", this.onClick, this);
    };
    Button.prototype.removeListeners = function () {
        this.button.off("pointerover", this.onOver, this);
        this.button.off("pointerout", this.onOut, this);
        this.button.off("pointerdown", this.onDown, this);
        this.button.off("pointerup", this.onClick, this);
    };
    Button.prototype.onOver = function () {
        this.hover.alpha = .4;
    };
    Button.prototype.onOut = function () {
        this.hover.alpha = 0;
        this.buttonContainer.scale = 1;
    };
    Button.prototype.onDown = function () {
        this.buttonContainer.scale = .95;
    };
    Button.prototype.onClick = function () {
        this.buttonContainer.scale = 1;
        this.scene.sound.play("Move", { volume: GameDataModel_1.GameDataModel.volumeSounds });
        if (this.guard && this.command) {
            this.command();
        }
        else {
            console.error("Button dosen't have command: " + this);
        }
    };
    Button.prototype.guard = function () {
        return true;
    };
    Object.defineProperty(Button.prototype, "text", {
        set: function (value) {
            this.textLabel.text = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "width", {
        get: function () {
            return this.button.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "height", {
        get: function () {
            return this.button.height;
        },
        enumerable: true,
        configurable: true
    });
    return Button;
}(exports_1.Container));
exports.Button = Button;


/***/ }),

/***/ "./src/ui/views/ButtonProfile.ts":
/*!***************************************!*\
  !*** ./src/ui/views/ButtonProfile.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ColorIDsUtils_1 = __webpack_require__(/*! ../../utils/ColorIDsUtils */ "./src/utils/ColorIDsUtils.ts");
var Button_1 = __webpack_require__(/*! ./Button */ "./src/ui/views/Button.ts");
var ChangeVisibilityUtils_1 = __webpack_require__(/*! ../../utils/ChangeVisibilityUtils */ "./src/utils/ChangeVisibilityUtils.ts");
var ButtonProfile = (function (_super) {
    __extends(ButtonProfile, _super);
    function ButtonProfile(scene, command) {
        var _this = _super.call(this, scene, "btnWoodSplit", "redUp", command) || this;
        _this.arrPos = ["Out", "Up"];
        _this.addLabel("???", "aivaStroke", 40, -54, -20);
        _this.setScale(.6);
        _this.alpha = 0;
        return _this;
    }
    ButtonProfile.prototype.createIcon = function (iconName) {
        this.icon = this.scene.add.sprite(138, -20, iconName);
        this.buttonContainer.add(this.icon);
    };
    ButtonProfile.prototype.setProfile = function (playerName, playerColor) {
        this.text = playerName;
        var animationNamePrefix = ColorIDsUtils_1.ColorIDsUtils.getColorFromID(playerColor);
        var animationNamePostfix = this.arrPos[Phaser.Math.Between(0, this.arrPos.length - 1)];
        this.icon.play(animationNamePrefix + animationNamePostfix);
    };
    ButtonProfile.prototype.show = function () {
        var _this = this;
        ChangeVisibilityUtils_1.ChangeVisibilityUtils.show(this.scene, this, 500, function () { return _this.activate(); });
    };
    ButtonProfile.prototype.hide = function () {
        this.deactivate();
        ChangeVisibilityUtils_1.ChangeVisibilityUtils.hide(this.scene, this, 500);
    };
    return ButtonProfile;
}(Button_1.Button));
exports.ButtonProfile = ButtonProfile;


/***/ }),

/***/ "./src/ui/views/SoundToggle.ts":
/*!*************************************!*\
  !*** ./src/ui/views/SoundToggle.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameDataModel_1 = __webpack_require__(/*! ../../data/models/GameDataModel */ "./src/data/models/GameDataModel.ts");
var exports_1 = __webpack_require__(/*! ../../exports */ "./src/exports.ts");
var SceneEvents_1 = __webpack_require__(/*! ../../scenes/events/SceneEvents */ "./src/scenes/events/SceneEvents.ts");
var MoveH_1 = __webpack_require__(/*! ../components/MoveH */ "./src/ui/components/MoveH.ts");
var SoundToggle = (function (_super) {
    __extends(SoundToggle, _super);
    function SoundToggle(scene, toggleId, color) {
        var _this = _super.call(this, scene) || this;
        _this.toggleId = toggleId;
        _this.sprite = _this.scene.add.image(0, 0, "menu", "btnWoodSplit");
        _this.add(_this.sprite);
        var wSprite = _this.sprite.width;
        var hSprite = _this.sprite.height;
        var posXCenterLeft = wSprite / 48 * 17.5 - wSprite / 2;
        var posXCenterRight = wSprite / 20 * 17 - wSprite / 2;
        var posYBottom = hSprite / 5 * 3 - hSprite / 2;
        var posYTop = hSprite / 7 * 2 - hSprite / 2;
        var fontSizeBottom = 25;
        var fontSizeTop = 40;
        _this.tfLabel = _this.scene.add.bitmapText(posXCenterLeft, posYBottom, "aivaStroke", "MUSIC", fontSizeBottom).setOrigin(.5);
        _this.tfLabelPercent = _this.scene.add.bitmapText(posXCenterRight, posYBottom, "aivaStroke", "%", fontSizeBottom).setOrigin(.5);
        _this.tfValue = _this.scene.add.bitmapText(posXCenterRight, posYTop, "aivaGold", "100", fontSizeTop).setOrigin(.5);
        _this.add([
            _this.tfLabel,
            _this.tfLabelPercent,
            _this.tfValue
        ]);
        _this.move = new MoveH_1.MoveH(_this.scene, _this.toggleId, color);
        _this.move.x = posXCenterLeft;
        _this.move.y = posYTop + 15;
        _this.add(_this.move);
        return _this;
    }
    SoundToggle.prototype.activate = function () {
        this.sprite.setInteractive();
        this.sprite.on("pointerdown", this.onTouchDown, this);
        this.sprite.on("pointerup", this.onTouchUp, this);
        this.scene.input.on("pointerup", this.onTouchUp, this);
        this.scene.input.on("pointermove", this.onMove, this);
        this.scene.game.events.addListener(SceneEvents_1.SceneEvents.MUTE_SOUNDS, this.updateSoundsUI, this);
    };
    SoundToggle.prototype.deactivate = function () {
        this.sprite.disableInteractive();
        this.sprite.off("pointerdown", this.onTouchDown, this);
        this.sprite.off("pointerup", this.onTouchUp, this);
        this.scene.input.off("pointerup", this.onTouchUp, this);
        this.scene.input.off("pointermove", this.onMove, this);
        this.scene.game.events.removeListener(SceneEvents_1.SceneEvents.MUTE_SOUNDS, this.updateSoundsUI, this);
    };
    SoundToggle.prototype.updateSoundsUI = function (data) {
        if (data.toggleId === this.toggleId) {
            this.loadVolume(+data.muted);
        }
    };
    SoundToggle.prototype.loadVolume = function (value) {
        this.move.volumeLevel = value;
        this.tfValue.text = this.move.percent.toString();
    };
    SoundToggle.prototype.onTouchDown = function (pointer) {
        this.isDown = true;
        this.move.startMoveScroll();
        this.updateScroller(pointer.x);
    };
    SoundToggle.prototype.onTouchUp = function () {
        if (this.isDown) {
            this.isDown = false;
            this.move.saveVolume();
            this.move.stopMoveScroll();
            this.scene.sound.play("Move", { volume: GameDataModel_1.GameDataModel.volumeSounds });
        }
    };
    SoundToggle.prototype.onMove = function (pointer) {
        if (this.isDown) {
            this.updateScroller(pointer.x);
        }
    };
    SoundToggle.prototype.updateScroller = function (pointerX) {
        var x1 = this.move.x;
        var x2 = (pointerX - this.scene.x) * this.scene.globalScale - this.x + SoundToggle.RANGE_HALF;
        this.move.update(x1, x2);
        this.tfValue.text = this.move.percent.toString();
    };
    Object.defineProperty(SoundToggle.prototype, "text", {
        set: function (value) {
            this.tfLabel.text = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundToggle.prototype, "width", {
        get: function () {
            return this.sprite.width;
        },
        enumerable: true,
        configurable: true
    });
    SoundToggle.RANGE = 200;
    SoundToggle.RANGE_HALF = SoundToggle.RANGE / 2;
    SoundToggle.MUSIC = "music";
    SoundToggle.SOUNDS = "sounds";
    return SoundToggle;
}(exports_1.Container));
exports.SoundToggle = SoundToggle;


/***/ }),

/***/ "./src/ui/views/Toggle.ts":
/*!********************************!*\
  !*** ./src/ui/views/Toggle.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = __webpack_require__(/*! ./Button */ "./src/ui/views/Button.ts");
var Toggle = (function (_super) {
    __extends(Toggle, _super);
    function Toggle(scene, textureName, iconName, command) {
        var _this = _super.call(this, scene, textureName, iconName, command) || this;
        _this.isSwitch = true;
        _this.lineSwitchOff = _this.getView("lineSwitch");
        _this.lineSwitchOff.rotation = 45;
        _this.lineSwitchOff.visible = false;
        _this.add(_this.lineSwitchOff);
        return _this;
    }
    Toggle.prototype.switchOn = function () {
        this.isSwitch = true;
        this.lineSwitchOff.visible = !this.isSwitch;
    };
    Toggle.prototype.switchOff = function () {
        this.isSwitch = false;
        this.lineSwitchOff.visible = !this.isSwitch;
    };
    Toggle.prototype.onClick = function () {
        this.isSwitch = !this.isSwitch;
        _super.prototype.onClick.call(this);
        this.isSwitch ? this.switchOn() : this.switchOff();
    };
    Object.defineProperty(Toggle.prototype, "switched", {
        get: function () { return this.isSwitch; },
        enumerable: true,
        configurable: true
    });
    Toggle.ICON_MUSIC = "iconMusic";
    Toggle.ICON_SOUND = "iconSounds";
    Toggle.ICON_CELL = "iconCell";
    return Toggle;
}(Button_1.Button));
exports.Toggle = Toggle;


/***/ }),

/***/ "./src/ui/views/URLButton.ts":
/*!***********************************!*\
  !*** ./src/ui/views/URLButton.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = __webpack_require__(/*! ./Button */ "./src/ui/views/Button.ts");
var URLButton = (function (_super) {
    __extends(URLButton, _super);
    function URLButton(scene, iconName, delay) {
        var _this = _super.call(this, scene, "btnSocial", iconName, function () { return _this.execute(); }) || this;
        _this.delay = delay;
        _this.url = "";
        _this.alpha = 0;
        return _this;
    }
    URLButton.prototype.init = function () {
        var _this = this;
        this.removeTweens();
        this.tween = this.scene.add.tween({
            targets: this,
            y: URLButton.SHOWING_POSITION,
            alpha: 1,
            duration: 500,
            delay: this.delay,
            onComplete: function () { return _this.activate(); }
        });
    };
    URLButton.prototype.free = function () {
        this.deactivate();
        this.removeTweens();
        this.tween = this.scene.add.tween({
            targets: this,
            y: 0,
            alpha: 0,
            duration: 500,
            delay: this.delay
        });
    };
    URLButton.prototype.removeTweens = function () {
        if (this.tween) {
            this.tween.remove();
        }
    };
    URLButton.prototype.addURL = function (url) {
        this.url = url;
    };
    URLButton.prototype.execute = function () {
        window.open(this.url);
    };
    URLButton.prototype.guard = function () {
        return this.url !== "";
    };
    URLButton.SHOWING_POSITION = -186;
    return URLButton;
}(Button_1.Button));
exports.URLButton = URLButton;


/***/ }),

/***/ "./src/utils/AMath.ts":
/*!****************************!*\
  !*** ./src/utils/AMath.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AMath = (function () {
    function AMath() {
    }
    AMath.distance = function (x1, y1, x2, y2) {
        var X1X2 = Math.abs(x1 - x2);
        var Y1Y2 = Math.abs(y1 - y2);
        return Math.sqrt(Math.pow(X1X2, 2) + Math.pow(Y1Y2, 2));
    };
    AMath.random = function (lower, upper, float) {
        if (float === void 0) { float = 0; }
        var grade = Math.pow(10, float);
        return (Math.floor(((upper - lower) * grade + .99) * Math.random() + (lower * grade))) / grade;
    };
    AMath.toDegrees = function (radians) {
        return radians * (180 / Math.PI);
    };
    AMath.toRadians = function (degrees) {
        return degrees * (Math.PI / 180);
    };
    AMath.equal = function (a, b, diff) {
        if (diff === void 0) { diff = 0.00001; }
        return (Math.abs(a - b) <= diff);
    };
    AMath.getAngleRad = function (x1, y1, x2, y2, norm) {
        if (norm === void 0) { norm = true; }
        var dx = x2 - x1;
        var dy = y2 - y1;
        var angle = Math.atan2(dy, dx);
        if (norm) {
            if (angle < 0) {
                angle = Math.PI * 2 + angle;
            }
            else if (angle >= Math.PI * 2) {
                angle = angle - Math.PI * 2;
            }
        }
        return angle;
    };
    AMath.getAngleDeg = function (x1, y1, x2, y2, norm) {
        if (norm === void 0) { norm = true; }
        var dx = x2 - x1;
        var dy = y2 - y1;
        var angle = Math.atan2(dy, dx) / Math.PI * 180;
        if (norm) {
            if (angle < 0) {
                angle = 360 + angle;
            }
            else if (angle >= 360) {
                angle = angle - 360;
            }
        }
        return angle;
    };
    AMath.toPercent = function (current, total) {
        return current / total;
    };
    AMath.fromPercent = function (percent, total) {
        return total / 100 * percent;
    };
    AMath.summ = function (values) {
        var s = 0;
        var n = values.length;
        for (var i = 0; i < n; i++) {
            s += values[i];
        }
        return s;
    };
    AMath.aver = function (values, count) {
        if (count === void 0) { count = -1; }
        var s = 0;
        var n = values.length;
        var aver;
        for (var i = 0; i < n; i++) {
            s += values[i];
        }
        aver = s / n;
        if (count === -1) {
            return aver;
        }
        var round = Math.pow(10, count);
        return Math.round(aver * round) / round;
    };
    return AMath;
}());
exports.AMath = AMath;


/***/ }),

/***/ "./src/utils/ButtonIconsUtils.ts":
/*!***************************************!*\
  !*** ./src/utils/ButtonIconsUtils.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ButtonIconsUtils = (function () {
    function ButtonIconsUtils() {
    }
    ButtonIconsUtils.getIconAnimationName = function (animationName) {
        return ButtonIconsUtils.iconAnimationNames[animationName] || animationName;
    };
    ButtonIconsUtils.iconAnimationNames = {
        d: "darkOut",
        r: "redOut",
        o: "orangeOut",
        o2: "orangeOut",
        b: "blueOut",
        g: "greenOut",
        p: "purpleOut",
        activeR4: "redUp",
        activeO4: "orangeUp",
        activeY4: "yellowUp",
        activeG4: "greenUp",
        activeB4: "blueUp",
        activeP4: "purpleUp",
        activeD4: "darkUp",
        a: "all",
        y: "y2_",
        y2: "y2_",
        d3: "isEscape",
        d4: "notEscape",
        g2: "langRu",
        g3: "langEn",
        u: "unknown"
    };
    return ButtonIconsUtils;
}());
exports.ButtonIconsUtils = ButtonIconsUtils;


/***/ }),

/***/ "./src/utils/ChangeVisibilityUtils.ts":
/*!********************************************!*\
  !*** ./src/utils/ChangeVisibilityUtils.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChangeVisibilityUtils = (function () {
    function ChangeVisibilityUtils() {
    }
    ChangeVisibilityUtils.removeTweens = function (scene, object) {
        scene.tweens.getTweensOf(object).forEach(function (tween) { return tween.remove(); });
    };
    ChangeVisibilityUtils.show = function (scene, object, time, complete) {
        ChangeVisibilityUtils.removeTweens(scene, object);
        object.visible = true;
        scene.add.tween({
            targets: object,
            alpha: 1,
            duration: time,
            onComplete: function () {
                if (complete) {
                    complete();
                }
            }
        });
    };
    ChangeVisibilityUtils.hide = function (scene, object, time, complete) {
        ChangeVisibilityUtils.removeTweens(scene, object);
        object.visible = true;
        scene.add.tween({
            targets: object,
            alpha: 0,
            duration: time,
            onComplete: function () {
                object.visible = false;
                if (complete) {
                    complete();
                }
            }
        });
    };
    return ChangeVisibilityUtils;
}());
exports.ChangeVisibilityUtils = ChangeVisibilityUtils;


/***/ }),

/***/ "./src/utils/ColorIDsUtils.ts":
/*!************************************!*\
  !*** ./src/utils/ColorIDsUtils.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../monsters/constants */ "./src/monsters/constants.ts");
var ColorIDsUtils = (function () {
    function ColorIDsUtils() {
    }
    ColorIDsUtils.getColorFromID = function (id) {
        return this.arrColorIDs[id] ? this.arrColorIDs[id] : "addUser";
    };
    ColorIDsUtils.getColorFromIndex = function (index) {
        return ColorIDsUtils.getColorFromID(ColorIDsUtils.getColorFromChar(index));
    };
    ColorIDsUtils.getFullColorFromIndex = function (index) {
        return ColorIDsUtils.arrColorMonsters[index];
    };
    ColorIDsUtils.getColorFromChar = function (index) {
        var colorChar = this.arrColorChars[index];
        if (colorChar) {
            return colorChar;
        }
        return "";
    };
    ColorIDsUtils.getIndexFromColor = function (color) {
        return this.arrColorMonsters.indexOf(color);
    };
    ColorIDsUtils.getCharColorFromColor = function (color) {
        return this.arrColorChars[this.getIndexFromColor(color)];
    };
    ColorIDsUtils.getRandomColor = function () {
        return ColorIDsUtils.arrColorMonsters[Phaser.Math.Between(0, ColorIDsUtils.count - 1)];
    };
    Object.defineProperty(ColorIDsUtils, "count", {
        get: function () {
            return this.arrColorChars.length;
        },
        enumerable: true,
        configurable: true
    });
    ColorIDsUtils.arrColorMonsters = [
        constants_1.MonsterColor.RED,
        constants_1.MonsterColor.ORANGE,
        constants_1.MonsterColor.YELLOW,
        constants_1.MonsterColor.GREEN,
        constants_1.MonsterColor.BLUE,
        constants_1.MonsterColor.PURPLE,
        constants_1.MonsterColor.DARK
    ];
    ColorIDsUtils.arrColorChars = ["r", "o", "y", "g", "b", "p", "d"];
    ColorIDsUtils.arrColorIDs = {
        r: "red",
        o: "orange",
        y: "yellow",
        g: "green",
        b: "blue",
        p: "purple",
        d: "dark"
    };
    return ColorIDsUtils;
}());
exports.ColorIDsUtils = ColorIDsUtils;


/***/ }),

/***/ "./src/utils/ComponentPool.ts":
/*!************************************!*\
  !*** ./src/utils/ComponentPool.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ComponentPool = (function () {
    function ComponentPool() {
        this.pools = {};
        if (!ComponentPool.instance) {
            ComponentPool.instance = this;
        }
        return ComponentPool.instance;
    }
    ComponentPool.prototype.getPool = function (key) {
        if (key in this.pools) {
            return this.pools[key];
        }
        return this.pools[key] = [];
    };
    ComponentPool.prototype.get = function (classType) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var poolKey = classType.prototype.constructor.name;
        var pool = this.getPool(poolKey);
        return pool.pop() || this.create.apply(this, __spreadArrays([classType], args));
    };
    ComponentPool.prototype.create = function (classType) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (args) {
            return new (classType.bind.apply(classType, __spreadArrays([void 0], args)))();
        }
        return new classType();
    };
    ComponentPool.prototype.dispose = function (classInstance) {
        if (classInstance) {
            var poolKey = classInstance.constructor.name;
            var pool = this.getPool(poolKey);
            pool[pool.length] = classInstance;
        }
    };
    ComponentPool.prototype.empty = function () {
        this.pools = {};
    };
    return ComponentPool;
}());
exports.ComponentPool = ComponentPool;


/***/ }),

/***/ "./src/utils/FPSMeterApp.ts":
/*!**********************************!*\
  !*** ./src/utils/FPSMeterApp.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! fpsmeter */ "./node_modules/fpsmeter/dist/fpsmeter.js");
var FPSMeterApp = (function () {
    function FPSMeterApp() {
        this.fpsmeterOptions = {
            theme: "dark",
            heat: 1,
            graph: 1,
            history: 20,
            zIndex: 100,
            top: "auto",
            left: "auto",
            right: "auto",
            bottom: "0"
        };
        var element = document.getElementById("fps-meter") || document.body;
        this.fpsmeter = new FPSMeter(element, this.fpsmeterOptions);
        this.fpsmeter.show();
    }
    FPSMeterApp.prototype.tick = function () {
        this.fpsmeter.tick();
    };
    return FPSMeterApp;
}());
exports.FPSMeterApp = FPSMeterApp;


/***/ }),

/***/ "./src/utils/LocalStorageUtils.ts":
/*!****************************************!*\
  !*** ./src/utils/LocalStorageUtils.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorageUtils = (function () {
    function LocalStorageUtils() {
    }
    LocalStorageUtils.saveData = function (data) {
        if (LocalStorageUtils.isLocalStorageAvailable) {
            localStorage.setItem(LocalStorageUtils.KEY_STORAGE, JSON.stringify(data));
        }
    };
    LocalStorageUtils.readData = function () {
        if (LocalStorageUtils.isLocalStorageAvailable) {
            var data = localStorage.getItem(LocalStorageUtils.KEY_STORAGE);
            if (data) {
                return JSON.parse(data);
            }
        }
        return null;
    };
    LocalStorageUtils.clearLocalStorage = function () {
        if (LocalStorageUtils.isLocalStorageAvailable) {
            localStorage.removeItem(LocalStorageUtils.KEY_STORAGE);
        }
    };
    Object.defineProperty(LocalStorageUtils, "isLocalStorageAvailable", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    LocalStorageUtils.KEY_STORAGE = "ag_moli";
    return LocalStorageUtils;
}());
exports.LocalStorageUtils = LocalStorageUtils;


/***/ }),

/***/ "./src/utils/SeasonsUtils.ts":
/*!***********************************!*\
  !*** ./src/utils/SeasonsUtils.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SeasonsUtils = (function () {
    function SeasonsUtils() {
    }
    SeasonsUtils.getSeasonNameByID = function (seasonID) {
        return this.seasonsNames[seasonID];
    };
    SeasonsUtils.getColorSeasonByID = function (seasonID) {
        return this.seasonsColors[seasonID];
    };
    SeasonsUtils.SEASONS_COUNT = 4;
    SeasonsUtils.SEASON_SPRING = 0;
    SeasonsUtils.SEASON_SUMMER = 1;
    SeasonsUtils.SEASON_AUTUMN = 2;
    SeasonsUtils.SEASON_WINTER = 3;
    SeasonsUtils.COLOR_CELL_SPRING = 0xDBB862;
    SeasonsUtils.COLOR_CELL_SUMMER = 0xC69E42;
    SeasonsUtils.COLOR_CELL_AUTUMN = 0x3F3B48;
    SeasonsUtils.COLOR_CELL_WINTER = 0xB9DBFC;
    SeasonsUtils.seasonsNames = [
        "Spring",
        "Summer",
        "Autumn",
        "Winter"
    ];
    SeasonsUtils.seasonsColors = [
        SeasonsUtils.COLOR_CELL_SPRING,
        SeasonsUtils.COLOR_CELL_SUMMER,
        SeasonsUtils.COLOR_CELL_AUTUMN,
        SeasonsUtils.COLOR_CELL_WINTER
    ];
    return SeasonsUtils;
}());
exports.SeasonsUtils = SeasonsUtils;


/***/ }),

/***/ "./src/utils/ShakerUtils.ts":
/*!**********************************!*\
  !*** ./src/utils/ShakerUtils.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EnterFrameManager_1 = __webpack_require__(/*! ../scenes/managers/EnterFrameManager */ "./src/scenes/managers/EnterFrameManager.ts");
var ShakerUtils = (function () {
    function ShakerUtils() {
    }
    ShakerUtils.prototype.start = function (targetObj) {
        this.targetObj = targetObj;
        this.startPositionX = this.targetObj.x;
        this.coeff = 1;
        this.range = ShakerUtils.RANGE;
        EnterFrameManager_1.EnterFrameManager.add(this);
    };
    ShakerUtils.prototype.stop = function () {
        this.targetObj.x = this.startPositionX;
        EnterFrameManager_1.EnterFrameManager.remove(this);
    };
    ShakerUtils.prototype.onUpdate = function (deltaTime) {
        this.range *= ShakerUtils.DAMP * (this.coeff *= -1);
        this.targetObj.x = this.startPositionX + this.range;
        if (Phaser.Math.Distance.Between(this.targetObj.x, 0, this.startPositionX, 0) <= .1) {
            stop();
        }
    };
    ShakerUtils.RANGE = 15;
    ShakerUtils.DAMP = .9;
    return ShakerUtils;
}());
exports.ShakerUtils = ShakerUtils;


/***/ })

/******/ });
//# sourceMappingURL=game.js.map