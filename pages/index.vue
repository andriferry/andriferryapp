<script setup lang="ts">
import NuxtThumbnail from 'assets/image/articles/NuxtTumbnail.png';

const articles = ref([
    {
        title: 'Introduce Nutxjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog'
    },
    {
        title: 'Introduce Nutxjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog'
    },
    {
        title: 'Introduce Nutxjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog'
    },
    {
        title: 'Introduce Nutxjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog'
    },
]);
</script>

<template>
    <div>
        <Hero />

        <Service />

        <LatestProject />

        <AboutMe />

        <div class="overflow-hidden relative">
            <Container class="grid gap-4 lg:grid-cols-4">
                <div class="col-span-1 lg:col-span-4">
                    <article class="prose">
                        <h3 class="text-info flex gap-3 items-center">
                            Recent Articles
                            <span class="icon-[bi--rss-fill] w-6 h-6"></span>
                        </h3>
                    </article>
                </div>
                <ArticleShowCase
                    v-for="(data, index) in articles"
                    :key="index"
                    v-bind="data" />
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
