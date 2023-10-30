<template>
    <tr>
        <td class="table-data">
            <nuxt-link :to="`/product/${product.id}`">
                <img src="~/assets/product.jpg" :alt="product.name" class="w-full max-w-[100px]" />
            </nuxt-link>
        </td>
        <td>
            <p class="text-sm md:text-base my-2 font-semibold">{{ product.name }}</p>
        </td>
        <td>
            <AppPrice :price="product.price" :promotionalPrice="product.promotionalPrice" class="mb-4"></AppPrice>
        </td>
        <td>
            <AppButton @click.native="() => addToCart(product.id)" class="mt-2 w-full">X</AppButton>
        </td>
    </tr>
</template>
<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { defineComponent } from 'vue'
import { Product } from '~/types'

export default defineComponent({
    data() {
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
