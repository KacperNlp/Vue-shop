<template lang="">
    <div class="p-4 border">
        <p>{{ id }}</p>
    </div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex';

export default {
    data: () => {
        return {
            product: {}
        }
    },

    props: {
        id: {
            type: String,
            required: true
        }
    },

    computed: {
        ...mapGetters({
            getProductById: 'shop/getProductById'
        })
    },

    beforeMount() {
        this.product = this.getProductById(this.id);
    },
}
</script>