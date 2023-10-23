<template>
    <div>
        <div class="flex gap-4">
            <AppLoadingGif />
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
