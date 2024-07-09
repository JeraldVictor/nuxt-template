<template>
  <v-breadcrumbs :items="navItems.breadcrumbs">
    <template v-slot:item="{ item }">
      <p v-if="item.disabled" class="text-blue-grey-lighten-3">
        {{ item.title }}
      </p>
      <NuxtLink
        v-else
        :to="item.href"
        class="text-decoration-none"
        active-class="text-primary"
      >
        {{ item.title }}
      </NuxtLink>
    </template>
  </v-breadcrumbs>
</template>

<script lang="ts" setup>
const navItems = navStore();
</script>

<style></style>
