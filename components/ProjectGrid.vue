<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    <div
      v-for="project in projects"
      :key="project.id"
      class="card bg-base-100 shadow-xl"
    >
      <img
        :src="project.image"
        v-if="project.image"
        alt="cover img"
        class="w-full h-48 object-cover rounded-t-lg"
      />
      <div class="card-body">
        <h2 class="card-title">{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <div class="flex flex-wrap gap-2 mt-2">
          <span
            v-for="lang in project.languages"
            :key="lang"
            class="badge badge-outline"
          >
            <Icon :name="`catppuccin:${lang}`" class="text-xl" />
          </span>
        </div>
        <div class="card-actions justify-end">
          <!-- <button class="btn btn-primary">View</button> -->
          <a :href="project.repo" target="_blank" class="btn btn-primary"
            ><Icon name="catppuccin:git" class="text-2xl" />
          </a>
          <a
            v-if="project.demoURL"
            :href="project.demoURL"
            target="_blank"
            class="btn btn-secondary"
            ><Icon name="catppuccin:azure-pipelines" class="text-2xl"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: "Zeon",
    description: `Zeon is my personal assistant who does many tasks and is split between a foss source code (slack bot) and a closed source discord bot which both parts of this source code does:\n- Weather / news updates\n- Calandar managment\n- Automation of sms\n- Email routing\n- Github linting / handling
   - Blind mail 
- sticky messages (stays at the bottom of the channel)
- Hackclub shipment viewer
- bday syste1m
- d20 dice system
- poll's (comming soon)
- high seas lb tracker
- zeon tags
- #whats-my-slack-id
- advent of code priv lb tracker (not active rn since no aoc)
- hangman
- hackclub cdn
- CTF (comming soon)
- high seas shop
- hackatime tracker (personal)
- how was your day (personal)
- code watcher (personal)
- spotify and jellyfin status in slack (personal)
- irl status (personal)
- Many other features which are mostly personal

There is more comming soon but he is one of my oldest projects and has a total of more then 140h+ worked on the source code!
`,
    languages: ["typescript", "javascript"],
    repo: "https://github.com/NeonGamerBot-QK/slack-zeon",
    image:
      "https://saahild.com/zeon/static/media/logo.496b486aab466e923154.png",
  },
  {
    id: 2,
    title: "Brown washing machines",
    description: `This project isnt some heavy hour project, it is more of a creative project, for the fun of the game! this was made mostly in a laundry rooma nd a little bit in my dorm room, this code focus's on sending updates for the washers and dryers for when they are done, which dryer should you use next, and updates every 30 mins for the statistics on each machine! this was very useful for checking should i go down to the basement or check later ;p`,
    repo: `https://github.com/NeonGamerBot-QK/brown-washer`,
    languages: ["javascript"],
    demoURL: `https://groupme.com/join_group/108636619/OOnFnTdg`,
    image:
      "https://raw.githubusercontent.com/NeonGamerBot-QK/brown-washer/refs/heads/master/groupme.png",
  },
  {
    id: 3,
    title: "Signal App",
    description: `This is a project i am working on which lets you use the signal as a web app, it has 19h+ of work and i plan to work on it more until its done (may take a while). I will try to implement all the features that the desktop app has to its fullest (wtv signal-cli lets me reach to)`,
    languages: ["nuxt"],
    repo: "https://github.com/NeonGamerBot-QK/signal-app",
    demoURL: "https://signal-app-demo.saahild.com/",
    image:
      "https://raw.githubusercontent.com/NeonGamerBot-QK/signal-app/refs/heads/master/screenshot.png",
  },
];
</script>
