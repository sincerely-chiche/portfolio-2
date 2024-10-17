<template>
  <div class="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div class="container mx-auto">
      <div
        v-motion
        :initial="{
          opacity: 0,
        }"
        :enter="{
          opacity: 1,
          transition: {
            delay: 2000,
            duration: 400,
            ease: 'easeIn',
          },
        }"
        class="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="flex-1 flex flex-col justify-center gap-6 group cursor-pointer"
        >
          <div class="w-full flex justify-between items-center">
            <div
              class="transition-all duration-500 text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover"
            >
              {{ service.num }}
            </div>
            <a
              :href="service.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-[70px] h-[70px] text-primary text-3xl rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
            >
              <i class="fa-solid fa-arrow-trend-down"></i>
            </a>
          </div>
          <h2
            class="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
          >
            {{ service.title }}
          </h2>

          <p class="text-white/60">{{ service.description }}</p>

          <div class="border-b border-white/20 w-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = [
  {
    num: "01",
    title: "Web Development",
    href: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, omnis! Fugit voluptatum inventore, sed possimus porro doloribus adipisci quos animi.",
  },
  {
    num: "02",
    title: "Mobile Development",
    href: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, omnis! Fugit voluptatum inventore, sed possimus porro doloribus adipisci quos animi.",
  },
  {
    num: "03",
    title: "Desktop Development",
    href: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, omnis! Fugit voluptatum inventore, sed possimus porro doloribus adipisci quos animi.",
  },
  {
    num: "04",
    title: "SQL Management",
    href: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, omnis! Fugit voluptatum inventore, sed possimus porro doloribus adipisci quos animi.",
  },
];
</script>

<style lang="scss" scoped></style>
