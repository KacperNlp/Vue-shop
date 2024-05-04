<template>
  <div v-if="isLoading">Loading....</div>
  <div v-else-if="!isLoading && product">
    <AppSectionBox class="!pb-0">
      <AppBreadcrumbs />
    </AppSectionBox>
    <AppSectionBox class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8 2xl:gap-16">
      <div class="relative">
        <AppDiscountPercentTile :price="product.price" :discount="product.discount"
          class="absolute top-2 md:top-4 right-2 md:right-4 z-20 discount-tile" />
        <Splide :options="{ rewind: true }">
          <SplideSlide v-for="(img, id) in product.images.data" :key="id">
            <img :src="$imgUrl(img.attributes.url)" :alt="product.name" class="w-full" />
          </SplideSlide>
        </Splide>
      </div>
      <div>
        <div class="flex justify-between max-w-lg mt-2">
          <div>
            <h1 class="mb-2 text-2xl">{{ product.name }}</h1>
            <AppReviewStars :numberOfReviews="product.reviews.numberOfReviews" :review="product.reviews.review" />
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
            <span class="text-gray-400 font-light">SKU: </span><span>{{ product.sku }}</span>
          </div>
        </div>
        <p class="max-w-lg font-light">{{ product.shortDesc }}</p>
        <div class="flex flex-col gap-2 my-6 py-8 border-y">
          <div class="flex flex-col gap-1">
            <label for="productStock" class="mb-2 text-xs">Number of products:</label>
            <div class="flex gap-3">
              <input type="number" name="productStock" id="productStock" min="1" :max="product.stock" v-model="quantity"
                class="px-4 py-2 rounded-lg border-2" />
              <AppButton @click="handleClickAddProductToCart">
                Add to cart
              </AppButton>
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
          <button @click="handleClickShareProduct" class="flex hover:text-indigo-600">
            <Icon name="material-symbols-light:share-outline" width="18" height="18" />
            <span class="ml-2">Share</span>
          </button>
        </div>
      </div>
    </AppSectionBox>
    <AppSectionBox>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="Description" name="first">
          <p class="m-0 max-w-lg">
            {{ product.description }}
          </p>
        </el-tab-pane>
        <el-tab-pane :label="reviewsTabHeadline" name="second">
          <p class="m-0 max-w-lg">No reviews...</p>
        </el-tab-pane>
      </el-tabs>
    </AppSectionBox>
    <AppSectionBox class="mb-2 md:mb-8 xl:mb-16">
      <AppHeadline :headlineType="HeadlinesTypes.H2" class="uppercase text-center">Can interested you:</AppHeadline>
      <!-- <AppProductsSlider /> -->
    </AppSectionBox>
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ElNotification } from 'element-plus';
import "@splidejs/vue-splide/css";
import { HeadlinesTypes } from "@/enums/enums";
import type { ProductAttributes } from '@/types/types';

const cart = useCart();
const route = useRoute();
const { $imgUrl } = useNuxtApp();

const quantity = ref(1);
const activeName = ref("first");
const product = ref<ProductAttributes | null>(null);
const isLoading = ref(true);

const reviewsTabHeadline = computed(
  () => {
    if (product.reviews)
      return `Reviews (${product.reviews.numberOfReviews})`

    return `Reviews (0)`;
  }
);

function addToWishlist() {
  console.log("Add to wishlist");
}

function handleClickShareProduct() {
  console.log("Share");
}

function handleClickAddProductToCart() {
  const { id, name, price, discount, imgs, reviews } = product;
  const addedProduct = {
    id,
    name,
    price,
    discount,
    img: imgs[0].url,
    reviews,
    quantity: quantity.value,
  };

  cart.addProductToCart(addedProduct);
  quantity.value = 1;
}

async function fetchData() {
  try {
    const { attributes } = await useAPIFetch(`/products/${route.params.id}?&populate=*`);

    product.value = attributes;
    isLoading.value = false;
  } catch (err) {
    ElNotification({
      title: 'Error',
      message: 'There is a problem with fetching data!',
      type: 'error',
    })
  }
}

await fetchData();
</script>

<style lang="scss" scoped>
.discount-tile {
  @media (min-width: 768px) {
    font-size: 14px;
  }
}
</style>
