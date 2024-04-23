<template>
  <div class="flex justify-between flex-col flex-nowrap gap-2 relative">
    <div class="flex justify-between gap-2">
      <img :src="img" :alt="name" class="w-20" />
      <div class="text-right">
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
      <el-input-number
        v-model="currentQuantity"
        :min="1"
        :max="99"
        @change="handleUpdateProductQuantity"
      />
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

function handleUpdateProductQuantity() {
  cart.changeProductQuantity(props.id, currentQuantity.value);
}

watch(
  () => props.quantity,
  (newValue) => {
    currentQuantity.value = newValue;
  }
);
</script>
