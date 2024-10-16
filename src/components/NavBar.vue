<template>
  <nav class="flex gap-8">
    <router-link
      v-for="link in links"
      :to="link.path"
      :key="link.path"
      :class="`${
        link.path === $route.path && 'text-accent border-b-2 border-accent'
      } capitalize font-medium hover:text-accent transition-all`"
    >
      {{ link.name }}
    </router-link>
  </nav>
</template>

<script setup>
import { links } from "@/utils/links";
</script>

<style lang="scss" scoped></style>
