<template>
  <AppSectionBox class="flex flex-col md:flex-row gap-4 lg:gap-8 xl:gap-16">
    <AppAccountSideNav />
    <div class="w-full">
      <AppHeadline :headlineType="HeadlinesTypes.H2">Your wishlist</AppHeadline>
      <div v-if="wishlist.length">
        <ul
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8"
        >
          <li v-for="{ attributes, id } in wishlist" :key="id">
            <AppProductBox
              :id="id"
              :name="attributes.name"
              :price="attributes.price"
              :discount="attributes.discount"
              :reviews="attributes.reviews"
              :imgs="attributes.images.data"
            />
          </li>
        </ul>
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

const wishlist = computed(() => wishlistStore.getProductsList);

wishlistStore.fetchProductsList();
$authUser();
</script>
