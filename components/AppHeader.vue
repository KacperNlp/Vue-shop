<template>
    <div class="text-center bg-zinc-50 px-4 py-2 md:py-4">
        <div class="mx-auto max-w-7xl md:w-9/12">
            <nav class="flex gap-4 w-auto">
                <nuxt-link to="/" class="text-sm text-zinc-500 hover:text-lime-600 duration-300">Home</nuxt-link>
                <nuxt-link to="/shop" class="text-sm text-zinc-500 hover:text-lime-600 duration-300">Shop</nuxt-link>
            </nav>
        </div>
    </div>
</template>

<style>
    .nuxt-link-exact-active {
        color: rgba(101, 163, 13);
    }
</style>
