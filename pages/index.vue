<script setup lang="ts">
import Css from '@/components/Icons/Css.vue';
import Figma from '@/components/Icons/Figma.vue';
import GoogleCloudApi from '@/components/Icons/GoogleCloudApi.vue';
import Html from '@/components/Icons/Html.vue';
import Javascript from '@/components/Icons/Javascript.vue';
import Next from '@/components/Icons/Next.vue';
import Nuxt from '@/components/Icons/Nuxt.vue';
import Pinia from '@/components/Icons/Pinia.vue';
import React from '@/components/Icons/React.vue';
import Supabase from '@/components/Icons/Supabase.vue';
import Tailwindcss from '@/components/Icons/Tailwindcss.vue';
import Typescript from '@/components/Icons/Typescript.vue';
import Vite from '@/components/Icons/Vite.vue';
import Vue from '@/components/Icons/Vue.vue';
import Vuetifyjs from '@/components/Icons/Vuetifyjs.vue';

const iconsComponent = shallowRef([
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
        text: 'Css',
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
]);
</script>

<template>
    <div>
        <Hero />

        <Service />

        <LatestProject />

        <Wrapper>
            <Container>
                <article
                    id="latest-project"
                    data-aos="fade-down"
                    class="prose mb-3">
                    <h1 class="text-info text-3xl capitalize lg:text-4xl">
                        Hello, It's Me
                        <span class="icon-[twemoji--waving-hand]"></span>
                    </h1>

                    <p class="text-accent">
                        I'm Andri Ferry, I work as a remote worker, software
                        developer, designer almost 5 years based from Jakarta
                        Indonesia. I specialize development Saas product app
                        using Javascript, Vuejs , Nuxtjs, Reactjs, Tailwindcss,
                        Vuetifyjs, Nextjs.
                    </p>
                    <p class="text-accent">
                        Almost 5 years i was spent more than 3000 hours at
                        Upwork and working with difference around the world. I'm
                        always interested in doing random things on my desk and
                        build something
                    </p>

                    <h3 class="text-info">My Skills</h3>

                    <div class="container">
                        <div class="grid grid-cols-5 gap-3 lg:pr-28">
                            <div
                                v-for="(data, index) in iconsComponent"
                                :key="index"
                                class="tooltip tooltip-primary"
                                :data-tip="data.text">
                                <component
                                    :is="data.component"
                                    class="w-16 h-16 rounded-2xl hover:shadow-2xl shadow-xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" />
                            </div>
                            <!-- <component
                                :is="data"
                                v-for="(data, index) in iconsComponent"
                                :key="index"
                                class="w-16 h-16 rounded-2xl hover:shadow-2xl shadow-xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" /> -->
                        </div>
                    </div>
                </article>
            </Container>
        </Wrapper>

        <!-- <div>Latest Project</div>

        <div>Service</div>

        <div>Testimonial</div>

        <div>Resume / About me</div>

        <div>Contact me</div>

        <div>Blog</div> -->
    </div>
</template>

<style>
.tooltip::before {
    @apply bg-white shadow-xl font-semibold text-accent;
}

.tooltip::after {
    @apply hidden;
}
</style>
