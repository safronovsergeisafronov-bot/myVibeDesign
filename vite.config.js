import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [
    react({
      // Оптимизация React Fast Refresh
      fastRefresh: true,
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Оптимизация сборки
  build: {
    // Увеличение размера для code splitting (500kb)
    chunkSizeWarningLimit: 500,

    // Минификация с помощью esbuild (быстрее чем terser)
    minify: 'esbuild',

    // Source maps только для production debugging
    sourcemap: false,

    rollupOptions: {
      output: {
        // Разделение vendor библиотек для лучшего кеширования
        manualChunks: {
          // React библиотеки в отдельный чанк
          'react-vendor': ['react', 'react-dom'],

          // UI библиотеки в отдельный чанк
          'ui-vendor': [
            '@radix-ui/react-slot',
            'class-variance-authority',
            'clsx',
            'tailwind-merge'
          ],

          // Иконки в отдельный чанк (загружается по требованию)
          'icons': ['lucide-react'],
        },

        // Оптимизация имен файлов для кеширования
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },

    // Оптимизация CSS
    cssCodeSplit: true,

    // Предварительная загрузка модулей
    modulePreload: {
      polyfill: true,
    },
  },

  // Оптимизация dev сервера
  server: {
    // Предзагрузка зависимостей
    warmup: {
      clientFiles: [
        './src/App.jsx',
        './src/main.jsx',
        './src/pages/DesignSystemPage.jsx'
      ]
    }
  },

  // Оптимизация зависимостей
  optimizeDeps: {
    // Включение зависимостей для pre-bundling
    include: [
      'react',
      'react-dom',
      'lucide-react',
      '@radix-ui/react-slot',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ],

    // Ускорение повторных сборок
    force: false,
  },
})
