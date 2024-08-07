<template>
  <div
    v-if="cart.numberOfProductsAddedToCart"
    class="flex flex-col justify-between h-full w-full py-16"
  >
    <div class="w-full px-8">
      <ul class="flex flex-col gap-2">
        <li
          v-for="{
            id,
            name,
            price,
            discount,
            thumbnail,
            reviews,
            quantity,
          } in cart.addedProducts"
          :key="id"
        >
          <AppCartProductSidebar
            :id="id"
            :name="name"
            :price="price"
            :discount="discount"
            :thumbnail="thumbnail"
            :quantity="quantity"
            :reviews="reviews"
          />
        </li>
      </ul>
    </div>
    <div class="flex flex-col justify-center items-center gap-8">
      <div class="flex justify-between w-full px-8 border-t pt-4">
        <span>Total:</span>
        <span
          ><strong>{{ $currency(cart.getCartTotalAmount) }}</strong></span
        >
      </div>
      <div>
        <AppButton @click="handleClickGoToCheckout">Checkout </AppButton>
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col items-center gap-2">
    <span>
      <Icon
        name="ion:cart-outline"
        width="48"
        height="48"
        class="text-gray-500"
      />
    </span>
    <span class="text-gray-500">Your cart is empty...</span>
  </div>
</template>

<script setup lang="ts">
const cart = useCart();

const router = useRouter();

function handleClickGoToCheckout() {
  router.push({ path: "/checkout" });
}
</script>
