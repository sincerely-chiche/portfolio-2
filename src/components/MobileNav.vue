<template>
  <Sheet>
    <SheetTrigger class="flex justify-center items-center">
      <div class="text-accent text-[32px]">
        <i class="fa-solid fa-burger"></i>
      </div>
    </SheetTrigger>
    <SheetContent>
      <div class="mt-32 mb-40 text-center text-2xl">
        <router-link to="/">
          <h1 class="text-4xl font-semibold">
            Immanuel<span class="text-accent">.</span>
          </h1>
        </router-link>
      </div>
      <nav class="flex flex-col items-center justify-center gap-8">
        <router-link
          v-for="link in links"
          :to="link.path"
          :key="link.path"
          :class="` ${
            $route.path === link.path && 'text-accent border-b-2 border-accent'
          } text-xl capitalize hover:text-accent transition-all`"
        >
          {{ link.name }}
        </router-link>
      </nav>
    </SheetContent>
  </Sheet>
</template>

<script setup>
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { links } from "@/utils/links";
</script>

<style lang="scss" scoped></style>
