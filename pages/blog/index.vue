<script setup lang="ts">
import NuxtThumbnail from 'assets/image/articles/NuxtTumbnail.png';
definePageMeta({
    title: 'Blog',
});
const route = useRoute();

useHead({
    titleTemplate: (titleChunk) => {
        return `${titleChunk} - ${route.meta.title}`;
    },
});

const articles = ref([
    {
        title: 'Introduce Nuxtjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog',
    },
    {
        title: 'Introduce Nuxtjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog',
    },
    {
        title: 'Introduce Nuxtjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog',
    },
    {
        title: 'Introduce Nuxtjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog',
    },
    {
        title: 'Introduce Nuxtjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog',
    },
    {
        title: 'Introduce Nuxtjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog',
    },
    {
        title: 'Introduce Nuxtjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog/',
    },
    {
        title: 'Introduce Nuxtjs: Intuitive Vuejs framework',
        subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        img: NuxtThumbnail,
        date: 'Oct 26, 2024',
        url: '/blog',
    },
]);
</script>

<template>
    <WrapperPages>
        <Container>
            <article
                class="prose max-w-none text-justify lg:text-start !w-full">
                <h1
                    data-aos="fade-up"
                    class="font-semibold m-0 text-3xl lg:text-6xl text-info tracking-wide leading-normal lg:leading-relaxed">
                    Recent
                    <span
                        class="text-transparent absolute box-content w-fit bg-clip-text blur-xl bg-gradient-to-r from-primary to-secondary">
                        Articles
                    </span>
                    <span
                        class="text-transparent relative bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Articles
                    </span>
                </h1>

                <p class="text-accent font-medium my-0">
                    I'm thinking some random things about tools and my journey
                </p>
            </article>

            <div class="mt-10">
                <NuxtLink to="/blog/slug" class="group">
                    <div class="card bg-base-100">
                        <figure class="!block lg:!hidden">
                            <img :src="NuxtThumbnail" />
                        </figure>
                        <div class="card-body grid lg:grid-cols-2 gap-5">
                            <div
                                class="overflow-hidden hidden lg:block rounded-lg">
                                <img
                                    :src="NuxtThumbnail"
                                    class="rounded-lg h-full group-hover:scale-125 transition duration-300 ease-in-out" />
                            </div>
                            <div>
                                <article class="prose prose-img:!m-0">
                                    <h1
                                        class="font-semibold m-0 text-xl group-hover:text-primary transition duration-300 ease-in-out lg:text-4xl text-info tracking-wide leading-normal lg:leading-relaxed">
                                        Introduce Nuxtjs: Intuitive Vuejs
                                        Framework
                                    </h1>

                                    <div class="flex gap-3 mt-3 items-center">
                                        <div class="avatar">
                                            <div
                                                class="mask shadow-xl mask-squircle w-8">
                                                <img
                                                    src="~assets/image/profile.jpg" />
                                            </div>
                                        </div>
                                        <span class="text-accent/50">
                                            7 December 2024
                                        </span>
                                    </div>

                                    <p class="text-justify h-36 line-clamp-5">
                                        Lorem ipsum dolor sit, amet consectetur
                                        adipisicing elit. Voluptatibus rem unde
                                        repellendus, a impedit quod voluptate!
                                        Incidunt maxime tenetur quam eveniet quo
                                        dolore architecto tempore maiores, error
                                        minus alias blanditiis!
                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </NuxtLink>

                <div class="grid gap-4 mt-4 lg:grid-cols-4">
                    <ArticleShowCase
                        v-for="(data, index) in articles"
                        :key="index"
                        v-bind="data" />
                </div>
            </div>
        </Container>
    </WrapperPages>
</template>

<style scoped></style>
