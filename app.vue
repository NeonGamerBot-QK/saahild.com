<script>
import Backdrop from "./components/Backdrop.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import "./lib/jsscripts/index.ts";
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
