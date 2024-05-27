<template>
  <AppSectionBox class="flex flex-col md:flex-row gap-4 lg:gap-8 xl:gap-16">
    <AppAccountSideNav />
    <div class="w-full">
      <AppHeadline :headlineType="HeadlinesTypes.H2">Your wishlist</AppHeadline>
      <div v-if="wishlist.length">
        <span>Your products!</span>
      </div>
      <div v-else class="flex justify-center">
        <el-empty description="Your wishlist is empty...." />
      </div>
    </div>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";

const { $authUser } = useNuxtApp();
const wishlistStore = useWishlist();

const wishlist = computed(async () => await wishlistStore.getProductsList);

$authUser();
</script>
