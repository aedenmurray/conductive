import { nodeResolve } from '@rollup/plugin-node-resolve';

// TODO: Minify.

const main = [
    {
        input: 'src/index.js',
        plugins: [nodeResolve()],
        external: ['ajv', 'express'],
        output: {
            dir: 'bin/mjs',
            format: 'es',
            entryFileNames: 'index.js',
            chunkFileNames: '[name].js',
            minifyInternalExports: false,
        },

        manualChunks: {
            middleware: ['./src/middleware/index.js'],
        },
    },
    {
        input: 'src/index.js',
        plugins: [nodeResolve()],
        external: ['ajv', 'express'],
        output: {
            dir: 'bin/mjs',
            format: 'es',
            entryFileNames: 'index.js',
            chunkFileNames: '[name].js',
            minifyInternalExports: false,
        },

        manualChunks: {
            middleware: ['./src/middleware/index.js'],
        },
    },
];

const middleware = [
    {
        input: 'src/middleware/index.js',
        plugins: [nodeResolve()],
        external: ['ajv'],
        output: {
            dir: 'bin/mjs',
            format: 'es',
            entryFileNames: 'middleware.js',
            chunkFileNames: '[name].js',
            minifyInternalExports: false,
        },

        manualChunks: {
            errors: ['./src/errors/index.js'],
        },
    },
    {
        input: 'src/middleware/index.js',
        plugins: [nodeResolve()],
        external: ['ajv'],
        output: {
            dir: 'bin/cjs',
            format: 'cjs',
            entryFileNames: 'middleware.js',
            chunkFileNames: '[name].js',
            minifyInternalExports: false,
        },

        manualChunks: {
            errors: ['./src/errors/index.js'],
        },
    },
];

const errors = [
    {
        input: 'src/errors/index.js',
        output: {
            file: 'bin/mjs/errors.js',
            format: 'es',
        },
    },
    {
        input: 'src/errors/index.js',
        output: {
            file: 'bin/cjs/errors.js',
            format: 'cjs',
        },
    },
];

export default [...main, ...middleware, ...errors];
