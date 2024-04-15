<template>
  <div class="flex justify-between flex-nowrap gap-2 relative">
    <div class="flex gap-2">
      <img :src="img" :alt="name" class="w-16" />
      <div>
        <span class="text-sm mb-1 block">{{ name }}</span>
        <div v-if="discount">
          <span class="text-gray-400 line-through font-normal mr-2">{{
            $currency(priceMultipledByQuantity)
          }}</span>
          <span class="font-semibold text-sm">{{
            $currency(discountMultipledByQuantity)
          }}</span>
        </div>
        <span v-else class="font-semibold text-sm">{{
          $currency(priceMultipledByQuantity)
        }}</span>
        <button @click="handleClickRemoveProductFromCart" class="mt-1">
          <Icon
            name="ph:trash"
            width="24"
            height="24"
            class="text-gray-600 hover:text-rose-600"
          />
        </button>
      </div>
    </div>
    <div class="w-8">
      <InputNumber
        v-model="currentQuantity"
        showButtons
        buttonLayout="vertical"
        class="w-full bg-gray-50 border"
        :min="1"
        :max="99"
      >
        <template #incrementbuttonicon><span>+</span></template>
        <template #decrementbuttonicon><span>-</span></template>
      </InputNumber>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AddedProduct } from "@/types/types";

const cart = useCart();

const props = defineProps<AddedProduct>();

const currentQuantity = ref(props.quantity);

const priceMultipledByQuantity = computed(
  () => currentQuantity.value * props.price
);

const discountMultipledByQuantity = computed(() => {
  if (!props.discount) return 0;
  return currentQuantity.value * props.discount;
});

function handleClickRemoveProductFromCart() {
  cart.removeProductFromCart(props.id);
}
</script>
