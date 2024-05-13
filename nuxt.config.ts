// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    storage: {
      data: {
        driver: 'vercelKV'
      }
    }
  },
  modules: [
    // ...
    '@pinia/nuxt',
    '@element-plus/nuxt'
  ],
  vite: {
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          additionalData: `@use '@/assets/styles/var.scss' as *;`
        }
      }
    }
  },
  css: ['~/assets/styles/index.scss', 'animate.css']
})
