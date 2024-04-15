<template>
  <AppSectionBox>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <AppImgTile
        v-for="category in dataExample"
        :key="category.categoryName"
        :link="category.link"
        :text="category.categoryName"
        :imgUrl="category.imgUrl"
      />
    </div>
  </AppSectionBox>
</template>

<script setup lang="ts">
const dataExample = [
  {
    categoryName: "Example",
    link: "/category/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
  {
    categoryName: "Example",
    link: "/category/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
  {
    categoryName: "Example",
    link: "/category/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
  {
    categoryName: "Example",
    link: "/category/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
  {
    categoryName: "Example",
    link: "/category/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
  {
    categoryName: "Example",
    link: "/category/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
];
</script>
