<template>
  <AppSectionBox class="flex flex-col md:flex-row gap-4 lg:gap-8 xl:gap-16">
    <AppAccountSideNav />
    <h1>Acount Page</h1>
  </AppSectionBox>
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
