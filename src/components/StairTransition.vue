<template>
  <div
    v-if="!done"
    class="bg-primary w-screen h-screen fixed inset-0 flex z-40 pointer-events-none"
  >
    <Stairs @done="done = true" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Stairs from "./Stairs.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const done = ref(false);

watch(route, (val) => {
  if (done) done.value = false;
});
</script>

<style lang="scss" scoped></style>
