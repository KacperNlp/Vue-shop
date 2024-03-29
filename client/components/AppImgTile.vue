<template>
    <NuxtLink :to="link">
        <img :src="imgUrl" :alt="text">
        <span>{{ text }}</span>
    </NuxtLink>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    link: string,
    text: string,
    imgUrl: string
}

defineProps<Props>();
</script>