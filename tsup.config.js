import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/api/handler.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  outDir: './dist/api',
  format: 'esm',
  minify: false,
  bundle: true,
  platform: 'node',
});
