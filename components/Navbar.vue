<template>
  <div class="navbar bg-base-100/50 shadow-sm">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a href="/about">
              <Icon name="catppuccin:text" class="text-2xl" />About me</a
            >
          </li>
          <li>
            <a href="/projects">
              <Icon name="catppuccin:folder" class="text-2xl" />Projects</a
            >
          </li>
          <!-- it looks close enough to a ring -->
          <li>
            <a href="/buttons"
              ><Icon name="catppuccin:webpack" class="text-2xl" />Webrings</a
            >
          </li>
          <li>
            <a href="/contact.html"
              ><Icon name="catppuccin:readme" class="text-2xl" />Contact</a
            >
          </li>
          <li>
            <!-- <Icon
              name="donate"
              class="text-2xl"
              v-umami="{ name: 'Navbar-Donate', external: true }"
            /> -->
            <a href="/donate.html"
              ><Icon name="catppuccin:certificate" class="text-2xl" />Donate</a
            >
          </li>
        </ul>
      </div>
      <a class="btn btn-ghost text-xl" href="./">saahild.com</a>
    </div>
    <!-- <div class="navbar-center hidden lg:flex">
     
    </div> -->
    <div class="navbar-end">
      <ul class="menu menu-horizontal px-1 hidden lg:flex">
        <li>
          <a href="/about">
            <Icon name="catppuccin:text" class="text-2xl" />About me</a
          >
        </li>
        <li>
          <a href="/projects">
            <Icon name="catppuccin:folder" class="text-2xl" />Projects</a
          >
        </li>
        <!-- it looks close enough to a ring -->
        <li>
          <a href="/buttons"
            ><Icon name="catppuccin:webpack" class="text-2xl" />Webrings</a
          >
        </li>
        <li>
          <a href="/contact.html"
            ><Icon name="catppuccin:readme" class="text-2xl" />Contact</a
          >
        </li>
        <li>
          <a href="/donate.html"
            ><Icon
              name="donate"
              class="text-2xl"
              v-umami="{ name: 'Navbar-Donate', external: true }"
            />
            <Icon name="catppuccin:certificate" class="text-2xl" />
            Donate</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
