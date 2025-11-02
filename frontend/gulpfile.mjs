import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';


const compileSass = gulpSass(dartSass);

const paths = {
  scss: '../modules/custom/competition_winners/scss/**/*.scss',
  cssDest: '../modules/custom/competition_winners/css'
};

export function styles() {
  return gulp.src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.cssDest));
}


export function watch() {
  gulp.watch(paths.scss, styles);
}

export default gulp.series(styles, watch);
