/** @type import('vite').UserConfig */
const config = {
  build: {
    emptyOutDir: false,
    lib: {
      entry: './src/index.ts',
      fileName: () => 'index.mjs',
      formats: ['es'],
    },
  },
};
export default config;
