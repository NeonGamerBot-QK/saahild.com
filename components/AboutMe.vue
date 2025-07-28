<script setup>
import AgeCounter from "./AgeCounter.vue";
const options = "highschool|collage|j*b|retirment|greatbeyond".split("|");
const calculateAge = (b) => {
  const now = Date.now();
  const age = (now - b) / (1000 * 60 * 60 * 24 * 365.25);
  return age;
};
const borth = 1208058960000;
// console.log(, 'borth')
function calcOption() {
  const age = Math.floor(calculateAge(borth));
  if (age < 19) return options[0];
  if (age < 25) return options[1];
  if (age < 60) return options[2];
  if (age <= 70) return options[3];
  return options[4];
}
let currentOption = calcOption();
</script>
<template>
  <div class="sm:-mt-10 mt-10 ml-2 sm:ml-10">
    <h1 class="font-bold text-3xl">About me:</h1>
    <br />
    <ul>
      <li>
        I am currently
        <AgeCounter
          :birthTimestamp="borth"
          :width="107"
          :height="18"
          fontSize="16"
          textColor="#cba6f7"
        />
        years old
      </li>
      <li>Im currently in {{ currentOption }} (this is just a guess)</li>
      <li>
        I program in
        <span>
          <Icon name="catppuccin:typescript" />
          Typescript</span
        >,
        <span>
          <Icon name="catppuccin:ruby" />
          Ruby</span
        >
        and
        <span>
          <Icon name="catppuccin:nuxt" />
          Nuxt</span
        >
        usually
      </li>
      <li>
        i like mostly coding in my freetime, messing with bugs, watching anime
        and sleeping
      </li>
      <li>i also like eating lots of food and playing video games!</li>
    </ul>
  </div>
</template>
