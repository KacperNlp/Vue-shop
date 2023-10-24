<template>
    <div>
        <section v-if="isAnyProductInCart">
            <AppProductCard v-for="product in products" :id="product.id" :key="product.id" card-type="cart" />
        </section>
        <section v-else>
            <p>You don't have any product :/</p>
        </section>
        <AppButton v-if="isAnyProductInCart" @click.native="nextStep">Next</AppButton>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import cartStepsHandle from '~/mixins/cartStepsHandle'

export default defineComponent({
    mixins: [cartStepsHandle],

    computed: {
        ...mapGetters({
            products: 'cart/getProducts',
        }),

        isAnyProductInCart() {
            return this.products.length
        },
    },
})
</script>
