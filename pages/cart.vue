<template>
    <div>
        <h1>Cart</h1>
        <AppCartFirstStep v-if="isFirstStep" v-on:change-step="changeStep" />
        <AppCartSecondStep v-else-if="isSecondStep" v-on:change-step="changeStep" />
        <AppCartThirdStep v-else-if="isThirdStep" v-on:change-step="changeStep" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NextPrevStep } from '~/types/index'

export default defineComponent({
    data: () => {
        return {
            activeStep: 1,
        }
    },

    computed: {
        isFirstStep() {
            return this.activeStep === 1
        },

        isSecondStep() {
            return this.activeStep === 2
        },

        isThirdStep() {
            return this.activeStep === 3
        },
    },

    methods: {
        changeStep(eventType: NextPrevStep) {
            if (eventType === 'next') this.activeStep++
            else this.activeStep--
        },
    },
})
</script>
