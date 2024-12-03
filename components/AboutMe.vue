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
import Slack from '@/components/Icons/Slack.vue';
import Supabase from '@/components/Icons/Supabase.vue';
import Tailwindcss from '@/components/Icons/Tailwindcss.vue';
import Typescript from '@/components/Icons/Typescript.vue';
import Vite from '@/components/Icons/Vite.vue';
import VsCode from '@/components/Icons/VsCode.vue';
import Vue from '@/components/Icons/Vue.vue';
import Vuetifyjs from '@/components/Icons/Vuetifyjs.vue';
import AnimatedCounter from 'vue-animated-counter';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

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

const config = {
    autoplay: 2000,
    wrapAround: true,
    pauseAutoplayOnHover: true,
    itemsToShow: 1.5,
    transition: 500,
};

const experienceAge = computed(() => {
    let birthday = new Date('2019-05-01');
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
});

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

                <div class="avatar">
                    <div
                        class="w-20 ring-gray-300 shadow-xl ring-offset-white ring ring-offset-1 rounded-full">
                        <img src="~assets/image/profile.jpg" />
                    </div>
                </div>

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
                        class="grid grid-cols-2 sm:grid-cols-3 py-4 mt-10 border-b border-slate-100">
                        <div class="flex justify-center items-center">
                            <div class="stats">
                                <div class="stat px-0">
                                    <ClientOnly>
                                        <AnimatedCounter
                                            :value="5"
                                            :duration="1000"
                                            class="mb-0 stat-value plus text-5xl font-[800] text-h1 text-primary" />
                                    </ClientOnly>

                                    <div
                                        class="stat-desc font-semibold text-sm">
                                        years of Experience
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center items-center">
                            <div class="stats">
                                <div class="stat px-0">
                                    <ClientOnly>
                                        <AnimatedCounter
                                            :value="90"
                                            :duration="1000"
                                            class="mb-0 stat-value percentage text-5xl font-[800] text-h1 text-primary" />
                                    </ClientOnly>

                                    <div
                                        class="stat-desc font-semibold text-sm">
                                        of Works Completed
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center items-center">
                            <div class="stats">
                                <div class="stat px-0">
                                    <ClientOnly>
                                        <AnimatedCounter
                                            :value="100"
                                            :duration="1000"
                                            class="mb-0 stat-value percentage text-5xl font-[800] text-h1 text-primary" />
                                    </ClientOnly>

                                    <div
                                        class="stat-desc font-semibold text-sm">
                                        Job Success Score
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 class="text-info">What Some of my Clients Say</h3>

                <Carousel v-bind="config">
                    <Slide v-for="(data, index) in testimonials" :key="index">
                        <div class="carousel__item">
                            <div class="card bg-zinc-50 w-96 h-56">
                                <div class="card-body">
                                    <article
                                        class="prose prose-img:!m-0 prose-p:!m-0">
                                        <p class="text-justify">
                                            {{ data.text }}
                                        </p>

                                        <div
                                            class="flex items-center gap-3 mt-4">
                                            <div class="avatar">
                                                <div
                                                    class="mask shadow-xl mask-squircle w-10">
                                                    <img :src="data.img" />
                                                </div>
                                            </div>

                                            <div class="">
                                                <p class="font-bold">
                                                    {{ data.name }}
                                                </p>
                                                <p class="text-xs font-light">
                                                    {{ data.company }}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Carousel>
            </article>
        </Container>
    </Wrapper>
</template>

<style>
.percentage::after {
    content: ' %';
}

.plus::after {
    content: ' +';
}
</style>
