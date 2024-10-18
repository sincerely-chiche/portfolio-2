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
    class="min-h-[80vh] py-12 xl:py-0"
  >
    <div class="container mx-auto">
      <div class="flex flex-col xl:flex-row gap-[30px]">
        <div class="xl:w-[54%] order-2 xl:order-none">
          <form
            action=""
            class="flex flex-col gap-6 p-10 bg-primaryLight rounded-xl"
          >
            <h3 class="text-4xl text-accent">Let's work together</h3>
            <p class="text-white/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              consequatur totam tempora.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="First name" />
              <Input type="text" placeholder="Last name" />
              <Input type="email" placeholder="Email Address" />
              <Input type="phone" placeholder="Phone number" />
            </div>

            <Select>
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="web">Web Development</SelectItem>
                  <SelectItem value="mobile">Mobile Development</SelectItem>
                  <SelectItem value="desktop">Desktop Development</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea class="h-[200px]" placeholder="Type your message here." />

            <Button size="md" class="max-w-40">Send message</Button>
          </form>
        </div>

        <div
          class="info flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
        >
          <ul class="flex flex-col gap-10">
            <li
              v-for="(item, index) in info"
              :key="index"
              class="flex items-center gap-6"
            >
              <div
                class="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-primaryLight flex items-center justify-center text-[28px] text-accent rounded-md"
              >
                <i :class="item.icon"></i>
              </div>

              <div class="flex-1">
                <p class="text-white/60">{{ item.title }}</p>
                <h3 class="text-xl">{{ item.description }}</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import Textarea from "@/components/ui/textarea/Textarea.vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectValue,
  SelectTrigger,
  SelectItem,
} from "@/components/ui/select";

const info = [
  {
    icon: "fa-solid fa-phone",
    title: "Phone",
    description: "(+234) 703 781 4184",
  },
  {
    icon: "fa-solid fa-at",
    title: "Email",
    description: "immicks@gmail.com",
  },
  {
    icon: "fa-solid fa-map-pin",
    title: "Address",
    description: "Yenagoa, Bayelsa state, Nigeria.",
  },
];
</script>

<style lang="scss" scoped></style>
