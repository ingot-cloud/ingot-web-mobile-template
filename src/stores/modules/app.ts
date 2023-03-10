import type { AppStore } from "../types";

/**
 * 全局配置
 */
export const useAppStore = defineStore("app", () => {
  const app = reactive<AppStore>({
    title: import.meta.env.VITE_APP_TITLE,
    netConfig: {
      baseURL: import.meta.env.VITE_APP_NET_BASE_URL || undefined,
      timeout: import.meta.env.VITE_APP_NET_DEFAULT_TIMEOUT || 10_000,
      timeoutErrorMessage:
        import.meta.env.VITE_APP_NET_DEFAULT_TIMEOUT_MESSAGE || undefined,
    },
    tenant: import.meta.env.VITE_APP_TENANT,
    basicToken: `Basic ${import.meta.env.VITE_APP_BASIC_TOKEN}`,
  });

  const getTenant = computed(() => app.tenant);
  const getBasicToken = computed(() => app.basicToken);

  return {
    app,
    getTenant,
    getBasicToken,
  };
});

/**
 * app状态
 */
export const useAppStateStore = defineStore(
  "app.state",
  () => {
    return {};
  },
  {
    persist: {
      storage: localStorage,
      paths: [],
    },
  }
);
