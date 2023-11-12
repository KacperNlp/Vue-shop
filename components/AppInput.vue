<template>
    <div>
        <label :for="inputId">{{ labelText }}</label>
        <input
            v-if="isNumber"
            :id="inputId"
            :type="inputType"
            :name="inputName"
            :min="minValue"
            :max="maxValue"
            :value="value"
            @input="onInput"
            class="border border-zinc-300 focus:outline-green-app-500 text-center text-zinc-400 focus:text-zinc-800"
        />
        <input
            v-else
            :id="inputId"
            :type="inputType"
            :name="inputName"
            :value="value"
            @input="onInput"
            class="border border-zinc-300 focus:outline-green-app-500 text-center text-zinc-400 focus:text-zinc-800"
        />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        inputId: {
            type: String,
            required: true,
        },
        initValue: {
            type: String,
            required: false,
        },
        inputType: {
            type: String,
            default: 'text',
        },
        inputName: {
            type: String,
            required: true,
        },
        minValue: {
            type: Number,
            required: false,
        },
        maxValue: {
            type: Number,
            required: false,
        },
        labelText: {
            type: String,
            required: true,
        },
    },

    computed: {
        isNumber(): boolean {
            return this.inputType === 'number'
        },
    },

    methods: {
        onInput(event: Event) {
            const value =
                this.inputType === 'number'
                    ? Number((event.target as HTMLInputElement).value)
                    : (event.target as HTMLInputElement).value
            this.$emit('input', value)
        },
    },
})
</script>
