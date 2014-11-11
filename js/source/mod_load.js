var LOAD = (function (pub) {

	pub.once = function (jsLibrary, callback) { 
		
		if ( jsLibrary === 'jQuery' ) {
			if ( !window.jQuery ) {
				window.console && console.log('jQuery not found; loading...');
				
				var d = document,
					script = d.createElement('script');
				
				script.type = 'text/javascript';
				script.src = '/files/video-api/js/vendor/jquery-1.9.1.min.js';
				
				if (callback && typeof(callback) === "function") {
					window.console && console.log('callback firing');
					script.onload = callback;
				}
				
				d.getElementsByTagName('head')[0].appendChild(script);
				
			} else {
				window.console && console.log('jQuery found, no need to load...');
				
				if (callback && typeof(callback) === "function") {
					window.console && console.log('callback firing');
					callback.apply(this, arguments);
				}
			}

		} else if ( jsLibrary === 'froogaloop' ) {
			if ( !window.$f ) {
				window.console && console.log('froogaloop not found; loading...');
				
				var d = document,
					script = d.createElement('script');
				
				script.type = 'text/javascript';
				// script.src = '/files/video-api/js/vendor/froogaloop2.min.js';
				script.src = '/files/video-api/js/vendor/froogaloop.js';
				
				if (callback && typeof(callback) === "function") {
					window.console && console.log('callback firing');
					script.onload = callback;
				}
				
				d.getElementsByTagName('head')[0].appendChild(script);
				
			} else {
				window.console && console.log('froogaloop found, no need to load...');
				
				if (callback && typeof(callback) === "function") {
					window.console && console.log('callback firing');
					callback.apply(this, arguments);
				}
			}
		}
	};

	return pub;
}(LOAD || {}));


