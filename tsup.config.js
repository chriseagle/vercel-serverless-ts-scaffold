import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/**'],
  splitting: false,
  sourcemap: false,
  clean: true,
  outDir: './dist',
});
