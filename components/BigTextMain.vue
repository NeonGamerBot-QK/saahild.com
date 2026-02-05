<script setup>
let spotify_link = `https://spotify-github-profile.kittinanx.com/api/view?uid=saahil.d&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=false&bar_color=b6494d&bar_color_cover=true`;

/**
 * Tracks Spotify widget load event for analytics.
 */
function onSpotifyLoad() {
  umTrackEvent("widget_view", { widget: "spotify_profile" });
}
</script>
<template>
  <div class="flex items-center justify-between md:mt-20 md:px-20 mt-10 px-10">
    <div>
      <img
        src="/neonspfp.png"
        class="md:pb-5 pb-2 md:h-[200px] md:w-[200px] h-[100px] w-[100px]"
      />
      <h1 class="font-bold md:text-5xl text-2xl">
        <svg
          class="h-9 w-9 lg:h-10 lg:w-10 xl:h-12 xl:w-12 inline-block align-bottom"
          style="color: #cba6f7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <path
            d="M98,64.31a20,20,0,0,1,34.64-20l28,48.5"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
          <path
            d="M71.35,98.17l-16-27.71A20,20,0,0,1,90,50.46l34,58.89"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
          <path
            d="M156,164.77a40,40,0,0,1,14.64-54.64l-10-17.32a20,20,0,0,1,34.64-20l18,31.18A80,80,0,0,1,74.7,184l-38-65.82a20,20,0,0,1,34.65-20l22,38.1"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
          <path
            d="M192,32a52.12,52.12,0,0,1,32,24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
          <path
            d="M74.62,232c-11-8.69-19.39-19.48-26.62-32"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
        </svg>
        Hi I'm <span class="text-[#cba6f7] fancy-font">Saahil</span>
      </h1>
      <p class="pt-5">I am a teenage developer, designer and programmer</p>
    </div>

    <!-- Right: Spotify Image -->
    <div>
      <img
        :src="spotify_link"
        alt="Saahil's Spotify"
        class="mt-5 hidden md:block"
        @load="onSpotifyLoad"
      />
    </div>
  </div>
</template>
<style>
.fancy-font {
  font-family: "Fuzzy Bubbles", sans-serif;
}
</style>
