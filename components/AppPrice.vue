<template>
    <div class="flex items-end gap-2">
        <p v-if="hasPromotion" class="text-rose-500 font-bold text-base md:text-lg">{{ productPromotedPrice }}</p>
        <p v-if="hasPromotion" class="text-zinc-400 line-through">{{ productPrice }}</p>
        <p v-else class="text-zinc-800 font-semibold text-base md:text-lg">{{ productPrice }}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useCurrencyConverter } from '~/composables/useCurrencyConverter'

export default defineComponent({
    props: {
        price: {
            type: Number,
            required: true,
        },
        promotionalPrice: {
            type: Number,
            required: true,
        },
    },

    computed: {
        hasPromotion: function (): boolean {
            return this.price > this.promotionalPrice
        },

        productPrice: function (): string {
            return useCurrencyConverter(this.price, 'en-DE', 'EUR')
        },

        productPromotedPrice: function (): string {
            return useCurrencyConverter(this.promotionalPrice, 'en-DE', 'EUR')
        },
    },
})
</script>
