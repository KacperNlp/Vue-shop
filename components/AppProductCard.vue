<template lang="">
    <div class="p-4 border">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
        <p v-if="hasPromotion">{{ product.promotion }}</p>
    </div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex'
import { Product } from '~/types'

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
    },

    beforeMount() {
        this.product = this.getProductById(this.id)
    },
}
</script>
