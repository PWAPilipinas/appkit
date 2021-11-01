import tsc from 'rollup-plugin-tsc';
import copy from 'rollup-plugin-copy';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';

const copyConfig = {
    targets: [
      { src: 'src/assets', dest: 'dist' },
      { src: 'src/index.html', dest: 'dist' },
      { src: 'src/manfest.webmanifest', dest: 'dist' },
      { src: 'src/styles.css', dest: 'dist' }
    ],
};

const config = {
    input: 'src/main.ts',
    output: {
      dir: 'dist',
      format: 'es'
    },
    plugins: [
        // copyAndWatch('src/index.html', 'index.html'),
        minifyHTML(),
        copy(copyConfig),
        tsc({
            "compilerOptions": {
                "experimentalDecorators": true
            }
        }),
        nodeResolve()
    ],
    preserveEntrySignatures: false
};

if (process.env.NODE_ENV !== 'development') {
    config.plugins.push(terser());
}

export default config;