<template>
  <AppSectionBox>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <AppImgTile
        v-for="category in categories"
        :key="category.id"
        :link="`/category${category.attributes.url}`"
        :text="category.attributes.name"
        :imgUrl="$imgUrl(category.attributes.img?.data.attributes.url)"
      />
    </div>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { ElNotification } from "element-plus";
import type { Category } from "@/types/types";

useHead({
  title: "Categories",
  meta: [{ name: "description", content: "All type of categories" }],
  htmlAttrs: {
    lang: "en",
  },
});

const { $imgUrl } = useNuxtApp();

const categories = ref<Category[]>([]);

async function initFetch() {
  try {
    const data = await useAPIFetch("/categories?populate=*");
    categories.value = data;
  } catch (err) {
    ElNotification({
      title: "Error",
      message: "Sorry, we have problem with fetching categories!",
      type: "error",
    });
  }
}

await initFetch();
</script>
