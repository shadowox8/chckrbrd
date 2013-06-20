/**
 * Initializes an event handler to do things when the window is resized.
 * TODO: demote from function status?
 * TODO: make that global variable not horrible
 * TODO: this function could probably have a better name
 *
 * @param element [jQuery object] The elements that need updated.
 * @param delay [integer] [optional] The amount of time in milliseconds to wait before performing the updates. (Useful for efficiency.)
 */
var window_resize_update_timer;
function window_resize(element, delay) {
	// anonymous function to be run when the browser window is resized
	$(window).resize(function() {
		// if a delay is given, wait that long before before performing the update
		if(delay) {
			clearTimeout(window_resize_update_timer);
			// anonymous functions on anonymous functions
			// dirty
			window_resize_update_timer = setTimeout(function() {
				window_resize_update(element);
			}, delay);
		}
		else {
			window_resize_update(element);
		}
	});
}

// TODO: javadoc and see parent function
function window_resize_update(element) {
	//TODO: place update functions here
	//PROTIP: resize elements BEFORE positioning them
	chckr_resize(element);
	center_element(element);
}

/**
 * Vertically and horizontally centers the given element(s).
 * TODO: delete this function; cf. `v0.1/index.html` for centering
 *
 * @param element [jQuery object] The element to be centered.
 */
function center_element(element) {
	// center horizontally
	element.css('left', $(window).width() / 2 - element.width() / 2 + 'px');
	
	// center vertically
	element.css('top', $(window).height() / 2 - element.height() / 2 + 'px');
}



/**
 * Resizes all chckr elements based on broswer viewport size.
 * TODO: make sure user can never see more chckrs than (s)he is supposed to
 *
 * @param chckrs [jQuery object] The chckr elements.
 */
function chckr_resize(chckrs) {
	// chckr size is determined by the shortest window dimension
	var size = Math.min($(window).width(), $(window).height()) * .8;
	
	// chckrs are squares
	chckrs.css({'width': size, 'height': size});
}
