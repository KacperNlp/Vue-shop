<template>
  <a v-if="btnLink" :href="btnLink"><slot /></a>
  <button
    class="py-3 px-6 font-bold text-gray-50 bg-gray-800 hover:bg-gray-950 rounded-xl duration-200"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  btnLink?: string;
}

defineProps<Props>();
</script>
