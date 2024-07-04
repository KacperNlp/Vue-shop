<template>
  <div v-if="products.length">
    <Splide aria-label="..." :options="SLIDER_CONFIG">
      <SplideSlide
        v-for="{ id, name, price, discount, reviews, images } in products"
        :key="id"
      >
        <AppProductBox
          :id="id"
          :name="name"
          :price="price"
          :discount="discount"
          :reviews="reviews"
          :imgs="images"
        />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";

interface Props {
  category: string;
  productToAvoid: number;
}

const SLIDER_CONFIG = {
  perPage: 5,
  gap: 20,
  breakpoints: {
    450: {
      perPage: 1,
    },
    640: {
      perPage: 2,
    },
    760: {
      perPage: 3,
    },
    1024: {
      perPage: 4,
    },
  },
};

const props = defineProps<Props>();

const products = ref([]);

async function fetchProductsByCategory() {
  try {
    products.value = await useAPIFetch(
      `/products?filters[category][name]=${props.category}&filters[productToAvoid]=${props.productToAvoid}&populate=*`
    );
  } catch (err) {
    console.error(err);

    ElNotification({
      title: "Error",
      message: "We cannot get products! Sorry",
      type: "error",
    });
  }
}

await fetchProductsByCategory();
</script>

<style>
.splide__arrow[disabled] {
  display: none;
}
</style>
