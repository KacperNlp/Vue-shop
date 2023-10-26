<template>
    <div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-4 2xl:gap-8">
            <AppProductCard v-for="product in getPromotedProducts" :key="product.id" :id="product.id"></AppProductCard>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
    name: 'IndexPage',
    computed: {
        ...mapGetters({
            getPromotedProducts: 'shop/getPromotedProducts',
        }),
    },
})
</script>
