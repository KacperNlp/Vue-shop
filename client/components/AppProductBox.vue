<template>
    <NuxtLink :to="`/product/${id}`">
        <div>
            <img :src="img" :alt="name" loading="lazy">
        </div>
        <div class="mt-3">
            <div class="flex gap-[2px] mb-2">
                <AppStarIcon v-for="star in 5" :key="star" :isFilled="star <= reviews.review" :fillValue="reviews.review - star" />
                <span class="text-xs ml-2">({{ reviews.numberOfReviews }})</span>
            </div>
            <h3 class="font-light mb-2">{{ name }}</h3>
            <div v-if="discount">
                <span class="text-gray-400 line-through font-normal mr-2">{{ $currency(price) }}</span>
                <span class="font-semibold text-sm">{{ $currency(discount) }}</span>
            </div>
            <span v-else class="font-semibold text-sm">{{ $currency(price) }}</span>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { ProductReviewsSummary } from '@/types/types';

interface Props {
    id: string,
    name: string,
    price: number,
    discount: number | null,
    img: string,
    reviews: ProductReviewsSummary
}

const { $currency } = useNuxtApp()

defineProps<Props>();
</script>