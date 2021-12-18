import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';
import { htmlBuild, htmlWatch } from './gulp/tasks/htmlFiles';
import { sassBuild, sassWatch } from './gulp/tasks/styles';
import { assetsBuild, assetsWatch } from './gulp/tasks/assets';
import { phpBuild, phpWatch } from './gulp/tasks/phpFiles';
import config from './gulp/config';

config.setEnv();

export const build = gulp.series(
  clean,
  gulp.parallel(
    scriptsBuild,
    htmlBuild,
    sassBuild,
    assetsBuild,
    phpBuild,
  ),
);

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    scriptsWatch,
    htmlWatch,
    sassWatch,
    assetsWatch,
    phpWatch,
  ),
);
