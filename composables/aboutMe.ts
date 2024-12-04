import Css from '@/components/Icons/Css.vue';
import Figma from '@/components/Icons/Figma.vue';
import Git from '@/components/Icons/Git.vue';
import GoogleCloudApi from '@/components/Icons/GoogleCloudApi.vue';
import Html from '@/components/Icons/Html.vue';
import Javascript from '@/components/Icons/Javascript.vue';
import Next from '@/components/Icons/Next.vue';
import Nuxt from '@/components/Icons/Nuxt.vue';
import Pinia from '@/components/Icons/Pinia.vue';
import React from '@/components/Icons/React.vue';
import Slack from '@/components/Icons/Slack.vue';
import Supabase from '@/components/Icons/Supabase.vue';
import Tailwindcss from '@/components/Icons/Tailwindcss.vue';
import Typescript from '@/components/Icons/Typescript.vue';
import Vite from '@/components/Icons/Vite.vue';
import VsCode from '@/components/Icons/VsCode.vue';
import Vue from '@/components/Icons/Vue.vue';
import Vuetifyjs from '@/components/Icons/Vuetifyjs.vue';
import { AutoPlay } from '@egjs/flicking-plugins';
import cazner from 'assets/image/caznerLogo.png';
import jonahAC from 'assets/image/jonahAC.svg';
import narimo from 'assets/image/narimo.png';
import orsoLogo from 'assets/image/orsoLogo.png';
import surveyLogo from 'assets/image/survey-logo.svg';
import paynetMy from "assets/image/paynetMy.png"

export function useAboutMe() {
    const plugins = ref([
        new AutoPlay({ duration: 2000, direction: 'NEXT', stopOnHover: false }),
    ]);

    const options = ref({
        renderOnlyVisible: true,
        circular: true,
        defaultIndex: 2,
    });

    const iconsComponent = [
        {
            text: 'Nuxt',
            component: Nuxt,
        },
        {
            text: 'Vue',
            component: Vue,
        },
        {
            text: 'Html',
            component: Html,
        },
        {
            text: 'CSS',
            component: Css,
        },

        {
            text: 'React',
            component: React,
        },
        {
            text: 'Next',
            component: Next,
        },
        {
            text: 'Javascript',
            component: Javascript,
        },
        {
            text: 'Typescript',
            component: Typescript,
        },
        {
            text: 'Supabase',
            component: Supabase,
        },
        {
            text: 'Pinia',
            component: Pinia,
        },
        {
            text: 'Tailwindcss',
            component: Tailwindcss,
        },
        {
            text: 'Vuetifyjs',
            component: Vuetifyjs,
        },
        {
            text: 'Vite',
            component: Vite,
        },
        {
            text: 'Google Cloud Api',
            component: GoogleCloudApi,
        },

        {
            text: 'Figma',
            component: Figma,
        },
    ];

    const myTools = [
        {
            text: 'VS Code',
            component: VsCode,
        },
        {
            text: 'Git',
            component: Git,
        },
        {
            text: 'Slack',
            component: Slack,
        },
    ];

    const testimonials = ref([
        {
            text: "He's working well with the entire team, gives frequent feedback about his progress, responds quickly, is available and easy to work with. Thanks, Andri.",
            img: 'https://www.upwork.com/profile-portraits/c17vsiSaxPorjR2E4zzi7SxvOTdzKME0srnDaaC_tlq1Fy59iuET1C91ZxGkd3MJQE',
            name: 'Ulrich Mann',
            company: 'Narimo systems',
        },
        {
            text: "Andri is a persistent man. He doesn't give up easily. A good-natured guy with a good work ethic. He is nearly always available. I have never seen him go offline",
            img: 'https://www.upwork.com/profile-portraits/c1Ytdxg7i-qp0r7cfXBqzdlG4IMHKVFCQAGzBxoqjYVDcxTplBYcEJb-OHABRWrfH8',
            name: 'Roshan Jonnalagadda',
            company: 'Jonah and Associates Pty Ltd',
        },
        {
            text: 'Great to work with and can work with Tailwind CSS within vuejs fine. We had one project here we had hired Andri for ...',
            img: 'https://www.upwork.com/profile-portraits/c1y5663lpxcND-IA7isd0LhwRfgp-GdppGKVQqAZuz943r2xbUVudKvEF55CiivVxX',
            name: 'Nathan Sapwell',
            company: 'DreamFast',
        },
        {
            text: 'He delivered VueJS web application project within the timeline. The communication was smooth and he met all deadlines. I enjoyed working with Andri ...',
            img: 'https://www.upwork.com/profile-portraits/c1XkdwXmAbqmIR4L0fgLsGgJx9Wd7oU8I8Jpdh4FIhfP-b0OB2NY_gfbkgORkwdZb_',
            name: 'Helmi Hasan',
            company: 'PayNet',
        },
    ]);

    return {
        iconsComponent,
        myTools,
        jonahAC,
        testimonials,
        plugins,
        options,
        surveyLogo,
        cazner,
        orsoLogo,
        narimo,
        paynetMy
    };
}
