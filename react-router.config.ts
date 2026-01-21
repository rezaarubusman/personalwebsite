import type { Config } from "@react-router/dev/config";

export default {
  // MATIKAN SSR → jadi SPA
  ssr: false,

  // default sudah cukup, tapi kita tulis biar jelas
  appDirectory: "app",

  // output build tetap default
  // hasilnya: build/client/*
} satisfies Config;
