<template lang="">
    <input v-model="stock" type="number" class="border border-zinc-400 focus:outline-green-app-500 text-center">
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
    data() {
        return {
            stock: 0
        }
    },

    props: {
        id: {
            type: String,
            required: true,
        }
    },

    watch: {
        stock(newValueAsSting) {
            const newValue = Number(newValueAsSting)
            const itemIdAndUpdatedStock = { id: this.id, newValue }
            this.changeItemStock(itemIdAndUpdatedStock);
        }
    },

    computed: {
        ...mapGetters({
            getProductStock: 'cart/getProductStock'
        })
    },

    methods: {
        ...mapActions({
            changeItemStock: 'cart/changeItemStock'
        })
    },

    beforeMount() {
        this.stock = this.getProductStock(this.id)
    }
})
</script>