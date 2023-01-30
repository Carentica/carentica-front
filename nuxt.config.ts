// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    build: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    css: [
        '@/assets/css/main.css',
    ],
  }