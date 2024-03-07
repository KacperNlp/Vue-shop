<template>
  <header>
    <div>
      <button>Bars</button>
      <NuxtLink to="/">ScriptCommerce</NuxtLink>
      <nav>
        <ul>
          <li
            v-for="{ url, name, isVisibleOnDesktop } in store.mainNav"
            :class="{ 'md:hidden': !isVisibleOnDesktop }"
            :key="name"
          >
            <NuxtLink :to="url">{{ name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div></div>
  </header>
</template>

<script setup lang="ts">
const store = useWebsiteNavigation();
</script>
