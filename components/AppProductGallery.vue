<template>
    <img :src="img" :alt="alt" />
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        img: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
    },
})
</script>
