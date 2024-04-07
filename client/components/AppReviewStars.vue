<template>
    <div class="flex gap-[2px] mb-2">
        <AppStarIcon v-for="star in 5" :key="star" :isFilled="star <= review" :fillValue="review - star" />
        <span class="text-xs ml-2">({{ numberOfReviews }})</span>
    </div>
</template>

<script setup lang="ts">
interface Props {
    numberOfReviews: number,
    review: number
}

defineProps<Props>();
</script>