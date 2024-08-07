<template>
  <div v-if="isLoading">Loading....</div>
  <div v-else-if="!isLoading && product">
    <AppSectionBox class="!pb-0">
      <AppBreadcrumbs />
    </AppSectionBox>
    <AppSectionBox
      class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-8 2xl:gap-16"
    >
      <div class="relative">
        <AppDiscountPercentTile
          :price="product.price"
          :discount="product.discount"
          class="absolute top-2 md:top-4 right-2 md:right-4 z-20 discount-tile"
        />
        <Splide :options="{ rewind: true }">
          <SplideSlide v-for="(img, id) in product.images.data" :key="id">
            <img
              :src="$imgUrl(img.attributes.url)"
              :alt="product.name"
              class="w-full"
            />
          </SplideSlide>
        </Splide>
      </div>
      <div>
        <div class="flex justify-between max-w-lg mt-2">
          <div>
            <h1 class="mb-2 text-2xl">{{ product.name }}</h1>
            <AppReviewStars
              v-if="!!product.reviews"
              :numberOfReviews="getNumberOfReviews"
              :review="reviewsSummary"
            />
          </div>
          <div class="text-lg">
            <div v-if="product.discount">
              <span class="text-gray-400 line-through font-normal mr-2">{{
                $currency(product.price)
              }}</span>
              <span class="font-semibold">{{
                $currency(product.discount)
              }}</span>
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
                v-model="quantity"
                class="px-4 py-2 rounded-lg border-2"
              />
              <AppButton @click="handleClickAddProductToCart">
                Add to cart
              </AppButton>
            </div>
          </div>
          <span class="my-2 text-sm">
            <span class="text-gray-400 font-light">Category: </span>
            <NuxtLink
              :to="`/category/${product.category.data.attributes.key}`"
              >{{ product.category.data.attributes.name }}</NuxtLink
            >
          </span>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
          <button
            v-if="isProductAddedToWishlist"
            @click="handleClickRemoveFromWishlist"
            class="flex hover:text-indigo-600"
          >
            <Icon name="ion:heart" width="18" height="18" />
            <span class="ml-2">Remove from wishlist</span>
          </button>
          <button
            v-else
            @click="handleClickAddToWishlist"
            class="flex hover:text-indigo-600"
          >
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
        <div class="mt-4">
          <AppSocialMediaShare headlineTxt="Share on social media:" />
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
          <div v-if="isReviewsMoreThanZero" class="flex flex-col gap-4">
            <span class="mt-4 text-sm text-gray-600"
              >Opinie innych użytkowników:</span
            >
            <el-card v-for="review in productReviews" :key="review.id">
              <div
                class="flex flex-col gap-4 md:flex-row md:items-center md:gap-8"
              >
                <div class="flex gap-2 md:flex-col items-center">
                  <el-avatar :icon="UserFilled" />
                  <span class="text-xs text-gray-500">{{
                    review.attributes.user?.data.attributes.username
                  }}</span>
                </div>
                <div>
                  <span class="block text-xs text-gray-500">{{
                    getDate(review.attributes.createdAt)
                  }}</span>
                  <el-rate
                    v-model="review.attributes.rating"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value} points"
                  />
                  <p v-if="review.attributes.text" class="text-sm mt-2">
                    {{ review.attributes.text }}
                  </p>
                </div>
              </div>
            </el-card>
          </div>
          <p v-else class="m-0 max-w-lg">No reviews...</p>
          <div class="mt-8">
            <span class="text-sm text-gray-600">Dodaj swoją opinie</span>
            <AppAddReviewForm
              :productId="Number(route.params.id)"
              @sendOpinion="handleClickSendUsertOpinion"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </AppSectionBox>
    <AppSectionBox class="mb-2 md:mb-8 xl:mb-16">
      <AppHeadline
        :headlineType="HeadlinesTypes.H2"
        class="uppercase text-center"
        >Can interested you:</AppHeadline
      >
      <AppProductsSlider
        :category="product.category.data.attributes.name"
        :productToAvoid="Number(route.params.id)"
      />
    </AppSectionBox>
  </div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { ElNotification } from "element-plus";
