// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',  // (tuỳ chọn) cho phép truy cập từ LAN
    port: Number(process.env.PORT) ||3000        // port mà `nuxt dev` sẽ listen
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
