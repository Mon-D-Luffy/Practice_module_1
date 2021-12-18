import gulp from 'gulp';
import config from '../config';

export const phpBuild = () => (
  gulp.src(`${config.src.php}/**/*.php`)
    .pipe(gulp.dest(`${config.dest.php}`))
);

export const phpWatch = () => gulp.watch(`${config.src.php}/**/*.php`, phpBuild);
