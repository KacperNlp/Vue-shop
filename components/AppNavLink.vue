<template>
    <nuxt-link :to="link" class="text-sm text-zinc-500 hover:text-lime-600 duration-300"><slot></slot></nuxt-link>
</template>

<style>
.nuxt-link-exact-active {
    color: rgba(101, 163, 13);
}
</style>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        link: {
            type: String,
            required: true,
        },
    },
})
</script>
