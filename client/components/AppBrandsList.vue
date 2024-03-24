<template>
  <ul
    class="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center lg:justify-between"
  >
    <li v-for="(brand, id) in brands" :key="id">
      <AppBrandLogo :imgSrc="brand.logo" :imgAlt="brand.name" />
    </li>
  </ul>
</template>
<script setup lang="ts">
const brands = ref([
  {
    logo: "imgs/brand1.svg",
    name: "Brand 1",
  },
  {
    logo: "imgs/brand2.svg",
    name: "Brand 2",
  },
  {
    logo: "imgs/brand2.svg",
    name: "Brand 2",
  },
  {
    logo: "imgs/brand2.svg",
    name: "Brand 2",
  },
  {
    logo: "imgs/brand1.svg",
    name: "Brand 1",
  },
  {
    logo: "imgs/brand2.svg",
    name: "Brand 2",
  },
  {
    logo: "imgs/brand1.svg",
    name: "Brand 1",
  },
]);
</script>
