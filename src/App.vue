<template>
  <Header />
  <StairTransition />
  <page-transitions>
    <RouterView />
  </page-transitions>
</template>
<script setup>
import Header from "@/components/Header.vue";
import PageTransitions from "@/components/PageTransitions.vue";
import StairTransition from "@/components/StairTransition.vue";
</script>

<style scoped></style>
