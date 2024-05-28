<template>
  <NuxtLink class="relative" :to="`/product/${id}`">
    <el-skeleton :loading="loading">
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>

      <template #default>
        <AppDiscountPercentTile
          :price="price"
          :discount="discount"
          class="absolute top-2 right-2"
        />
        <div>
          <img
            :src="$imgUrl(imgs[0].attributes.url)"
            :alt="name"
            loading="lazy"
          />
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
          <span v-else class="font-semibold text-sm">{{
            $currency(price)
          }}</span>
        </div>
      </template>
    </el-skeleton>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ProductReviewsSummary, ImageObject } from "@/types/types";

interface Props {
  id: string | number;
  name: string;
  price: number;
  discount: number | null;
  imgs: ImageObject[];
  reviews: ProductReviewsSummary | null;
  loading: boolean;
}

const { $currency, $imgUrl } = useNuxtApp();

defineProps<Props>();
</script>
