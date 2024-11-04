<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';

const { y } = useWindowScroll({ behavior: 'smooth' });
const config = useRuntimeConfig();

const routes = ref([
    {
        route: 'Home',
        link: '/',
    },
    {
        route: 'Project',
        link: '/project',
    },
    {
        route: 'Blogs',
        link: '/blog',
    },
]);

const socialMedia = ref([
    {
        icon: 'icon-[bi--twitter-x]',
        url: 'https://x.com/AndriFerry99379',
    },
    {
        icon: 'icon-[cib--upwork]',
        url: 'https://www.upwork.com/freelancers/andriferry',
    },
    {
        icon: 'icon-[mdi--linkedin]',
        url: 'https://www.linkedin.com/in/andri-ferry/',
    },
]);

const scroller = computed(() => {
    return y.value > 0 ? 'bg-white p-2' : 'p-7 bg-transparent';
});
</script>

<template>
    <div class="min-h-screen flex flex-col justify-between">
        <header class="">
            <nav
                style="transition: all 0.3s cubic-bezier(0.36, 0.03, 0, 0.91)"
                :class="scroller"
                class="w-full z-[1000] flex items-center justify-between fixed">
                <div class="container mx-auto">
                    <div class="navbar px-0">
                        <div class="navbar-start">
                            <div class="dropdown">
                                <div
                                    tabindex="0"
                                    role="button"
                                    class="btn btn-ghost btn-sm btn-circle lg:hidden">
                                    <span
                                        class="icon-[heroicons-outline--menu-alt-1] h-5 w-5" />
                                </div>
                                <ul
                                    tabindex="0"
                                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li
                                        v-for="(route, index) in routes"
                                        :key="index">
                                        <NuxtLink
                                            :to="route.link"
                                            active-class="bg-primary text-white">
                                            {{ route.route }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>

                            <div class="flex items-center gap-5">
                                <NuxtLink
                                    to="/"
                                    class="btn hover:bg-transparent !py-1 !px-3 btn-ghost text-2xl">
                                    {{ config.public.title }}
                                </NuxtLink>

                                <div class="hidden lg:flex">
                                    <ul
                                        class="menu menu-horizontal plain-underline gap-4 px-1">
                                        <li
                                            v-for="(route, index) in routes"
                                            :key="index">
                                            <NuxtLink
                                                active-class="border-b-primary border-b-2"
                                                :to="route.link"
                                                class="text-base">
                                                {{ route.route }}
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="navbar-end">
                            <button class="btn btn-sm btn-primary text-white">
                                Contact
                                <span
                                    class="icon-[majesticons--open] h-4 w-4"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <slot />

        <footer>
            <div class="p-7 w-full flex items-center justify-between">
                <div class="container mx-auto bg-white flex flex-col">
                    <div class="py-6 border-b flex justify-between">
                        <NuxtLink
                            to="/"
                            class="btn !py-1 hover:bg-transparent !px-0 btn-ghost text-xl">
                            {{ config.public.title }}
                        </NuxtLink>

                        <ul
                            class="menu menu-horizontal plain-underline gap-4 px-0">
                            <li v-for="(route, index) in routes" :key="index">
                                <NuxtLink
                                    active-class="text-primary"
                                    :to="route.link"
                                    class="">
                                    {{ route.route }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <div class="flex w-full pt-6 justify-between">
                        <p class="items-center font-light text-sm text-center">
                            @ Copyright {{ new Date().getFullYear() }}
                        </p>

                        <div class="flex gap-4 justify-center items-center">
                            <a
                                v-for="(social, index) in socialMedia"
                                :key="index"
                                :href="social.url"
                                target="_blank">
                                <span
                                    :class="social.icon"
                                    class="w-5 h-5"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped></style>
