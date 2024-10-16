<template>
  <div class="h-full">
    <div class="container mx-auto h-full">
      <div
        class="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24"
      >
        <div class="text-center xl:text-left order-2 xl:order-none">
          <span class="text-xl">Software Developer</span>
          <h1 class="h1 mb-6">
            Hello, I'm<br />
            <span class="text-accent">Immanuel Dickson</span>
          </h1>
          <p class="max-w-[500px] mb-9 text-white/80">
            As a passionate software developer, I specialize in crafting
            efficient, scalable applications using modern technologies like
            Flutter and VueJS.
          </p>
          <div class="flex flex-col items-center xl:flex-row gap-8">
            <Button
              variant="outline"
              size="lg"
              class="gap-2 uppercase flex items-center"
            >
              <span>Download CV</span>
              <div class="text-xl">
                <i class="fa-solid fa-cloud-arrow-down"></i>
              </div>
            </Button>
            <div class="mb-8 xl:mb-0">
              <Socials
                :container-styles="'flex gap-6'"
                :icon-styles="'w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-[500] '"
              />
            </div>
          </div>
        </div>
        <div class="order-1 xl:order-none mb-10 xl:mb-10">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </div>
</template>
<script setup>
import Button from "@/components/ui/button/Button.vue";
import Socials from "@/components/Socials.vue";
import Photo from "@/components/Photo.vue";
import Stats from "@/components/Stats.vue";
</script>
