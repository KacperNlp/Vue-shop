<template>
    <div class="absolute top-0 left-0 w-screen h-screen bg-gray-800/60">
        <div
            class="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-slate-200 px-8 md:px-12 py-12 md:py-16 rounded-lg shadow-xl"
        >
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
