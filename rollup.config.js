import pkg from './package.json';
import babel from 'rollup-plugin-babel';

const babelOpt = {
  babelrc: false,
  presets: [
    ['env', {
      modules: false,
      forceAllTransforms: true, // Full ES5
    }],
    'stage-3'
  ],
  plugins: [
    'external-helpers',
  ],
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
      babel(babelOpt),
    ],
    banner: `/* ${pkg.name} v${pkg.version}} */\n`
  },
];
