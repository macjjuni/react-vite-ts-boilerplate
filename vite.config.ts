import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import eslint from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      eslint(),
      createHtmlPlugin({
        minify: true,
        entry: 'src/entry/main.tsx',
        template: '/src/index.html',
        inject: { data: { title: env.VITE_TITLE } },
      }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
  }
})
