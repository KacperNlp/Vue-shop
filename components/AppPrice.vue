<template>
    <div>
        <p>{{ productPrice }}</p>
        <p v-if="hasPromotion">{{ productPromotedPrice }}</p>
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
