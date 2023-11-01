<template>
    <div>
        <AppSection class="mb-4 md:mb-6">
            <AppPLPFilters></AppPLPFilters>
        </AppSection>
        <AppSection>
            <AppProductsListening :products="getProducts"></AppProductsListening>
        </AppSection>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
    name: 'ShopPage',
    computed: {
        ...mapGetters({
            getProducts: 'shop/getAllProducts',
        }),
    },
})
</script>
