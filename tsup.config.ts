import type { Options } from 'tsup';

const config: Options = {
    entry: ['src/**/*.ts'],
    clean: true,
    dts: true,
    format: ['cjs', 'esm'],
    target: 'node16',
    skipNodeModulesBundle: false,
    sourcemap: true,
    splitting: true,
    minify: true,
    external: ['express', 'prisma', 'compression', 'helmet', 'cors'],
};

export default config;
