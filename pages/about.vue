<script lang="ts" setup>
import FeedbackCards from "~/components/FeedbackCards.vue";
import AboutMe from "~/components/AboutMe.vue";
import SnakeGrid from "~/components/SnakeGrid.vue";
let cards = [
  {
    id: 1,
    title: "Card 1",
    text: "First card",
    color: "bg-base-100 text-primary-content",
  },
  {
    id: 2,
    title: "Card 2",
    text: "Second card",
    color: "bg-base-100 text-primary-content",
  },
  {
    id: 3,
    title: "Card 3",
    text: "Third card",
    color: "bg-base-100 text-primary-content",
  },
];
</script>

<template>
  <div class="">
    <div class="flex items-center justify-between">
      <div>
        <AboutMe />
      </div>
      <FeedbackCards :cards="cards" />
    </div>
    <div>
      <SnakeGrid />
    </div>
  </div>
</template>
