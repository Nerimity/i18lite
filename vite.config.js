/** @type import('vite').UserConfig */
const config = {
  build: {
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
      fileName: (format) => 'index.' + (format === 'es' ? 'mjs' : 'js'),
      formats: ['es', 'cjs'],
    },
  },
};
export default config;
