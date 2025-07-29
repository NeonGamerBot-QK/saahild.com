<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  birthTimestamp: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  fontSize: {
    type: Number,
    default: 14,
  },
  fontFamily: {
    type: String,
    default:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  textColor: {
    type: String,
    default: "#fff",
  },
});

const canvasRef = ref(null);
let animationFrame = null;
let ctx = null;

const calculateAge = () => {
  const now = Date.now();
  const age = (now - props.birthTimestamp) / (1000 * 60 * 60 * 24 * 365.25);
  return age;
};

const draw = () => {
  if (!ctx) return;

  // Clear canvas
  ctx.clearRect(0, 0, props.width, props.height);

  // Calculate current age
  const age = calculateAge();

  // Draw text
  ctx.font = `${props.fontSize}px ${props.fontFamily}`;
  ctx.fillStyle = props.textColor;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Format age to 8 decimal places with smooth animation
  const formattedAge = age.toFixed(8);

  // Draw the age in the center of the canvas
  ctx.fillText(formattedAge, props.width / 2, props.height / 2);

  // Request next frame
  animationFrame = requestAnimationFrame(draw);
};

onMounted(() => {
  const canvas = canvasRef.value;
  ctx = canvas.getContext("2d");

  // Set canvas resolution for retina displays
  const dpr = window.devicePixelRatio || 1;
  canvas.width = props.width * dpr;
  canvas.height = props.height * dpr;

  // Scale the context to match the device pixel ratio
  ctx.scale(dpr, dpr);

  // Start animation
  draw();
});

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>

<template>
  <canvas
    ref="canvasRef"
    class="inline"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  />
</template>
