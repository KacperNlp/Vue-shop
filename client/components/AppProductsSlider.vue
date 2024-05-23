<template>
  <div v-if="products.length">
    <Splide aria-label="..." :options="SLIDER_CONFIG">
      <SplideSlide v-for="{ id, attributes } in products" :key="id">
        <AppProductBox
          :id="id"
          :name="attributes.name"
          :price="attributes.price"
          :discount="attributes.discount"
          :reviews="attributes.reviews"
          :imgs="attributes.images.data"
        />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import type { Product } from "@/types/types";

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
      `/products?filters[$and][0][category][url][$eq]=/${props.category}&filters[$and][1][id][$ne]=${props.productToAvoid}&populate=*`
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
