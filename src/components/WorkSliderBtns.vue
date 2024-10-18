<template>
  <div :class="`${containerStyles}`">
    <button @click="swiper.slidePrev()" :class="` ${btnStyles} `">
      <div :class="iconStyles">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
    </button>
    <button @click="swiper.slideNext()" :class="` ${btnStyles} `">
      <div :class="iconStyles">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </button>
  </div>
</template>

<script setup>
import { useSwiper } from "swiper/vue";

defineProps(["containerStyles", "btnStyles", "iconStyles"]);

const swiper = useSwiper();
</script>

<style lang="scss" scoped></style>
