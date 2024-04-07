<template>
    <NuxtLink class="relative" :to="`/product/${id}`">
        <AppDiscountPercentTile v-if="discount" :price="price" :discount="discount" class="absolute top-2 right-2" />
        <div>
            <img :src="img" :alt="name" loading="lazy">
        </div>
        <div class="mt-3">
            <AppReviewStars :numberOfReviews="reviews.numberOfReviews" :review="reviews.review" />
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

const props = defineProps<Props>();

const discountPercent = computed(() => {
    if (!props.discount) return;

    const priceDifference = props.price - props.discount;
    const percent = priceDifference / props.price * 100;

    return `-${percent}%`
})
</script>