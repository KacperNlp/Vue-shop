<template>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-4 2xl:gap-8">
        <AppProductCard v-for="product in products" :key="product.id" :id="product.id"></AppProductCard>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '~/types/index'

export default defineComponent({
    props: {
        products: {
            type: Array as PropType<Product[]>,
            required: true,
        },
    },
})
</script>
