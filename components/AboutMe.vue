<script setup lang="ts">
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
import Supabase from '@/components/Icons/Supabase.vue';
import Tailwindcss from '@/components/Icons/Tailwindcss.vue';
import Typescript from '@/components/Icons/Typescript.vue';
import Vite from '@/components/Icons/Vite.vue';
import VsCode from '@/components/Icons/VsCode.vue';
import Vue from '@/components/Icons/Vue.vue';
import Vuetifyjs from '@/components/Icons/Vuetifyjs.vue';

import Slack from '@/components/Icons/Slack.vue';

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
]);

const myTools = shallowRef([
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
]);

const experienceAge = computed(() => {
    let birthday = new Date('2019-05-01');
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
});
</script>

<template>
    <Wrapper>
        <Container class="grid lg:grid-cols-2">
            <article
                id="latest-project"
                data-aos="fade-down"
                class="prose mb-3 prose-img:!m-0">
                <h1 class="text-info text-3xl mb-3 capitalize lg:text-4xl">
                    Hello, It's Me
                    <span class="icon-[twemoji--waving-hand]"></span>
                </h1>

                <ClientOnly>
                    <div class="avatar">
                        <div
                            class="w-20 ring-gray-300 shadow-xl ring-offset-white ring ring-offset-1 rounded-full">
                            <img src="~assets/image/profile.jpg" />
                        </div>
                    </div>
                </ClientOnly>

                <p class="text-accent mt-0">
                    I'm Andri Ferry, I work as a remote worker, software
                    developer, designer almost 5 years based from Jakarta
                    Indonesia. I specialize development Saas product app using
                    Javascript, Vuejs , Nuxtjs, Reactjs, Tailwindcss, Vuetifyjs,
                    Nextjs.
                </p>
                <p class="text-accent">
                    Almost 5 years i was spent more than 3000 hours at Upwork
                    and working with difference around the world. I'm always
                    interested in doing random things on my desk and build
                    something
                </p>

                <h3 class="text-info">My Skills</h3>

                <div class="container">
                    <div class="grid grid-cols-5 gap-3 lg:pr-28">
                        <div
                            v-for="(data, index) in iconsComponent"
                            :key="index"
                            class="tooltip tooltip-primary"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            :data-tip="data.text">
                            <component
                                :is="data.component"
                                class="w-16 h-16 rounded-2xl hover:shadow-2xl shadow-xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" />
                        </div>
                    </div>
                </div>
            </article>

            <article
                id="latest-project"
                data-aos="fade-down"
                class="prose mb-3">
                <h3 class="text-info mt-5">Tools I use every day</h3>

                <div class="container">
                    <div class="grid grid-cols-5 gap-3 lg:pr-28">
                        <div
                            v-for="(data, index) in myTools"
                            :key="index"
                            class="tooltip tooltip-primary"
                            :data-tip="data.text"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic">
                            <component
                                :is="data.component"
                                class="w-16 h-16 rounded-2xl hover:shadow-2xl shadow-xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" />
                        </div>
                    </div>

                    <div
                        class="grid sm:grid-cols-3 py-4 mt-10 py border-b border-slate-100">
                        <div
                            class="flex items-center justify-center gap-3"
                            data-aos="fade-down">
                            <ClientOnly>
                                <AnimatedCounter
                                    :value="experienceAge"
                                    :duration="1000"
                                    class="mb-0 text-6xl font-[800] text-h1 text-primary" />
                            </ClientOnly>

                            <p class="font-semibold m-0">
                                + years of Experience
                            </p>
                        </div>

                        <div
                            class="flex items-center justify-center gap-3"
                            data-aos="fade-down">
                            <ClientOnly>
                                <AnimatedCounter
                                    :value="90"
                                    :duration="1000"
                                    class="mb-0 text-6xl font-[800] text-h1 text-primary" />
                            </ClientOnly>
                            <p class="font-semibold m-0">
                                % of Works Completed
                            </p>
                        </div>

                        <div
                            class="flex items-center justify-center gap-3"
                            data-aos="fade-down">
                            <ClientOnly>
                                <AnimatedCounter
                                    :value="100"
                                    :duration="1000"
                                    class="mb-0 text-6xl font-[800] text-h1 text-primary" />
                            </ClientOnly>
                            <p class="font-semibold text-sm m-0">
                                % Job Success Score
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </Container>
    </Wrapper>
</template>

<style scoped></style>
