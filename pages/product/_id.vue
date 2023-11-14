<template>
    <AppSection>
        <AppModal v-if="isProductOutOfStock">
            <div class="text-center">
                <p class="mb-2">Product is out of stock :/</p>
                <router-link to="/" class="text-sm text-gray-600 hover:text-green-app-600 duration-200"
                    ><font-awesome-icon :icon="['fas', 'arrow-left']" /> Go back to home</router-link
                >
            </div>
        </AppModal>
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

    computed: {
        isProductOutOfStock() {
            return !this.product.stock
        },
    },

    methods: {
        ...mapGetters({
            getProduct: 'shop/getProductById',
        }),
    },
})
</script>
