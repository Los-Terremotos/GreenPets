import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import terser from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'iife'
  },
  plugins: [
    image(),
    resolve(), // Resolves node_modules
    commonjs(), // Converts CommonJS modules to ES6
    html({ /* options to generate index.html */ }),
    terser(), // Minify the bundle for production
  ]
};