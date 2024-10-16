<template>
  <section class="pt-4 pb-12 xl:pt-0 xl:pb-0">
    <div class="container mx-auto" v-if="showCounter">
      <div class="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="flex-1 flex gap-4 items-center justify-center xl:justify-start"
        >
          <count-up
            :endVal="stat.num"
            :startVal="0"
            :options="{
              useEasing: true,
              useGrouping: true,
              separator: ',',
              decimal: '.',
              prefix: '',
              suffix: '',
            }"
            :duration="4"
            class="text-4xl xl:text-6xl font-extrabold"
          />
          <p
            :class="`${
              stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
            } leading-snug text-white/80`"
          >
            {{ stat.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import CountUp from "vue-countup-v3";

const stats = [
  { num: 5, text: "Years of experience" },
  { num: 10, text: "Projects Completed" },
  { num: 8, text: "Technologies Mastered" },
  { num: 500, text: "Code Commits" },
];

const showCounter = ref(false);

onMounted(() => {
  setTimeout(() => {
    showCounter.value = true;
  }, 3000);
});
</script>

<style lang="scss" scoped></style>
