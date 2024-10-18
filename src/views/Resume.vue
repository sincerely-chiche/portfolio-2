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
      <Tabs
        :default-value="'experience'"
        class="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList
          class="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
        >
          <TabsTrigger :value="'experience'"> Experience </TabsTrigger>
          <TabsTrigger :value="'education'"> Education </TabsTrigger>
          <TabsTrigger :value="'skills'"> Skills </TabsTrigger>
          <TabsTrigger :value="'about'"> About me </TabsTrigger>
        </TabsList>

        <div class="min-h-[70vh] w-full">
          <TabsContent value="experience" class="w-full h-full">
            <div class="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 class="text-4xl font-bold">{{ experience.title }}</h3>
              <p class="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {{ experience.description }}
              </p>
              <ScrollArea class="h-[400px]">
                <ul class="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  <li
                    v-for="(item, index) in experience.items"
                    :key="index"
                    class="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1"
                  >
                    <span class="text-accent">{{ item.duration }}</span>
                    <h3
                      class="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                    >
                      {{ item.position }}
                    </h3>
                    <div class="flex items-center gap-3">
                      <span
                        class="w-[6px] bg-accent h-[6px] rounded-full"
                      ></span>
                      <p class="text-white/60">{{ item.company }}</p>
                    </div>
                  </li>
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" class="w-full h-full">
            <div class="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 class="text-4xl font-bold">{{ education.title }}</h3>
              <p class="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {{ education.description }}
              </p>
              <ScrollArea class="h-[400px]">
                <ul class="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  <li
                    v-for="(item, index) in education.items"
                    :key="index"
                    class="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1"
                  >
                    <span class="text-accent">{{ item.duration }}</span>
                    <h3
                      class="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                    >
                      {{ item.degree }}
                    </h3>
                    <div class="flex items-center gap-3">
                      <span
                        class="w-[6px] bg-accent h-[6px] rounded-full"
                      ></span>
                      <p class="text-white/60">{{ item.institution }}</p>
                    </div>
                  </li>
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" class="w-full h-full">
            <div class="flex flex-col gap-[30px]">
              <div class="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 class="text-4xl font-bold">{{ skills.title }}</h3>
                <p class="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {{ skills.description }}
                </p>
              </div>
              <ul
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4"
              >
                <li v-for="(skill, index) in skills.skillList" :key="index">
                  <TooltipProvider :delay-duration="100">
                    <Tooltip>
                      <TooltipTrigger
                        class="w-full h-[150px] bg-primaryLight rounded-xl flex justify-center items-center group"
                      >
                        <i
                          :class="`${skill.icon} text-6xl group-hover:text-accent transition-all duration-100`"
                        ></i>
                      </TooltipTrigger>
                      <TooltipContent class="capitalize">
                        {{ skill.name }}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent
            value="about"
            class="w-full h-full text-center xl:text-left"
          >
            <div class="flex flex-col gap-[30px]">
              <h3 class="text-4xl font-bold">{{ about.title }}</h3>
              <p class="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {{ about.description }}
              </p>

              <ul
                class="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"
              >
                <li
                  v-for="(item, index) in about.info"
                  :key="index"
                  class="flex items-center justify-center xl:justify-start gap-4"
                >
                  <span class="text-white/60">{{ item.title }}:</span>
                  <span>{{ item.content }}</span>
                </li>
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
const about = {
  title: "About me",
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam vitae? Ipsum incidunt quaerat laudantium fugiat, aut tenetur optio est!",
  info: [
    {
      title: "Name",
      content: "Immanuel Dickson",
    },
    {
      title: "Phone",
      content: "+2347037814184",
    },
    {
      title: "Experience",
      content: "12+ Years",
    },
    {
      title: "Skype",
      content: "+2347037814184",
    },
    {
      title: "Nationality",
      content: "Nigerian",
    },
    {
      title: "Email",
      content: "immicks@gmail.com",
    },
    {
      title: "Freelance",
      content: "Available",
    },
    {
      title: "Languages",
      content: "English",
    },
  ],
};
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam vitae? Ipsum incidunt quaerat laudantium fugiat, aut tenetur optio est!",
  items: [
    {
      company: "NIIT",
      position: "Tutor",
      duration: "2017 - 2018",
    },
    {
      company: "MekioTech Digital",
      position: "Front-End Developer",
      duration: "2019 - Present",
    },
  ],
};
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam vitae? Ipsum incidunt quaerat laudantium fugiat, aut tenetur optio est!",
  items: [
    {
      institution: "NIIT",
      degree: "Professional and Advanced Diploma",
      duration: "2011 - 2014",
    },
    {
      institution: "BlueCrest College",
      degree: "Bsc Information Technology",
      duration: "2014 - 2016",
    },
  ],
};
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, veniam vitae? Ipsum incidunt quaerat laudantium fugiat, aut tenetur optio est!",

  skillList: [
    {
      icon: "fa-brands fa-css3-alt",
      name: "CSS 3",
    },
    {
      icon: "fa-brands fa-html5",
      name: "HTML 5",
    },
    {
      icon: "fa-brands fa-js",
      name: "Javascript",
    },
    {
      icon: "fa-brands fa-node",
      name: "Node Js",
    },
    {
      icon: "fa-brands fa-vuejs",
      name: "Vue JS",
    },
    {
      icon: "fa-brands fa-flutter",
      name: "Flutter",
    },
    {
      icon: "fa-solid fa-wind",
      name: "Tailwind Css",
    },
    {
      icon: "fa-solid fa-table",
      name: "Microsoft Excel",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
</script>

<style lang="scss" scoped></style>
