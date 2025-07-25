<script setup>
import Backdrop from "./components/Backdrop.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import "./lib/jsscripts/index.ts";
useHead({
  title: "Saahils Site",
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "description",
      content:
        "Saahil's personal website, showcasing his projects, blog, and more.",
    },
    {
      name: "robots",
      content: "noindex, nofollow",
    },
    {
      name: "author",
      content: "Neon",
    },
    {
      name: "charset",
      content: "UTF-8",
    },
    {
      name: "keywords",
      content: "neon, saahil, portfolio",
    },
    {
      name: "color-scheme",
      content: "dark",
    },
  ],
  noscript: [
    {
      children: `
  <meta http-equiv="refresh" content="0; url=https://saahild.com/retro" />
      `,
    },
  ],
});
</script>
<script></script>
<!-- <script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id=""
></script> -->
<style>
body,
html {
  font-family: "Poppins";
}
</style>
<template>
  <div>
    <Navbar />
    <Backdrop />
    <router-view />
    <Footer />
  </div>
</template>
