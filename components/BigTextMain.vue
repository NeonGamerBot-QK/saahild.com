<script setup>
let spotify_link = `https://spotify-github-profile.kittinanx.com/api/view?uid=saahil.d&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=false&bar_color=b6494d&bar_color_cover=true`;
</script>
<template>
  <div class="flex items-center justify-between mt-20 px-20">
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/58448036?v=4"
        height="200"
        width="200"
        class="pb-5"
      />
      <h1 class="font-bold text-5xl">
        Hi I'm <span class="text-[#cba6f7] fancy-font">Saahil</span>
      </h1>
      <p class="pt-5">I am a teenage developer, designer and programmer</p>
    </div>

    <!-- Right: Spotify Image -->
    <div>
      <img :src="spotify_link" alt="Saahil's Spotify" class="mt-5" />
    </div>
  </div>
</template>
<style>
.fancy-font {
  font-family: "Fuzzy Bubbles", sans-serif;
}
</style>
