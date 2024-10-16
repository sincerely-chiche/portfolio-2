<template>
  <div class="w-full h-full relative">
    <div
      v-motion
      :initial="{
        opacity: 0,
      }"
      :enter="{
        opacity: 1,
        transition: {
          delay: 2500,
          duration: 400,
          ease: 'easeIn',
        },
      }"
    >
      <div class="p-6 mix-blend-lighten absolute">
        <img
          src="/assets/portrait.jpg"
          alt="Portrait"
          class="object-contain rounded-full"
        />
      </div>

      <!-- Circle around Image -->
      <div
        v-motion
        :initial="{
          rotate: 0,
        }"
        :enter="{
          rotate: 180,
          transition: {
            duration: 5000,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          },
        }"
        class="border-4 border-dashed border-accent rounded-full w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
      ></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
