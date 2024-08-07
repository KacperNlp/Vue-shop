<template>
  <header class="sticky top-0 z-30 flex py-4 shadow-sm bg-white">
    <div class="mx-auto px-4 max-w-[1400px] w-full flex justify-between">
      <div class="flex items-center gap-4 lg:gap-12">
        <button @click="handleClickOpenNav" class="lg:hidden" aria-label="Bars">
          <Icon name="gravity-ui:bars" width="24" height="24" />
        </button>
        <AppLogo />
        <nav
          class="fixed lg:static top-0 left-[-105%] w-screen lg:w-auto h-screen lg:h-auto bg-white p-8 lg:p-2 duration-500 shadow-lg lg:shadow-none z-30"
          :class="{ '!left-0': isNavVisible }"
        >
          <ul class="flex flex-col lg:flex-row gap-2 lg:gap-6">
            <li
              v-for="{ url, name, isVisibleOnDesktop } in store.mainNav"
              :class="{ 'md:hidden': !isVisibleOnDesktop }"
              :key="name"
            >
              <NuxtLink
                :to="url"
                class="text-gray-500 hover:text-indigo-600 text-sm duration-200"
                >{{ name }}</NuxtLink
              >
            </li>
          </ul>
          <button
            @click="handleClickCloseNav"
            class="absolute top-4 right-8 lg:hidden"
            aria-label="Close navigation"
          >
            <Icon name="material-symbols:close" width="24" height="24" />
          </button>
        </nav>
      </div>
      <div class="flex gap-4">
        <div class="hidden lg:flex items-center">
          <NuxtLink to="/wishlist" title="User wishlist">
            <Icon
              name="mdi:heart-outline"
              width="24"
              height="24"
              class="text-gray-600 hover:text-indigo-600"
            />
          </NuxtLink>
        </div>
        <div class="hidden lg:flex items-center">
          <NuxtLink to="/account" title="User account">
            <Icon
              name="mdi:user-outline"
              width="24"
              height="24"
              class="text-gray-600 hover:text-indigo-600"
            />
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <button
            @click="handleClickOpenCheckout"
            class="relative"
            aria-label="Open checkout"
          >
            <span
              v-if="cart.numberOfProductsAddedToCart"
              class="absolute top-[-4px] right-[-4px] text-[10px] flex justify-center items-center w-4 h-4 bg-green-600 text-gray-50 rounded-lg"
              aria-label="Cart"
              >{{ cart.numberOfProductsAddedToCart }}</span
            >
            <Icon
              name="ion:cart-outline"
              width="24"
              height="24"
              class="text-gray-600 hover:text-indigo-600"
            />
          </button>
        </div>
      </div>
    </div>
    <section
      class="fixed top-0 right-[-100%] md:right-[-400px] flex justify-center items-center w-[90vw] md:w-96 h-screen bg-white shadow-lg duration-500"
      :class="{ '!right-0': isCheckoutVisible }"
    >
      <button
        @click="handleClickCloseCheckout"
        class="absolute top-4 right-8"
        aria-label="Close checkout"
      >
        <Icon name="material-symbols:close" width="24" height="24" />
      </button>
      <AppCartSidebar />
    </section>
  </header>
</template>

<script setup lang="ts">
const store = useWebsiteNavigation();
const cart = useCart();
const router = useRouter();

const isNavVisible = ref(false);
const isCheckoutVisible = ref(false);

function handleClickOpenNav() {
  isNavVisible.value = true;
}

function handleClickCloseNav() {
  isNavVisible.value = false;
}

function handleClickOpenCheckout() {
  isCheckoutVisible.value = true;
}

function handleClickCloseCheckout() {
  isCheckoutVisible.value = false;
}

router.beforeEach(() => {
  isCheckoutVisible.value = false;
});
</script>

<style>
.router-link-active {
  color: #4f46e5;
}
</style>
