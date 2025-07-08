<script>
import Backdrop from "./components/Backdrop.vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>
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
