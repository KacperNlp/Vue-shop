<template>
    <NuxtLink :to="`/product/${id}`">
        <div>
            <img :src="img" :alt="name" loading="lazy">
        </div>
        <div class="mt-3">
            <div class="text-xs">Review placeholder</div>
            <h3 class="font-light mb-2">{{ name }}</h3>
            <div v-if="discount">
                <span class="text-gray-400 line-through font-normal mr-2">{{ price }}</span>
                <span class="font-semibold text-sm">{{ discount }}</span>
            </div>
            <span v-else class="font-semibold text-sm">{{ price }}</span>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
    id: string,
    name: string,
    price: number,
    discount: number | null,
    img: string
}

defineProps<Props>();
</script>