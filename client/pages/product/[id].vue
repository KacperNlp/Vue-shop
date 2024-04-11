<template>
  <AppSectionBox>
    <div>Home / Products / Example Product</div>
  </AppSectionBox>
  <AppSectionBox
    class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8 2xl:gap-16"
  >
    <div>
      <Splide :options="{ rewind: true }">
        <SplideSlide v-for="(img, id) in product.imgs" :key="id">
          <img :src="img.url" :alt="img.alt" class="w-full" />
        </SplideSlide>
      </Splide>
    </div>
    <div>
      <div class="flex justify-between max-w-lg mt-2">
        <div>
          <h1 class="mb-2 text-2xl">{{ product.name }}</h1>
          <AppReviewStars
            :numberOfReviews="product.reviews.numberOfReviews"
            :review="product.reviews.review"
          />
        </div>
        <div class="text-lg">
          <div v-if="product.discount">
            <span class="text-gray-400 line-through font-normal mr-2">{{
              $currency(product.price)
            }}</span>
            <span class="font-semibold">{{ $currency(product.discount) }}</span>
          </div>
          <span v-else class="font-semibold">{{
            $currency(product.price)
          }}</span>
        </div>
      </div>
      <div class="flex flex-col gap-2 my-6 text-sm font-light">
        <div>
          <span class="text-gray-400">Available: </span>
          <span v-if="product.stock" class="text-green-400">In stock</span>
          <span v-else class="font-light text-rose-400">Out of stock</span>
        </div>
        <div>
          <span class="text-gray-400 font-light">SKU: </span
          ><span>{{ product.sku }}</span>
        </div>
      </div>
      <p class="max-w-lg font-light">{{ product.shortDesc }}</p>
      <div class="flex flex-col gap-2 my-6 py-8 border-y">
        <div class="flex flex-col gap-1">
          <label for="productStock" class="mb-2 text-xs"
            >Number of products:</label
          >
          <div class="flex gap-3">
            <input
              type="number"
              name="productStock"
              id="productStock"
              min="1"
              :max="product.stock"
              :value="numberOfProducts"
              class="px-4 py-2 rounded-lg border-2"
            />
            <AppButton>Add to cart</AppButton>
          </div>
        </div>
        <span class="my-2 text-sm">
          <span class="text-gray-400 font-light">Category: </span>
          <NuxtLink to="/category/t-shirt">T-shirt</NuxtLink>
        </span>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
        <button @click="addToWishlist" class="flex hover:text-indigo-600">
          <Icon name="ion:heart-outline" width="18" height="18" />
          <span class="ml-2">Add to wishlist</span>
        </button>
        <button
          @click="handleClickShareProduct"
          class="flex hover:text-indigo-600"
        >
          <Icon
            name="material-symbols-light:share-outline"
            width="18"
            height="18"
          />
          <span class="ml-2">Share</span>
        </button>
      </div>
    </div>
  </AppSectionBox>
  <AppSectionBox>
    <TabView>
      <TabPanel header="Description">
        <p class="m-0 max-w-lg">
          {{ product.desc }}
        </p>
      </TabPanel>
      <TabPanel :header="reviewsTabHeadline">
        <p class="m-0 max-w-lg">No reviews...</p>
      </TabPanel>
    </TabView>
  </AppSectionBox>
  <AppSectionBox class="mb-2 md:mb-8 xl:mb-16">
    <AppHeadline :headlineType="HeadlinesTypes.H2" class="uppercase text-center"
      >Can interested you:</AppHeadline
    >
    <AppProductsSlider />
  </AppSectionBox>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { HeadlinesTypes } from "@/enums/enums";

const numberOfProducts = ref(1);

const reviewsTabHeadline = computed(
  () => `Reviews (${product.reviews.numberOfReviews})`
);

function addToWishlist() {
  console.log("Add to wishlist");
}

function handleClickShareProduct() {
  console.log("Share");
}

const product = {
  id: "1",
  sku: "PRODUCT-SKU",
  name: "Product 1",
  shortDesc:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officia sapiente harum. Cumque nostrum eos quibusdam unde. Tempore omnis eaque, rem, aperiam vel tempora illum, explicabo nulla neque quibusdam consectetur?",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora officia sapiente harum. Cumque nostrum eos quibusdam unde. Tempore omnis eaque, rem, aperiam vel tempora illum, explicabo nulla neque quibusdam consectetur?",
  price: 13,
  discount: 8,
  stock: 15,
  imgs: [
    {
      url: "/imgs/tshirt.jpg",
      alt: "Img1",
    },
    {
      url: "/imgs/tshirt.jpg",
      alt: "Img2",
    },
  ],
  reviews: {
    numberOfReviews: 3,
    review: 4.2,
  },
};
</script>
