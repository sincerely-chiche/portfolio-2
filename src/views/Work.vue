<template>
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
    class="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div class="container mx-auto">
      <div class="flex flex-col xl:flex-row xl:gap-[30px]">
        <div
          class="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"
        >
          <div class="flex flex-col gap-[30px] h-[50%]">
            <div
              class="text-8xl leading-none font-extrabold text-transparent text-outline"
            >
              {{ project.num }}
            </div>
            <h2
              class="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize"
            >
              {{ project.category }}
            </h2>

            <p class="text-white/60">{{ project.description }}</p>

            <ul class="flex gap-4">
              <li
                v-for="(item, index) in project.stack"
                :key="index"
                class="text-xl text-accent"
              >
                {{ item.name
                }}{{ index !== project.stack.length - 1 ? "," : "" }}
              </li>
            </ul>
            <div class="border border-white/20"></div>

            <div class="flex gap-4">
              <a :href="project.live">
                <TooltipProvider :delay-duration="100">
                  <Tooltip>
                    <TooltipTrigger
                      class="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center group"
                    >
                      <div class="text-white text-3xl group-hover:text-accent">
                        <i class="fa-solid fa-square-up-right"></i>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>
              <a :href="project.github">
                <TooltipProvider :delay-duration="100">
                  <Tooltip>
                    <TooltipTrigger
                      class="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center group"
                    >
                      <div class="text-white text-3xl group-hover:text-accent">
                        <i class="fa-brands fa-github"></i>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>
            </div>
          </div>
        </div>
        <div class="w-full xl:w-[50%]">
          <Swiper
            :space-between="30"
            :slides-per-view="1"
            @slide-change="handleSlideChange"
            class="xl:h-[520px] mb-12"
          >
            <SwiperSlide
              v-for="(item, index) in projects"
              :key="index"
              class="w-full rounded-md"
            >
              <div
                class="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-md overflow-hidden"
              >
                <div
                  class="absolute top-0 bottom-0 w-full h-full z-10 bg-black/10"
                ></div>
                <div class="h-full w-full relative rounded-md">
                  <img
                    :src="project.image"
                    :alt="project.category"
                    class="object-cover w-full h-full rounded-md"
                  />
                </div>
              </div>
            </SwiperSlide>

            <WorkSliderBtns
              btnStyles="bg-accent rounded-md hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
            />
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns.vue";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure enim natus beatae explicabo quaerat maxime!",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure enim natus beatae explicabo quaerat maxime!",
    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure enim natus beatae explicabo quaerat maxime!",
    stack: [{ name: "Vue JS" }, { name: "Tailwind Css" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
];

const project = ref(projects[0]);

function handleSlideChange(swiper) {
  const currIndex = swiper.activeIndex;

  project.value = projects[currIndex];
}
</script>

<style lang="scss" scoped></style>
