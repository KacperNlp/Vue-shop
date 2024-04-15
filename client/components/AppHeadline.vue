<template>
  <h1
    v-if="headlineType === HeadlinesTypes.H1"
    class="text-xl md:text-2xl lg:text-3xl xl:text-4xl md:mb-2 font-bold"
  >
    <slot />
  </h1>
  <h2
    v-else-if="headlineType === HeadlinesTypes.H2"
    class="text-lg md:text-xl lg:text-2xl mb-2 md:mb-4 font-medium"
  >
    <slot />
  </h2>
  <h3
    v-else-if="headlineType === HeadlinesTypes.H3"
    class="text-base md:text-lg xl:text-xl mb-2 font-medium"
  >
    <slot />
  </h3>
  <h4
    v-else-if="headlineType === HeadlinesTypes.H4"
    class="text-base font-medium"
  >
    <slot />
  </h4>
  <h5 v-else-if="headlineType === HeadlinesTypes.H5"><slot /></h5>
  <h6 v-else-if="headlineType === HeadlinesTypes.H6"><slot /></h6>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";

interface Props {
  headlineType: HeadlinesTypes;
}

defineProps<Props>();
</script>
