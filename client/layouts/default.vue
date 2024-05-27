<template>
  <div class="bg-gray-100">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const wishlistStore = useWishlist();

await wishlistStore.fetchProductsList();
</script>
