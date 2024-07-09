<script lang="ts" setup>
import { useTheme } from "vuetify";

const store = authStore();
const isNavOpen = ref(false);

const toggleNavBar = () => {
  isNavOpen.value = !isNavOpen.value;
};

const logOut = () => {
  store.setLogOut();
  navigateTo("/");
};

const theme = useTheme();

function toggleTheme() {
  store.changeTheme(theme.global.current.value.dark ? "light" : "dark");
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}

onMounted(() => {
  theme.global.name.value = store.theme;
});
</script>

<template>
  <v-layout class="rounded rounded-md">
    <ClientOnly>
      <v-navigation-drawer
        v-model="isNavOpen"
        absolute
        temporary
        :elevation="9"
      >
        <LazySharedHeader />
      </v-navigation-drawer>
    </ClientOnly>
    <v-app-bar :elevation="9">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="toggleNavBar" />
      </template>
      <v-spacer />
      <v-app-bar-title>
        <Icon
          class="text-red mr-4"
          name="i-game-icons:thunder-blade"
          size="2rem"
        />
      </v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-logout" @click="logOut"></v-btn>
        <v-btn
          v-if="theme.global.current.value.dark"
          @click="toggleTheme"
          icon
          color="yellow"
        >
          <Icon name="i-heroicons-sun-20-solid" size="2rem" />
        </v-btn>
        <v-btn v-else @click="toggleTheme" icon color="black">
          <Icon name="i-heroicons-moon-20-solid" size="2rem" />
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <LazySharedBreadCrumbs />
        <NuxtPage />
      </v-container>
    </v-main>
  </v-layout>
</template>

<style></style>
