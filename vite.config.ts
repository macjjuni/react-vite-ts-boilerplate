import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import eslint from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react-swc'
import { compression } from 'vite-plugin-compression2'

// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      eslint(),
      compression({
        include: [/\.(js)$/, /\.(scss)$/],
        threshold: 2000,
      }),
      createHtmlPlugin({
        minify: true,
        entry: '/src/entry/main.tsx',
        template: '/src/index.html',
        inject: { data: { title: env.VITE_TITLE } },
      }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
  }
})
