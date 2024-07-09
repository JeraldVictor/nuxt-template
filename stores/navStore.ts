import { defineStore } from "pinia";

type storeType = {
  activeLink: string;
  breadcrumbs: Array<{
    title: string;
    disabled: boolean;
    href: string;
  }>;
};

export const navStore = defineStore("nav", {
  state: (): storeType => {
    return {
      activeLink: "",
      breadcrumbs: [
        {
          title: "Home",
          disabled: true,
          href: "/",
        },
        {
          title: "Dashboard",
          disabled: false,
          href: "/Home",
        },
      ],
    };
  },
  actions: {
    setBreadcrumbs(items: storeType["breadcrumbs"]) {
      this.breadcrumbs = items;
    },
  },
});
