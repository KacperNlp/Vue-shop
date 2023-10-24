<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-zinc-600" v-if="isH1Headline">
        <slot></slot>
    </h1>
    <h2 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-zinc-600" v-else-if="isH2Headline">
        <slot></slot>
    </h2>
    <h3 class="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-zinc-600" v-else-if="isH3Headline">
        <slot></slot>
    </h3>
    <h4 class="text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-zinc-600" v-else-if="isH4Headline">
        <slot></slot>
    </h4>
    <h5 class="text-sm md:text-base lg:text-lg xl:text-xl font-medium text-zinc-600" v-else-if="isH5Headline">
        <slot></slot>
    </h5>
    <h6 class="text-sm md:text-sm lg:text-base xl:text-lg font-medium text-zinc-600" v-else-if="isH6Headline">
        <slot></slot>
    </h6>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

enum HeadlineTypes {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
}

export default defineComponent({
    props: {
        headlineType: {
            default: HeadlineTypes.h1,
            validator: function (value) {
                let isValid = false

                for (let item in HeadlineTypes) {
                    if (item === value) isValid = true
                }

                return isValid
            },
        },
    },

    computed: {
        isH1Headline() {
            return this.headlineType === HeadlineTypes.h1
        },

        isH2Headline() {
            return this.headlineType === HeadlineTypes.h2
        },

        isH3Headline() {
            return this.headlineType === HeadlineTypes.h3
        },

        isH4Headline() {
            return this.headlineType === HeadlineTypes.h4
        },

        isH5Headline() {
            return this.headlineType === HeadlineTypes.h5
        },

        isH6Headline() {
            return this.headlineType === HeadlineTypes.h6
        },
    },
})
</script>
