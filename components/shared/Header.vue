<script setup>
const store = authStore();

const admins = ref([
  ["Management", "mdi-account-multiple-outline"],
  ["Settings", "mdi-cog-outline"],
]);
const cruds = ref([
  ["Create", "mdi-plus-outline"],
  ["Read", "mdi-file-outline"],
  ["Update", "mdi-update"],
  ["Delete", "mdi-delete"],
]);
</script>

<template>
  <v-list>
    <v-list-item :title="store.user?.name" :subtitle="store.user?.role">
      <template v-slot:append>
        <Icon
          name="i-material-symbols:person-edit-outline"
          size="2rem"
          class="mr-2"
        />
      </template>
    </v-list-item>
  </v-list>

  <v-divider></v-divider>
  <v-list>
    <v-list-item
      prepend-icon="mdi-home"
      title="Home"
      to="/Home"
      color="primary"
    ></v-list-item>

    <v-list-group value="Users">
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-account-circle"
          title="Users"
        ></v-list-item>
      </template>

      <v-list-group value="Admin">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Admin"></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon], i) in admins"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Actions">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Actions"></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon], i) in cruds"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"
        ></v-list-item>
      </v-list-group>
    </v-list-group>
  </v-list>
</template>
