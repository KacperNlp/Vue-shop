<template>
    <nuxt-link :to="link" class="text-sm text-zinc-500 hover:text-green-app-500 duration-300"><slot></slot></nuxt-link>
</template>

<style>
.nuxt-link-exact-active {
    color: #35c45c;
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
