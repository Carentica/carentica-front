// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  buildModules: [
    "@nuxt/postcss8"
  ],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  css: ["@/assets/css/main.css"],
};
