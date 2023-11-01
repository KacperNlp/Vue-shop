<template>
    <tr>
        <td class="table-td flex items-center">
            <nuxt-link :to="`/product/${product.id}`">
                <img src="~/assets/product.jpg" :alt="product.name" class="w-full max-w-[100px]" />
            </nuxt-link>
            <p class="ml-4 text-sm md:text-base font-semibold">{{ product.name }}</p>
        </td>
        <td class="table-td">
            <AppQuantityInput :id="id" ></AppQuantityInput>
        </td>
        <td class="table-td">
            <AppPrice :price="product.price" :promotionalPrice="product.promotionalPrice" class="justify-center"></AppPrice>
        </td>
        <td class="table-td">
            <AppPrice :price="getSummaryPrice" :promotionalPrice="getSummaryPromotionalPrice" class="justify-center"></AppPrice>
        </td>
        <td class="table-td">
            <AppCloseIcon @click.native="() => removeItem(product.id)"></AppCloseIcon>
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
            getProductById: 'cart/getProductById',
        }),

        getSummaryPrice(): number {
            const { price, stock } = this.product;
            return price * stock;
        },

        getSummaryPromotionalPrice(): number {
            const { promotionalPrice, stock } = this.product;
            return promotionalPrice * stock;
        }
    },

    methods: {
        ...mapActions({
            removeItem: 'cart/removeItemFromCart',
        }),
    },

    beforeMount() {
        this.product = this.getProductById(this.id)
    },
})
</script>
