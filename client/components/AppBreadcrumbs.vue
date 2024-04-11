<template>
  <div>
    <span v-for="(breadcrumb, index) in breadcrumbs" :key="index"
      ><NuxtLink
        :to="breadcrumb.path"
        class="text-sm text-gray-400 hover:text-green-600"
        >{{ breadcrumb.name }}</NuxtLink
      >
      <span
        v-if="isNotLastBreadcrumb(index)"
        class="inline-block px-2 text-gray-400"
        >/</span
      >
    </span>
  </div>
</template>

<script setup lang="ts">
import type { BreadcrumbType } from "@/types/types";

const route = useRoute();
const breadcrumbs = reactive<BreadcrumbType[]>([]);

function getBreadcrumbs() {
  const pathAsArray = route.path.split("/");
  let currentPath = "";

  for (let i = 0; i < pathAsArray.length; i++) {
    const name = i ? pathAsArray[i] : "Home";
    currentPath += `${pathAsArray[i]}/`;
    const path = currentPath;

    const breadcrumb = {
      name,
      path,
    };

    breadcrumbs.push(breadcrumb);
  }
}

function isNotLastBreadcrumb(breadcrumbIndex: number): boolean {
  return breadcrumbIndex < breadcrumbs.length - 1;
}

getBreadcrumbs();
</script>

<style>
.router-link-exact-active {
  color: #225;
}
</style>
