<template>
    <select name="filter" id="filter">
        <option v-for="filter in filters" :key="filter.id" :value="filter.id">{{ filter.name }}</option>
    </select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useFilters from '~/composables/useFilters'

export default defineComponent({
    data: () => {
        return {
            filters: useFilters,
        }
    },
})
</script>
