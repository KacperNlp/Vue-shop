<template>
  <div>
    <div class="flex justify-between">
      <img :src="img" :alt="name" class="w-16" />
      <div>
        <span>{{ name }}</span>
        <div v-if="discount">
          <span class="text-gray-400 line-through font-normal mr-2">{{
            $currency(price)
          }}</span>
          <span class="font-semibold text-sm">{{ $currency(discount) }}</span>
        </div>
        <span v-else class="font-semibold text-sm">{{ $currency(price) }}</span>
      </div>
    </div>
    <div>
      <InputNumber
        v-model="currentQuantity"
        showButtons
        buttonLayout="horizontal"
        class="w-16"
        :min="1"
        :max="99"
      >
        <template #incrementbuttonicon>
          <Icon icon="ic:baseline-plus" width="32" height="32" />
        </template>
        <template #decrementbuttonicon>
          <Icon icon="ic:baseline-minus" width="32" height="32" />
        </template>
      </InputNumber>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AddedProduct } from "@/types/types";

const props = defineProps<AddedProduct>();

const currentQuantity = ref(props.quantity);
</script>
