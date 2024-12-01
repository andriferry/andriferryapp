<script setup lang="ts"></script>

<template>
    <Wrapper>
        <Container>
            <article
                id="latest-project"
                data-aos="fade-down"
                class="prose mb-3">
                <h1 class="text-info text-3xl capitalize lg:text-4xl">
                    Latest projects
                </h1>
            </article>
        </Container>

        <Container class="pt-0">
            <div class="grid gap-10">
                <div class="col-span-1">
                    <div class="card bg-[#ddedff] shadow-lg min-h-96">
                        <div
                            class="card-body items-center justify-center relative overflow-hidden lg:px-16">
                            <div class="grid gap-5 z-10 lg:grid-cols-2 w-full">
                                <div
                                    data-aos="fade-right"
                                    class="flex justify-center lg:justify-start items-center">
                                    <article
                                        class="prose text-center justify-center lg:text-start text-accent">
                                        <h1
                                            class="text-info mb-0 text-4xl lg:text-5xl">
                                            URL Monitor
                                        </h1>

                                        <p class="mt-0">
                                            Software Apps Project
                                        </p>

                                        <button
                                            class="btn btn-wide lg:w-auto bg-info hover:bg-accent text-white border-none">
                                            Case Study
                                        </button>
                                    </article>
                                </div>

                                <div class="flex items-center relative">
                                    <img
                                        data-aos="zoom-out"
                                        class="rounded-2xl z-10 relative shadow-2xl"
                                        src="~assets/image/urlMonitor.png"
                                        alt="" />

                                    <div
                                        data-aos="fade-right"
                                        data-aos-duration="5000"
                                        data-aos-easing="linear"
                                        class="bg-cyan-900/25 z-0 -top-7 -left-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"></div>

                                    <div
                                        data-aos="fade-left"
                                        data-aos-easing="linear"
                                        class="bg-cyan-900/25 z-0 -bottom-[1.5rem] -right-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-1 grid grid-cols-12">
                    <div
                        class="card col-span-12 bg-[#ddedff] shadow-lg min-h-96">
                        <div
                            class="card-body items-center justify-center relative overflow-hidden lg:px-16">
                            <div class="grid gap-5 z-10 lg:grid-cols-2 w-full">
                                <div
                                    data-aos="fade-right"
                                    class="flex justify-center lg:justify-start items-center">
                                    <article
                                        class="prose text-center justify-center lg:text-start text-accent">
                                        <h1
                                            class="text-info mb-0 text-4xl lg:text-5xl">
                                            URL Monitor
                                        </h1>

                                        <p class="mt-0">
                                            Software Apps Project
                                        </p>

                                        <button
                                            class="btn btn-wide lg:w-auto bg-info hover:bg-accent text-white border-none">
                                            Case Study
                                        </button>
                                    </article>
                                </div>

                                <div class="flex items-center relative">
                                    <img
                                        data-aos="zoom-out"
                                        class="rounded-2xl z-10 relative shadow-2xl"
                                        src="~assets/image/urlMonitor.png"
                                        alt="" />

                                    <div
                                        data-aos="fade-right"
                                        data-aos-duration="5000"
                                        data-aos-easing="linear"
                                        class="bg-cyan-900/25 z-0 -top-7 -left-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"></div>

                                    <div
                                        data-aos="fade-left"
                                        data-aos-easing="linear"
                                        class="bg-cyan-900/25 z-0 -bottom-[1.5rem] -right-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card bg-base-100 image-full w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Container>
    </Wrapper>
</template>

<style scoped></style>
