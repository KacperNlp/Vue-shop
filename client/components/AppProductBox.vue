<template>
  <NuxtLink class="relative" :to="`/product/${id}`">
    <AppDiscountPercentTile
      :price="price"
      :discount="discount"
      class="absolute top-2 right-2"
    />
    <div>
      <img :src="$imgUrl(imgs[0].attributes.url)" :alt="name" loading="lazy" />
    </div>
    <div class="mt-3">
      <AppReviewStars
        v-if="!!reviews"
        :numberOfReviews="reviews.numberOfReviews"
        :review="reviews.review"
      />
      <h3 class="font-light mb-2">{{ name }}</h3>
      <div v-if="discount">
        <span class="text-gray-400 line-through font-normal mr-2">{{
          $currency(price)
        }}</span>
        <span class="font-semibold text-sm">{{ $currency(discount) }}</span>
      </div>
      <span v-else class="font-semibold text-sm">{{ $currency(price) }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ProductReviewsSummary, ImageObject } from "@/types/types";

interface Props {
  id: string;
  name: string;
  price: number;
  discount: number | null;
  imgs: ImageObject[];
  reviews: ProductReviewsSummary | null;
}

const { $currency, $imgUrl } = useNuxtApp();

defineProps<Props>();
</script>
