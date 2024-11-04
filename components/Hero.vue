<script setup lang="ts">
const config = useRuntimeConfig();

///"We were in need of a Vue.js developer that could adjust a Vue template to our Figma design and connect the GUI to our backend API. Thanks to Andri our
</script>

<template>
    <section class="pt-36 min-h-screen overflow-hidden relative pb-0">
        <Gradient />

        <div
            class="container py-5 flex justify-center items-center relative z-10 mx-auto h-screen">
            <div class="grid w-full h-full lg:grid-cols-2">
                <ClientOnly>
                    <div
                        class="flex flex-col gap-4 justify-center items-start"
                        data-aos="fade-up">
                        <h1
                            class="tracking-wide text-slate-600 leading-tight font-monrepo text-[4rem] font-extrabold capitalize">
                            <span class="icon-[noto--waving-hand]"></span> Hey
                            there,
                            <br />
                            it's

                            <span
                                class="text-transparent absolute box-content w-fit bg-clip-text blur-lg bg-gradient-to-r from-pink-500 to-violet-500">
                                {{ config.public.title }}.
                            </span>
                            <span
                                class="text-transparent relative bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                                {{ config.public.title }}.
                            </span>
                        </h1>

                        <article class="prose w-3/4 text-slate-500 font-medium">
                            <p>
                                Highly skilled Vuejs developer with 5 years of
                                experience in frontend development.

                                <span
                                    class="text-transparent absolute box-content w-fit bg-clip-text blur-xl bg-gradient-to-r from-pink-500 to-violet-500">
                                    Based in Jakarta, Indonesia
                                </span>
                                <span
                                    class="text-transparent relative bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                                    Based in Jakarta, Indonesia
                                </span>
                            </p>

                            <p>
                                More than 30+ various profesional jobs & with
                                lots of satified customers
                            </p>
                        </article>

                        <div class="flex gap-2 items-center mt-3">
                            <button
                                class="btn bg-slate-700 hover:bg-slate-600 group flex items-center gap-3 text-white rounded-xl">
                                <span>View Our Works</span>
                            </button>

                            <button class="btn btn-active btn-link">
                                Contact me
                            </button>
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
                            data-aos="zoom-in-up"
                            class="card bg-base-100 shadow-2xl drop-shadow-2xl absolute -left-16 w-[350px]">
                            <div class="card-body">
                                <article class="prose text-slate-400">
                                    <p>
                                        "Once again Andri did an excellent job
                                        building a Vue.js app form scratch for
                                        us. Everything looks exactly as per
                                        design and works precisely as
                                        instruction"
                                    </p>

                                    <div class="rating">
                                        <input
                                            v-for="data in 5"
                                            :key="data"
                                            class="mask mask-star-2 bg-orange-400" />
                                    </div>

                                    <p class="font-medium mt-0">
                                        Upwork Client
                                    </p>
                                </article>
                            </div>
                        </div>

                        <div
                            data-aos="zoom-in-up"
                            class="card bg-base-100 shadow-2xl drop-shadow-2xl absolute -right-7 w-[350px]">
                            <div class="card-body">
                                <article class="prose text-slate-400">
                                    <p>
                                        "We are happy to work with Andri. Andri
                                        is an excellent frontend developer that
                                        takes much care in the quality of his
                                        work. As he continues to work and
                                        improve his skills"
                                    </p>

                                    <div class="rating">
                                        <input
                                            v-for="data in 5"
                                            :key="data"
                                            class="mask mask-star-2 bg-orange-400" />
                                    </div>

                                    <p class="font-medium mt-0">
                                        Upwork Client
                                    </p>
                                </article>
                            </div>
                        </div>

                        <div
                            data-aos="zoom-in-up"
                            class="card bg-base-100 shadow-2xl drop-shadow-2xl absolute top-80 -left-3 w-[350px]">
                            <div class="card-body">
                                <article class="prose text-slate-400">
                                    <p>
                                        "Andri was, as always, a pleasure to
                                        work with. It's a delight working with a
                                        dev that always delivers exactly what
                                        was asked for."
                                    </p>

                                    <div class="rating">
                                        <input
                                            v-for="data in 5"
                                            :key="data"
                                            class="mask mask-star-2 bg-orange-400" />
                                    </div>

                                    <p class="font-medium mt-0">
                                        Upwork Client
                                    </p>
                                </article>
                            </div>
                        </div>

                        <div
                            data-aos="zoom-in-up"
                            class="card bg-base-100 shadow-2xl drop-shadow-2xl absolute top-80 -right-16 w-[350px]">
                            <div class="card-body">
                                <article class="prose text-slate-400">
                                    <p>
                                        "We were in need of a Vue.js developer
                                        that could adjust a Vue template to our
                                        Figma design and connect the GUI to our
                                        backend API. Thanks to Andri "
                                    </p>

                                    <div class="rating">
                                        <input
                                            v-for="data in 5"
                                            :key="data"
                                            class="mask mask-star-2 bg-orange-400" />
                                    </div>

                                    <p class="font-medium mt-0">
                                        Upwork Client
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </ClientOnly>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
