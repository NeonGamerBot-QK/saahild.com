<template>
  <div class="sm:flex sm:justify-right sm:items-right mt-30 sm:ml-0 ml-2">
    <div
      class="relative w-80 h-96"
      @click="rotateStack"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div
        v-for="(card, index) in displayedCards"
        :key="card.id"
        class="card w-full h-1/2 absolute top-0 left-0 cursor-pointer transition-transform duration-300"
        :class="card.color"
        :style="{
          zIndex: cards.length - index,
          transform:
            index === 0 ? 'translateY(0)' : 'translateY(-' + index * 10 + 'px)',
        }"
      >
        <div class="card-body">
          <img :src="card.avatar" class="avatar w-12 h-12 rounded-full" />
          <h2 class="card-title">{{ card.title }}</h2>
          <p>{{ card.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
const props = defineProps({
  cards: {
    type: Array,
    required: true,
  },
});
const cards = ref([...props.cards]);

watch(
  () => props.cards,
  (newVal) => {
    cards.value = [...newVal];
  },
);

const displayedCards = computed(() => [...cards.value].reverse());

function rotateStack() {
  const top = cards.value.shift();
  cards.value.push(top);
}

let touchStartX = 0;
function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
}
function handleTouchEnd(e) {
  const touchEndX = e.changedTouches[0].clientX;
  if (touchStartX - touchEndX > 50) rotateStack();
}
</script>
