<template>
    <div class="p-8 border hover:border-emerald-600 duration-200">
        <nuxt-link :to="`/product/${id}`">
            <img src="~/assets/product.jpg" :alt="product.name" class="w-full" />
        </nuxt-link>
        <p class="text-sm md:text-base my-2 font-semibold">{{ product.name }}</p>
        <AppPrice
            v-if="isProductSet"
            :price="product.price"
            :promotionalPrice="product.promotionalPrice"
            class="mb-4"
        ></AppPrice>
        <AppButton @click.native="() => addToCart(id)" class="mt-2 w-full">Add to cart</AppButton>
    </div>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { defineComponent } from 'vue'
import { Product } from '~/types'

export default defineComponent({
    data() {
        return {
            product: {} as Product,
            isProductSet: false,
        }
    },

    props: {
        id: {
            type: String,
            required: true,
        },
    },

    watch: {
        product(newValue) {
            if (!!newValue.price && !!newValue.promotionalPrice) {
                this.isProductSet = true
            }
        },
    },

    computed: {
        ...mapGetters({
            getProductById: 'shop/getProductById',
        }),
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
