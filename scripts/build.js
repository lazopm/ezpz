const fs = require('fs')
const rollup = require('rollup').rollup;
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');

rollup({
    entry: 'src/main.js',
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
    ],
}).then(bundle => bundle.write({
    format: 'cjs',
    dest: 'build/bundle.js'
}))
.catch(console.log);
