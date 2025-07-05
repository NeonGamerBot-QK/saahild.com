<script>
import Backdrop from "./components/Backdrop.vue";
import Footer from "./components/Footer.vue";
</script>
<style>
body,
html {
  font-family: "Poppins";
}
</style>
<template>
  <div>
    <Backdrop />
    <router-view />
    <Footer />
  </div>
</template>
