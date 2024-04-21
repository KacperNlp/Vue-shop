<template>
    <aside class="w-full max-w-64">
        <el-card class="md:py-4">
            <ul class="flex flex-col gap-2">
                <li v-for="{ link, title, id } in ASIDE_NAV" :key="id">
                    <NuxtLink :to="link" class="hover:text-blue-500">{{ title }}</NuxtLink>
                </li>
            </ul>
        </el-card>
    </aside>
</template>

<script setup lang="ts">
const ASIDE_NAV = [
    {
        link: '/account',
        title: 'User Account',
        id: 1
    },
    {
        link: '/wishlist',
        title: 'Wishlist',
        id: 2
    }
]
</script>