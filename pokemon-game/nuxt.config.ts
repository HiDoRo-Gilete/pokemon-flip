// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineNuxtConfig({
  devServer: {
    port: Number(process.env.PORT) || 3000,
  },
  compatibilityDate: '2024-11-01',
  alias: {
    assets: resolve(__dirname, 'assets'),
  },
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  }
})
