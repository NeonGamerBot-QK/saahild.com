<template>
  <footer
    class="fixed bottom-0 left-1/2 transform -translate-x-1/2 footer sm:footer-horizontal bg-[#1e1e2e] text-neutral-content p-2 sm:p-5 shadow-lg rounded-lg sm:w-1/3 max-w-screen-lg w-full"
  >
    <aside>
      <p class="font-mono font-small">
        Made by Neon - Copyright {{ new Date().getFullYear() }}.
        <br />
        <br class="hidden sm:block" />
        <a
          href="https://archive.is/450yM"
          @click="
            umTrackEvent('outbound_click', {
              location: 'footer',
              label: 'free_speech',
              domain: 'archive.is',
            })
          "
          ><b>Free speech</b></a
        >
        &
        <a
          href="https://en.wikipedia.org/wiki/Privacy"
          @click="
            umTrackEvent('outbound_click', {
              location: 'footer',
              label: 'privacy',
              domain: 'wikipedia.org',
            })
          "
          ><b>Privacy</b></a
        >
        is a fundamental human right.
      </p>
    </aside>
    <nav>
      <div class="grid grid-flow-col gap-2">
        <a
          href="https://github.com/NeonGamerBot-QK/saahild.com"
          target="_blank"
          rel="noopener noreferrer"
          @click="
            umTrackEvent('outbound_click', {
              location: 'footer',
              label: 'source',
              domain: 'github.com',
            })
          "
        >
          <Icon
            name="mdi:github"
            class="text-2xl hover:scale-110 transition-transform duration-300"
          />
        </a>
        <a
          href="https://saahild.com/creds/public.pgp.txt"
          @click="
            umTrackEvent('outbound_click', {
              location: 'footer',
              label: 'pgp',
              domain: 'saahild.com',
            })
          "
        >
          <Icon
            name="mdi:key"
            class="text-2xl hover:scale-110 transition-transform duration-300"
          />
        </a>
        <a
          href="./canary.txt"
          @click="
            umTrackEvent('footer_click', {
              location: 'footer',
              label: 'canary',
            })
          "
        >
          <Icon
            name="mdi:check-circle"
            class="text-2xl hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
    </nav>
  </footer>
</template>
