<template lang="">
    <div>
        <AppProductGallery :img="productImg" :alt="productName"></AppProductGallery>
        <div>
            <h1>{{ productName }}</h1>
            <AppPrice :price="productPrice" :promotionalPrice="productPromotionalPrice"></AppPrice>
            <p>Stock: {{ stock }}</p>
            <AppInput
                :maxValue="stock"
                :inputId="productId"
                :inputName="productId"
                :minValue="0"
                initValue="0"
                v-model="value"
                inputType="number"
                labelText="Set how much products you want to add to cart:"
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
