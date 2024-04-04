<template>
  <footer class="bg-white py-4">
    <AppSectionBox> </AppSectionBox>
    <section
      class="flex justify-between w-11/12 max-w-screen-xl mx-auto text-xs border-t pt-4"
    >
      <span>ScriptCommerce - by Kacper Nalepa</span>
      <div>
        <ul class="flex gap-4">
          <li v-for="{ id, icon, url } in socialMedia" :key="id">
            <a
              :href="url"
              class="w-4 h-4 inline-block bg-black/50 hover:bg-black duration-200"
            ></a>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script setup lng="ts">
const socialMedia = [
  {
    id: 1,
    icon: "",
    url: "#",
  },
  {
    id: 2,
    icon: "",
    url: "#",
  },
  {
    id: 3,
    icon: "",
    url: "#",
  },
];
</script>
