// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    app: {
        head: {
            title: 'Andri Ferry',
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
        layoutTransition: { name: 'slide-fade', mode: 'out-in' },
        pageTransition: { name: 'slide-fade', mode: 'out-in' },
    },
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', 'nuxt-aos', '@vueuse/nuxt'],
    css: ['~/assets/css/tailwind.css'],
    tailwindcss: {
        viewer: false,
    },
    postcss: {
        plugins: {
            'tailwindcss/nesting': {},
        },
    },
});
