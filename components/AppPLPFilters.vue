<template>
    <select name="filter" id="filter" v-model="currentFilter">
        <option v-for="filter in filters" :key="filter.id" :value="filter.id">{{ filter.name }}</option>
    </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useFilters from '~/composables/useFilters'
import { mapGetters } from 'vuex'

export default defineComponent({
    data: () => {
        return {
            filters: useFilters,
            currentFilter: '',
        }
    },

    computed: {
        ...mapGetters({
            getCurrentFilter: 'shop/getCurrentFilter',
        }),
    },

    watch: {
        currentFilter() {
            this.$store.dispatch('shop/changeFilter', this.currentFilter)
        },
    },

    beforeMount() {
        this.currentFilter = this.getCurrentFilter
    },
})
</script>
