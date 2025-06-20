import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  target: 'static',
 // make static output
  ssr: false,
  nitro: {
    preset: 'static'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],
   vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
})