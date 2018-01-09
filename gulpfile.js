const gulp       = require( 'gulp' ),
      touch      = require( 'gulp-touch' ),
      jsonServer = require( 'gulp-json-srv' );

const jsonDir         = 'json/',
      bankingDataFile = jsonDir + 'class-data.json',
      moviesDataFile  = jsonDir + 'movies-data.json',
      booksDataFile   = jsonDir + 'books-data.json',
      staticDir       = 'static/',
      basePort        = 8000;

const server       = jsonServer.create( {
        port  : basePort + 1,
        static: staticDir
      } ),
      moviesServer = jsonServer.create( {
        port  : basePort + 2,
        static: staticDir
      } ),
      booksServer = jsonServer.create( {
        port  : basePort + 3,
        static: staticDir
      } ),
      mergedServer = jsonServer.create( {
        port      : basePort + 4,
        static    : staticDir,
        cumulative: true
      } );

gulp.task( 'reset-server', () => {
  gulp.src( [ bankingDataFile, moviesDataFile ] )
      .pipe( gulp.dest( server ) )
      .pipe( touch() );
} );

gulp.task( 'start-server', () => {
  gulp.src( bankingDataFile )
      .pipe( server.pipe() );
} );

gulp.task( 'start-movies-server', () => {
  gulp.src( moviesDataFile )
      .pipe( moviesServer.pipe() );
} );

gulp.task( 'start-books-server', () => {
  gulp.src( booksDataFile )
      .pipe( booksServer.pipe() );
} );

gulp.task( 'start-merged-server', () => {
  gulp.src( [ bankingDataFile, moviesDataFile, booksDataFile ] )
      .pipe( mergedServer.pipe() );
} );

gulp.task( 'default', [ 'start-server' ] );