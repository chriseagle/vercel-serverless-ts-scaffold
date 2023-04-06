import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/api/handler.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  outDir: './api',
  format: 'esm',
  minify: true,
  bundle: true,
  platform: 'node',
});
