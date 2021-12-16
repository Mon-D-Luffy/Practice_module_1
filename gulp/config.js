const srcPath = 'src';
const destPath = 'dest';

const config = {
  src: {
    sass: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    fonts: `${srcPath}/assets`,
  },

  dest: {
    html: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
  },
};

export default config;
