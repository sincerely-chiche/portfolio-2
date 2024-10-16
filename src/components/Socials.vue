<template>
  <div :class="` ${containerStyles} `">
    <a
      v-for="(link, index) in socialLinks"
      :href="link.path"
      target="_blank"
      rel="noopener noreferrer"
      :key="index"
      :class="`${iconStyles}`"
    >
      <i :class="link.icon"></i>
    </a>
  </div>
</template>

<script setup>
import { socialLinks } from "@/utils/links";
defineProps(["containerStyles", "iconStyles"]);
</script>

<style lang="scss" scoped></style>
