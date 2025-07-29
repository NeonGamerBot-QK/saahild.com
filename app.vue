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
  link: [
    {
      rel: "preload",
      href: "https://saahild.com/buttons/",
    },
    {
      rel: "me",
      href: "https://mastodon.social/@neongamerbot",
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
umTrackEvent("app-load")
if(process.client) {
umTrackView(location.pathname, new URLSearchParams(location.search).get("r") || "none")

  umIdentify({
    semi_perm_id: localStorage.getItem("semi_perm_id")
      ? localStorage.getItem("semi_perm_id")
      : (localStorage.semi_perm_id =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15)),
    temp_id: Date.now() + Math.random().toString(36).substring(2, 15),
    user_agent: navigator.userAgent,
  });
  // alert("ts")
}
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
    <div class="flex-grow">
 <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
    </div>
    <Footer />
  </div>
</template>
