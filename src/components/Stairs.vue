<template>
  <div
    v-motion
    v-for="(s, index) in 6"
    :initial="{
      top: '100%',
    }"
    :enter="{
      top: '0%',
      transition: {
        delay: reverseIndex(index) * 200,
        ease: 'easeInOut',
        repeat: 1,
        repeatType: 'mirror',
        repeatDelay: 600,
        duration: 300,
        onComplete: () => handleAnimationCompleted(),
      },
    }"
    :leave="{ top: ['0%', '100%'] }"
    class="h-full w-full bg-white relative"
  ></div>
</template>

<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["done"]);

const animationCount = ref(0);

watch(animationCount, (val) => {
  if (val > 4) {
    emit("done");
    console.log("done");
  }
});

function reverseIndex(index) {
  const totalSteps = 6;
  return totalSteps - index - 1;
}

function handleAnimationCompleted() {
  animationCount.value += 1;
}
</script>

<style lang="scss" scoped></style>
