<template>
  <section class="relative">
    <div class="banner-img-box relative h-[60dvh]">
      <img :src="imgUrl" :alt="headline" class="h-full w-full object-cover" />
    </div>
    <div class="absolute top-0 w-full h-full flex flex-col justify-center">
      <div class="w-full max-w-[1280px] mx-auto px-4 md:px-0">
        <h1 class="text-3xl font-bold">{{ headline }}</h1>
        <h2 class="text-lg font-bold">{{ subHeadline }}</h2>
        <p>{{ description }}</p>
        <AppButton>Shop now</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
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
