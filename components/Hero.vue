<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
    <section class="pt-36 min-h-screen overflow-hidden relative pb-0">
        <Gradient />

        <div
            class="container py-5 flex justify-center items-center relative z-10 mx-auto h-screen">
            <div class="grid w-full h-full lg:grid-cols-2">
                <div class="flex flex-col gap-4 justify-center items-start">
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
                            More than 30+ various profesional jobs & with lots
                            of satified customers
                        </p>
                    </article>

                    <div class="flex gap-2 items-center mt-3">
                        <button
                            class="btn btn-primary group flex items-center gap-3 text-white rounded-xl">
                            <span>View Our Works</span>

                            <span
                                class="icon-[mingcute--arrow-right-fill] w-6 h-6"></span>
                        </button>

                        <button class="btn btn-active btn-link">
                            Contact me
                        </button>
                    </div>
                </div>

                <div class="flex items-center justify-center">Hello</div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
