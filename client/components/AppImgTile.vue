<template>
  <NuxtLink
    :to="link"
    class="relative snap-mandatory snap-x w-full aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden"
  >
    <img
      :src="imgUrl"
      :alt="`Category ${text}`"
      class="absolute object-cover object-center h-full w-full"
    />
    <div
      class="relative w-full h-full bg-gray-700/50 hover:bg-gray-700/70 z-10 duration-200"
    >
      <span
        class="absolute bottom-4 w-full inline-block text-center z-10 uppercase font-semibold text-white"
        >{{ text }}</span
      >
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  link: string;
  text: string;
  imgUrl: string;
}

defineProps<Props>();
</script>
