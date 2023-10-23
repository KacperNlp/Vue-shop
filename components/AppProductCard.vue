<template lang="">
    <div class="p-4 border">
        <p>{{ product.name }}</p>
        <p>{{ productPrice }}</p>
        <p v-if="hasPromotion">{{ productPromotedPrice }}</p>
        <AppButton @click.native="() => addToCart(product.id)" class="mt-2">Add to cart</AppButton>
    </div>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { Product } from '~/types'
import { useCurrencyConverter } from '~/composables/useCurrencyConverter'

export default {
    data: () => {
        return {
            product: {} as Product,
        }
    },

    props: {
        id: {
            type: String,
            required: true,
        },
    },

    computed: {
        ...mapGetters({
            getProductById: 'shop/getProductById',
        }),

        hasPromotion: function () {
            const { price, promotion } = this.product
            return price > promotion
        },

        productPrice: function () {
            return useCurrencyConverter(this.product.price, 'en-DE', 'EUR')
        },

        productPromotedPrice: function () {
            return useCurrencyConverter(this.product.promotion, 'en-DE', 'EUR')
        },
    },

    methods: {
        ...mapActions({
            addToCart: 'cart/addProduct',
        }),
    },

    beforeMount() {
        this.product = this.getProductById(this.id)
    },
}
</script>
