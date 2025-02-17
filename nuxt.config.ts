// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    head: {
      title: process.env.NUXT_TITLE_APP,
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap',
        },
      ],
    },
    // layoutTransition: { name: 'slide-fade', mode: 'out-in' },
    pageTransition: {
      name: 'slide-fade',
      mode: 'out-in',
    },
  },
  runtimeConfig: { public: { title: process.env.NUXT_TITLE_APP } },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-aos',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/seo',
  ],
  robots: {
    // provide simple disallow rules for all robots `user-agent: *`

    allow: [
      '/',
      '/about',
      '/project',
    ],
  },
  // seo: { fallbackTitle: false },
  css: [
    '~/assets/css/tailwind.css',
    '@egjs/vue3-flicking/dist/flicking.css',
  ],
  tailwindcss: { viewer: false },
  postcss: { plugins: { 'tailwindcss/nesting': {} } },

  site: {
    url: process.env.NUXT_BASE_URL,
    name: process.env.NUXT_TITLE_APP,
  },
})
