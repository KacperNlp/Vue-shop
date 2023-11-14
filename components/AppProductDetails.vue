<template lang="">
    <div class="flex flex-col lg:flex-row gap-4">
        <AppProductGallery class="w-1/2" :img="productImg" :alt="productName"> </AppProductGallery>
        <div>
            <h1 class="text-lg md:text-xl lg:text-2xl mb-4">{{ productName }}</h1>
            <AppPrice :price="productPrice" :promotionalPrice="productPromotionalPrice" class="mb-4"></AppPrice>
            <p class="mb-4 text-sm">Stock: {{ stock }}</p>
            <AppInput
                :maxValue="stock"
                :inputId="productId"
                :inputName="productId"
                :minValue="0"
                initValue="0"
                v-model="value"
                inputType="number"
                labelText="Set how much products you want to add to cart:"
                errorMessage="You cannot set more products than in stock!"
                class="mb-4"
            ></AppInput>
            <AppButton @click.native="addProductsToCart">Add to cart</AppButton>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
    data() {
        return {
            value: 0,
        }
    },

    props: {
        productId: {
            type: String,
            required: true,
        },
        productImg: {
            type: String,
            required: true,
        },
        productName: {
            type: String,
            required: true,
        },
        productPrice: {
            type: Number,
            required: true,
        },
        productPromotionalPrice: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
    },

    methods: {
        ...mapActions({
            addProduct: 'cart/addProduct',
        }),

        addProductsToCart() {
            const product = { id: this.productId, stock: this.value }
            this.value = 0
            this.addProduct(product)
        },
    },
})
</script>
