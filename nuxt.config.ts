import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  target: "static",
  // make static output
  ssr: false,
  nitro: {
    preset: "static",
  },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-umami",
  ],

  umami: {
    id: "ee9a2efa-f5af-496f-8e37-b8fe9e1e8ec2",
    host: 'https://cloud.umami.is',
    autoTrack: true,
    // proxy: 'cloak',
    useDirective: true,
    ignoreLocalhost: false,
    // excludeQueryParams: false,
    // domains: ['cool-site.app', 'my-space.site'],
    // customEndpoint: '/my-custom-endpoint',
    // enabled: false,
    logErrors: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
});