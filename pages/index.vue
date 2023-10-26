<template>
    <div>
        <AppSlider :products="getPromotedProducts" sliderHeadline="Discounted Products:"></AppSlider>
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
