<template>
  <footer
    class="footer sm:footer-horizontal bg-[#1e1e2e] text-neutral-content p-5 shadow-lg rounded-lg absolute bottom-5 left-1/2 transform -translate-x-1/2 w-1/3 max-w-screen-lg"
  >
    <aside>
      <p class="font-mono font-small">
        Made by Neon - Copyright {{ new Date().getFullYear() }}.
        <br />
        <br />
        Freedom of speech is a fundamental human right.
      </p>
    </aside>
    <nav>
      <div class="grid grid-flow-col gap-2">
        <!-- Social icons go here -->
        <!-- TODO: make sure the bento icon is here, pgp, and canary and source link -->
        <a
          href="https://github.com/saahild.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            name="mdi:github"
            class="text-2xl hover:scale-110 transition-transform duration-300"
          />
        </a>
        <a href="https://saahild.com/creds/public.pgp.txt">
          <Icon
            name="mdi:key"
            class="text-2xl hover:scale-110 transition-transform duration-300"
          />
        </a>
        <!-- <Icon name="catppuccin:folder-queue" class="text-2xl" /> -->
        <a>
          <!-- <img
            src="/bento.svg"
            alt="Bento Icon"
            class="w-8 h-8 hover:scale-110 transition-transform duration-300"
          /> -->
        </a>
      </div>
    </nav>
  </footer>
</template>
