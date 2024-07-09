import { defineStore } from "pinia";

type storeType = {
  authToken: string;
  isLoggedIn: boolean;
  user: null | object;
  theme: "light" | "dark";
};

export const authStore = defineStore("auth", {
  state: (): storeType => {
    return {
      authToken: "",
      isLoggedIn: false,
      user: null,
      theme: "light",
    };
  },
  actions: {
    setLogin(token: string, user: {}) {
      this.authToken = token;
      this.user = user;
      this.isLoggedIn = true;
    },
    setLogOut() {
      this.authToken = "";
      this.user = null;
      this.isLoggedIn = false;
    },
    changeTheme(theme: storeType["theme"]) {
      this.theme = theme;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
