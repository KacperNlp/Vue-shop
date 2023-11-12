<template>
    <AppSection>
        <AppProductDetails
            productImg="~/assets/product.jpg"
            :productId="product.id"
            :productName="product.name"
            :productPrice="product.price"
            :productPromotionalPrice="product.promotionalPrice"
            :stock="product.stock"
        ></AppProductDetails>
    </AppSection>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { Product } from '~/types/index'

export default Vue.extend({
    data() {
        return {
            product: {} as Product,
        }
    },

    created() {
        this.product = this.getProduct()(this.$route.params.id)
    },

    methods: {
        ...mapGetters({
            getProduct: 'shop/getProductById',
        }),
    },
})
</script>
