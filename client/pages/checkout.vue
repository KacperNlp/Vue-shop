<template>
  <AppSectionBox>
    <AppHeadline :headlineType="HeadlinesTypes.H1">Checkout</AppHeadline>
    <form action="POST" @submit.prevent="handleSubmitFinishOrder" class="max-w-2xl mt-4">
      <div>
        <AppHeadline :headlineType="HeadlinesTypes.H2">Contact Information</AppHeadline>
        <span class="text-sm text-gray-600">Already have an account?
          <NuxtLink to="/login">Log in</NuxtLink>.
        </span>
      </div>
    </form>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";

const userData = reactive({
  email: null,
  firstName: null,
  lastName: null,
  address1: null,
  address2: null,
  city: null,
  zip: null,
  phone: null,
});

function handleSubmitFinishOrder() {
  console.log("Finist order");
}
</script>
