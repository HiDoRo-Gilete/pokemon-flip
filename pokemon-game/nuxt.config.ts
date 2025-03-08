// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import {resolve} from "path"
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  alias:{
    "assets": resolve(__dirname,"/assets"),
  },
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});