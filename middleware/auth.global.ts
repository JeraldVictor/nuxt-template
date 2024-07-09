export default defineNuxtRouteMiddleware((to, from) => {
  const auth = authStore();

  if (to.path != "/" && !auth.isLoggedIn) {
    return navigateTo("/");
  }
});
