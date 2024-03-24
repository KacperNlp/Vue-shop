<template>
  <div>
    <img class="min-h-8" :src="imgSrc" :alt="imgAlt" />
  </div>
</template>
<script setup lang="ts">
interface Props {
  imgSrc: string;
  imgAlt: string;
}

defineProps<Props>();
</script>
