<template>
  <span
    v-if="discount"
    class="px-2 py-1 text-center text-xs text-gray-50 bg-rose-400 rounded-lg"
    >{{ discountPercent }}</span
  >
</template>

<script setup lang="ts">
interface Props {
  price: number;
  discount: number | null;
}

const props = defineProps<Props>();

const discountPercent = computed(() => {
  if (!props.discount) return;

  const priceDifference = props.price - props.discount;
  const percent = Math.floor((priceDifference / props.price) * 100);

  return `-${percent} %`;
});
</script>
