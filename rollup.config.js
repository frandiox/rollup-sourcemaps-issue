import pkg from './package.json';
import dateformat from 'dateformat';

// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import progress from 'rollup-plugin-progress';

const stringOpt = { include: '**/*.svg', }; // SVG images

const resolveOpt = {
  jsnext: true,
  main: true,
  browser: true,
};

const babelOpt = {
  // do not exclude node_modules since Onsen UI dependencies need transpiling
  babelrc: false, // We need to deactivate modules transpiling only here
  presets: [
    ['env', {
      modules: false,
      // forceAllTransforms: true, // Full ES5
      targets: {
        browsers: ['iOS >= 8', 'Android >= 4.4.4', '> 1%', 'last 2 versions'],
      },
    }],
    'stage-3'
  ],
  plugins: [
    'external-helpers',
  ],
};

const commonjsOpt = {
  include: 'node_modules/**',
};


export default [
  {
    input: 'index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'test',
      sourcemap: 'inline',
    },
    plugins: [
      resolve(resolveOpt),
      commonjs(commonjsOpt),
      babel(babelOpt),
      progress(),
    ],
    banner: `/* ${pkg.name} v${pkg.version} - ${dateformat(new Date(), 'yyyy-mm-dd')} */\n`
  },
];
