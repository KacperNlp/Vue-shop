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
import { defineComponent } from 'vue'
import { Product } from '~/types'
import { useCurrencyConverter } from '~/composables/useCurrencyConverter'

export default defineComponent({
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
        cardType: {
            validator: function (value) {
                return value === 'normal' || value === 'cart'
            },
            default: 'normal',
        },
    },

    computed: {
        ...mapGetters({
            getProductById: 'shop/getProductById',
        }),

        hasPromotion: function (): boolean {
            const { price, promotionalPrice } = this.product
            return price > promotionalPrice
        },

        productPrice: function (): string {
            return useCurrencyConverter(this.product.price, 'en-DE', 'EUR')
        },

        productPromotedPrice: function (): string {
            return useCurrencyConverter(this.product.promotionalPrice, 'en-DE', 'EUR')
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
})
</script>
