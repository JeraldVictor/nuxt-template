<script setup lang="ts">
import { useTheme } from "vuetify";

const store = authStore();
const theme = useTheme();

onMounted(() => {
  theme.global.name.value = store.theme;
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
