const srcPath = 'src';
const destPath = 'D:/Umed/Programming/OpenServer/domains/build';

const config = {
  src: {
    root: srcPath,
    html: srcPath,
    sass: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    php: `${srcPath}/php`,
    assets: `${srcPath}/assets`,
  },

  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    php: `${destPath}/php`,
    assets: `${destPath}/assets`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
