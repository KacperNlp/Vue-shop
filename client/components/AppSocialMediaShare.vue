<template>
  <div>
    <h3 class="text-sm text-gray-500">{{ headlineTxt }}</h3>
    <div class="flex flex-row gap-2 mt-2">
      <SocialShare
        v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
        :key="network"
        :network="network"
        :styled="true"
        :label="false"
        class="p rounded-2 text-white text-sm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  headlineTxt: string;
}

defineProps<Props>();
</script>
