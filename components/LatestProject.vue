<script setup lang="ts"></script>

<template>
    <Wrapper>
        <Container>
            <article data-aos="fade-down" class="prose mb-3">
                <h1 class="text-info text-3xl capitalize lg:text-4xl">
                    Latest projects
                </h1>
            </article>
        </Container>

        <Container class="pt-0">
            <div class="">
                <!-- bg-[#ddedff] -->
                <div class="card bg-[#ddedff] shadow-lg min-h-96">
                    <div class="card-body items-center justify-center lg:px-16">
                        <div class="grid gap-5 lg:grid-cols-2 w-full">
                            <div
                                class="flex justify-center lg:justify-start items-center">
                                <article
                                    class="prose text-center justify-center lg:text-start text-accent">
                                    <h1
                                        class="text-info mb-0 text-4xl lg:text-5xl">
                                        URL Monitor
                                    </h1>

                                    <p class="mt-0">Software Apps Project</p>

                                    <button
                                        class="btn btn-wide lg:w-auto bg-info hover:bg-accent text-white border-none">
                                        Case Study
                                    </button>
                                </article>
                            </div>

                            <div class="flex items-center">
                                <img
                                    class="rounded-2xl shadow-2xl"
                                    src="~assets/image/urlMonitor.png"
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </Wrapper>
</template>

<style scoped></style>
