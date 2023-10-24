<template>
    <div>
        <p>Second Step!</p>
        <AppButton @click.native="prevStep">Prev</AppButton>
        <AppButton @click.native="nextStep">Next</AppButton>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import cartStepsHandle from '~/mixins/cartStepsHanld'

export default defineComponent({
    mixins: [cartStepsHandle],
})
</script>
