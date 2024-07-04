<template>
  <div>
    <form action="POST" class="flex flex-col gap-2">
      <el-rate v-model="form.rating" />
      <el-input
        v-model="form.text"
        class="max-w-lg"
        :rows="3"
        type="textarea"
        placeholder="Please input"
      />
      <div>
        <el-button
          @click="handleClickAddReview"
          :disabled="!form.rating"
          type="success"
          aria-label="Dodaj opinie"
          >Dodaj opinie</el-button
        >
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
import type { UserReview, UserData } from "@/types/types";

const emit = defineEmits(["sendOpinion"]);

const form = reactive<UserReview>({
  rating: 0,
  text: "",
  user: null,
});

function loadUserId() {
  const LoggedUserJSONData = window.localStorage.getItem("userData");

  if (LoggedUserJSONData) {
    const loggedUserData = JSON.parse(LoggedUserJSONData) as UserData;

    form.user = loggedUserData.id;
  }
}

function handleClickAddReview() {
  emit("sendOpinion", form);
}

loadUserId();
</script>
