<template>
  <div
    v-if="cart.numberOfProductsAddedToCart"
    class="flex flex-col justify-between h-full py-16"
  >
    <div class="w-full">
      <ul>
        <li v-for="product in cart.addedProducts" :key="product.id">
          <AppCartProductSidebar
            :id="product.id"
            :name="product.name"
            :price="product.price"
            :discount="product.discount"
            :img="product.img"
            :quantity="product.quantity"
            :reviews="product.reviews"
          />
        </li>
      </ul>
    </div>
    <div class="flex justify-center">
      <AppButton btnLink="/checkout">Checkout </AppButton>
    </div>
  </div>
  <div v-else class="flex flex-col items-center gap-2">
    <span>
      <Icon
        name="ion:cart-outline"
        width="48"
        height="48"
        class="text-gray-400"
      />
    </span>
    <span class="text-gray-400">Your cart is empty...</span>
  </div>
</template>

<script setup lang="ts">
const cart = useCart();
</script>
