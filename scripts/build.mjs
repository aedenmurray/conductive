#!/usr/bin/env zx

await fs.emptyDir('./bin');
await $`rollup --config rollup.config.js`;

await fs.writeJSON(
    './bin/cjs/package.json',
    { type: 'commonjs' },
    { spaces: 2 }
);

// prettier-ignore
await fs.writeJSON(
    './bin/mjs/package.json',
    { type: 'module' },
    { spaces: 2 }
);
