import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

const vitePWA =VitePWA({
  registerType: "autoUpdate",
  
    workbox:{
      globPatterns:[
        '**/*{css,woff2,png,svg,jpg,jpeg,js}'
    ],
    },

  manifest:{
    name: "cooking PWA for college project",
    short_name: "recipes",
    description: "",
    theme_color: "ffffff",

    icons: [
      {
        src: 'icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vitePWA],
  base:"/recipes/"
})
