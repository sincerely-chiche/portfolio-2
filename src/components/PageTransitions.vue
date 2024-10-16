<template>
  <div>
    <div
      v-motion
      :initial="{
        opacity: 1,
      }"
      :enter="{
        opacity: 0,
        transition: {
          delay: 1000,
          duration: 400,
          ease: 'easeInOut',
        },
      }"
      :key="$route.path"
      class="bg-primary w-screen h-screen fixed top-0 pointer-events-none"
    ></div>
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
