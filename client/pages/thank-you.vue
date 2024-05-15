<template>
  <AppSectionBox class="text-center">
    <AppHeadline :headlineType="HeadlinesTypes.H2">
      Thank you for shopping!
      <Icon name="hugeicons:happy" width="32" height="32" class="ml-2" />
      <div class="mt-8">
        <el-button
          @click="handleClickGoBackForShopping"
          native-type="submit"
          type="primary"
          >Go back for shopping</el-button
        >
      </div>
    </AppHeadline>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";

const router = useRouter();

function handleClickGoBackForShopping() {
  router.push({ path: "/" });
}
</script>
