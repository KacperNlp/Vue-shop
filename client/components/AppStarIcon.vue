<template>
    <span>
        <svg data-v-e8d572f6="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon" width="14px" height="14px" viewBox="0 0 512 512" :style="{ color: starColor}"><path fill="currentColor" d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"></path></svg>
    </span>
</template>

<script setup lang="ts">
interface Props {
    isFilled: boolean,
    fillValue: number
}

const props = defineProps<Props>();

const starColor = computed(() => {
    if(props.isFilled) return 'rgb(255, 215, 0)'
    else return 'rgb(204, 204, 204)';
})
</script>
