<template>
  <AppSectionBox class="flex flex-col gap-4 md:grid md:grid-cols-[2fr_1fr]">
    <div>
      <AppHeadline :headlineType="HeadlinesTypes.H1">Checkout</AppHeadline>
      <span v-if="!isLoggedIn" class="text-sm text-gray-600">Already have an account?
        <NuxtLink to="/login">Log in</NuxtLink>.
      </span>
      <form action="POST" @submit.prevent="handleSubmitFinishOrder" class="max-w-2xl mt-4">
        <section class="my-6">
          <AppHeadline :headlineType="HeadlinesTypes.H3">Your data:</AppHeadline>
          <div class="flex flex-col gap-4 md:grid md:grid-cols-2">
            <el-form-item label="First Name:" class="form-input-box">
              <el-input v-model="userData.firstName" required />
            </el-form-item>
            <el-form-item label="Last Name:" class="form-input-box">
              <el-input v-model="userData.lastName" required />
            </el-form-item>
            <el-form-item label="E-mail:" class="form-input-box">
              <el-input v-model="userData.email" type="email" required />
            </el-form-item>
            <el-form-item label="Phone:" class="form-input-box">
              <el-input v-model="userData.phone" type="tel" required />
            </el-form-item>
          </div>
        </section>
        <section class="my-6">
          <AppHeadline :headlineType="HeadlinesTypes.H3">Address:</AppHeadline>
          <div class="flex flex-col gap-4 md:grid md:grid-cols-2">
            <el-form-item label="Street Address:" class="form-input-box">
              <el-input v-model="userData.address" required />
            </el-form-item>
            <el-form-item label="City:" class="form-input-box">
              <el-input v-model="userData.city" required />
            </el-form-item>
            <el-form-item label="ZIP code:" class="form-input-box">
              <el-input v-model="userData.zip" required />
            </el-form-item>
          </div>
        </section>
      </form>
    </div>
    <div>
      <AppCartOrderSummary />
    </div>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";

const userData = reactive({
  email: null,
  firstName: null,
  lastName: null,
  city: null,
  zip: null,
  address: null,
  phone: null,
});

const isLoggedIn = computed(() => {
  const isLoggedIn = window.localStorage.getItem("jwt");
  return isLoggedIn;
})

function handleSubmitFinishOrder() {
  console.log("Finist order");
}

async function fetchUserData() {
  try {
    if(!isLoggedIn) return;

    const loggedUserJSONData = window.localStorage.getItem("userData");

    if (loggedUserJSONData) {
      const loggedUserData = JSON.parse(loggedUserJSONData);
      const data = await useAPIFetch(`/users/${loggedUserData.id}`);

      console.log(data);
    }
  } catch(err) {

  }
}

await fetchUserData();
</script>
