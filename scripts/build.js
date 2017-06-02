const fs = require('fs')
const { rollup } = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const { minify } = require('uglify-es');

rollup({
    entry: 'src/main.js',
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify({}, minify),
    ],
}).then(bundle => bundle.write({
    format: 'cjs',
    dest: 'build/bundle.js'
}))
.catch(console.log);
