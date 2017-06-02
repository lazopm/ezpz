require('./generatePrefixes');
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
}).then(bundle => {
    var result = bundle.generate({
        format: 'cjs'
    });

    // Cache our bundle for later use (optional)
    cache = bundle;

    fs.writeFileSync( 'build/bundle.js', result.code );

    // Alternatively, let Rollup do it for you
    // (this returns a promise). This is much
    // easier if you're generating a sourcemap
    bundle.write({
        format: 'cjs',
        dest: 'bundle.js'
    });
})
.catch(console.log);
