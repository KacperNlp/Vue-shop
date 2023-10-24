import { defineComponent } from "vue"

export default defineComponent({
    emits: ['change-step'],

    methods: {
        nextStep() {
            this.$emit('change-step', 'next')
        }, 

        prevStep() {
            this.$emit('change-step', 'prev')
        }
    },
});