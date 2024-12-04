<script setup lang="ts"></script>

<template>
    <div>
        <Hero />

        <Service />

        <LatestProject />

        <AboutMe />

        <div class="overflow-hidden relative">
            <Container class="grid gap-4 lg:grid-cols-4">
                <div class="col-span-2 lg:col-span-4">
                    <article class="prose">
                        <h3 class="text-info flex gap-3 items-center">
                            My Skills
                            <span
                                class="icon-[twemoji--man-technologist] w-6 h-6"></span>
                        </h3>
                    </article>
                </div>
                <Article v-for="data in 4" :key="data"></Article>
            </Container>
        </div>
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
