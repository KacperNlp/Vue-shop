<template>
    <AppNavLink link="/cart" class="relative ml-auto"
        >Cart<span
            v-if="isAnyProductInCart"
            class="absolute top-[-4px] right-[-16px] flex items-center justify-center w-5 h-5 text-[10px] bg-green-app-600/80 text-primary rounded-lg"
            >{{ numberOfProducts }}</span
        ></AppNavLink
    >
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
    computed: {
        ...mapGetters({
            numberOfProducts: 'cart/getNumberOfProductsInCart',
        }),

        isAnyProductInCart(): boolean {
            return this.numberOfProducts > 0
        },
    },
})
</script>
