<script setup lang="ts">
import Flicking from '@egjs/vue3-flicking';
import '@egjs/vue3-flicking/dist/flicking.css';
import AnimatedCounter from 'vue-animated-counter';

const {
    iconsComponent,
    myTools,
    testimonials,
    jonahAC,
    plugins,
    options,
    surveyLogo,
    cazner,
    orsoLogo,
} = useAboutMe();

const imgArray = [
    'https://narimo.de/content/en/img/narimo.39pt.png',
    'https://paynet.my/img/theme/logo.png',
    jonahAC,
    surveyLogo,
    orsoLogo,
    cazner,
    'https://bramaleatire.com/bt_logo.png',
];
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
                    <NuxtLink to="/" class="text-primary">Read More</NuxtLink>
                </p>

                <h3 class="text-info flex gap-3 items-center">
                    My Skills
                    <span
                        class="icon-[twemoji--man-technologist] w-6 h-6"></span>
                </h3>

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
                <h3 class="text-info mt-5 flex items-center gap-3">
                    Tools I use every day

                    <span class="icon-[twemoji--hammer-and-pick]"></span>
                </h3>

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
                        data-aos="flip-down"
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
                                            :value="39"
                                            :duration="1000"
                                            class="mb-0 stat-value text-5xl font-[800] text-h1 text-primary" />
                                    </ClientOnly>

                                    <div
                                        class="stat-desc font-semibold text-sm">
                                        of Projects Completed
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

                <h3 class="text-info flex items-center gap-3 mb-10">
                    What Some of my Clients Say

                    <span class="icon-[twemoji--star-struck] w-6 h-6"></span>
                </h3>

                <div class="w-[390px] lg:w-full">
                    <Flicking :options="options" :plugins="plugins" class="">
                        <div
                            v-for="(data, index) in testimonials"
                            :key="index"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            class="card bg-zinc-50 w-96 h-56 lg:mx-5">
                            <div class="card-body">
                                <article
                                    class="prose prose-img:!m-0 prose-p:!m-0">
                                    <p class="text-justify">
                                        {{ data.text }}
                                    </p>

                                    <div class="flex items-start gap-3 mt-4">
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
                                            <p
                                                class="text-xs text-start font-light">
                                                {{ data.company }}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </Flicking>
                </div>
            </article>
        </Container>

        <!-- Prototype -->
        <Container>
            <article
                id="latest-project"
                data-aos="fade-down"
                class="prose mb-3">
                <h3 class="text-info mt-5 flex items-center gap-3">
                    Freelancers Client

                    <span class="icon-[twemoji--hammer-and-pick]"></span>
                </h3>
                <p class="text-accent text-sm">
                    We prioritize building strong and meaningful connections,
                    understanding that lasting relationships are the foundation
                    of personal and professional success.
                </p>
            </article>
            <div class="card bg-slate-100 mt-4">
                <div class="grid grid-cols-4 card-body">
                    <div
                        data-aos="zoom-in-up"
                        class="flex justify-center items-center"
                        v-for="(data, index) in imgArray"
                        :key="index">
                        <img :src="data" class="w-40" alt="" />
                    </div>
                </div>
            </div>
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
