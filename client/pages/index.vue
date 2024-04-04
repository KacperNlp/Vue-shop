<template>
  <div>
    <AppBanner
      imgUrl="imgs/hero-4.jpg"
      headline="Just landed."
      subHeadline="The New Year Collection"
      description="Our latest collection is here. Discover the latest trends and styles for the new year."
      btnText="Shop now"
    />
    <AppSectionBox>
      <AppBrandsList />
    </AppSectionBox>
    <AppSectionBox>
      <AppHeadline :headlineType="HeadlinesTypes.H2"
        >Shop by Category</AppHeadline
      >
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <AppImgTile
          v-for="category in dataExample"
          :key="category.categoryName"
          :link="category.link"
          :text="category.categoryName"
          :imgUrl="category.imgUrl"
        />
      </div>
    </AppSectionBox>
  </div>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";

const dataExample = [
  {
    categoryName: "Example",
    link: "/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
  {
    categoryName: "Example",
    link: "/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
  {
    categoryName: "Example",
    link: "/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
  {
    categoryName: "Example",
    link: "/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
  {
    categoryName: "Example",
    link: "/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
  {
    categoryName: "Example",
    link: "/shoes",
    imgUrl: "/imgs/hero-4.jpg",
  },
];
</script>
