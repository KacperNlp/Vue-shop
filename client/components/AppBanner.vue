<template>
  <section class="relative">
    <div class="banner-img-box relative h-[60dvh]">
      <NuxtImg
        :src="imgUrl"
        :alt="headline"
        class="h-full w-full object-cover"
        format="webp"
        quality="80"
      />
    </div>
    <div class="absolute top-0 w-full h-full flex flex-col justify-center">
      <div class="w-full max-w-[1280px] mx-auto px-8 2xl:px-0">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:mb-2 font-bold"
        >
          {{ headline }}
        </h1>
        <h2 class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-2">
          {{ subHeadline }}
        </h2>
        <p class="mb-4 font-light max-w-xs lg:text-lg">{{ description }}</p>
        <AppButton :btnLink="btnLink">{{ btnText }}</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
export interface Props {
  imgUrl: string;
  headline: string;
  subHeadline: string;
  description: string;
  btnText: string;
  btnLink?: string;
}

defineProps<Props>();
</script>

<style>
.banner-img-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
}

@media (min-width: 768px) {
  .banner-img-box::before {
    content: none;
  }
}
</style>
