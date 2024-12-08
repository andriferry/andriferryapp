<script setup lang="ts">
import Flicking from '@egjs/vue3-flicking';
const { width } = useWindowSize();
const config = useRuntimeConfig();

const { plugins, options } = useAboutMe();

const testimonial = ref([
    {
        class: '-left-16',
        text: 'Once again Andri did an excellent job building a Vue.js app form scratch for us. Everything looks exactly as per design and works precisely as instruction',
    },
    {
        class: '-right-7',
        text: 'We are happy to work with Andri. Andri is an excellent frontend developer that takes much care in the quality of his  work. As he continues to work and improve his skills',
    },
    {
        class: 'top-80 -left-3',
        text: `Andri was, as always, a pleasure to work with. It's a delight working with a dev that always delivers exactly what`,
    },
    {
        class: 'top-80 -right-16',
        text: `We were in need of a Vue.js developer that could adjust a Vue template to our Figma design and connect the GUI to our backend API. Thanks to Andri`,
    },
]);

const widthCarousel = computed(() => {
    return width.value >= 400 ? 'w-[400px]' : 'w-[330px]';
});
</script>

<template>
    <section class="pt-16 lg:pt-36 min-h-screen overflow-hidden relative pb-0">
        <div
            class="container py-5 flex justify-center items-center relative z-10 mx-auto h-screen">
            <div class="grid w-full h-full lg:grid-cols-2">
                <ClientOnly>
                    <div
                        class="flex flex-col gap-4 justify-center items-start px-6 md:px-0"
                        data-aos="fade-up">
                        <h1
                            class="tracking-wide text-info leading-tight font-monrepo text-5xl lg:text-[4rem] font-extrabold capitalize">
                            <span class="icon-[noto--waving-hand]"></span> Hey
                            there,
                            <br />
                            it's

                            <span
                                class="text-transparent absolute box-content w-fit bg-clip-text blur-lg bg-gradient-to-r from-primary to-secondary">
                                {{ config.public.title }}.
                            </span>
                            <span
                                class="text-transparent relative bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                {{ config.public.title }}.
                            </span>
                        </h1>

                        <article
                            class="prose text-sm md:text-xl w-3/4 text-accent font-medium">
                            <p>
                                Highly skilled Full Stack developer with 5 years
                                of experience in software development.

                                <span
                                    class="text-transparent absolute box-content w-fit bg-clip-text blur-xl bg-gradient-to-r from-primary to-secondary">
                                    Based in Jakarta, Indonesia
                                </span>
                                <span
                                    class="text-transparent relative bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Based in Jakarta, Indonesia
                                </span>
                            </p>

                            <p>
                                More than 30+ various profesional jobs & with
                                lots of satified customers
                            </p>
                        </article>

                        <div class="flex gap-2 items-center mt-3">
                            <NuxtLink
                                to="/project"
                                class="btn bg-primary hover:bg-primary/80 hover:border-primary/80 transition-all hover:bg-info group flex items-center gap-3 text-white rounded-xl">
                                <span>View Our Works</span>
                            </NuxtLink>

                            <a
                                href="mailto:ferryandri35@gmail.com"
                                class="btn btn-active btn-link">
                                Contact me
                            </a>
                        </div>
                    </div>
                </ClientOnly>

                <ClientOnly>
                    <div class="flex items-start relative justify-center">
                        <div class="w-full absolute h-full">
                            <div
                                class="bg-[#85FFF8] blur-3xl w-[418px] rounded-full h-[418px]"></div>

                            <div
                                class="bg-[#9785FF] opacity-75 top-0 absolute blur-3xl w-[629px] rounded-full h-[630px]"></div>
                        </div>

                        <div
                            v-for="(data, index) in testimonial"
                            :key="index"
                            data-aos="zoom-in-up"
                            :class="data.class"
                            class="card bg-base-100 hidden lg:block shadow-2xl drop-shadow-2xl absolute w-[350px]">
                            <div class="card-body">
                                <article class="prose text-info-content">
                                    <p>"{{ data.text }}"</p>

                                    <div class="rating">
                                        <input
                                            v-for="data in 5"
                                            :key="data"
                                            class="mask mask-star-2 bg-warning" />
                                    </div>

                                    <p class="font-medium mt-0">
                                        Upwork Client
                                    </p>
                                </article>
                            </div>
                        </div>

                        <div :class="widthCarousel" class="block lg:hidden">
                            <Flicking
                                :options="options"
                                :plugins="plugins"
                                class="">
                                <div
                                    v-for="(data, index) in testimonial"
                                    :key="index"
                                    class="card bg-base-100 shadow-2xl w-full">
                                    <div class="card-body">
                                        <article
                                            class="prose text-info-content">
                                            <p>
                                                {{ data.text }}
                                            </p>

                                            <div class="rating">
                                                <input
                                                    v-for="rating in 5"
                                                    :key="rating"
                                                    class="mask mask-star-2 bg-warning" />
                                            </div>

                                            <p class="font-medium mt-0">
                                                Upwork Client
                                            </p>
                                        </article>
                                    </div>
                                </div>
                            </Flicking>
                        </div>
                    </div>
                </ClientOnly>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
