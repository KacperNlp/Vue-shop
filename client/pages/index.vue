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
      <AppHeadline :headlineType="HeadlinesTypes.H2">Shop by Category</AppHeadline>
      <AppImgTile v-for="category in dataExample" :key="category.categoryName" :link="category.link" :text="category.text" :imgUrl="category.imgUrl" />
    </AppSectionBox>
  </div>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from '@/enums/enums';

const dataExample = [
  {
    categoryName: 'Example',
    link: '/shoes',
    imgUrl: 'example.jpg'
  },
    {
    categoryName: 'Example',
    link: '/shoes',
    imgUrl: 'example.jpg'
  },
  {
    categoryName: 'Example',
    link: '/shoes',
    imgUrl: 'example.jpg'
  },
  {
    categoryName: 'Example',
    link: '/shoes',
    imgUrl: 'example.jpg'
  }
]
</script>
