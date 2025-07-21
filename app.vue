<script setup>
import Backdrop from "./components/Backdrop.vue";
import Footer from "./components/Footer.vue";
// import "./lib/jsscripts/index.ts";
import Navbar from "./components/Navbar.vue";
useHead({
  noscript: [
    {
      children: `
  <meta http-equiv="refresh" content="0; url=https://saahild.com/retro" />
      `
    }
  ]
})
</script>
<script>
</script>
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
