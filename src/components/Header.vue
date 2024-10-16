<template>
  <header class="py-8 xl:py-12 text-white">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/">
        <h1 class="text-4xl font-semibold">
          Immanuel<span class="text-accent">.</span>
        </h1>
      </router-link>

      <!-- Desktop Nav & Hire Button -->
      <div class="hidden xl:flex items-center gap-8">
        <NavBar />
        <router-link to="/contact">
          <Button> Hire me </Button>
        </router-link>
      </div>

      <!-- Mobile Nav -->
      <div class="xl:hidden">
        <MobileNav />
      </div>
    </div>
  </header>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import MobileNav from "./MobileNav.vue";
import Button from "./ui/button/Button.vue";
</script>

<style lang="scss" scoped></style>