import { UserFilled } from "@element-plus/icons-vue";
import "@splidejs/vue-splide/css";
import { HeadlinesTypes } from "@/enums/enums";
import type {
  Product,
  UserReview,
  DataObj,
  ProductReviewsSummary,
} from "@/types/types";

const cart = useCart();
const wishlist = useWishlist();
const config = useRuntimeConfig();
const route = useRoute();
const { $imgUrl } = useNuxtApp();

const quantity = ref(1);
const activeName = ref("first");
const isLoading = ref(true);
const productReviews = ref<ProductReviewsSummary[] | null>(null);
const product = reactive<Product>({
  id: 0,
  name: "",
  shortDesc: "",
  description: "",
  price: 0,
  discount: null,
  images: {
    data: null,
  },
  isNew: false,
  reviews: null,
  category: {
    data: null,
  },
  sku: "",
  stock: 0,
});

const reviewsTabHeadline = computed(() => {
  console.log(productReviews.value);
  if (!!productReviews.value)
    return `Reviews (${productReviews.value?.length})`;

  return `Reviews (0)`;
});

const isReviewsMoreThanZero = computed(() => !!productReviews.value?.length);

const isProductAddedToWishlist = computed(() =>
  wishlist.getProductsIdsList.includes(Number(route.params.id))
);

const getNumberOfReviews = computed(() => {
  if (!productReviews.value || !productReviews.value.length) return 0;

  return productReviews.value.length;
});

const reviewsSummary = computed(() => {
  if (!productReviews.value || !productReviews.value.length) return 0;

  let summary = 0;

  productReviews.value.forEach(
    ({ attributes }) => (summary += attributes.rating)
  );

  return summary / productReviews.value.length;
});

async function handleClickAddToWishlist() {
  try {
    wishlist.addProductToWishlist(Number(route.params.id));
  } catch (err) {
    ElNotification({
      title: "Error",
      message: "You cannot add this product to wishlist, sorry...",
      type: "error",
    });
  }
}

async function handleClickRemoveFromWishlist() {
  try {
    wishlist.removeProductFromWishlist(Number(route.params.id));
  } catch (err) {
    ElNotification({
      title: "Error",
      message: "You cannot add this product to wishlist, sorry...",
      type: "error",
    });
  }
}

function handleClickShareProduct() {
  navigator.clipboard.writeText(window.location.href);

  ElNotification({
    title: "Success",
    message: "Link copied to clipboard!",
    type: "success",
  });
}

function handleClickAddProductToCart() {
  const { name, price, discount, images, reviews } = product;

  const thumbnail = Array.isArray(images.data)
    ? images.data[0].attributes.url
    : "placeholder-url";

  const addedProduct = {
    id: route.params.id as string,
    name,
    price,
    discount,
    thumbnail,
    reviews,
    quantity: quantity.value,
  };

  cart.addProductToCart(addedProduct);
  quantity.value = 1;
}

async function handleClickSendUsertOpinion(form: UserReview) {
  try {
    await useFetch(`${config.public.baseURL}/reviews`, {
      method: "POST",
      body: {
        data: form,
      },
      headers: {
        Authorization: `bearer ${config.public.apiKey}`,
      },
    });

    fetchData();
  } catch (err) {
    ElNotification({
      title: "Error",
      message: "Sorry... You cannot send your review, please try later",
      type: "error",
    });
  }
}

function getDate(isoDateString: string) {
  const date = new Date(isoDateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}, ${day}.${month}.${year}`;
}

async function fetchData() {
  try {
    const [{ attributes }, reviews] = await Promise.all([
      useAPIFetch(`/products/${route.params.id}?&populate=*`),
      useAPIFetch(
        `/reviews?filters[product][id][$eq]=${route.params.id}&populate=*`
      ),
    ]);

    productReviews.value = reviews as ProductReviewsSummary[];

    for (const [key, value] of Object.entries(attributes)) {
      product[key] = value;
    }
    isLoading.value = false;

    useHead({
      title: product?.name,
      meta: [{ name: "description", content: product?.description }],
      htmlAttrs: {
        lang: "en",
      },
    });
  } catch (err) {
    ElNotification({
      title: "Error",
      message: "There is a problem with fetching data!",
      type: "error",
    });
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
