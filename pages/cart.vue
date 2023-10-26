<template>
    <AppSection>
        <section class="pb-4 md:pb-8 border-b mb-4 md:mb-8 lg:mb-12 xl:mb-16 text-center">
            <AppHeadline>Cart</AppHeadline>
        </section>
        <AppCartFirstStep v-if="isFirstStep" v-on:change-step="changeStep" />
        <AppCartSecondStep v-else-if="isSecondStep" v-on:change-step="changeStep" />
        <AppCartThirdStep v-else-if="isThirdStep" v-on:change-step="changeStep" />
    </AppSection>
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
