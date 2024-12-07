<script setup lang="ts">
import Flicking from '@egjs/vue3-flicking';

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
    narimo,
    paynetMy,
} = useAboutMe();

const imgArray = [
    narimo,
    paynetMy,
    jonahAC,
    surveyLogo,
    orsoLogo,
    cazner,
    'https://bramaleatire.com/bt_logo.png',
];

const { width } = useWindowSize();

const widthCarousel = computed(() => {
    return width.value >= 400 ? 'w-[400px]' : 'w-[330px]';
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

                <div class="avatar">
                    <div
                        class="w-20 ring-gray-300 shadow-xl ring-offset-white ring ring-offset-1 rounded-full">
                        <img src="~assets/image/profile.jpg" />
                    </div>
                </div>

                <p class="text-accent mt-0 text-justify">
                    I'm Andri Ferry, I work as a remote worker, software
                    developer, designer almost 5 years based from Jakarta
                    Indonesia. I specialize development Saas product app using
                    Javascript, Vuejs , Nuxtjs, Reactjs, Tailwindcss, Vuetifyjs,
                    Nextjs.
                </p>
                <p class="text-accent text-justify">
                    Almost 5 years i was spent more than 3000 hours at Upwork
                    and working with difference around the world. I'm always
                    interested in doing random things on my desk and build
                    something
                    <NuxtLink to="/aboutme" class="text-primary">
                        Read More
                    </NuxtLink>
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
                                class="w-12 h-12 lg:w-16 lg:h-16 rounded-lg lg:rounded-2xl hover:shadow-2xl shadow-xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" />
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
                                class="w-12 h-12 lg:w-16 lg:h-16 rounded-lg lg:rounded-2xl hover:shadow-2xl shadow-xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out" />
                        </div>
                    </div>

                    <Stats />
                </div>

                <h3 class="text-info flex items-center gap-3 mb-10">
                    What Some of my Clients Say

                    <span class="icon-[logos--partytown-icon] w-6 h-6"></span>
                </h3>

                <div :class="widthCarousel" class="lg:w-full overflow-hidden">
                    <Flicking :options="options" :plugins="plugins" class="">
                        <TestimonialCard
                            v-for="(data, index) in testimonials"
                            :key="index"
                            v-bind="data" />
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
                <h3 class="text-info my-5 flex items-center gap-3">
                    Freelancers Client

                    <span class="icon-[emojione--office-building]"></span>
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

                    <div
                        data-aos="zoom-in-up"
                        class="flex justify-center items-center">
                        <img
                            class="w-10 lg:w-16"
                            src="https://derp-prod.orq.app/assets/77a4293b-45e6-4ec2-8c4c-195d0013ff44"
                            alt="" />
                    </div>
                </div>
            </div>
        </Container>
    </Wrapper>
</template>
