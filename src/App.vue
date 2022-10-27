<script setup lang="ts">
import { RouterView } from "vue-router";
import User from "./components/User.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>
  <div class="content">
    <User />
    <RouterView />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  align-items: center;
  gap: 15px;
}
@media screen and (max-width: 800px) {
  .content {
    flex-direction: column;
  }
}
</style>
