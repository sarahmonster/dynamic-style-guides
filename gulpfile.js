// Include Gulp
var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );

// Generate style guide assets.
gulp.task( 'style-guide', function() {
	return gulp.src( 'assets/style-guide/stylesheets/style-guide.scss' )
		.pipe( sass( { style: 'expanded' } ).on( 'error', sass.logError ) )
		.on( 'error', function ( err ) {
			console.error( 'Error!', err.message );
		} )
		.pipe( gulp.dest( 'assets/style-guide' ) )
});

// Watch files for changes
gulp.task( 'watch', function() {
	gulp.watch( 'assets/style-guide/**/*.scss', ['style-guide'] );
});
