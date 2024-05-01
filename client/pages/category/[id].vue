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
    </div>
    <div class="w-full">
      <ul class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <li
          v-for="{ id, name, price, discount, img, reviews } in products"
          :ke="id"
        >
          <AppProductBox
            :id="id"
            :name="name"
            :price="price"
            :discount="discount"
            :img="img"
            :reviews="reviews"
          />
        </li>
      </ul>
    </div>
  </AppSectionBox>
</template>

<script setup lang="ts">
import type { Category } from "@/types/types";

const route = useRoute();

const categories = ref<Category[]>([]);

async function getLoadData() {
  try {
    const [categoriesDataRespons, productsDataResponse] = await Promise.all([
      useAPIFetch("/categories"),
      useAPIFetch(
        `/products?[filters][categories][$eq]={${route.params.id}}&populate=*`
      ),
    ]);

    categories.value = categoriesDataRespons;
  } catch (err) {
    console.log("Error");
  }
}

const filters = reactive({
  price: [10, 40],
  checkedCategories: [],
  isSaleOnly: false,
});

const activeNames = ref(["1"]);

const products = [
  {
    id: "1",
    name: "Product 1",
    price: 13,
    discount: null,
    img: "/imgs/tshirt.jpg",
    reviews: {
      numberOfReviews: 3,
      review: 4.2,
    },
  },
  {
    id: "2",
    name: "Product 2",
    price: 12,
    discount: null,
    img: "/imgs/tshirt.jpg",
    reviews: {
      numberOfReviews: 5,
      review: 3.5,
    },
  },
  {
    id: "3",
    name: "Product 3",
    price: 10,
    discount: 7,
    img: "/imgs/tshirt.jpg",
    reviews: {
      numberOfReviews: 0,
      review: 0,
    },
  },
  {
    id: "4",
    name: "Product 4",
    price: 25,
    discount: 7,
    img: "/imgs/tshirt.jpg",
    reviews: {
      numberOfReviews: 0,
      review: 0,
    },
  },
];

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
