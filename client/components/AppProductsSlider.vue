<template>
  <div v-if="products.length">
    <Splide aria-label="..." :options="SLIDER_CONFIG">
      <SplideSlide v-for="product in products" :key="product.id">
        <AppProductBox
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :discount="product.discount"
          :reviews="product.reviews"
          :img="product.img"
        />
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import type { Product } from "@/types/types";

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

const products = reactive<Product[]>([
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
  {
    id: "222",
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
    id: "33",
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
    id: "423",
    name: "Product 4",
    price: 25,
    discount: 7,
    img: "/imgs/tshirt.jpg",
    reviews: {
      numberOfReviews: 0,
      review: 0,
    },
  },
]);
</script>
