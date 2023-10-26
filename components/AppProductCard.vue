<template lang="">
    <div class="p-8 border hover:border-emerald-600 duration-200">
        <nuxt-link :to="`/product/${product.id}`">
            <img src="~/assets/product.jpg" :alt="product.name" class="w-full" />
        </nuxt-link>
        <p class="text-sm md:text-base my-2 font-semibold">{{ product.name }}</p>
        <AppPrice :price="product.price" :promotionalPrice="product.promotionalPrice" class="mb-4"></AppPrice>
        <AppButton @click.native="() => addToCart(product.id)" class="mt-2 w-full">Add to cart</AppButton>
    </div>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { defineComponent, PropType } from 'vue'
import { Product } from '~/types'

export default defineComponent({
    data: () => {
        return {
            product: Object as PropType<Product>,
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
