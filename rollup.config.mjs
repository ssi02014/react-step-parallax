import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json' assert { type: 'json' };
import alias from '@rollup/plugin-alias';
import path from 'path';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const __dirname = path.resolve();

process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.tsx', // 진입 경로
  output: [
    {
      file: pkg.main,
      format: 'esm',
      sourcemap: false,
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    nodeResolve({
      extensions,
    }),
    commonjs({ include: 'node_modules/**' }),
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    }),
    babel({
      exclude: /node_modules/,
      extensions,
      include: ['src/**/*'],
    }),
    typescript({ tsconfig: './tsconfig.json' }),
    terser(),
  ],
};
