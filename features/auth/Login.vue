<script setup>
import { useMutation } from "@tanstack/vue-query";
import { z } from "zod";

import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";

import { loginApi } from "~/services/apis/users";
import { authStore } from "~/stores/authStore";

const store = authStore();

onMounted(() => {
  if (store.isLoggedIn) {
    navigateTo("/Home");
  }
});

const { isPending, isError, error, mutate } = useMutation({
  mutationFn: loginApi,
  onSuccess: (data) => {
    if (data?.success) {
      store.setLogin(data?.data?.accessToken, data?.data?.user);
      useNuxtApp().$toast.success(data.message);

      navigateTo("/Home");
    }
  },
  onError: (error) => {
    if (Array.isArray(error?.errors)) {
      error?.errors.forEach((element) => {
        Object.values(element).forEach((message, index) => {
          useNuxtApp().$toast.error(message);
        });
      });
    }
  },
});

const schema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Please enter a valid email"),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Name must be a string",
  }),
});

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(schema),
});

const { value: email } = useField("email");
const { value: password } = useField("password");

const submit = handleSubmit((values) => {
  mutate({
    email: values.email,
    password: values.password,
  });
});

const showPassword = ref(false);
</script>

<template>
  <div class="d-flex justify-center align-center h-screen">
    <v-card width="500" :elevated="7" theme="dark" variant="outlined">
      <v-card-title>
        <div class="text-center d-flex justify-center items-center my-6">
          <Icon
            class="text-red"
            name="i-game-icons:thunder-blade"
            size="2rem"
          />
          <div class="ml-4 text-red text-overline">ADMIN</div>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="mb-4" v-if="isError">
          <v-alert
            closable
            title="Error While Login"
            :text="error.message"
            type="error"
          ></v-alert>
        </div>
        <v-form @submit.prevent="submit">
          <v-text-field
            variant="outlined"
            v-model="email"
            :error-messages="errors.email"
            label="Email"
            prepend-inner-icon="mdi-email-outline"
          ></v-text-field>
          <div class="my-4"></div>
          <v-text-field
            variant="outlined"
            prepend-inner-icon="mdi-lock-outline"
            v-model="password"
            :error-messages="errors.password"
            label="Password"
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append-inner="showPassword = !showPassword"
          ></v-text-field>

          <v-btn
            class="mt-6"
            color="primary"
            type="submit"
            block
            :disabled="isPending"
            :loading="isPending"
            >Login</v-btn
          >
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <div class="text-center font-sign">&copy; Jerald 2024</div>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </div>
</template>
