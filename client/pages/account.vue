<template>
  <AppSectionBox class="flex flex-col md:flex-row gap-4 lg:gap-8 xl:gap-16">
    <AppAccountSideNav />
    <div>
      <AppHeadline :headlineType="HeadlinesTypes.H2">Hi UserName!</AppHeadline>
      <div></div>
    </div>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";
</script>
