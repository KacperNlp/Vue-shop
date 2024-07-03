<template>
  <AppSectionBox
    v-if="products.length || isLoading"
    class="flex flex-col lg:flex-row gap-16 xl:gap-32"
  >
    <div class="w-72">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="Price" name="1" class="visible">
          <el-slider
            v-model="filters.price"
            range
            :min="minValue"
            :max="maxValue"
          />
        </el-collapse-item>
        <el-collapse-item title="Categories" name="2">
          <el-checkbox-group v-model="filters.checkedCategories">
            <el-checkbox
              v-for="{ attributes } in categories"
              :label="attributes.name"
              :value="attributes.key"
              :key="attributes.key"
            />
          </el-checkbox-group>
        </el-collapse-item>
        <el-collapse-item title="Sales Products Only" name="3">
          <el-checkbox v-model="filters.isSaleOnly" />
        </el-collapse-item>
      </el-collapse>
      <el-button @click="loadProducts" class="mt-4" type="primary"
        >Filtruj</el-button
      >
      <div class="mt-2" v-if="isClearFilterBtnVisible">
        <el-button @click="clearFilters" type="danger"
          >Wyczyść filtry</el-button
        >
      </div>
    </div>
    <div class="w-full">
      <ul class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <li
          v-for="{ id, name, price, discount, images, reviews } in products"
          :ke="id"
        >
          <AppProductBox
            :id="id"
            :name="name"
            :price="price"
            :discount="discount"
            :imgs="images"
            :reviews="reviews"
            :loading="isLoading"
          />
        </li>
      </ul>
    </div>
  </AppSectionBox>
  <AppSectionBox v-else class="text-center">
    <AppHeadline :headlineType="HeadlinesTypes.H2">
      Nie znaleziono produktów dla wybranej kategorii
      <Icon name="uil:sad" width="24" height="24" />
    </AppHeadline>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";
import type { Category, Product } from "@/types/types";

interface Filter {
  price: number[];
  checkedCategories: string[];
  isSaleOnly: boolean;
}

const route = useRoute();

const categories = ref<Category[]>([]);
const products = ref<Product[]>([]);
const activeNames = ref(["1"]);
const isLoading = ref(true);
const minValue = ref(10);
const maxValue = ref(100);

const filters = reactive<Filter>({
  price: [10, 40],
  checkedCategories: [],
  isSaleOnly: false,
});

const isClearFilterBtnVisible = computed(() => {
  return filters.checkedCategories.length || filters.isSaleOnly;
});

async function getLoadData() {
  try {
    const [categoriesDataRespons, productsDataResponse] = await Promise.all([
      useAPIFetch("/categories"),
      useAPIFetch(
        `/products?filters[category][name]=${route.params.id}&populate=*`
      ),
    ]);

    categories.value = categoriesDataRespons;
    products.value = productsDataResponse;
    filters.price = useMinMaxPrice(products.value);
    filters.checkedCategories.push(String(route.params.id));
    minValue.value = filters.price[0];
    maxValue.value = filters.price[1];
    isLoading.value = false;
  } catch (err) {
    console.log("Error");
  }
}

function clearFilters() {
  filters.isSaleOnly = false;
  filters.checkedCategories.length = 0;
  loadProducts();
}

async function loadProducts() {
  try {
    let queryString = "?populate=*&";

    queryString += `filters[price][gte]=${filters.price[0]}&filters[price][lte]=${filters.price[1]}&`;

    if (filters.checkedCategories && filters.checkedCategories.length > 0) {
      const categoryFilters = filters.checkedCategories
        .map((categoryId) => `filters[category][name]=${categoryId}`)
        .join("&");
      queryString += categoryFilters + "&";
    }

    if (filters.isSaleOnly) {
      queryString += `filters[discount][$gt]=0`;
    }

    const response = await useAPIFetch(`/products${queryString}`);

    products.value = response;
  } catch (err) {
    console.error(err);
  }
}

await getLoadData();
</script>

<style lang="scss">
.el-collapse-item {
  &__header,
  &__content {
    background: #f3f4f6;
  }

  &__wrap {
    overflow: visible;
  }
}
</style>
