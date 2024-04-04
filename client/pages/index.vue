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
    <AppSectionBox>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <li
          v-for="{ id, headline, text, img } in dataOurAdvantages"
          :key="id"
          class="h-full"
        >
          <AppCard class="flex gap-8 lg:gap-4 xl:gap-8 h-full p-8 items-center">
            <div>
              <img
                :src="img"
                :alt="headline"
                loading="lazy"
                width="60"
                height="60"
                class="min-w-[60px]"
              />
            </div>
            <div>
              <AppHeadline :headlineType="HeadlinesTypes.H3" class="mb-0">{{
                headline
              }}</AppHeadline>
              <span class="text-sm">{{ text }}</span>
            </div>
          </AppCard>
        </li>
      </ul>
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

const dataOurAdvantages = [
  {
    id: 1,
    img: "/imgs/homeIcons/box.svg",
    headline: "Free Shipping",
    text: "Free shipping on order over €50",
  },
  {
    id: 2,
    img: "/imgs/homeIcons/moneyback.svg",
    headline: "Peace of Mind",
    text: "30 days money back guarantee",
  },
  {
    id: 3,
    img: "/imgs/homeIcons/secure.svg",
    headline: "100% Payment Secure",
    text: "Your payment are safe with us.",
  },
  {
    id: 4,
    img: "/imgs/homeIcons/support.svg",
    headline: "Support 24/7",
    text: "24/7 Online support",
  },
];
</script>
