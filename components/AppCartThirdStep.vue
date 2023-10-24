<template>
    <div>
        <p>Third Step!</p>
        <p>Thank You for buying!</p>
        <AppButton @click.native="prevStep">Prev</AppButton>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import cartStepsHandle from '~/mixins/cartStepsHanld'

export default defineComponent({
    mixins: [cartStepsHandle],
})
</script>
