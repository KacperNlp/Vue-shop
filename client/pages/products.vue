<template>
  <AppSectionBox class="flex flex-col lg:flex-row gap-16 xl:gap-32">
    <div class="w-72">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="Price" name="1">
          <el-slider v-model="filters.price" range />
        </el-collapse-item>
        <el-collapse-item title="Categories" name="2">
          <el-checkbox-group v-model="filters.checkedCategories">
            <el-checkbox
              v-for="{ attributes, id } in categories"
              :label="attributes.name"
              :value="attributes.key"
              :key="id"
            />
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item title="Sales Products Only" name="3">
          <el-checkbox v-model="filters.isSaleOnly" />
        </el-collapse-item>
      </el-collapse>
      <el-button class="mt-4" type="primary">Filtruj</el-button>
      <div class="mt-2" v-if="isClearFilterBtnVisible">
        <el-button @click="clearFilters" type="danger"
          >Wyczyść filtry</el-button
        >
      </div>
    </div>
    <div class="w-full">
      <ul class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <li v-for="{ id, attributes } in products" :ke="id">
          <AppProductBox
            :id="id"
            :name="attributes.name"
            :price="attributes.price"
            :discount="attributes.discount"
            :imgs="attributes.images.data"
            :reviews="attributes.reviews"
          />
        </li>
      </ul>
    </div>
  </AppSectionBox>
</template>

<script setup lang="ts">
import type { Category, Product } from "@/types/types";

const categories = ref<Category[]>([]);
const products = ref<Product[]>([]);
const activeNames = ref(["1"]);

const filters = reactive({
  price: [10, 40],
  checkedCategories: [],
  isSaleOnly: false,
});

// const filteredProducts = computed(() => {
//   const productsCopy = products.filter((product) => {
//     if (filters.isSaleOnly && product.discount) {
//       return (
//         filters.price[0] <= product.discount &&
//         product.discount <= filters.price[1]
//       );
//     } else if (filters.isSaleOnly) {
//       return false;
//     }

//     return (
//       filters.price[0] <= product.discount &&
//       product.discount <= filters.price[1]
//     );
//   });

//   return productsCopy;
// });

const isClearFilterBtnVisible = computed(() => {
  return filters.checkedCategories.length || filters.isSaleOnly;
});

async function getLoadData() {
  try {
    const [categoriesDataRespons, productsDataResponse] = await Promise.all([
      useAPIFetch("/categories"),
      useAPIFetch(`/products?populate=*`),
    ]);

    categories.value = categoriesDataRespons;
    products.value = productsDataResponse;
  } catch (err) {
    console.log("Error");
  }
}

function clearFilters() {
  filters.isSaleOnly = false;
  filters.checkedCategories.length = 0;
}

await getLoadData();
</script>

<style lang="scss">
.el-collapse-item {
  &__header,
  &__content {
    background: #f3f4f6;
  }
}
</style>
