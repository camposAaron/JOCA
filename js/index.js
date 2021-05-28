document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.slide', {
		fixedWidth : 100,
		height     : 60,
		gap        : 10,
		rewind     : true,
		cover      : true,
		pagination : false,
	} ).mount();
} );